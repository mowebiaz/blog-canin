import React from 'react'
import type { Post } from '@/payload-types'
import { formatDateTime } from '@/utilities/formatDateTime'
import './PostHero.scss'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, publishedAt, title } = post

  return (
    <div className="posthero">
      <h1 className="posthero__title">{title}</h1>

      <div className="posthero__categories">
        {categories?.map((category, index) => {
          if (typeof category === 'object' && category !== null) {
            const { title: categoryTitle } = category

            const titleToUse = categoryTitle || 'Untitled category'

            return <span key={index}>{titleToUse}</span>
          }
          return null
        })}
      </div>

      {publishedAt && (
        <div className="posthero__date">
          <p>Publié le:</p>
          <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
        </div>
      )}
    </div>
  )
}
