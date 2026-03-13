import { IoIosSearch } from 'react-icons/io'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next/types'
import { ArticleCardContainer } from '@/components/ArticleCardContainer/ArticleCardContainer'
import { CategoryFilters } from '@/components/CategoryFilters/CategoryFilters'
import { PageRange } from '@/components/Pagination/PageRange'
import { Pagination } from '@/components/Pagination/Pagination'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { queryBlogListing } from '@/utilities/queryBlogListing'
import './page/[pageNumber]/Blog.scss'

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
  searchParams?: Promise<{ category?: string }>
}

export default async function BlogRoot({
  searchParams: searchParamsPromise,
}: Args) {
  const searchParams = (await searchParamsPromise) || {}
  const categorySlug = searchParams.category || 'all'

  const { posts, categories, activeCategory } = await queryBlogListing(
    1,
    categorySlug,
  )

  if (!activeCategory && categorySlug !== 'all') {
    notFound()
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

            <Link href="/search" className="link-search">
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
        </div>
      </main>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog – Page 1',
    description:
      'Blog de Caniliane – articles et conseils en éducation canine.',
    openGraph: mergeOpenGraph({
      title: 'Blog',
      description: 'Blog de Caniliane.',
      url: '/blog',
    }),
    alternates: { canonical: '/blog' },
  }
}
