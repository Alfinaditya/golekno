import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  padding: 20px 55px;
  display: inline-block;
  border-radius: 8px;
  transition: 1s;
  border: 0px;
  background: var(--main-color);
  color: var(--cta-text-color);
  &:hover {
    background: #647aff;
  }
`
