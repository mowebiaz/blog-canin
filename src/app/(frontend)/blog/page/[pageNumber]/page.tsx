import { IoIosSearch } from 'react-icons/io'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { ArticleCardContainer } from '@/components/ArticleCardContainer/ArticleCardContainer'
import { CategoryFilters } from '@/components/CategoryFilters/CategoryFilters'
import { PageRange } from '@/components/Pagination/PageRange'
import { Pagination } from '@/components/Pagination/Pagination'
import type { Category } from '@/payload-types'
import './Blog.scss'

export const revalidate = 600
const postPerPage = 6

type Args = {
  params: Promise<{
    pageNumber: string
  }>
  searchParams?: Promise<{ category?: string }>
}

export default async function BlogPage({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: Args) {
  const { pageNumber } = await paramsPromise
  const searchParams = (await searchParamsPromise) || {}

  const categorySlug = searchParams.category || 'all'
  const sanitizedPageNumber = Number(pageNumber)

  const payload = await getPayload({ config: configPromise })

  if (!Number.isInteger(sanitizedPageNumber) || sanitizedPageNumber < 1)
    notFound()

  // Charger les catégories pour les filtres et pour résoudre le slug -> id
  const categoriesResult = await payload.find({
    collection: 'categories',
    limit: 50,
    sort: 'title',
  })

  const categories = categoriesResult.docs as Category[]

  const activeCategory = categories.find((cat) => cat.slug === categorySlug)

  if (!activeCategory && categorySlug !== 'all') {
    notFound()
  }

  const where = {
    ...(categorySlug !== 'all' && activeCategory
      ? { categories: { equals: activeCategory.id } }
      : {}),
  }

  if (activeCategory) {
    // Relationship hasMany vers `categories` -> on filtre par id
    where.categories = {
      equals: activeCategory.id,
    }
  }

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: postPerPage,
    page: sanitizedPageNumber,
    where,
    overrideAccess: false,
  })

  if (posts.totalPages > 0 && sanitizedPageNumber > posts.totalPages) {
    //notFound()
    return (
      <h1>Vous avez vu tous les articles.</h1>
    )
  }

  return (
    <main id="blog">
      <h1>Tous les articles ({posts.totalDocs})</h1>

      <div className="blog-toolbar">
        <div>
          <CategoryFilters
            categories={categories}
            currentCategorySlug={categorySlug}
          />

          <PageRange
            collection="posts"
            currentPage={posts.page}
            limit={posts.limit}
            totalDocs={posts.totalDocs}
          />
        </div>

        <Link
          href="/search"
          className="link-search"
        >
          Rechercher un article
          <IoIosSearch />
        </Link>
      </div>

      <ArticleCardContainer posts={posts.docs} />

      <div>
        {posts?.page && posts?.totalPages > 1 && (
          <Pagination
            page={posts.page}
            totalPages={posts.totalPages}
            basePath="/blog"
            categorySlug={categorySlug !== 'all' ? categorySlug : undefined}
          />
        )}
      </div>
    </main>
  )
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Payload Website Template Posts Page ${pageNumber || ''}`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'posts',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / postPerPage)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
