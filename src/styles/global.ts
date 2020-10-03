import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    };

    body {
        background: ##E5D0F6;
        color: #8B4513;
    };

    body, input, button {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        color: #757575;
    };

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }
`;
