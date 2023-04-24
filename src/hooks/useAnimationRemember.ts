import { useEffect } from 'react'

export const useAnimationRemember = () => {
  const location = window.location

  useEffect(() => {
    localStorage.setItem('animation', 'true')
  }, [])

  return localStorage.getItem('animation') || location.hash !== ''
}
