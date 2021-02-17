import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    font: 600 18px Roboto, sans-serif;
  }

  input,
  button,
  textarea {
    font: 700 18px Nunito, sans-serif;
  }

  :root {
    ${props => {
      const theme = props.theme
      let append = ''
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`
      })
      return append
    }}
  }
`
