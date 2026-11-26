import { siteConfig } from '../siteConfig.js'
import { useLang } from '../language.jsx'
import { Layout } from '../components/Layout.jsx'
import { TrustBadges } from '../components/TrustBadges.jsx'
import { PlaceholderBox } from '../components/PlaceholderBadge.jsx'

export default function About() {
  const { t } = useLang()
  const { bbb, license, people } = siteConfig
  return (
    <Layout titleKey="about">
      <section className="page-hero">
        <div className="wrap">
          <h1>{t.about.title}</h1>
          <p className="lead">{t.about.lead}</p>
          <TrustBadges />
        </div>
      </section>
      <section className="section">
        <div className="wrap about-layout">
          <PlaceholderBox>
            <h2>{t.about.storyPlaceholderTitle}</h2>
            <p>{t.about.storyPlaceholder}</p>
          </PlaceholderBox>
          <PlaceholderBox className="team-placeholder">
            <h2>{t.about.teamPlaceholderTitle}</h2>
            <p>{t.about.teamPlaceholder}</p>
          </PlaceholderBox>
          <div className="facts-card">
            <h2>{t.about.factsTitle}</h2>
            <dl>
              <div>
                <dt>{t.about.factStarted}</dt>
                <dd>{bbb.businessStarted}</dd>
              </div>
              <div>
                <dt>{t.about.factEntity}</dt>
                <dd>{t.about.corp}</dd>
              </div>
              <div>
                <dt>{t.about.factCeo}</dt>
                <dd>{people.ceo.name}</dd>
              </div>
              <div>
                <dt>{t.about.factRmo}</dt>
                <dd>{people.rmo.name}</dd>
              </div>
              <div>
                <dt>{t.about.factAccredited}</dt>
                <dd>{bbb.accreditedSince}</dd>
              </div>
              <div>
                <dt>{t.trust.bbbRating}</dt>
                <dd>
                  {bbb.rating}{' '}
                  <a href={bbb.url} target="_blank" rel="noopener noreferrer">
                    BBB
                  </a>
                </dd>
              </div>
              <div>
                <dt>{t.trust.license}</dt>
                <dd>
                  #{license.number} ({license.classification}){' '}
                  <a href={license.verifyUrl} target="_blank" rel="noopener noreferrer">
                    {t.trust.verifyLicense}
                  </a>
                </dd>
              </div>
              <div>
                <dt>{t.about.factLicenseIssued}</dt>
                <dd>{license.issued}</dd>
              </div>
              <div>
                <dt>{t.about.factLicenseExpires}</dt>
                <dd>{license.expires}</dd>
              </div>
              <div>
                <dt>{t.about.factStatus}</dt>
                <dd>{license.status}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  )
}
