import 'leaflet/dist/leaflet.css'
// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/serviceworker.js')
        .then(() => {
          console.log('service worker registered')
        })
        .catch(() => {
          console.warn('service worker failed')
        })
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
