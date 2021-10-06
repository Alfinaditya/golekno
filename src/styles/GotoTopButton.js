import styled from 'styled-components'

export const ScrolltoTopButton = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  outline: none;
  border: 0;
  background: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 50px;
  margin-bottom: 80px;
  /* position: fixed;
  right: 5vw;
  bottom: 50px; */
  cursor: pointer;
  transition: 1s;
  &:hover {
    background: #647aff;
  }
`
export const TriangleIcon = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 9.44px 15.84px 9.44px;
  border-color: transparent transparent white transparent;
`
