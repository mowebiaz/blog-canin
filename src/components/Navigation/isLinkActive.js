export function isLinkActive(pathname, href) {
  if (href === '/') return pathname === '/'

  if (
    href === '/blog' &&
    (pathname === '/search' || pathname.startsWith('/search/'))
  ) {
    return true
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}
