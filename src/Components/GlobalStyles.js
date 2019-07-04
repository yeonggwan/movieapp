import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700|Roboto:300,400,500,700&display=swap');
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:'Roboto','Nanum Gothic',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        background-color:rgba(20, 20, 20, 1);
        color: white;
        padding-top: 50px;
        min-width: 360px;
    }
`;

export default GlobalStyles;
