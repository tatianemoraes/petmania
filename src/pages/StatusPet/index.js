import React from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { Container } from './style';
import Pet from '../../assets/pet.png';
import { BsClockFill } from 'react-icons/bs';
import { BsCheckAll } from 'react-icons/bs';
import { IoMdCut } from 'react-icons/io';
import { FaShower } from 'react-icons/fa';
import { GiBarbedNails } from 'react-icons/gi';

export default function StatusPet() {
  return (
    <Container>
      <Header />
      <div className="status-pet">
        <div className="search-pet-status">
          <img src={Pet} alt="" />
          <input type="text" placeholder='Pesquisar Pet' />
        </div>
        <div className="response-pet-status">
          <h1>Status do Pet: Bolinha</h1>
          <div className="services">
            <div className="status">
              <BsClockFill size="30" />
              <h2>Aguardando</h2>
            </div>
            <div className="status">
              <IoMdCut size="30" />
              <h2>Cortando os pelos</h2>
            </div>
            <div className="status">
              <GiBarbedNails size="30" />
              <h2>Cortando as unhas</h2>
            </div>
            <div className="status">
              <FaShower size="30" />
              <h2>No banho</h2>
            </div>
            <div className="status">
              <BsCheckAll size="30" />
              <h2>Cheirosinho</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />     
    </Container>
  )
}
