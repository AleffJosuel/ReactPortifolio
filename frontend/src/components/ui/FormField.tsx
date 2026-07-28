interface FormFieldProps {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  error?: string
  multiline?: boolean
  type?: string
  required?: boolean
  placeholder?: string
}

const FIELD_CLASSES =
  'w-full rounded-lg bg-surface px-4 py-2.5 text-sm text-white ring-1 ring-white/10 ' +
  'placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary'

/** Reused by ContactForm and AdminProjectForm so both share one input style and label/error layout. */
export function FormField({
  label,
  name,
  value,
  onChange,
  error,
  multiline = false,
  type = 'text',
  required = false,
  placeholder,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-muted">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          className={FIELD_CLASSES}
          rows={5}
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className={FIELD_CLASSES}
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}
