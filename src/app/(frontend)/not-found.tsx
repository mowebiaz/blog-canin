import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="not-found">
      <h1>404</h1>
      <Image
        src={'/images/not-found.webp'}
        alt="Page not found"
        width={350}
        height={233}
        priority
      />
      <h2>Cette page n&apos;existe pas.</h2>
      <p style={{ marginBottom: '2rem' }}>
        Retourner à la{' '}
        <Link
          href="/blog"
          className="link-router"
        >
          liste des articles
        </Link>
      </p>
    </main>
  )
}
