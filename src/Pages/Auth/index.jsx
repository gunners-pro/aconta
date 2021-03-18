import React, { useState } from 'react';
import Loading from 'react-loading';
import { toast, ToastContainer } from 'react-toastify';

import api from '../../services/api';

import { Back, Container, FormContainer, OverlayContainer } from './styles';

function Auth() {
  const [showLoading, setShowLoading] = useState(false);
  const [disableBtnOverlay, setDisableBtnOverlay] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleCreateAccount(event) {
    event.preventDefault();
    setShowLoading(true);
    setDisableBtnOverlay(true);

    const data = {
      name,
      email,
      password,
    };

    await api
      .post('/users', data)
      .then(() => {
        setShowLoading(false);
        setDisableBtnOverlay(false);
        setName('');
        setEmail('');
        setPassword('');
        toast.success('Conta criada, faça login agora!');
      })
      .catch(err => {
        if (err.response.status === 409) {
          toast.error('Email já existe!');
        } else {
          toast.error('Ocorreu um erro, tente novamente!');
        }
        setShowLoading(false);
        setDisableBtnOverlay(false);
      });
  }

  return (
    <Back>
      <ToastContainer />
      <Container id="container">
        <FormContainer className="sign-up-container">
          <form onSubmit={handleCreateAccount}>
            <h1>Criar uma conta</h1>
            <input
              required
              type="text"
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              minLength={6}
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="submit" disabled={showLoading}>
              {showLoading ? (
                <Loading type="spinningBubbles" width={20} height={20} />
              ) : (
                `Criar`
              )}
            </button>
          </form>
        </FormContainer>
        <FormContainer className="sign-in-container">
          <form>
            <h1>Login</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <a href="t">Esqueceu a sua senha?</a>
            <button type="button">Entrar</button>
          </form>
        </FormContainer>
        <OverlayContainer className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bem vindo de volta !</h1>
              <p>
                Mantenha se conectado, faça login com seus dados cadastrados.
              </p>
              <button
                disabled={disableBtnOverlay}
                onClick={() => {
                  const container = document.getElementById('container');
                  container.classList.remove('right-panel-active');
                }}
                type="button"
                className="ghost"
                id="signIn"
              >
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Olá, amigo!</h1>
              <p>
                Crie sua conta e tenha mais controle sobre a sua vida
                financeira.
              </p>
              <button
                onClick={() => {
                  const container = document.getElementById('container');
                  container.classList.add('right-panel-active');
                }}
                type="button"
                className="ghost"
                id="signUp"
              >
                Nova conta
              </button>
            </div>
          </div>
        </OverlayContainer>
      </Container>
    </Back>
  );
}

export default Auth;
