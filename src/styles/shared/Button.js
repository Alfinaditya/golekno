import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: var(--cta-text-color);
  padding: 20px 55px;
  display: inline-block;
  border-radius: 8px;
  background: #647aff;
  transition: 1s;
  border: 0px;
  &:hover {
    background: var(--main-color);
  }
`
