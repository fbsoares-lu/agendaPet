import React,{InputHTMLAttributes, useEffect, useRef, useState, useCallback} from 'react';

import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest})=> {
    const inputRef = useRef<HTMLInputElement>(null);

    const { registerField, fieldName, error } = useField(name);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const setInputBlur = useCallback(() => {
        setIsFocused(false);

        if (inputRef.current?.value) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }

    }, []);

    const setInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [registerField, fieldName]);

    return (
        <Container isFill={isFilled} isFocus={isFocused}>
            {Icon && <Icon size={20}/>}
            <input 
                onFocus={setInputFocus}
                onBlur={setInputBlur}
                ref={inputRef} 
                {...rest} 
            />
            {error}
        </Container>
    );
};

export default Input;