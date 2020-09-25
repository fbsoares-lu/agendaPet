import styled from 'styled-components';

import {shade} from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    form {
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
        max-width: 600px;

        strong {
            color: #74B93E;
            font-size: 30px;
            margin-top: 30px;
            margin-bottom: 30px;
        }

        a {
            color: #9CAD8F;
            font-size: 16px;
            margin-top: 20px;
            text-decoration: none;
            transition: color 0.3s;

            &:hover {
                color: ${shade(0.2, '#9CAD8F')}
            }
        }

    }

    > a {
        margin-top: 30px;
        color: #77BA43;
        font-size: 16px;
        text-decoration: none;
        transition: color 0.3s;

            &:hover {
                color: ${shade(0.2, '#77BA43')}
            }
    }
`;