/* eslint-disable no-use-before-define */
import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { Container, BackIcon, Nav } from './styles'

function Header(): JSX.Element {
  const { back } = useRouter()

  const handleLogout = useCallback(() => {
    back()
  }, [])

  return (
    <Container>
      <Nav>
        <button onClick={handleLogout}>
          <BackIcon />
        </button>
      </Nav>
    </Container>
  )
}

export { Header }
