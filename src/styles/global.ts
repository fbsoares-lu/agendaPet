import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    };

    body {
        background: #E1F6D0;
        color: #74B93E;
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