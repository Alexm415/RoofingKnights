import { Link } from 'react-router-dom'
import { siteConfig } from '../siteConfig.js'
import { useLang } from '../language.jsx'
import { Layout } from '../components/Layout.jsx'
import { Logo } from '../components/Logo.jsx'
import { TrustBadges } from '../components/TrustBadges.jsx'
import { InsuranceOffer } from '../components/InsuranceOffer.jsx'
import { PlaceholderBadge } from '../components/PlaceholderBadge.jsx'
import { PhoneIcon } from '../components/Icons.jsx'
import roofJobJpg from '../assets/gallery/completed-shingle-roof.jpg'
import roofJobWebp from '../assets/gallery/completed-shingle-roof.webp'

export default function Home() {
  const { t } = useLang()
  const overviewIds = ['insurance', 'repair', 'replacement', 'installation']
  const reviews = siteConfig.reviews.filter((r) => r.verified)

  return (
    <Layout titleKey="home">
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={roofJobWebp} />
            <img src={roofJobJpg} alt="" width="810" height="252" />
          </picture>
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="wrap hero-content">
          <Logo to="" size="xl" className="hero-logo" />
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="btn-row">
            <Link className="btn btn-primary" to="/contact">
              {t.cta.quote}
            </Link>
            <a className="btn btn-light" href={`tel:${siteConfig.phone.tel}`}>
              <PhoneIcon />
              {siteConfig.phone.display}
            </a>
          </div>
          <TrustBadges />
        </div>
      </section>

      <InsuranceOffer />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.home.servicesTitle}</h2>
            <p>{t.home.servicesLead}</p>
          </div>
          <div className="card-grid">
            {overviewIds.map((id) => {
              const svc = siteConfig.services.find((s) => s.id === id)
              const copy = t.services[id]
              return (
                <article key={id} className={`card${svc?.placeholder ? ' is-placeholder' : ''}`}>
                  {svc?.placeholder && <PlaceholderBadge />}
                  <h3>{copy.name}</h3>
                  <p>{copy.summary}</p>
                </article>
              )
            })}
          </div>
          <p className="section-cta">
            <Link className="btn btn-secondary" to="/services">
              {t.cta.viewServices}
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap about-teaser">
          <div>
            <h2>{t.home.aboutTitle}</h2>
            <p>{t.home.aboutLead}</p>
            <Link className="btn btn-secondary" to="/about">
              {t.nav.about}
            </Link>
          </div>
          <div className="about-teaser-photo">
            <picture>
              <source type="image/webp" srcSet={roofJobWebp} />
              <img src={roofJobJpg} alt={t.projects.caption} width="810" height="252" />
            </picture>
            <p className="caption">{t.projects.caption}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.home.reviewsTitle}</h2>
          </div>
          <div className="review-grid">
            {reviews.map((r) => (
              <blockquote key={r.id} className="review-card">
                <p>“{r.text}”</p>
                <footer>
                  <cite>{r.name}</cite>
                  <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer">
                    {t.reviews.viaBbb}
                  </a>
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="section-cta">
            <Link className="btn btn-secondary" to="/reviews">
              {t.cta.readReviews}
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}
