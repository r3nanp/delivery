/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

export default function Map(): JSX.Element {
  const MapContainerWithNoSSR = dynamic(() => import('../components/Map'), {
    loading: () => <p>Loading Map</p>,
    ssr: false
  })

  return (
    <main>
      <Head>
        <title>Deliveries!</title>
        <meta name="keywords" content="maps, deliveries" />
        <link rel="shortcut icon" href="/package.svg" />
      </Head>

      <MapContainerWithNoSSR />
    </main>
  )
}
