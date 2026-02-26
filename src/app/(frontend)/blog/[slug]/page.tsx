import { cache } from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Script from 'next/script'
import configPromise from '@payload-config'
import { format } from 'date-fns'
import { getPayload } from 'payload'
import { ArticleShareButton } from '@/components/ArticleShareButton/ArticleShareButton'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { PostHero } from '@/components/PostHero/PostHero'
import { Redirects } from '@/components/Redirects/Redirects'
import { RelatedPosts } from '@/components/RelatedPosts/RelatedPosts'
import { RichText } from '@/components/RichText/RichText'
import { articleSchema, imageSchema } from '@/components/Schema/Schema'
import type { Media, Post } from '@/payload-types'
import { generateMeta } from '@/utilities/generateMeta'
import { getServerSideURL } from '@/utilities/getURL'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
    draft: false,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })

  /*    const params = posts.docs.map(({ slug }) => {
    //console.log(typeof slug, slug)
    return { slug } 

  }) */

  const params = posts.docs
    .filter((doc) => typeof doc.slug === 'string')
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = { params: Promise<{ slug?: string }> }

export default async function PostPage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const { isEnabled: draft } = await draftMode()
  const url = '/blog/' + slug
  const post = await queryPostBySlug({ slug })

  // check if there is no page to return.
  // If there isn't, it check if there is a redirect or not.
  // if not, return the not found page
  if (!post) {
    return <Redirects url={url} />
  }

  const schema = [
    articleSchema(post),
    post.meta?.image && imageSchema(post?.meta.image as Media),
  ].filter(Boolean)

  return (
    <>
      {/* for valid page that we want to redirect */}
      <Redirects
        url={url}
        disableNotFound
      />

      <Script
        id="schema-script"
        type={'application/ld+json'}
        strategy={'lazyOnload'}
      >
        {JSON.stringify(schema)}
      </Script>
      <main>
        {draft && <LivePreviewListener />}

        <section>
          {/*           <h1>{post.title}</h1>
           {post.coverImage &&
          typeof post.coverImage === 'object' &&
          post.coverImage.url ? (
            <Image
              src={post.coverImage.url}
              alt={post.coverImage.alt || 'Cover Image'}
              width={600}
              height={400}
            />
          ) : (
            <p>No cover image available</p>
          )} */}

          <PostHero post={post} />

          {post.content && <RichText data={post.content} />}

          <ArticleShareButton
            title={post.title}
            url={getServerSideURL() + url}
          />
        </section>

        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section>
            <h2>Vous pourriez aussi aimer:</h2>

            <RelatedPosts
              docs={post.relatedPosts.filter(
                (post) => typeof post === 'object',
              )}
            />
          </section>
        )}

        {/*         <p>Status: {post._status}</p>
        <p>
          posts liés:{' '}
          {post.relatedPosts && post.relatedPosts.length > 0
            ? post.relatedPosts.length
            : 'none'}
        </p> */}
        <p>n° d&apos;id: {post.id}</p>
        <p>Crée le: {format(new Date(post.createdAt), 'dd/MM/yyyy')}</p>
        <p>
          Publié le :{' '}
          {format(new Date(post.publishedAt ?? post.createdAt), 'dd/MM/yyyy')}
        </p>
        <p>Mis à jour le: {format(new Date(post.updatedAt), 'dd/MM/yyyy')}</p>
        <p>Draft: {draft ? 'Yes' : 'No'}</p>
        <p>Draft Mode: {draft ? 'Enabled' : 'Disabled'}</p>
      </main>
    </>
  )
}

// the name "generateMetadata" is required
export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })
  const { isEnabled: draft } = await draftMode()

  const result = await payload.find({
    collection: 'posts',
    overrideAccess: draft,
    draft,
    limit: 1,
    depth: 2,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
