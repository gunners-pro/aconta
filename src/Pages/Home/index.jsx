import React from 'react';

import { Container, Content, Header } from './styles';

import bg from '../../assets/background.png';
import logoInvoice from '../../assets/invoice-logo.png';

function Home() {
  return (
    <Container>
      <img src={bg} alt="plano de fundo" />
      <Content>
        <Header>
          <div>
            <img src={logoInvoice} alt="plano de fundo" />
            <h4>Expense</h4>
          </div>
          <button type="button">Login</button>
        </Header>
      </Content>
    </Container>
  );
}

export default Home;
