import React from 'react';

import {FiUser, FiLock} from 'react-icons/fi';

import {Form} from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container} from './styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
    function handleSubmit (object: void) {
        console.log(object);
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <img src={logoImg} alt="logo"/>
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