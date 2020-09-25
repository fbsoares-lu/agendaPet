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
        border: 1px solid red;
        flex: 1;
        background: transparent;
        
        &::placeholder {
            color: #ABB1A6;
        }

        & + input {
            margin-bottom: -100px;
        }
    }  

    svg {
        color: #ABB1A6;
        margin-right: 16px;
    }
`;