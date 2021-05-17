import React, { useState } from 'react'; 
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Pet from '../../assets/pet.png';
import { Container } from './style';
import { toast } from 'react-toastify';
import api from '../../services/api';

export default function RegisterEmployee() {

  const [employee, setEmployee] = useState({});

  function validateFields(event) {
    setEmployee({...employee, [event.target.name]:event.target.value});
  }

  async function handleAddUser(e) {

    e.preventDefault()

    const data = {
      name: employee.name, 
      surname: employee.surname, 
      functionality: employee.functionality,
      email: employee.email, 
      password: employee.password, 
      confirmPassword: employee.confirmPassword,
    }

    try {
      await api.post('/users', data)
      toast('Funcionário cadastrado com sucesso');
      setEmployee({ name: '', surname: '', functionality: '', email: '', password: '', confirmPassword: '' });
    } catch (error) {
      toast.error(error.response.data.error.message);
    }
    
  }

  function cancelRegister() {
    setEmployee({ name: '', surname: '', functionality: '', email: '', password: '', confirmPassword: '' });
  }

  return (
    <Container>
      <Header />
      <div className="form">
        <div className="title-form">
          <img src={Pet} alt="" />
          <h1>Registrar Funcionário</h1>
        </div>
        <div className="input-form">
          <input 
            className="input-name input-space" 
            type="text" 
            placeholder="Nome" 
            name="name"
            onChange={(e) => validateFields(e)  || ''}
            value={employee.name || ''}
          />
          <input 
            className="input-surname input-space" 
            type="text" 
            placeholder="Sobrenome" 
            name="surname"
            onChange={(e) => validateFields(e)  || ''}
            value={employee.surname || ''}
          />
          <select 
            name="functionality" 
            id="functionality"
            onChange={(e) => validateFields(e)  || ''}  
            value={employee.functionality || ''}
          >
            <option value="">Selecione a função</option>
            <option value="washing-assistant">Assistente de Lavagem</option>
            <option value="nails-assistant">Assistente Corte de Unhas</option>
            <option value="manager">Gerente</option>
            <option value="cashier">Operador(a) de caixa</option>
            <option value="fur-assistant">Tosador(a)</option>
          </select>
          <input 
            className="input-email input-space" 
            type="email" 
            placeholder="Email" 
            name="email"
            onChange={(e) => validateFields(e)  || ''}
            value={employee.email || ''}
          />
          <input 
            className="input-password input-space" 
            type="password" 
            placeholder="Senha" 
            name="password"
            onChange={(e) => validateFields(e)  || ''}
            value={employee.password || ''}  
          />
          <input 
            className="input-confirm-password input-space" 
            type="password" 
            placeholder="Confirmar Senha" 
            name="confirmPassword"
            onChange={(e) => validateFields(e)  || ''}
            value={employee.confirmPassword || ''}
          />
        </div>
        <div className="btns-form">
          <button className="btn-cancel" onClick={() => cancelRegister()}>Cancelar</button>
          <button className="btn-register" onClick={(e) => handleAddUser(e)}>Registrar</button>
        </div>
      </div>
      <Footer />
    </Container>
  )
}
