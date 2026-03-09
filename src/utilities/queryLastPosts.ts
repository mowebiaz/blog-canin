import { unstable_cache } from 'next/cache'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const queryLastPosts = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'posts',
      overrideAccess: false,
      draft: false,
      limit: 4,
      depth: 2,
      sort: '-publishedAt',
      select: {
        title: true,
        slug: true,
        coverImage: true,
        publishedAt: true,
        doc: true,
      },
    })

    return result.docs || null
  },
  ['home-last-posts'],
  { tags: ['home-last-posts'] },
)