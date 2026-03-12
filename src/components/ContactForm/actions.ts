'use server'

import { Resend } from 'resend'
import { contactSchema, FormData } from './contact-types'

const resend = new Resend(process.env.RESEND_API_KEY)
const email = process.env.EMAIL

export type ActionState = {
  success?: boolean
  message?: string
  errors?: Partial<Record<string, string>>
}

export async function sendContactEmail(data: FormData): Promise<ActionState> {
  const result = contactSchema.safeParse(data)

  if (!result.success) {
    const errors = Object.fromEntries(
      result.error.issues.map((issue) => [issue.path[0], issue.message]),
    )
    return { errors }
  }

  // Honeypot check
  if (result.data.websitedog?.trim()) {
    return { success: true }
  }

  if (!email) {
    return { message: 'Configuration manquante côté serveur.' }
  }

  try {
    await resend.emails.send({
      from: 'MorganeWeb <mw@notifications.morganeweb.com>',
      to: email,
      subject: `Nouveau message de ${result.data.name} sur caniliane.morganeweb.com`,
      replyTo: result.data.email,
      text: `Nom: ${result.data.name}\nEmail: ${result.data.email}\nMessage: ${result.data.message}`,
    })
    return { success: true }
  } catch {
    return { message: "Impossible d'envoyer le message." }
  }
}
