import styled from 'styled-components'
// import { Form as UnformForm } from '@unform/web'

export const FormField = styled.form`
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
      color: #8fa7b3;
      margin-bottom: 8px;
      line-height: 24px;
      margin-top: 24px;
    }

    > input {
      width: 70%;
      background: #f5f8fa;
      border: 1px solid #d3e2e5;
      border-radius: 5px;
      outline: none;
      color: #5c8599;
      height: 44px;
      padding: 0 16px;
    }
  }

  > button {
    margin-top: 20px;
    padding: 0.5rem 1rem;
    color: white;
    background: var(--button);
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      background: var(--hover-button);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`
