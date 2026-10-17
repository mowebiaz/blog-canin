import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
import configPromise from '@payload-config'
import type { CollectionSlug, TypedUser } from 'payload'
import { getPayload } from 'payload'

export async function GET(req: NextRequest) {
  const payload = await getPayload({ config: configPromise })

  const { searchParams } = new URL(req.url)
  const path = searchParams.get('path')
  const collection = searchParams.get('collection') as CollectionSlug | null
  const slug = searchParams.get('slug')
  const previewSecret = searchParams.get('previewSecret')

  if (previewSecret !== process.env.PREVIEW_SECRET) {
    return new Response('You are not allowed to preview this page', {
      status: 403,
    })
  }

  if (!path || !collection || !slug) {
    return new Response('Insufficient search params', { status: 404 })
  }

  // Le parseur d'URL normalise '//', '/\' et les tabulations comme le navigateur :
  // si l'hôte change, le chemin mènerait vers un site externe (redirection ouverte)
  const base = 'http://localhost'
  const isRelativePath =
    path.startsWith('/') &&
    URL.canParse(path, base) &&
    new URL(path, base).origin === base

  if (!isRelativePath) {
    return new Response(
      'This endpoint can only be used for relative previews',
      { status: 500 },
    )
  }

  let user: TypedUser | null = null

  try {
    // payload.auth() renvoie toujours { user, permissions } : il faut lire .user
    const authResult = await payload.auth({ headers: req.headers })
    user = authResult.user
  } catch (error) {
    payload.logger.error(
      { err: error },
      'Error verifying token for live preview',
    )
    return new NextResponse('You are not allowed to preview this page', {
      status: 403,
    })
  }

  const draft = await draftMode()

  if (!user) {
    draft.disable()
    return new NextResponse('You are not allowed to preview this page', {
      status: 403,
    })
  }

  // You can add additional checks here to see if the user is allowed to preview this page

  draft.enable()

  redirect(path)
}
