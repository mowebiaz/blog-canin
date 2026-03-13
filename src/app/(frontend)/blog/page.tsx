import { redirect } from 'next/navigation'

export default async function BlogRoot() {
  redirect(`/blog/page/1`)
}
