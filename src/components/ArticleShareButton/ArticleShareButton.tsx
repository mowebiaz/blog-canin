'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from 'react-aria-components'
import { FaShareAlt } from 'react-icons/fa'
import {
  FaCheck,
  FaEnvelope,
  FaFacebook,
  FaLink,
  FaXTwitter,
} from 'react-icons/fa6'
import './ArticleShareButton.scss'

type ArticleShareButtonProps = {
  title: string
  text?: string
  url?: string
  className?: string
}

export function ArticleShareButton({
  title,
  text,
  url,
  className = '',
}: ArticleShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  // Ref pour bloquer la fermeture du menu pendant l'affichage du feedback
  const blockCloseRef = useRef(false)

  // Cleanup timeout on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Read from window only at interaction time
  const getUrl = () =>
    url ?? (typeof window !== 'undefined' ? window.location.href : '')

  const canNativeShare = () =>
    typeof navigator !== 'undefined' && typeof navigator.share === 'function'

  const copyToClipboard = async (value: string): Promise<boolean> => {
    try {
      // Modern Clipboard API
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value)
        return true
      }
      // Fallback for older browsers
      const ta = document.createElement('textarea')
      ta.value = value
      ta.setAttribute('readonly', '')
      ta.style.cssText = 'position:absolute;left:-9999px;padding:0;border:none'
      document.body.appendChild(ta)
      ta.select()
      const success = document.execCommand('copy')
      document.body.removeChild(ta)
      return success
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
      return false
    }
  }

  const onCopy = async () => {
    // Bloquer la fermeture synchrone du menu par React Aria avant la fin de l'async
    blockCloseRef.current = true

    const shareUrl = getUrl()
    if (!shareUrl) {
      blockCloseRef.current = false
      return
    }

    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    const success = await copyToClipboard(shareUrl)

    if (success) {
      setCopied(true)
      setCopyError(false)
      timeoutRef.current = setTimeout(() => {
        setCopied(false)
        blockCloseRef.current = false
        setIsOpen(false)
      }, 2000)
    } else {
      setCopyError(true)
      timeoutRef.current = setTimeout(() => {
        setCopyError(false)
        blockCloseRef.current = false
      }, 2000)
    }
  }

  const onNativeShare = async () => {
    const shareUrl = getUrl()

    if (canNativeShare()) {
      try {
        await navigator.share({ title, text, url: shareUrl })
      } catch (error) {
        // User cancelled or share failed - ignore
        console.log('Share cancelled or failed:', error)
      }
    }
  }

  const shareUrl = getUrl()
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(title)

  if (canNativeShare()) {
    return (
      <Button
        className={`share__button ${className}`}
        onPress={onNativeShare}
        aria-label="Partager cet article"
      >
        <FaShareAlt aria-hidden="true" />
        <span>Partager l&apos;article</span>
      </Button>
    )
  }

  return (
    <MenuTrigger
      isOpen={isOpen}
      onOpenChange={(open) => {
        // Ne pas fermer pendant l'affichage du feedback de copie
        if (!open && blockCloseRef.current) return
        setIsOpen(open)
      }}
    >
      <Button
        className={`share__button ${className}`}
        aria-label="Ouvrir le menu de partage"
      >
        <FaShareAlt aria-hidden="true" />
        <span>Partager l&apos;article</span>
      </Button>
      <Popover
        className="share__popover"
        placement="bottom end"
      >
        <Menu
          className="share__menu"
          aria-label="Options de partage"
        >
          <MenuItem
            className="share__item"
            onAction={onCopy}
            aria-label="Copier le lien"
          >
            {copied ? (
              <>
                <FaCheck aria-hidden="true" />
                <span>Lien copié !</span>
              </>
            ) : copyError ? (
              <>
                <FaLink aria-hidden="true" />
                <span>Erreur de copie</span>
              </>
            ) : (
              <>
                <FaLink aria-hidden="true" />
                <span>Copier le lien</span>
              </>
            )}
          </MenuItem>

          <MenuItem
            className="share__item"
            href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
            target="_self"
            aria-label="Partager par email"
          >
            <FaEnvelope aria-hidden="true" />
            <span>Email</span>
          </MenuItem>

          <MenuItem
            className="share__item"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Partager sur Facebook"
          >
            <FaFacebook aria-hidden="true" />
            <span>Facebook</span>
          </MenuItem>

          <MenuItem
            className="share__item"
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Partager sur X (Twitter)"
          >
            <FaXTwitter aria-hidden="true" />
            <span>X</span>
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
