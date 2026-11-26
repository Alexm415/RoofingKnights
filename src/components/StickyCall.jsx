import { Link } from 'react-router-dom'
import { siteConfig } from '../siteConfig.js'
import { useLang } from '../language.jsx'
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'

export function StickyCall() {
  const { t } = useLang()
  return (
    <div className="sticky-call" role="region" aria-label={t.cta.call}>
      <a className="sticky-btn sticky-call-btn" href={`tel:${siteConfig.phone.tel}`}>
        <PhoneIcon />
        <span>
          {t.cta.call}
          <small>{siteConfig.phone.display}</small>
        </span>
      </a>
      <a
        className="sticky-btn sticky-wa-btn"
        href={siteConfig.whatsapp.waUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        <span>
          {t.cta.whatsapp}
          <small>{siteConfig.whatsapp.display}</small>
        </span>
      </a>
      <Link className="sticky-btn sticky-quote-btn" to="/contact">
        {t.cta.quote}
      </Link>
    </div>
  )
}
