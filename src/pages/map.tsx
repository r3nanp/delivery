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
      </Head>

      <Header />
      <MapContainerWithNoSSR />
    </>
  )
}
