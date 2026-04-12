import { revalidatePath, revalidateTag } from 'next/cache'
import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { Post } from '@/payload-types'

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/blog/${doc.slug}`

      console.log(`Revalidating post at path: ${path}`)

      revalidatePath(path)
      revalidateTag('posts-sitemap', { expire: 0 })
      revalidateTag('home-last-posts', { expire: 0 })
      revalidateTag('blog-listing', { expire: 0 })
    }
    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/blog/${previousDoc.slug}`

      console.log(`Revalidating old post at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('posts-sitemap', { expire: 0 })
      revalidateTag('home-last-posts', { expire: 0 })
      revalidateTag('blog-listing', { expire: 0 })
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/blog/${doc.slug}`

      console.log(`Revalidating deleted post at path: ${path}`)

      revalidatePath(path)
      revalidateTag('posts-sitemap', { expire: 0 })
      revalidateTag('home-last-posts', { expire: 0 })
      revalidateTag('blog-listing', { expire: 0 })
    }
  }

  return doc
}
