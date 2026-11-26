import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { siteConfig } from '../siteConfig.js'
import { useLang } from '../language.jsx'
import { Logo } from './Logo.jsx'
import { PhoneIcon, WhatsAppIcon, TikTokIcon } from './Icons.jsx'

const LINKS = [
  { to: '/', key: 'home', end: true },
  { to: '/services', key: 'services' },
  { to: '/about', key: 'about' },
  { to: '/projects', key: 'projects' },
  { to: '/reviews', key: 'reviews' },
  { to: '/contact', key: 'contact' },
]

export function Header() {
  const { t, lang, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Logo size="md" />
        <nav className="header-nav" aria-label="Primary">
          <ul>
            {LINKS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} onClick={close}>
                  {t.nav[item.key]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <a
            className="icon-btn"
            href={siteConfig.social.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.tiktokAria}
            title={siteConfig.social.tiktok.handle}
          >
            <TikTokIcon />
          </a>
          <a
            className="icon-btn"
            href={siteConfig.whatsapp.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.whatsappAria}
          >
            <WhatsAppIcon />
          </a>
          <a className="header-phone" href={`tel:${siteConfig.phone.tel}`} aria-label={t.header.phoneAria}>
            <PhoneIcon />
            <span>{siteConfig.phone.display}</span>
          </a>
          <Link className="btn btn-primary btn-sm" to="/contact">
            {t.cta.quote}
          </Link>
          <button
            type="button"
            className="lang-toggle"
            onClick={toggle}
            title={t.langSwitchTitle}
            aria-label={t.langSwitchTitle}
          >
            <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
            <span className="lang-sep" aria-hidden="true">
              /
            </span>
            <span className={lang === 'es' ? 'is-active' : ''}>ES</span>
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">{open ? t.header.closeMenu : t.header.menu}</span>
            <span className={`burger${open ? ' is-open' : ''}`} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {LINKS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} onClick={close}>
                  {t.nav[item.key]}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="btn btn-primary" to="/contact" onClick={close}>
            {t.cta.quote}
          </Link>
        </nav>
      </div>
    </header>
  )
}
