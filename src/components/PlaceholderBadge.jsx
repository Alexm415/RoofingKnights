import { useLang } from '../language.jsx'

export function PlaceholderBadge({ className = '' }) {
  const { t } = useLang()
  return <span className={`placeholder-badge ${className}`.trim()}>{t.placeholder}</span>
}

export function PlaceholderBox({ children, className = '' }) {
  return (
    <div className={`placeholder-box ${className}`.trim()}>
      <PlaceholderBadge />
      {children}
    </div>
  )
}
