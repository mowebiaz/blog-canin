import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="not-found">
      <h1>404</h1>
      <h2>Cette page n&apos;existe pas.</h2>
      <p>
        Retourner à la <Link href="/blog">liste des articles</Link>
      </p>
    </main>
  )
}
