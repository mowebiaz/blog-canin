import { Metadata } from 'next'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { CardPostData } from '@/components/ArticleCard/ArticleCard'
import { ArticleCardContainer } from '@/components/ArticleCardContainer/ArticleCardContainer'
import { PageRange } from '@/components/Pagination/PageRange'
import { SearchPagination } from '@/components/Pagination/SearchPagination'
import { Search } from '@/components/Search/Search'

export default async function SearchPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1

  const payload = await getPayload({ config: configPromise })
  const searchResults = await payload.find({
    collection: 'search-results',
    depth: 3,
    limit: 6,
    page: currentPage,
    pagination: true, // access to page, totalPages...
    select: {
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      categories: true,
      meta: true,
      publishedAt: true,
      doc: true,
    },
    ...(query
      ? {
          where: {
            or: [
              { title: { like: query } },
              { excerpt: { like: query } },
              { slug: { like: query } },
            ],
          },
        }
      : {}),
  })

  return (
    <main id="search-page">
      <h1>Rechercher un article</h1>
        <Link href="/blog">Tous les articles</Link>
      <div>
        <Search />
        {query && <p>Résultats pour &quot;{query}&quot;</p>}
        <PageRange
          collection="posts"
          limit={searchResults.limit}
          currentPage={searchResults.page}
          totalDocs={searchResults.totalDocs}
        />
      </div>

      <div className='container'>

      {searchResults.totalDocs > 0 && (
        <ArticleCardContainer posts={searchResults.docs as CardPostData[]} />
      )}
      {searchResults.totalPages > 1 && searchResults.page && (
        <SearchPagination totalPages={searchResults.totalPages} />
      )}
      </div>
    </main>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'blog - search',
    description: 'Search page',
  }
}
