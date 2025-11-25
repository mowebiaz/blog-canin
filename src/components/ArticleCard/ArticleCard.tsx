'use client'

import React, { Fragment } from 'react'
import Link from 'next/link'
import type { Post } from '@/payload-types'
//import { Media } from '@/components/Media'
import useClickableCard from './useClickableCard'
import './ArticleCard.scss'
import Image from 'next/image'
import { formatDateTime } from '@/utilities/formatDateTime'

export type CardPostData = Pick<
  Post,
  'slug' | 'categories' | 'meta' | 'title' | 'coverImage' | 'publishedAt'
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

  const { slug, categories, meta, title, coverImage, publishedAt } = doc || {}
  const { description } = meta || {}

  const hasCategories =
    categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${basePath}/${slug}`

  return (
    <article
      className="article-card"
      ref={cardRef}
    >
      <div className="article-card__media">
        {!coverImage && <div className="no-image">No image</div>}
        {coverImage && typeof coverImage === 'object' && coverImage.url && (
          <Image
            src={coverImage.url}
            alt={coverImage.alt || ''}
            fill
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
        {description && (
          <div className="article-card__desc">
            {description && <p>{sanitizedDescription}</p>}
          </div>
        )}
      </div>
    </article>
  )
}
