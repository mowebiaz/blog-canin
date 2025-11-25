import { headers as getHeaders } from 'next/headers'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { ArticleCardContainer } from '@/components/ArticleCardContainer/ArticleCardContainer'
import { PageRange } from '@/components/Pagination/PageRange'
import { Pagination } from '@/components/Pagination/Pagination'
import { Search } from '@/components/Search/Search'
import Link from 'next/link'

const postPerPage = 6

export default async function Posts() {
  const headers = await getHeaders()
  const payload = await getPayload({ config: configPromise })
  const { user } = await payload.auth({ headers })

  const posts = await payload.find({
    collection: 'posts',
    overrideAccess: Boolean(user),
    draft: Boolean(user),
    depth: 1,
    limit: postPerPage,
    select: {
      title: true,
      slug: true,
      categories: true,
      createdAt: true,
      updatedAt: true,
      id: true,
      coverImage: true,
      meta: true,
      publishedAt: true,
    },
  })

  return (
    <main>
      <h1>Tous les Posts</h1>
      <Link href="/search">Rechercher un article</Link>
      <p>
        H1 + intro courte (à qui s’adresse le blog). 
        Filtres (catégories :  Éducation, Matériel, Vie quotidienne, Légal, Balades locales). 
        Liste d&apos;articles (carte : titre, chapo, date, catégories).
      </p>
      <PageRange
        collection="posts"
        currentPage={posts.page}
        limit={posts.limit}
        totalDocs={posts.totalDocs}
      />
      <ArticleCardContainer posts={posts.docs} />
      {posts.totalPages > 1 && posts.page && (
        <Pagination
          page={posts.page}
          totalPages={posts.totalPages}
        />
      )}

    </main>
  )
}
