import { Link } from 'react-router-dom'
import { siteConfig } from '../siteConfig.js'
import { useLang } from '../language.jsx'
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'

export function InsuranceOffer({ id = 'insurance-offer' }) {
  const { t, lang } = useLang()
  const showBilingual = lang === 'en'
  return (
    <section className="insurance-band" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap insurance-inner">
        <p className="eyebrow">{t.insurance.eyebrow}</p>
        <h2 id={`${id}-title`}>{t.insurance.headline}</h2>
        {showBilingual && (
          <p className="insurance-es" lang="es">
            {t.insurance.headlineEs}
          </p>
        )}
        <p className="insurance-lines">
          {t.insurance.line1} {t.insurance.line2}
        </p>
        {showBilingual && (
          <p className="insurance-es-sub" lang="es">
            {t.insurance.line1Es} {t.insurance.line2Es}
          </p>
        )}
        <div className="btn-row">
          <a className="btn btn-light" href={`tel:${siteConfig.phone.tel}`}>
            <PhoneIcon />
            {siteConfig.phone.display}
          </a>
          <a
            className="btn btn-whatsapp"
            href={siteConfig.whatsapp.waUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            {t.cta.whatsapp} {siteConfig.whatsapp.display}
          </a>
          <Link className="btn btn-ghost-light" to="/contact">
            {t.cta.quote}
          </Link>
        </div>
      </div>
    </section>
  )
}
