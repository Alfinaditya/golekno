import { createGlobalStyle } from 'styled-components'
import '../fonts/font.css'

const GlobalStyle = createGlobalStyle`
:root{
  --main-color:#324ADE;
  --black-color:#3D3D3D;
  --text-color:#313131;
  --cta-button-color:#313131;
  --cta-text-color:#FFFFFF;
  --jumbotron-color:#FCFCFC;
  --icon-size:44px;
}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: 'Poppins', sans-serif;
  }
`
export default GlobalStyle
