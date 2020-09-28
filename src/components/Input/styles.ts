import styled from 'styled-components';

export const Container =  styled.div`
    
    background: #FFF;
    margin: 0 50px;
    border: 0;
    width: 100%;
    height: 56px;
    border-radius: 7px;
    padding: 16px;
    display: flex;
    align-items: center;

    input {
        border: 0;
        flex: 1;
        background: transparent;
        
        &::placeholder {
            color: #ABB1A6;
        }

        
    }  

    svg {
        color: #ABB1A6;
        margin-right: 16px;
    }

    & + div {
        margin-top: 9px;
    }
`;