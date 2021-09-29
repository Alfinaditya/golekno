import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
:root{
  --main-color:#324ADE;
  --black-color:#3D3D3D;
  --text-color:#313131;
  --cta-button-color:#313131;
  --cta-text-color:#FFFFFF;
  --jumbotron-color:#FCFCFC;
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
