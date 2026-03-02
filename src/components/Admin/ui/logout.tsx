// the route transition bar at the top of the page of admin panel
'use client'
import { Link, LogOutIcon } from '@payloadcms/ui'

export const Logout = () => {
  return (
    <Link
      href={'/admin/logout'}
      aria-label="Logout"
      tabIndex={0}
      className="nav__log-out"
    >
      <LogOutIcon />
    </Link>
  )
}
