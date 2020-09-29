import styled, {css} from 'styled-components';

interface ContainerProps {
    isFocus: boolean;
    isFill: boolean;
}

export const Container =  styled.div<ContainerProps>`
    
    background: #FFF;
    margin: 0 50px;
    border: 2px solid #FFF;
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

     ${props => props.isFocus && css`
        border: 2px solid #91DC57;
    `};

    ${props => props.isFill && css`
        svg {
            color: #91DC57;
        }
    `};
`;