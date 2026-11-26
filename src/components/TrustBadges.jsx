import { siteConfig } from '../siteConfig.js'
import { useLang } from '../language.jsx'
import { ShieldIcon } from './Icons.jsx'

export function TrustBadges({ compact = false }) {
  const { t } = useLang()
  const { bbb, license } = siteConfig
  return (
    <ul className={`trust-badges${compact ? ' is-compact' : ''}`}>
      <li>
        <a className="trust-badge" href={bbb.url} target="_blank" rel="noopener noreferrer">
          <span className="trust-value">{bbb.rating}</span>
          <span className="trust-label">{t.trust.bbbRating}</span>
        </a>
      </li>
      <li>
        <a className="trust-badge" href={bbb.url} target="_blank" rel="noopener noreferrer">
          <ShieldIcon />
          <span className="trust-label">{t.trust.accredited}</span>
        </a>
      </li>
      <li>
        <a className="trust-badge" href={license.verifyUrl} target="_blank" rel="noopener noreferrer">
          <span className="trust-value">#{license.number}</span>
          <span className="trust-label">
            {t.trust.license} · {t.trust.licenseClass}
          </span>
        </a>
      </li>
      <li>
        <div className="trust-badge is-static">
          <span className="trust-value">2024</span>
          <span className="trust-label">{t.trust.established}</span>
        </div>
      </li>
    </ul>
  )
}
