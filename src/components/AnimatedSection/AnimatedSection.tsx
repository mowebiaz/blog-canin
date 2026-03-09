'use client'

import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
  delay?: number
}

export const AnimatedSection = ({
  children,
  as: Tag = 'section',
  className,
  delay,
  style,
  ...rest
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={`animate-on-scroll${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
