import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    width: 70%;
    margin: auto;
    background: #202020;
    scroll-behavior: smooth;
    font-family: Poppins, sans-serif;
    @media (max-width: 1450px){
        font-size: 70%;
        width: 90%;
    }  
    @media (max-width: 750px){
       font-size: 50%;
  }
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}
`;

export default GlobalStyle;