import styled from 'styled-components';

import { shade } from 'polished';

export const Container =  styled.button`
    background: #91DC57;
    color: #FFF;
    margin-top: 20px;
    padding: 0 30px;
    border: 0;
    width: 100%;
    height: 56px;
    border-radius: 7px;
    transition: background-color 0.3s;

    &:hover {
        background: ${shade(0.2, '#91DC57')}
    }
`;