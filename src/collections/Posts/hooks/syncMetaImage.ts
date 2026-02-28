import type { CollectionBeforeChangeHook } from 'payload'

export const syncMetaImage: CollectionBeforeChangeHook = ({ data }) => {
  if (!data?.meta?.image && data?.coverImage) {
    return {
      ...data,
      meta: {
        ...data.meta,
        image: data.coverImage,
      },
    }
  }
  return data
}
