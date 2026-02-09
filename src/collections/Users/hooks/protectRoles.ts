import type { FieldHook } from 'payload'
import type { User } from '@/payload-types'

export const protectRoles: FieldHook<{ id: string } & User> = async ({
  req,
  data,
  operation,
  value,
  originalDoc,
}) => {
  const incomingRoles = data?.roles
  const rolesProvided = Array.isArray(incomingRoles)

  // Password reset/partial update case: roles remain unchanged
  if (operation === 'update' && !rolesProvided) {
    return (value as User['roles']) ?? (originalDoc?.roles as User['roles'])
  }

  // Create the first user account
  if (operation === 'create') {
    const { totalDocs } = await req.payload.count({ collection: 'users' })
    const isFirstUser = totalDocs === 0

    if (isFirstUser) {
      const roles = new Set(incomingRoles || [])
      roles.add('admin')
      roles.add('user')
      return [...roles]
    }
  }

  if (!req.user) {
    return (value as User['roles']) ?? (originalDoc?.roles as User['roles'])
  }

  const isAdmin = req.user?.roles?.includes('admin')

  if (!isAdmin) {
    return (
      (value as User['roles']) ??
      (originalDoc?.roles as User['roles']) ?? ['user']
    )
  }

  const userRoles = new Set(incomingRoles || [])
  userRoles.add('user') // Ensure 'user' role is always included
  return [...userRoles.values()]
}
