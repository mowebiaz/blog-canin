export const formatDateTime = (timestamp: string): string => {
  const now = new Date()
  let date = now
  if (timestamp) date = new Date(timestamp)

  const MM = String(date.getUTCMonth() + 1).padStart(2, '0')
  const DD = String(date.getUTCDate()).padStart(2, '0')
  const YYYY = date.getUTCFullYear()

  return `${DD}/${MM}/${YYYY}`
}
