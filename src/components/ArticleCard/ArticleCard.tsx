'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Media } from '@/components/Media'
import type { Post } from '@/payload-types'
import { formatDateTime } from '@/utilities/formatDateTime'
import useClickableCard from './useClickableCard'
import './ArticleCard.scss'

export type CardPostData = Pick<
  Post,
  'slug' | 'categories' | 'plaintext' | 'title' | 'coverImage' | 'publishedAt'
>

export const ArticleCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  basePath?: string
  showCategories?: boolean
  title?: string
}> = (props) => {
  const {
    card: { ref: cardRef },
    link: { ref: linkRef },
  } = useClickableCard<HTMLElement>({})
  const {
    className,
    doc,
    basePath,
    showCategories,
    title: titleFromProps,
  } = props

  const { slug, categories, plaintext, title, coverImage, publishedAt } =
    doc || {}

  const hasCategories =
    categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = plaintext?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${basePath}/${slug}`

  return (
    <article
      className="article-card"
      ref={cardRef}
    >
      <div className="article-card__media">
        {!coverImage && (
          <div className="no-image">
            <Image
              src={'/images/article-default.webp'}
              alt="Default article image"
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        {coverImage && typeof coverImage === 'object' && (
          <Media
            resource={coverImage}
            size="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>
      {showCategories && hasCategories && (
        <div className="article-card__categories">
          {showCategories && hasCategories && (
            <div>
              {categories?.map((category, index) => {
                if (typeof category === 'object') {
                  const { title: titleFromCategory } = category

                  const categoryTitle = titleFromCategory || 'Untitled category'

                  return <span key={index}>{categoryTitle}</span>
                }

                return null
              })}
            </div>
          )}
        </div>
      )}
      <div className="article-card__content">
        {publishedAt && (
          <div className="article-card__date">
            <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
          </div>
        )}

        {titleToUse && (
          <div className="article-card__title">
            <h3>
              <Link
                className="article-card__link"
                href={href}
                ref={linkRef}
              >
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        {plaintext && (
          <div className="article-card__desc">
            {plaintext && <p>{sanitizedDescription}</p>}
          </div>
        )}
      </div>
    </article>
  )
}
