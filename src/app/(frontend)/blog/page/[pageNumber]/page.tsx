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
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { POST_PER_PAGE, queryBlogListing } from '@/utilities/queryBlogListing'
import './Blog.scss'

const postPerPage = POST_PER_PAGE

const jsonLdBlog = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog Caniliane',
  description:
    "Conseils et articles sur l'éducation canine positive par Caniliane, éducatrice canine à Grenoble.",
  url: 'https://caniliane.morganeweb.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Caniliane',
    url: 'https://caniliane.morganeweb.com',
  },
}

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

  if (!Number.isInteger(sanitizedPageNumber) || sanitizedPageNumber < 1)
    notFound()

  const { posts, categories, activeCategory } = await queryBlogListing(
    sanitizedPageNumber,
    categorySlug,
  )

  if (!activeCategory && categorySlug !== 'all') {
    notFound()
  }

  if (posts.totalPages > 0 && sanitizedPageNumber > posts.totalPages) {
    return <h1>Vous avez vu tous les articles.</h1>
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdBlog),
        }}
      />
      <main id="blog">
        <div className="container">
          <h1>Tous les articles ({posts.totalDocs})</h1>
          <h2>Articles et conseils en éducation canine positive</h2>

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

            <h2>
              <Link
                href="/search"
                className="link-search"
              >
                Rechercher un article
                <IoIosSearch />
              </Link>
            </h2>
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
        </div>
      </main>
    </>
  )
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Blog – Page ${pageNumber || '1'}`,
    description: `Page ${pageNumber} du blog de Caniliane – articles et conseils en éducation canine.`,
    openGraph: mergeOpenGraph({
      title: `Blog – Page ${pageNumber}`,
      description: `Page ${pageNumber} du blog de Caniliane.`,
      url: `/blog/page/${pageNumber}`,
    }),
    alternates: { canonical: `/blog/page/${pageNumber}` },
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
