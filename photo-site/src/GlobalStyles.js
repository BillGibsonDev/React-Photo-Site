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
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}
`;

export default GlobalStyle;