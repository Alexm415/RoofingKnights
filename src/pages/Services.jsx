import { siteConfig } from '../siteConfig.js'
import { useLang } from '../language.jsx'
import { Layout } from '../components/Layout.jsx'
import { InsuranceOffer } from '../components/InsuranceOffer.jsx'
import { PlaceholderBadge } from '../components/PlaceholderBadge.jsx'

export default function Services() {
  const { t } = useLang()
  return (
    <Layout titleKey="services">
      <section className="page-hero">
        <div className="wrap">
          <h1>{t.services.sectionTitle}</h1>
          <p className="lead">{t.services.sectionLead}</p>
        </div>
      </section>
      <InsuranceOffer id="services-insurance" />
      <section className="section">
        <div className="wrap service-list">
          {siteConfig.services.map((svc) => {
            const copy = t.services[svc.id]
            return (
              <article
                key={svc.id}
                id={svc.id}
                className={`service-block${svc.placeholder ? ' is-placeholder' : ''}${svc.featured && svc.id === 'insurance' ? ' is-featured' : ''}`}
              >
                {svc.placeholder && <PlaceholderBadge />}
                <h2>{copy.name}</h2>
                <p className="summary">{copy.summary}</p>
                <p>{copy.details}</p>
              </article>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
