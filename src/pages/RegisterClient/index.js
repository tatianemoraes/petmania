import React, { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header/index'; 
import Footer from '../../components/Footer/index';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderAuth from '../../utils/headerAuth';
import { useEmployeeContext } from '../../contexts/useEmployeeContext';

import Pet from '../../assets/pet.png';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiFillMinusSquare } from 'react-icons/ai';
import { Container } from './style';
import api from '../../services/api';


export default function RegisterClient() {

 const { user } = useContext(useEmployeeContext);

  const history = useHistory();
  
  useEffect(() => {
    if(!localStorage.getItem('logged')) {
      history.push('/');
    }
  }, [history]);

  const [client, setClient] = useState({});

  function validateFields(event) {
    setClient({...client, [event.target.name]:event.target.value});
  }

  async function handleAddUser(e) {

    e.preventDefault(); 

    const petInfo = [];

    petInfo.push({ 
      petName: client.petName,
      petType: client.petType,
      breed: client.breed
    });

    if(!petInfo.length > 0) {
      return toast('Favor colocar ao menos um pet');
    }

    const data = {
      fullname: client.fullname,
      address: client.address,
      email: client.email,
      petInfo,
    };

    try {
      const headers = HeaderAuth(user.token);
     
      await api.post('/clients', data, { headers } );  

      toast('Cliente cadastrado(a) com sucesso');
      setClient({ fullname: '', address: '', email: '', petName: '', petType: '', petBreed: '' });

    } catch (error) {
      toast.error(error.response.data.error.message);
    }

  }

  return (
    <Container>
      <Header />
      <div className="form">
        <div className="title-form">
          <img src={Pet} alt="" />
          <h1>Registrar Cliente!</h1>
        </div>
        <div className="input-form">
          <input 
            className="input-client input-space" 
            type="text" 
            placeholder="Cliente" 
            name="fullname"
            onChange={(e) => validateFields(e)  || ''}
            value={client.fullname || ''}
          />
          <input 
            className="input-address input-space" 
            type="text" 
            placeholder="Endereço" 
            name="address"
            onChange={(e) => validateFields(e)  || ''}
            value={client.address || ''}  
          />
          <input 
            className="input-email input-space" 
            type="email" 
            placeholder="Email" 
            name="email"
            onChange={(e) => validateFields(e)  || ''}
            value={client.email || ''}
          />
          <div className="add-pet">
            <button className="btn-add">
              <AiOutlinePlusSquare size="15" />
            </button>
            <h2>Adicionar Pet</h2>
          </div>
          <div className="list-pet">
            <div className="item-pet">
              <div className="content-pet-name">
                <button className="delete-pet">
                  <AiFillMinusSquare />
                </button>
                <input 
                  className="input-pet-name input-space" 
                  type="text" 
                  placeholder="Nome do Pet" 
                  name="petName"
                  onChange={(e) => validateFields(e)  || ''}
                  value={client.petName || ''}  
                />
              </div>
              <div className="content-pet-continues">
                <input 
                  className="input-pet-type input-space" 
                  type="text" 
                  placeholder="Tipo do Pet" 
                  name="petType"
                  onChange={(e) => validateFields(e)  || ''}
                  value={client.petType || ''}  
                />
                <input 
                  className="input-pet-breed input-space" 
                  type="text" 
                  placeholder="Raça do Pet" 
                  name="breed"
                  onChange={(e) => validateFields(e)  || ''}
                  value={client.breed || ''}  
                />
              </div>
            </div>
            <div className="item-pet">
              <div className="content-pet-name">
                <button className="delete-pet">
                  <AiFillMinusSquare />
                </button>
                <input 
                  className="input-pet-name input-space" 
                  type="text" 
                  placeholder="Nome do Pet" 
                  name="petName"
                  onChange={(e) => validateFields(e)  || ''}
                  value={client.petName || ''}  
                />
              </div>
              <div className="content-pet-continues">
                <input 
                  className="input-pet-type input-space" 
                  type="text" 
                  placeholder="Tipo do Pet" 
                  name="petType"
                  onChange={(e) => validateFields(e)  || ''}
                  value={client.petType || ''}  
                />
                <input 
                  className="input-pet-breed input-space" 
                  type="text" 
                  placeholder="Raça do Pet" 
                  name="breed"
                  onChange={(e) => validateFields(e)  || ''}
                  value={client.breed || ''}  
                />
              </div>
            </div>
            <div className="item-pet">
              <div className="content-pet-name">
                <button className="delete-pet">
                  <AiFillMinusSquare size="15" />
                </button>
                <input 
                  className="input-pet-name input-space" 
                  type="text" 
                  placeholder="Nome do Pet" 
                  name="petName"
                  onChange={(e) => validateFields(e)  || ''}
                  value={client.petName || ''}  
                />
              </div>
              <div className="content-pet-continues">
                <input 
                  className="input-pet-type input-space" 
                  type="text" 
                  placeholder="Tipo do Pet" 
                  name="petType"
                  onChange={(e) => validateFields(e)  || ''}
                  value={client.petType || ''}  
                />
                <input 
                  className="input-pet-breed input-space" 
                  type="text" 
                  placeholder="Raça do Pet" 
                  name="breed"
                  onChange={(e) => validateFields(e)  || ''}
                  value={client.breed || ''}  
                />
              </div>
            </div>
          </div>
        </div>
        <div className="btns-form">
          <button className="btn-cancel">Cancelar</button>
          <button 
            className="btn-register"
            onClick={(e) => handleAddUser(e)}
          >
            Registrar
          </button>
        </div>
      </div>
      <Footer />
    </Container>
  )
}
