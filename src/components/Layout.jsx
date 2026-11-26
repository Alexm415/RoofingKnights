import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang } from '../language.jsx'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { StickyCall } from './StickyCall.jsx'

export function Layout({ children, titleKey = 'home' }) {
  const { t } = useLang()
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    document.title = t.meta[titleKey] || t.meta.home
  }, [t, titleKey])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <StickyCall />
    </>
  )
}
