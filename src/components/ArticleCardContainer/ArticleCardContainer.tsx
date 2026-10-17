'use client'

import { ArticleCard, CardPostData } from '../ArticleCard/ArticleCard'
import './ArticleCardContainer.scss'

export type Props = {
  posts: CardPostData[]
  /** Number of leading cards whose image is preloaded (use 0 when the list is below the fold). */
  priorityCount?: number
}

export const ArticleCardContainer: React.FC<Props> = (props) => {
  const { posts, priorityCount = 2 } = props

  return (
    <div>
      <div className="posts">
        {posts?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <ArticleCard
                doc={result}
                basePath="blog"
                showCategories
                priority={index < priorityCount}
                key={index}
              />
            )
          }

          return null
        })}
      </div>
    </div>
  )
}
