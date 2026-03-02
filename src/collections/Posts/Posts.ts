import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import {
  BlocksFeature,
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { slugField } from '@/components/Admin/Fields/slug/slugField'
import { CustomBlockIcon } from '@/components/RichText/CustomBlockIcon'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import editor from '../Users/access/editor'
//import { afterErrorHook } from './hooks'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'
import { syncMetaImage } from './hooks/syncMetaImage'
import { InfoMessageBlock } from '@/blocks/InfoMessage/config'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    readVersions: editor,
    read: ({ req }) => {
      if (req.user && req.user?.collection === 'users') return true
      return {
        or: [
          {
            _status: { equals: 'published' },
          },
          { _status: { exists: false } },
        ],
      }
    },
  },
  /*   defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
  }, */

  trash: true,
  labels: {
    singular: 'Article',
    plural: 'Articles',
  },

  admin: {
    //group: 'posts',
    groupBy: true,
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'posts',
          req,
        }),
    },
    useAsTitle: 'title',
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'posts',
        req,
      }),
    listSearchableFields: ['title', 'slug'],
    components: {
      beforeListTable: [
        {
          path: 'src/collections/Posts/components/PostsByStatus.tsx',
          exportName: 'PostsByStatus',
        },
      ],
    },
    meta: {
      titleSuffix: ' - blog',
      title: 'mon blog',
    },
    defaultColumns: ['title', 'createdAt', 'updatedAt', '_status', 'categories'],
    //useAsTitle: 'title',
    //hideAPIURL: true,
  },

  versions: {
    drafts: {
      autosave: { interval: 100 },
      schedulePublish: true,
      //validate: false,
    },
    maxPerDoc: 100,
  },

  fields: [
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
    },
    ...slugField(),
    {
      type: 'tabs',
      tabs: [
        {
          label: 'content',
          fields: [
            {
              name: 'coverImage',
              type: 'upload',
              label: 'Image de couverture',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'excerpt',
              label: "Résumé de l'article",
              type: 'textarea',
            },
            {
              name: 'plaintext',
              label: "Description de l'article",
              type: 'textarea',
              required: true,
              admin: {
                description: "Utilisée pour le SEO et les vignettes d'articles",
              },
            },

            {
              name: 'content',
              label: 'Contenu',
              type: 'richText',

              // Pass the Lexical editor here and override base settings as necessary
              editor: lexicalEditor({
                admin: {
                  //hideInsertParagraphAtEnd: true,
                  placeholder: 'Ecrivez votre article ici...',
                },
                features: ({ rootFeatures }) => [
                  ...rootFeatures,

                  FixedToolbarFeature({
                    customGroups: {
                      blocks: {
                        order: 100,
                        ChildComponent: CustomBlockIcon,
                      },
                      add: {
                        order: 90,
                        type: 'buttons',
                      },
                    },
                  }),

                  BlocksFeature({
                    blocks: [MediaBlock, InfoMessageBlock],
                  }),
                ],
              }),
            },
          ],
        },
        {
          label: 'Info',
          fields: [
            {
              name: 'categories',
              label: 'Catégories',
              type: 'relationship',
              relationTo: 'categories',
              hasMany: true,
            },
            {
              name: 'relatedPosts',
              label: 'Articles liés',
              type: 'relationship',

              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                }
              },
              hasMany: true,
              relationTo: 'posts',
              maxDepth: 3,
            },
            {
              name: 'publishedAt',
              label: 'Date de publication',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
              hooks: {
                beforeChange: [
                  ({ siblingData, value }) => {
                    if (siblingData._status === 'published' && !value) {
                      return new Date()
                    }
                    return value
                  },
                ],
              },
            },
          ],
        },
        {
          label: 'SEO',
          name: 'meta',
          fields: [
            MetaTitleField({
              hasGenerateFn: true,
              /*               overrides: {
                label: 'Whatever you want',
              }, */
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            {
              name: 'canonicalUrl',
              label: 'Canonical URL',
              type: 'text',
              hooks: {
                beforeChange: [
                  async ({ data, value }) =>
                    !value ? `https://example.com/blog/${data?.slug}` : value,
                ],
              },
            },
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
          ],
        },
      ],
    },
  ],

  hooks: {
    beforeChange: [syncMetaImage],
    afterChange: [revalidatePost],
    afterDelete: [revalidateDelete],
  },
}
