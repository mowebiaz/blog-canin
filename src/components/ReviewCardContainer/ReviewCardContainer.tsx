'use client'

import { useReducedMotion } from 'motion/react'
import { AnimatedSection } from '@/components/AnimatedSection/AnimatedSection'
import { StaggerContainer } from '@/components/StaggerContainer/StaggerContainer'
import { reviews } from '@/data/reviews'
import { ReviewCard } from '../ReviewCard/ReviewCard'
import {
  itemVariants,
  noMotionVariants,
} from '../StaggerContainer/StaggerContainer'
import './ReviewCardContainer.scss'

export const ReviewCardContainer = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatedSection className="container">
      <h2>Ils en parlent mieux que moi</h2>

      <StaggerContainer className="reviews">
        {reviews.map((review, index) => (
          <ReviewCard
            review={review}
            key={index}
            variants={shouldReduceMotion ? noMotionVariants : itemVariants}
          />
        ))}
      </StaggerContainer>
    </AnimatedSection>
  )
}
