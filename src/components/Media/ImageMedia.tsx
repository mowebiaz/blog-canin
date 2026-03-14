import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import type { Props as MediaProps } from './types'

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const {
    alt: altFromProps,
    fill,
    pictureClassName,
    imgClassName,
    priority,
    resource,
    size: sizesFromProps,
    src: srcFromProps,
    loading: loadingFromProps,
  } = props

  // Cas import statique (ex: import logo from '@/public/logo.png')
  if (srcFromProps) {
    return (
      <Image
        alt={altFromProps || ''}
        className={imgClassName}
        fill={fill}
        priority={priority}
        loading={priority ? undefined : (loadingFromProps ?? 'lazy')}
        sizes={sizesFromProps}
        src={srcFromProps as StaticImageData}
      />
    )
  }

  // Cas ressource Payload (images sur S3)
  // On délègue l'optimisation (redimensionnement, format, qualité) à next/image.
  if (!resource || typeof resource !== 'object' || !resource.url) return null

  const { alt: altFromResource, url, width, height } = resource
  const alt = altFromProps || altFromResource || ''

  return (
    <picture className={pictureClassName}>
      <Image
        alt={alt}
        className={imgClassName}
        fill={fill}
        height={fill ? undefined : (height ?? undefined)}
        width={fill ? undefined : (width ?? undefined)}
        priority={priority}
        loading={priority ? undefined : (loadingFromProps ?? 'lazy')}
        sizes={sizesFromProps ?? '100vw'}
        src={url}
      />
    </picture>
  )
}
