/* eslint-disable no-use-before-define */
import React from 'react'
import { Lottie } from '@crello/react-lottie'
import { Container } from './styles'

import animationData from '../../animations/data.json'

function Animation(): JSX.Element {
  return (
    <Container>
      <Lottie
        width="50%"
        height="50%"
        className="lottie-container basic"
        config={{
          animationData,
          loop: true,
          autoplay: true
        }}
      />
    </Container>
  )
}

export { Animation }
