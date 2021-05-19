/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import api from '../../services/api';
import { useEmployeeContext } from '../../contexts/useEmployeeContext';
import headerAuth from '../../utils/headerAuth';
import { toast } from 'react-toastify';
import { Container } from './style';
import Pet from '../../assets/pet.png';
import { BsClockFill } from 'react-icons/bs';
import { BsCheckAll } from 'react-icons/bs';
import { IoMdCut } from 'react-icons/io';
import { FaShower } from 'react-icons/fa';
import { GiBarbedNails } from 'react-icons/gi';

export default function StatusPet() {

// o que acha de quando for pro client essa tela aparecer o nome do pet a raça e o tipo do pet?
  const { user } = useContext(useEmployeeContext);

  const [petStatus, setPetStatus] = useState({ petName: '' });
  const [petSearch, setPetSearch] = useState([]);

  function handleChange(e) {
    setPetStatus({ ...petStatus, petName: e.target.value })
  };

  async function findPetStatus(pet) {
    try {
      const headers = headerAuth(user.token);


      const { data } = await api.get('/pets', pet, { headers });
      setPetSearch(data.pets);

    } catch (error) {
      toast(error.response.data.error); 
    }
  };

  useEffect(() => {
    if(petStatus.petName.length > 2) {
      findPetStatus(petStatus);
    }
  }, [petStatus])

  return (
    <Container>
      <Header />
      <div className="status-pet">
        <div className="search-pet-status">
          <img src={ Pet } alt="" />
          <input 
            type="text" 
            placeholder='Pesquisar Pet' 
            value={ petStatus.petName || '' }
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="response-pet-status">
          { petSearch.length > 0 ? (
            <>
              <h1>{`Status do pet: ${petSearch[0].petName}`}</h1>
              <div className="moreInfo">
                <ul> 
                  <li>
                    <span>Tipo do pet:</span> {petSearch[0].petType}
                  </li>
                  <li>
                    <span>Raça do pet:</span>{petSearch[0].breed}
                  </li>
                </ul>
              </div>
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
            </>
          ) : '' }         
        </div>
      </div>
      <Footer />     
    </Container>
  )
}
