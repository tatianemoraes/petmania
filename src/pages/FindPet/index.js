/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header/index'; 
import Footer from '../../components/Footer/index';
import { useHistory } from 'react-router-dom';
import headerAuth from '../../utils/headerAuth';
import { useEmployeeContext } from '../../contexts/useEmployeeContext';
import { toast } from 'react-toastify';
import api from '../../services/api';
import Pet from '../../assets/pet.png';

import { Container } from './style';

export default function FindPet() {

  const history = useHistory();

  const { user } = useContext(useEmployeeContext);
  
  useEffect(() => {
    if(!localStorage.getItem('logged')){
      history.push('/');
    }
  }, [history]);

  const [ pet, setPet ] = useState({ petName: '' });
  const [ petSearch, setPetSearch ] = useState([]);

  function handleChange(e) {
    setPet({ ...pet, petName: e.target.value })
  };

  async function findPet(pet) {
    try {
      const headers = headerAuth(user.token);
      const { data } = await api.get('/pets', pet, { headers });
      setPetSearch(data.pets);
    } catch (error) {
      toast(error.response.data.error); 
    }
  };

  useEffect(() => {
    if(pet.petName.length > 2) {
      findPet(pet);
    }
  }, [pet])

  return (
    <Container>
      <Header />
      <div className="form-search">
        <div className="search">
          <img src={ Pet } alt="" />
          <input 
            type="text" 
            placeholder="Pesquisar Pet"
            value={ pet.petName || '' }
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="results">
          { petSearch.length > 0 ? (
            <>
              <h2>{ petSearch[0].petName }</h2>
              <select name="process" id="">
                <option value="1">Aguardando</option>
                <option value="2">Banho</option>
                <option value="3">Aparando o pêlo</option>
                <option value="4">Cortando unhas</option>
                <option value="5">Pronto e feliz</option>
              </select>
            </>
          ) : '' }
        </div>
      </div>
      
      <Footer />
    </Container>
  )
}
