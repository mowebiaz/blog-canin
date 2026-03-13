import type { Metadata } from 'next'
import type { Config, Media, Post } from '@/payload-types'
import { getServerSideURL } from './getURL'
import { mergeOpenGraph } from './mergeOpenGraph'

export const getImageURL = (
  image?: Media | Config['db']['defaultIDType'] | null,
) => {
  const serverUrl = getServerSideURL()
  let url = serverUrl + '/images/opengraph/caniliane.png'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogURL = image.sizes?.og?.url
    url = ogURL ? ogURL : image.url ? image.url : ''
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Post>
}): Promise<Metadata> => {
  const { doc } = args || {}

  const ogImage = getImageURL(doc?.meta?.image)
  const title = doc?.meta?.title ? doc.meta.title : 'Caniliane'
  const description = doc?.meta?.description ? doc.meta.description : ''
  const url = doc?.slug
    ? `${getServerSideURL()}/blog/${doc.slug}`
    : getServerSideURL()

  return {
    title,
    description,
    openGraph: mergeOpenGraph({
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
      url,
    }),
    alternates: { canonical: url },
  }
}
