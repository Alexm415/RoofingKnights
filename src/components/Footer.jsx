import { Link } from 'react-router-dom'
import { siteConfig, formatAddress } from '../siteConfig.js'
import { useLang } from '../language.jsx'
import { Logo } from './Logo.jsx'
import { PhoneIcon, WhatsAppIcon, MailIcon, PinIcon, TikTokIcon } from './Icons.jsx'

export function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo size="lg" />
          <p>{t.footer.tagline}</p>
          <p className="footer-license">
            {t.footer.licenseLine}{' '}
            <a href={siteConfig.license.verifyUrl} target="_blank" rel="noopener noreferrer">
              {t.footer.verify}
            </a>
          </p>
        </div>
        <div>
          <h2>{t.nav.contact}</h2>
          <ul className="footer-contacts">
            <li>
              <PhoneIcon />
              <a href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a>
            </li>
            <li>
              <WhatsAppIcon />
              <a href={siteConfig.whatsapp.waUrl} target="_blank" rel="noopener noreferrer">
                {siteConfig.whatsapp.display}
              </a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${siteConfig.email.address}`}>{siteConfig.email.address}</a>
            </li>
            <li>
              <PinIcon />
              <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                {formatAddress()}
              </a>
            </li>
            <li>
              <TikTokIcon />
              <a href={siteConfig.social.tiktok.url} target="_blank" rel="noopener noreferrer">
                {siteConfig.social.tiktok.handle}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>{t.cta.quote}</h2>
          <ul className="footer-nav">
            <li>
              <Link to="/services">{t.nav.services}</Link>
            </li>
            <li>
              <Link to="/projects">{t.nav.projects}</Link>
            </li>
            <li>
              <Link to="/reviews">{t.nav.reviews}</Link>
            </li>
            <li>
              <Link to="/about">{t.nav.about}</Link>
            </li>
            <li>
              <Link to="/contact">{t.cta.quote}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bar">
        <div className="wrap">
          <p>
            © {year} {siteConfig.brand.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
