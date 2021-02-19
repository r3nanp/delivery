/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { Animation } from '../components/Animation'
import { Header } from '../components/Header'

export default function Map(): JSX.Element {
  const displayAnimation = <Animation />

  const MapContainerWithNoSSR = dynamic(() => import('../components/Map'), {
    loading: () => displayAnimation,
    ssr: false
  })

  return (
    <>
      <Head>
        <title>Deliveries!</title>
        <meta name="keywords" content="maps, deliveries" />
        <link rel="shortcut icon" href="/package.svg" />

        <meta property="og:site_name" content="Map of deliveries" />
        <meta name="description" content="Choose your favorite products!" />
        <meta property="og:title" content="Deliveries" />
        <meta
          property="og:description"
          content="Choose your favorite products!"
        />

        <meta property="og:image" content="/package.svg" />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deliveries" />
        <meta
          name="twitter:description"
          content="A delivery app to your favorite products"
        />
        <meta name="twitter:image" content="/package.svg" />
      </Head>

      <Header />
      <MapContainerWithNoSSR />
    </>
  )
}
