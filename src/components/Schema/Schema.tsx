import type { Media, Post } from '@/payload-types'
import { getImageURL } from '@/utilities/generateMeta'

export const articleSchema = (props: Post) => {
  const metaImage = props.meta?.image
  const imageURL = metaImage ? getImageURL(metaImage) : null

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    datePublished: new Date(props?.createdAt).toISOString(),
    dateModified: new Date(props?.updatedAt).toISOString(),
    ...(imageURL && { image: [imageURL] }),
    author: {
      '@type': 'Person',
      name: 'Liane',
      //sameAs: ['https://www.johndoe.com', 'https://www.twitter.com/johndoe'],
    },
  }
}

interface JsonLdImageObject {
  '@context': 'https://schema.org'
  '@type': 'ImageObject'
  contentUrl?: string
  creditText?: string
  creator?: {
    '@type': 'Person'
    name: string
  }
}

type MediaForSchema = Pick<
  Media,
  'creditText' | 'photographe' | 'url' | 'sizes'
>

export const imageSchema = (media: MediaForSchema): JsonLdImageObject => {
  const contentUrl = getImageURL(media as Media) || undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    ...(contentUrl && { contentUrl }),
    ...(media.creditText && { creditText: media.creditText }),
    ...(media.photographe && {
      creator: { '@type': 'Person', name: media.photographe },
    }),
  }
}
