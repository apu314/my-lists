import { createContext } from 'react'


export interface ContextProps {
  // isDarkMode: boolean

  // setIsDarkMode: (isDark: boolean) => void
}


export const UIContext = createContext({} as ContextProps)
