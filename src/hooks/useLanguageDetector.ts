import { Location, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { getLanguage, setLanguage } from 'react-multi-lang'

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
  const currentLanguage = getLanguage()

  useEffect(() => {
    const lang = extractSearchParams(location as Location)['lang']
    if (lang) if (lang === 'ru') setLanguage('ru')
  }, [location, currentLanguage])
}
