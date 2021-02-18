import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .image-container {
    background: var(--hover-button);

    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-right: 2px solid black;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`
