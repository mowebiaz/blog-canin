import type { Metadata } from 'next'
import type { Config, Media, Post } from '@/payload-types'
import { getServerSideURL } from './getURL'
import { mergeOpenGraph } from './mergeOpenGraph'

export const getImageURL = (
  image?: Media | Config['db']['defaultIDType'] | null,
) => {
  const serverUrl = getServerSideURL()
  let url = serverUrl + '/images/opengraph/lien-canin.jpg'

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
  const title = doc?.meta?.title ? doc.meta.title : 'Lien Canin'
  const description = doc?.meta?.description ? doc.meta.description : ''
  const url = doc?.meta?.canonicalUrl
    ? doc.meta.canonicalUrl
    : Array.isArray(doc?.slug)
      ? doc.slug.join('/')
      : '/'

  return {
    title,
    description,
    openGraph: mergeOpenGraph({
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
      url,
    }),
    alternates: { canonical: url },

    /*     openGraph: {
      title,
      description,
      type: 'article',
      url: `${getServerSideURL()}/blog/${doc?.slug}`,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    }, */
    /*     twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    }, */
    //alternates: { canonical: `${getServerSideURL()}/blog/${doc?.slug}`
  }
}
