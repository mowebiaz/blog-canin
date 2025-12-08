import type { CollectionConfig } from 'payload'
import { anyone } from './Users/access/anyone'
import user from './Users/access/user'
import editor from './Users/access/editor'
import { slugField } from '@/components/Admin/Fields/slug/slugField'


//import { slugField } from '@/fields/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
    labels: {
    singular: 'Catégorie',
    plural: 'Catégories',
  },
  access: {
    read: anyone,
    create: user,
    update: editor,
    delete: editor,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
}