import { siteConfig } from '../siteConfig.js'
import { useLang } from '../language.jsx'
import { Layout } from '../components/Layout.jsx'
import { PlaceholderBadge } from '../components/PlaceholderBadge.jsx'

export default function Reviews() {
  const { t } = useLang()
  return (
    <Layout titleKey="reviews">
      <section className="page-hero">
        <div className="wrap">
          <h1>{t.reviews.title}</h1>
          <p className="lead">{t.reviews.lead}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap review-grid review-grid-page">
          {siteConfig.reviews.map((r) => {
            if (r.placeholder) {
              return (
                <blockquote key={r.id} className="review-card is-placeholder">
                  <PlaceholderBadge />
                  <p>{t.reviews.placeholderText}</p>
                  <footer>
                    <cite>{t.reviews.placeholderName}</cite>
                  </footer>
                </blockquote>
              )
            }
            return (
              <blockquote key={r.id} className="review-card">
                <p>“{r.text}”</p>
                <footer>
                  <cite>{r.name}</cite>
                  {r.sourceUrl && (
                    <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer">
                      {t.reviews.viaBbb}
                    </a>
                  )}
                </footer>
              </blockquote>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
