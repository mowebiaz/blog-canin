import { Field } from 'payload'

export const searchFields: Field[] = [
  {
    name: 'slug',
    type: 'text',
    index: true,
    admin: {
      readOnly: true,
    },
  },
  {
    name: 'plaintext',
    label: 'Texte complet (indexé)',
    type: 'textarea',
    index: true,
    admin: { readOnly: true },
  },
  { name: 'coverImage', type: 'upload', relationTo: 'media' },
  {
    name: 'publishedAt',
    label: 'Date de publication',
    type: 'date',
    index: true,
    admin: { readOnly: true },
  },
  {
    label: 'Catégories',
    name: 'categories',
    type: 'array',
    admin: {
      readOnly: true,
    },
    fields: [
      {
        name: 'relationTo',
        type: 'text',
      },
      {
        name: 'categoryID',
        type: 'text',
      },
      {
        name: 'title',
        type: 'text',
      },
    ],
  },
  {
    name: 'meta',
    label: 'Meta',
    type: 'group',
    index: true,
    admin: {
      readOnly: true,
    },
    fields: [
      {
        type: 'text',
        name: 'description',
        label: 'Description',
      },
    ],
  },
]
