import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { UIProvider } from '../context/ui'

import { darkTheme, lightTheme } from '../themes'

import '../styles/globals.css'
import { ListsProvider } from '../context/lists'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <UIProvider>
        <NextUIProvider>
          <ListsProvider>
            <Component {...pageProps} />
          </ListsProvider>
        </NextUIProvider>
      </UIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
