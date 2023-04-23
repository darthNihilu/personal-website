import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { Box } from 'components/Box'
import { Reset } from 'styled-reset'
import { GlobalStyle } from 'GlobalStyle'
import { TopContent } from 'content/TopContent'

import { setDefaultLanguage, setTranslations } from 'react-multi-lang'

import en from 'assets/languages/en.json'
import ru from 'assets/languages/ru.json'
import { useLanguageDetector } from 'hooks/useLanguageDetector'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { THEME_TYPES, themes } from 'components/Theme'

// Do this two lines only when setting up the application
setTranslations({ en, ru })
setDefaultLanguage('en')

const Wrapper = () => {
  useLanguageDetector()
  return <></>
}

type HTMLElementOrNull = HTMLElement | null

type ThemeContextType = {
  theme: THEME_TYPES
  switchTheme: (newTheme: THEME_TYPES) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: THEME_TYPES.DEFAULT,
  switchTheme: () => {}
})

const ThemeSwitchProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [theme, setTheme] = useState<THEME_TYPES>(THEME_TYPES.DEFAULT)

  const switchTheme = (newTheme: THEME_TYPES) => {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const ThemeWrapper = ({ children }: any) => {
  const { theme: selectedTheme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={themes[selectedTheme ?? THEME_TYPES.DEFAULT]}>
      {children}
    </ThemeProvider>
  )
}

function App() {
  // setLanguage('ru')

  useEffect(() => {
    const scrollToSectionWithId = () => {
      const hash = window.location.hash.substr(1)
      if (hash.length > 0) {
        const section: HTMLElementOrNull = document.getElementById(hash)
        if (section !== null) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    scrollToSectionWithId()
    window.addEventListener('hashchange', scrollToSectionWithId)
    return () => {
      window.removeEventListener('hashchange', scrollToSectionWithId)
    }
  }, [])

  return (
    <ThemeSwitchProvider>
      <ThemeWrapper>
        <Router>
          <Reset />
          <GlobalStyle />
          <Wrapper />
          <Box>
            <TopContent />
          </Box>
        </Router>
      </ThemeWrapper>
    </ThemeSwitchProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
