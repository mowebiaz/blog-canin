'use client'

import { useReducedMotion } from 'motion/react'
import { ArticleCard, CardPostData } from '../ArticleCard/ArticleCard'
import {
  itemVariants,
  noMotionVariants,
  StaggerContainer,
} from '../StaggerContainer/StaggerContainer'
import './ArticleCardContainer.scss'

export type Props = {
  posts: CardPostData[]
}

export const ArticleCardContainer: React.FC<Props> = (props) => {
  const { posts } = props
  const shouldReduceMotion = useReducedMotion()

  return (
    <div>
      <StaggerContainer className="posts">
        {posts?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <ArticleCard
                doc={result}
                basePath="blog"
                showCategories
                key={index}
                variants={shouldReduceMotion ? noMotionVariants : itemVariants}
              />
            )
          }

          return null
        })}
      </StaggerContainer>
    </div>
  )
}
