import React, { useEffect } from 'react';
import Header from '../../components/Header/index'; 
import Footer from '../../components/Footer/index';
import { useHistory } from 'react-router-dom';
import Pet from '../../assets/pet.png';
import { Container } from './style';

export default function RegisterClient() {

  const history = useHistory();
  
  useEffect(() => {
    if(!localStorage.getItem('logged')){
      history.push('/');
    }
  }, [history]);

  return (
    <Container>
      <Header />
      <div className="form">
        <div className="title-form">
          <img src={Pet} alt="" />
          <h1>Registrar Cliente!</h1>
        </div>
        <div className="input-form">
          <input className="input-client input-space" type="text" placeholder="Cliente" />
          <input className="input-address input-space" type="text" placeholder="Endereço" />
          <input className="input-email input-space" type="email" placeholder="Email" />
          <input className="input-pet-name input-space" type="text" placeholder="Nome do Pet" />
          <input className="input-pet-type input-space" type="text" placeholder="Tipo do Pet" />
          <input className="input-pet-breed input-space" type="text" placeholder="Raça do Pet" />
        </div>
        <div className="btns-form">
          <button className="btn-cancel">Cancelar</button>
          <button className="btn-register">Registrar</button>
        </div>
      </div>
      <Footer />
    </Container>
  )
}
