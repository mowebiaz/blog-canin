import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
//import type { Media as MediaType } from '@/payload-types'
import { anyone } from './Users/access/anyone'
import user from './Users/access/user'

type MediaForThumb = {
  url?: string | null
  sizes?: {
    thumbnail?: {
      filename?: string | null
    }
  }
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: anyone,
    create: user,
    update: user,
    delete: user,
  },
  admin: {
    useAsTitle: 'nom',
    //description: 'Media collection for storing images and their metadata',
    defaultColumns: ['nom', 'filename', 'alt'],
  },
  fields: [
    {
      name: 'nom',
      type: 'text',
      /*       admin: {
        position: 'sidebar',
      }, */
    },
    {
      name: 'caption',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature()]
        },
      }),
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description:
          'Alternative text for the image, used for accessibility and SEO',
      },
    },
    {
      name: 'creditText',
      type: 'text',
      admin: {
        description: 'Credit for the image, e.g. source',
        placeholder: 'Image générée avec Midjourney',
      },
    },
    {
      name: 'photographe',
      type: 'text',
      admin: {
        description: "Nom du photographe ou de l'illustrateur",
        placeholder: 'Morgane Couvet',
      },
    },
  ],
  upload: {
    formatOptions: {
      format: 'webp',
    },
    mimeTypes: ['image/*', 'video/*'],

    adminThumbnail: ({ doc }) => {
      const media = doc as MediaForThumb
      const thumbFilename = media?.sizes?.thumbnail?.filename
      if (thumbFilename) {
        return `${process.env.S3_PUBLIC_MEDIA_URL}/media/images/${thumbFilename}`
      }

      return media?.url ?? null
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        formatOptions: {
          format: 'webp',
        },
      },
            {
        name: 'xs',
        width: 375,
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'sm',
        width: 576,
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'md',
        width: 768,
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'lg',
        width: 992,
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'xl',
        width: 1280,
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        crop: 'center',
        formatOptions: {
          format: 'webp',
        },
      },
    ],
  },
}
