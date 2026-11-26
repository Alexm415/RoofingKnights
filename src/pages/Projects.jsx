import { siteConfig } from '../siteConfig.js'
import { useLang } from '../language.jsx'
import { Layout } from '../components/Layout.jsx'
import { PlaceholderBadge } from '../components/PlaceholderBadge.jsx'
import { TikTokIcon } from '../components/Icons.jsx'

export default function Projects() {
  const { t } = useLang()
  return (
    <Layout titleKey="projects">
      <section className="page-hero">
        <div className="wrap">
          <h1>{t.projects.title}</h1>
          <p className="lead">{t.projects.lead}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="project-grid">
            {siteConfig.projects.map((project) => {
              if (project.placeholder) {
                return (
                  <figure key={project.id} className="project-card is-placeholder">
                    <div className="project-photo">
                      <PlaceholderBadge />
                    </div>
                    <figcaption>{t.projects.placeholderCaption}</figcaption>
                  </figure>
                )
              }
              return (
                <figure key={project.id} className="project-card">
                  <div className="project-photo">
                    <picture>
                      <source type="image/webp" srcSet={project.webp} />
                      <img
                        src={project.image}
                        alt={t.projects.caption}
                        width="810"
                        height="252"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <figcaption>{t.projects.caption}</figcaption>
                </figure>
              )
            })}
          </div>
          <div className="tiktok-cta">
            <p>{t.projects.tiktokLead}</p>
            <a
              className="btn btn-primary"
              href={siteConfig.social.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon />
              {t.cta.tiktok}
              <span className="handle">{siteConfig.social.tiktok.handle}</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
