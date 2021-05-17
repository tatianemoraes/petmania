import React from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Pet from '../../assets/pet.png';
import { Container } from './style';

export default function Login() {
  return (
    <Container>
      <Header />
      <div className="form">
        <div className="title-form">
          <img src={Pet} alt="" />
          <h1>Seja bem vindo(a)!</h1>
        </div>
        <div className="input-form">
          <input className="input-email" type="text" placeholder="Email" />
          <input className="input-password" type="password" placeholder="Senha" />
        </div>
        <div className="btns-form">
          <button className="btn-log">Entrar</button>
          <button className="btn-register">Registrar</button>
        </div>
      </div>
      <Footer />
    </Container>
  )
}
