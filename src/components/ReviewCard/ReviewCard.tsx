import { motion, type Variants } from 'motion/react'
import './ReviewCard.scss'

type Review = {
  author_name: string
  rating: number
  relative_time_description: string
  text: string
}

export const ReviewCard = ({
  review,
  variants,
}: {
  review: Review
  variants: Variants
}) => {
  return (
    <motion.article
      className="review__card"
      variants={variants}
    >
      <div className="review__header">
        <div className="review__image"> </div>
        <div>
          <p className="review__author">{review.author_name}</p>
          <p className="review__date">{review.relative_time_description}</p>
        </div>
      </div>

      <span className="review__rating">
        <span className="sr-only">{`${review.rating} étoiles sur 5`}</span>
        <span aria-hidden="true">
          {'★'.repeat(review.rating)}
          {'☆'.repeat(5 - review.rating)}
        </span>
      </span>

      <p className="review__text">{review.text}</p>
    </motion.article>
  )
}
