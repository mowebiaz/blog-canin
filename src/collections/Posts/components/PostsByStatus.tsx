import { Payload } from 'payload'

export const PostsByStatus = async ({ payload }: { payload: Payload }) => {
  const drafts = await payload
    .count({
      collection: 'posts',
      where: {
        _status: {
          equals: 'draft',
        },
      },
    })
    .then((res) => res.totalDocs)

      const published = await payload
    .count({
      collection: 'posts',
      where: {
        _status: {
          equals: 'published',
        },
      },
    })
    .then((res) => res.totalDocs)

    return <p>Il y a {drafts} article{drafts > 1 ? 's' : ''} en brouillon et {published} article{published > 1 ? 's' : ''} publié{published > 1 ? 's' : ''}.

    </p>
}

