// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormHandles, SubmitHandler } from '@unform/core'
import * as yup from 'yup'

import { Form, Wrapper } from '../components/Wrapper'
import { Input } from '../components/Input'

interface HomeProps {
  email: string
  password: string
}

export default function Home(): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const formRef = useRef<FormHandles>(null)

  const router = useRouter()

  const handleSubmit: SubmitHandler<HomeProps> = useCallback(
    async (data, { reset }, event) => {
      try {
        formRef.current.setErrors({})

        const schema = yup.object().shape({
          username: yup.string().min(5).max(60).required(),
          password: yup.string().min(6).required()
        })

        await schema.validate(data, {
          abortEarly: false
        })

        router.push('/map')
        event.preventDefault()
        reset()
      } catch (error) {
        const validationErrors = {}
        if (error instanceof yup.ValidationError) {
          error.inner.forEach(error => {
            validationErrors[error.path] = error.message
          })
          formRef.current.setErrors(validationErrors)
        }
      }
    },
    []
  )

  return (
    <Wrapper>
      <Head>
        <title>Delivery</title>
        <link rel="icon" href="/package.svg" />

        <meta name="keywords" content="r3nanp, deliveries, packages" />
        <meta property="og:site_name" content="Delivery" />
        <meta property="og:title" content="Delivery" />
        <meta
          property="og:description"
          content="A delivery app to your favorite products"
        />

        <meta property="og:image" content="/package.svg" />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Delivery" />
        <meta
          name="twitter:description"
          content="A delivery app to your favorite products"
        />
        <meta name="twitter:image" content="/package.svg" />
      </Head>

      <div className="image-container">
        <Image
          src="/package.svg"
          alt="Delivery Logo"
          width={400}
          height={400}
        />
      </div>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <fieldset>
          <legend>Entre e comece a pedir agora!</legend>

          <label htmlFor="username">Digite seu nome de usuário</label>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />

          <label htmlFor="password">Digite sua senha</label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </fieldset>

        <button>Comece a pedir</button>
      </Form>
    </Wrapper>
  )
}
