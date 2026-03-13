import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Caniliane – éducatrice canine positive à Grenoble. Accompagnement bienveillant pour une relation harmonieuse avec votre chien.',
  title: 'Caniliane',
  siteName: 'Caniliane',
  images: [
    {
      url: `${getServerSideURL()}/images/opengraph/caniliane.png`,
    },
  ],
}

export const mergeOpenGraph = (
  og?: Metadata['openGraph'],
): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
