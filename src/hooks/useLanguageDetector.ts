import { Location, useLocation } from 'react-router-dom'
import { setLanguage } from 'react-multi-lang'

type SearchParams = Record<string, string>

const extractSearchParams = (location: Location): SearchParams => {
  const searchParams = new URLSearchParams(location.search)
  const paramsObject: SearchParams = {}

  for (const [key, value] of searchParams.entries()) {
    paramsObject[key.replace('/', '')] = value
  }

  return paramsObject
}

export const useLanguageDetector = () => {
  const location = useLocation()

  const lang = extractSearchParams(location as Location)['lang']
  if (lang) {
    if (lang === 'ru') {
      localStorage.setItem('lang', 'ru')
      setLanguage('ru')
    } else if (lang === 'en') {
      localStorage.setItem('lang', 'en')
      setLanguage('en')
    }
  }

  if (localStorage.getItem('lang')) {
    setLanguage(localStorage.getItem('lang') as string)
  }
}
