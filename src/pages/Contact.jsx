import { useState } from 'react'
import { siteConfig, formatAddress, mailtoQuote } from '../siteConfig.js'
import { useLang } from '../language.jsx'
import { Layout } from '../components/Layout.jsx'
import { PlaceholderBadge } from '../components/PlaceholderBadge.jsx'
import { PhoneIcon, WhatsAppIcon, MailIcon, PinIcon, TikTokIcon } from '../components/Icons.jsx'

const SERVICE_IDS = ['insurance', 'repair', 'replacement', 'installation', 'inspections']

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: replace mailto with a real form backend.
    window.location.href = mailtoQuote(form)
  }

  return (
    <Layout titleKey="contact">
      <section className="page-hero">
        <div className="wrap">
          <h1>{t.contact.title}</h1>
          <p className="lead">{t.contact.lead}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap contact-grid">
          <form className="quote-form" onSubmit={onSubmit} noValidate>
            <h2>{t.contact.formTitle}</h2>
            <label>
              {t.contact.name}
              <input name="name" type="text" autoComplete="name" value={form.name} onChange={onChange} required />
            </label>
            <label>
              {t.contact.phone}
              <input name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={onChange} required />
            </label>
            <label>
              {t.contact.email}
              <input name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} />
            </label>
            <label>
              {t.contact.property}
              <input name="address" type="text" autoComplete="street-address" value={form.address} onChange={onChange} />
            </label>
            <label>
              {t.contact.service}
              <select name="service" value={form.service} onChange={onChange}>
                <option value="">{t.contact.serviceSelect}</option>
                {SERVICE_IDS.map((id) => (
                  <option key={id} value={t.services[id].name}>
                    {t.services[id].name}
                  </option>
                ))}
                <option value={t.contact.serviceOther}>{t.contact.serviceOther}</option>
              </select>
            </label>
            <label>
              {t.contact.message}
              <textarea name="message" rows="5" value={form.message} onChange={onChange} />
            </label>
            <button className="btn btn-primary" type="submit">
              {t.contact.submit}
            </button>
            <p className="form-note">{t.contact.formNote}</p>
            {siteConfig.email.confirm && <p className="form-note is-warn">{t.contact.emailPending}</p>}
          </form>

          <aside className="contact-aside">
            <div className="info-card">
              <h2>{t.contact.reachTitle}</h2>
              <p className="info-label">{t.contact.mainPhone}</p>
              <p>
                <a className="contact-line" href={`tel:${siteConfig.phone.tel}`}>
                  <PhoneIcon />
                  {siteConfig.phone.display}
                </a>
              </p>
              <p className="info-label">{t.contact.localWhatsapp}</p>
              <p>
                <a
                  className="contact-line"
                  href={siteConfig.whatsapp.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  {siteConfig.whatsapp.display}
                </a>
                <span className="muted-inline"> · </span>
                <a className="contact-line is-inline" href={`tel:${siteConfig.whatsapp.tel}`}>
                  {t.cta.call}
                </a>
              </p>
              <p className="info-label">{t.cta.email}</p>
              <p>
                <a className="contact-line" href={`mailto:${siteConfig.email.address}`}>
                  <MailIcon />
                  {siteConfig.email.address}
                </a>
              </p>
              {siteConfig.email.confirm && <p className="form-note is-warn">{t.contact.emailPending}</p>}
            </div>

            <div className="info-card">
              <h2>{t.contact.addressTitle}</h2>
              <p>
                <a
                  className="contact-line"
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PinIcon />
                  {formatAddress(true)}
                </a>
              </p>
              <p>
                <a
                  className="btn btn-secondary btn-sm"
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.cta.directions}
                </a>
              </p>
            </div>

            <div className="info-card">
              <h2>{t.contact.hoursTitle}</h2>
              <ul className="hours-list">
                {siteConfig.hours.days.map((d) => (
                  <li key={d.dayKey} className={d.placeholder ? 'is-placeholder' : ''}>
                    <span>{t.days[d.dayKey]}</span>
                    <span>
                      {d.verified ? d.time : t.confirmHours}
                      {d.placeholder && <PlaceholderBadge />}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="form-note">{t.contact.hoursNote}</p>
            </div>

            <div className="info-card is-placeholder">
              <PlaceholderBadge />
              <h2>{t.contact.serviceAreaTitle}</h2>
              <p>{t.contact.serviceAreaPlaceholder}</p>
            </div>

            <div className="info-card">
              <h2>{t.contact.socialTitle}</h2>
              <p>
                <a
                  className="contact-line"
                  href={siteConfig.social.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokIcon />
                  {siteConfig.social.tiktok.handle}
                </a>
              </p>
              <a
                className="btn btn-secondary btn-sm"
                href={siteConfig.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.cta.tiktok}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  )
}
