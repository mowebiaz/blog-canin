import { unstable_cache } from 'next/cache'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Category } from '@/payload-types'
import type { Where } from 'payload'

export const POST_PER_PAGE = 6

export const queryBlogListing = (page: number, categorySlug: string) =>
  unstable_cache(
    async () => {
      const payload = await getPayload({ config: configPromise })

      const categoriesResult = await payload.find({
        collection: 'categories',
        limit: 50,
        sort: 'title',
      })

      const categories = categoriesResult.docs as Category[]
      const activeCategory = categories.find((c) => c.slug === categorySlug)

      const where: Where =
        categorySlug !== 'all' && activeCategory
          ? { categories: { equals: activeCategory.id } }
          : {}

      const posts = await payload.find({
        collection: 'posts',
        depth: 1,
        limit: POST_PER_PAGE,
        page,
        sort: '-publishedAt',
        where,
        overrideAccess: false,
      })

      return { posts, categories, activeCategory: activeCategory ?? null }
    },
    ['blog-listing', String(page), categorySlug],
    { tags: ['blog-listing'] },
  )()
