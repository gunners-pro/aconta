import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Header, MainSection } from './styles';

import bg from '../../assets/background.png';
import logo from '../../assets/logo.png';
import cardChart from '../../assets/card-charts.png';

function Home() {
  return (
    <Container>
      <img src={bg} alt="plano de fundo" />
      <Content>
        <Header>
          <div>
            <img src={logo} alt="plano de fundo" />
            <h4>conta</h4>
          </div>
          <Link to="/auth">
            <span />
            <span />
            Começar
          </Link>
        </Header>
        <MainSection>
          <section>
            <h1>
              Acompanhe suas
              <br />
              despesas.
            </h1>
            <p>
              Uma solução completa para acompanhar todas as suas despesas e
              administrar suas finanças pessoais.
            </p>
          </section>
          <section>
            <img src={cardChart} alt="Icone de gráfico" />
          </section>
        </MainSection>
      </Content>
    </Container>
  );
}

export default Home;
