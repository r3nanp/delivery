import styled from 'styled-components'
import { Form as UnformForm } from '@unform/web'

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

export const Form = styled(UnformForm)`
  width: 50%;
  height: 100%;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0;

    > legend {
      width: 100%;
      text-align: center;

      font-size: 32px;
      line-height: 34px;
      color: #5c8599;
      font-weight: 700;

      border-bottom: 1px solid #d3e2e5;
      margin-bottom: 20px;
      padding-bottom: 20px;
    }

    > label {
      display: flex;
      color: var(--button);
      letter-spacing: 0.025em;
      margin-bottom: 8px;
      line-height: 24px;
      margin-top: 24px;
    }
  }

  > button {
    margin-top: 20px;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    background: var(--button);
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      background: var(--hover-button);
    }

    &:focus {
      border: 1px solid black;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`
