type CommonProps = {
  name: string
  error?: string
  label?: string
  helpText?: string
  className?: string
  id?: string // to force a different id from the name
  layout?: 'stack' | 'inline' // inline = checkbox/radio
  aftercontrol?: React.ReactNode // ex: right custom label for checkbox/radio
}

type InputProps = CommonProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> & {
    as?: 'input'
  }

type TextareaProps = CommonProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> & {
    as: 'textarea'
  }

export type FormFieldProps = InputProps | TextareaProps

export const FormField: React.FC<FormFieldProps> = (props) => {
  const {
    name,
    error,
    label,
    id,
    className,
    as = 'input',
    ...rest
  } = props as FormFieldProps & { as?: 'input' | 'textarea' }

  const fieldId = id ?? name
  const errorId = `${fieldId}-error`

  const commonA11y = {
    id: fieldId,
    name,
    'aria-invalid': Boolean(error) || undefined,
    'aria-describedby': error ? errorId : undefined,
  }

  const layout = props.layout ?? 'stack'

  if (layout === 'inline') {
    return (
      <div className={className}>
        <div className="field-inline">
          {as === 'textarea' ? (
            <textarea
              {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
              {...commonA11y}
            />
          ) : (
            <input
              {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
              {...commonA11y}
            />
          )}

          {props.aftercontrol}
        </div>

        {error && (
          <div
            id={errorId}
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="error-message">{error}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      {label && <label htmlFor={fieldId}>{label}</label>}
      {as === 'textarea' ? (
        <textarea
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          {...commonA11y}
        />
      ) : (
        <input
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          {...commonA11y}
        />
      )}
      {error && (
        <div
          id={errorId}
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="error-message">{error}</p>
        </div>
      )}
    </div>
  )
}
