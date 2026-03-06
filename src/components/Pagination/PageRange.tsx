const defaultLabels = {
  plural: 'Docs',
  singular: 'Doc',
}

const defaultCollectionLabels = {
  posts: {
    plural: 'articles',
    singular: 'article',
  },
}

export const PageRange: React.FC<{
  className?: string
  collection?: keyof typeof defaultCollectionLabels
  collectionLabels?: {
    plural?: string
    singular?: string
  }
  currentPage?: number
  limit?: number
  totalDocs?: number
}> = (props) => {
  const {
    collection,
    collectionLabels: collectionLabelsFromProps,
    currentPage,
    limit,
    totalDocs,
  } = props

  let indexStart = (currentPage ? currentPage - 1 : 1) * (limit || 1) + 1
  if (totalDocs && indexStart > totalDocs) indexStart = 0

  let indexEnd = (currentPage || 1) * (limit || 1)
  if (totalDocs && indexEnd > totalDocs) indexEnd = totalDocs

  const { plural, singular } =
    collectionLabelsFromProps ||
    (collection ? defaultCollectionLabels[collection] : undefined) ||
    defaultLabels ||
    {}

  return (
    <div>
      {(typeof totalDocs === 'undefined' || totalDocs === 0) &&
        'Pas de résultats'}
      {typeof totalDocs !== 'undefined' &&
        totalDocs > 0 &&
        `${indexStart}${indexStart > 0 ? ` à ${indexEnd}` : ''} sur ${totalDocs} ${
          totalDocs > 1 ? plural : singular
        }`}
    </div>
  )
}
