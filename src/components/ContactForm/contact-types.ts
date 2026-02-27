import { z } from 'zod'

export type FormData = {
  name: string
  email: string
  message: string
  accepted: boolean
  websitedog?: string | undefined
}

export type ValidFieldNames =
  | 'name'
  | 'email'
  | 'message'
  | 'accepted'
  | 'websitedog'

export const contactSchema = z.object({
  name: z.string().min(2, 'Vous devez indiquer votre nom'),
  email: z.email("L'email n'est pas valide"),
  message: z.string().min(3, 'Vous devez écrire un message'),
  accepted: z
    .boolean()
    .refine(
      (value) => value === true,
      'Vous devez accepter la politique de confidentialité pour envoyer le formulaire',
    ),
  websitedog: z.string().optional(), //honeypot
})

export type ContactSchema = z.infer<typeof contactSchema>
