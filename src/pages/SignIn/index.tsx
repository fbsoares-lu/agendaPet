import React, { useCallback, useRef } from 'react';

import { FiUser, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup'; 

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container} from './styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async(data:object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('E-mail inválido'),
                senha: Yup.string().min(6, 'Mínimo de 6 caracteres'),
            });

            await schema.validate(data, {
                abortEarly: false, 
                // Vamos querer todos os erros, não somente o primeiro disparado
            });

        } catch (err) {
            formRef.current?.setErrors(getValidationErrors(err));
        }
    }, []);

    return(
        <Container>
            <img src={logoImg} alt="logo"/>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <strong>Faça seu login</strong>
                <Input icon={FiUser} name="email"  placeholder="E-mail"/>
                <Input icon={FiLock} name="senha" type="password" placeholder="Senha"/>
                <Button>Entrar</Button>
                <a href="/">Esqueci minha senha</a>
            </Form>
            <a href="/">Cadastrar</a>
        </Container>
    );
};

export default SignIn;