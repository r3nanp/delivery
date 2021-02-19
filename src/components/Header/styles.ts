import styled from 'styled-components'
import { BsBoxArrowInLeft } from 'react-icons/bs'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  background: #fafafa;

  position: sticky;
  z-index: 10;
  top: 0;
`
export const Nav = styled.nav`
  padding: 0 30px;

  > button {
    width: 48px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    background: var(--button);
    border-radius: 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: var(--hover-button);
    }
  }
`

export const BackIcon = styled(BsBoxArrowInLeft)`
  width: 24px;
  height: 24px;
  fill: white;
`
