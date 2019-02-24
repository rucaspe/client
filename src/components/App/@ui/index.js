import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 15px;
    }
    body, html {
        margin: 0;
        padding: 0;
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'Roboto Rouble', sans-serif;
        background: ${(props) => props.theme.mainColor};
        color: black;
        transition: background .2s ease;
        width: 100%;
        height: 100%;
        overscroll-behavior-y: none;
        ${(props) => (props.theme.open ? "overflow: hidden" : "")};
    }
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
    }
    a {
        outline: none;
        color: white; 
        text-decoration-color: hsla(0, 0%, 100%, 0.5)
    }
    h1, h2, h3 {
        margin-top: 0;
    }
`;
