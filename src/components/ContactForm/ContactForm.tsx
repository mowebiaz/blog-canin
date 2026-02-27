'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { IoMdCloseCircle } from 'react-icons/io'
import { LuLoader } from 'react-icons/lu'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendContactEmail } from './actions'
import { contactSchema, FormData, ValidFieldNames } from './contact-types'
import { FormField } from './FormField'
import './ContactForm.scss'

export function ContactForm() {
  const [globalError, setGlobalError] = useState<string | null>(null)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    clearErrors,
    control,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const [watchedName, watchedEmail, watchedMessage, watchedAccepted] = useWatch(
    {
      control,
      name: ['name', 'email', 'message', 'accepted'],
    },
  )
  const isButtonDisabled =
    !watchedName ||
    !watchedEmail ||
    !watchedMessage ||
    !watchedAccepted ||
    isSubmitting

  const closeDialog = useCallback(() => {
    reset()
    clearErrors()
    setShowSuccessDialog(false)
    dialogRef.current?.close()
  }, [reset, clearErrors])

  useEffect(() => {
    if (showSuccessDialog) {
      dialogRef.current?.showModal()
    }
  }, [showSuccessDialog])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleClick = (event: MouseEvent) => {
      if (event.target === dialog) {
        closeDialog()
      }
    }

    dialog.addEventListener('click', handleClick)
    return () => dialog.removeEventListener('click', handleClick)
  }, [closeDialog])

  const onSubmit = async (data: FormData) => {
    setGlobalError(null)

    const result = await sendContactEmail(data)

    if (result.success) {
      reset()
      setShowSuccessDialog(true)
      return
    }

    if (result.errors) {
      const fieldErrorMapping: Record<string, ValidFieldNames> = {
        name: 'name',
        email: 'email',
        message: 'message',
        accepted: 'accepted',
        websitedog: 'websitedog',
      }

      Object.entries(result.errors).forEach(([field, message]) => {
        if (fieldErrorMapping[field]) {
          setError(fieldErrorMapping[field], { type: 'server', message })
        }
      })
      return
    }

    setGlobalError(
      result.message ?? "Une erreur s'est produite. Réessayez plus tard.",
    )
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form"
        noValidate
      >
        <span className="contact-form__asterisk text-italic">
          * Champs obligatoires
        </span>

        <FormField
          {...register('name')}
          autoFocus={true}
          name="name"
          label="Nom *"
          type="text"
          placeholder="Nom"
          error={errors.name?.message}
          autoComplete="name"
          className="contact-form__field"
        />

        <FormField
          {...register('email')}
          name="email"
          label="Email *"
          type="email"
          placeholder="Email"
          error={errors.email?.message}
          autoComplete="email"
          className="contact-form__field"
        />

        <FormField
          {...register('message')}
          as="textarea"
          name="message"
          label="Message *"
          placeholder="Message"
          error={errors.message?.message}
          className="contact-form__field"
        />

        <div className="contact-form__checkbox-container">
          <FormField
            {...register('accepted')}
            type="checkbox"
            name="accepted"
            error={errors.accepted?.message}
            id="accepted"
            layout="inline"
            aftercontrol={
              <label
                htmlFor="accepted"
                className="checkbox"
              >
                J&apos;ai lu et j&apos;accepte la{' '}
                <Link href="/politique-de-confidentialite">
                  politique de confidentialité
                </Link>
              </label>
            }
          />
        </div>

        <FormField
          {...register('websitedog')}
          type="text"
          name="websitedog"
          error={errors.websitedog?.message}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="sr-only"
        />

        {globalError && (
          <div
            role="alert"
            className="error-message"
          >
            {globalError}
          </div>
        )}

        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`btn btn--secondary ${isSubmitting ? 'is-loading' : ''}`}
        >
          <span className="btn__text">Envoyer</span>
          <span
            className="btn__loader"
            aria-hidden={!isSubmitting}
          >
            <LuLoader />
          </span>
        </button>
      </form>

      <dialog
        ref={dialogRef}
        className="contact-dialog"
      >
        <p>Votre message a bien été envoyé.</p>
        <button
          type="button"
          onClick={closeDialog}
          aria-label="Fermer"
        >
          <IoMdCloseCircle size={30} />
        </button>
      </dialog>
    </>
  )
}
