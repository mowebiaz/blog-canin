import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import type { Media as MediaType } from '@/payload-types'
import type { Props as MediaProps } from './types'

/**
 * Construit un srcset à partir des variantes générées par Payload (stockées sur S3).
 * Chaque entrée utilise l'URL de la variante et sa largeur réelle.
 */
function buildSrcSet(resource: MediaType): string {
  const { sizes, url, width } = resource
  const entries: string[] = []

  if (sizes?.xs?.url && sizes.xs.width) {
    entries.push(`${sizes.xs.url} ${sizes.xs.width}w`)
  }
    if (sizes?.sm?.url && sizes.sm.width) {
    entries.push(`${sizes.sm.url} ${sizes.sm.width}w`)
  }
  if (sizes?.md?.url && sizes.md.width) {
    entries.push(`${sizes.md.url} ${sizes.md.width}w`)
  }
  if (sizes?.lg?.url && sizes.lg.width) {
    entries.push(`${sizes.lg.url} ${sizes.lg.width}w`)
  }
    if (sizes?.xl?.url && sizes.xl.width) {
    entries.push(`${sizes.xl.url} ${sizes.xl.width}w`)
  }
/*   if (sizes?.xlarge?.url && sizes.xlarge.width) {
    entries.push(`${sizes.xlarge.url} ${sizes.xlarge.width}w`)
  } */
  // Fallback sur l'image originale
  if (url && width) {
    entries.push(`${url} ${width}w`)
  }

  return entries.join(', ')
}

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
  // On délègue à next/image qui gère l'optimisation côté serveur Next.js.
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
  // On utilise un <img> natif avec srcset construit depuis les variantes Payload,
  // ce qui évite de passer par le serveur Next.js pour des images déjà optimisées.
  if (!resource || typeof resource !== 'object' || !resource.url) return null

  const { alt: altFromResource, url, width, height } = resource
  const alt = altFromProps || altFromResource || ''
  const srcset = buildSrcSet(resource)
  const loading: 'lazy' | 'eager' = priority ? 'eager' : (loadingFromProps ?? 'lazy')

  // En mode fill, l'image couvre tout son parent (qui doit être en position relative)
  const fillStyle: React.CSSProperties | undefined = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
    : undefined

  return (
    <picture className={pictureClassName}>
      <img
        alt={alt}
        className={imgClassName}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        height={fill ? undefined : (height ?? undefined)}
        width={fill ? undefined : (width ?? undefined)}
        loading={loading}
        sizes={sizesFromProps ?? '100vw'}
        src={url}
        srcSet={srcset || undefined}
        style={fillStyle}
      />
    </picture>
  )
}
