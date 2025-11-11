import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
} from '@payloadcms/richtext-lexical/react'

import { internalDocToHref } from '@/components/RichText/converters/internalLink'
import { textConverter } from './textConverter'
import { MediaBlock } from '@/blocks/MediaBlock/Component'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<MediaBlockProps>


export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...textConverter,
  blocks: {
    mediaBlock: ({ node }) => (
      <MediaBlock
        {...node.fields}
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),
  }
})