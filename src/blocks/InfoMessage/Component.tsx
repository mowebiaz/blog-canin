import React from 'react'
import { RichText } from '@/components/RichText/RichText'
import type { InfoMessageBlock as InfoMessageBlockProps } from '@/payload-types'
import './InfoMessage.scss'

type Props = {
  className?: string
} & InfoMessageBlockProps

export const InfoMessageBlock: React.FC<Props> = ({
  style,
  content,
  className,
}) => {
  return (
    <div className={className}>
      <div className={`info-message info-message--${style}`}>
        <RichText data={content} />
      </div>
    </div>
  )
}