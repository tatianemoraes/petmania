import React, { useEffect } from 'react';
import Header from '../../components/Header/index'; 
import Footer from '../../components/Footer/index';
import { useHistory } from 'react-router-dom';
import Pet from '../../assets/pet.png';

import { Container } from './style';

export default function FindPet() {

  const history = useHistory();
  
  useEffect(() => {
    if(!localStorage.getItem('logged')){
      history.push('/');
    }
  }, [history]);

  return (
    <Container>
      <Header />
      <div className="form-search">
        <div className="search">
          <img src={ Pet } alt="" />
          <input type="text" placeholder="Pesquisar Pet"/>
        </div>
        <div className="results">
          <h2>Bolinha</h2>
          <select name="process" id="">
            <option value="1">Aguardando</option>
            <option value="2">Banho</option>
            <option value="3">Aparando o pêlo</option>
            <option value="4">Cortando unhas</option>
            <option value="5">Pronto e feliz</option>
          </select>
        </div>
      </div>
      
      <Footer />
    </Container>
  )
}
