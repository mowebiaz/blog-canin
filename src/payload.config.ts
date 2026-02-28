import path from 'path'
import { fileURLToPath } from 'url'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { searchPlugin } from '@payloadcms/plugin-search'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { s3Storage } from '@payloadcms/storage-s3'
import { en } from '@payloadcms/translations/languages/en'
import { fr } from '@payloadcms/translations/languages/fr'
import { buildConfig, PayloadRequest } from 'payload'
import sharp from 'sharp'
import { Categories } from './collections/Categories'
import { revalidateRedirects } from './collections/hooks/revalidateRedirects'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts/Posts'
import { Users } from './collections/Users/config'
import { defaultLexical } from './components/RichText/defaultLexical'
import { beforeSyncWithSearch } from './components/Search/beforeSync'
import { searchFields } from './components/Search/fieldOverrides'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isPreview = process.env.VERCEL_ENV === 'preview'
const PREVIEW_URL =
  isPreview && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined

export default buildConfig({
  admin: {
    avatar: {
      Component: {
        path: '@/components/Avatar/Avatar.tsx',
      },
    },
    dateFormat: 'dd/MM/yyyy',
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 1080 },
      ],
    },
    components: {
      /*       logout: {
        //Button: '@/components/Admin/ui/Logout#Logout',
        Button: {
          path: '@/components/Admin/ui/logout.tsx',
          exportName: 'Logout',
        },
      }, */
      beforeNavLinks: [],
      afterNavLinks: [],
      beforeDashboard: [
        {
          path: '@/components/Admin/ui/beforeDashboard.tsx',
          exportName: 'Welcome',
        },
      ],
      afterLogin: [
        {
          path: '@/components/Admin/ui/afterLogin.tsx',
          exportName: 'LoginInstruction',
        },
      ],
      actions: [
        { path: '@/components/Admin/ui/logout.tsx', exportName: 'Logout' },
      ],

      /*graphics: {
      
         
// en-tête de la fenêtre de login
Logo: {
          path: '@/components/Admin/ui/logo.tsx',
          exportName: 'Logo',
        }, */
      /*
        // icône de la navigation dans l'ui
        Icon: {
          path: '@/components/Admin/ui/icon.tsx',
          exportName: 'Icon',
        },
      }, */
    },
    meta: {
      title: 'Mon tableau de bord',
      // Admin panel favicon
      icons: [
        {
          url: '/faviconui_light.svg',
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16 32x32 64x64',
          fetchPriority: 'high',
        },
        {
          url: '/faviconui_dark.svg',
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16 32x32 64x64',
          fetchPriority: 'high',
          media: '(prefers-color-scheme: dark)',
        },
      ],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },

  // Internationalization configuration
  i18n: {
    fallbackLanguage: 'en',
    supportedLanguages: { fr, en },
  },

  // If you'd like to use Rich Text, pass your editor here
  editor: defaultLexical,

  // Define and configure your collections in this array
  collections: [Posts, Media, Users, Categories],
  //globals: [Logos],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // Whichever Database Adapter you're using should go here
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),

  cors: [getServerSideURL(), PREVIEW_URL || ''].filter(Boolean),
  csrf: [getServerSideURL(), PREVIEW_URL || ''].filter(Boolean),

  /*auth: {
    cookies: {
      secure: true,
      sameSite: 'lax',
      // Surtout PAS de `domain` en preview ! (laisse undefined)
    },*/

/*   upload: {
    //whatever I upload across my entire payload projet to 5 million bytes
    limits: {
      fileSize: 5000000,
    },
  }, */
    email: resendAdapter({
    defaultFromAddress: process.env.RESEND_FROM || 'mw@notifications.morganeweb.com',
    defaultFromName: process.env.RESEND_FROM_NAME || 'MorganeWeb',
    apiKey: process.env.RESEND_API_KEY || '',
  }),

  sharp,

  hooks: {
    afterError: [
      (error) => {
        console.error('An error occurred:', error)
      },
    ],
  },

  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media/images',
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename, prefix }) =>
            `${process.env.S3_PUBLIC_MEDIA_URL}/${prefix}/${filename}`,
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESSKEY_ID || '',
          secretAccessKey: process.env.S3_SECRET || '',
        },
        region: 'auto',
        endpoint: process.env.S3_ENDPOINT || '',
      },
    }),

    seoPlugin({
      /*     collections: ['posts'],
    uploadsCollection: 'media', */
      generateTitle: ({ doc }) => doc.title,
      //generateDescription: ({doc}) => doc.excerpt,
      generateDescription: ({ doc }) => doc.plaintext,
      generateURL: ({ doc, collectionSlug }) =>
        `http://localhost:3000/${collectionSlug}/${doc?.slug}`,
      /*     tabbedUI: true,
    fields: ({defaultFields}) => [
      ...defaultFields,
      {name: 'canonicalURL', type: 'text'},
    ] */
    }),
    searchPlugin({
      collections: ['posts'],
      localize: false,
      defaultPriorities: { posts: 20 },
      searchOverrides: {
        slug: 'search-results',
        labels: {
          singular: 'Search Result',
          plural: 'Search Results',
        },
        admin: {
          group: 'Search',
        },
        fields: ({ defaultFields }) => {
          return [...defaultFields, ...searchFields]
        },
      },
      beforeSync: beforeSyncWithSearch,
      syncDrafts: false, // default is false
      deleteDrafts: true, // default is true
      reindexBatchSize: 50,
    }),
    redirectsPlugin({
      collections: ['posts'],
      redirectTypes: ['301', '302'],
      overrides: {
        fields: ({ defaultFields }) => [
          {
            type: 'checkbox',
            name: 'active',
            defaultValue: true,
          },
          ...defaultFields,
        ],
        hooks: {
          afterChange: [revalidateRedirects],
        },
        admin: {
          group: 'Navigation',
        },
      },
      redirectTypeFieldOverride: {
        //label: 'Redirect Type (Overwrittent)',
        admin: { description: 'Choose the type of redirect to use' },
      },
    }),
  ],
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }) => {
        if (req.user) return true
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
