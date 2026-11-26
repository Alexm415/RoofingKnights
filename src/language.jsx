import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getCopy } from './copy.js'

const STORAGE_KEY = 'rk-lang'
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'es') return saved
    } catch {
      /* ignore */
    }
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es' : 'en'
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const value = useMemo(() => {
    const t = getCopy(lang)
    const setLang = (next) => setLangState(next === 'es' ? 'es' : 'en')
    const toggle = () => setLangState((prev) => (prev === 'es' ? 'en' : 'es'))
    return { lang, t, setLang, toggle }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
