// eslint-disable-next-line no-use-before-define
import React, { FormEvent, useCallback } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Form } from '../components/Form'
import { Wrapper } from '../components/Wrapper'

export default function Home(): JSX.Element {
  const router = useRouter()

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()

    router.push('/map')
  }, [])

  return (
    <Wrapper>
      <Head>
        <title>Delivery</title>
        <link rel="icon" href="/package.svg" />
      </Head>

      <div className="image-container">
        <Image
          src="/package.svg"
          alt="Delivery Logo"
          width={400}
          height={400}
        />
      </div>

      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Entre e comece a pedir agora!</legend>

          <label htmlFor="email">Digite seu email</label>
          <input type="text" name="email" />

          <label htmlFor="password">Digite sua senha</label>
          <input type="password" name="password" />
        </fieldset>

        <button>Comece a pedir</button>
      </Form>
    </Wrapper>
  )
}
