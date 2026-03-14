'use client'

import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { jsxConverter } from './converters/jsxConverter'
import './RichText.scss'

type Props = {
  data: SerializedEditorState
  disableContainer?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export function RichText(props: Props) {
  const { className, disableContainer, ...rest } = props

  return (
    <RichTextConverter
      {...rest}
      className={className}
      converters={jsxConverter}
      disableContainer={disableContainer}
    />
  )
}