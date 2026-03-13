'use client'

import { ArticleCard, CardPostData } from '../ArticleCard/ArticleCard'
import './ArticleCardContainer.scss'

export type Props = {
  posts: CardPostData[]
}

export const ArticleCardContainer: React.FC<Props> = (props) => {
  const { posts } = props

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
