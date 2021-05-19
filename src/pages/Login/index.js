import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { useEmployeeContext } from '../../contexts/useEmployeeContext';
import { validateFields } from '../../utils/dynamicStatesField';
import { useHistory } from 'react-router-dom';
import Pet from '../../assets/pet.png';
import { Container } from './style';

export default function Login() {

  const history = useHistory();

  const { user, getLogin } = useContext(useEmployeeContext);

  const [auth, setAuth] = useState({});

  function handleLogin(e) {
    e.preventDefault();
    getLogin(auth);
  }

  useEffect(() => {
    if(user.email) {
      history.push('/painel/findpet');
    }
  }, [user, history]);

  return (
    <Container>
      <Header />
      <div className="form">
        <div className="title-form">
          <img src={Pet} alt="" />
          <h1>Seja bem vindo(a)!</h1>
        </div>
        <div className="input-form">
          <input 
            className="input-email" 
            type="text" 
            placeholder="Email" 
            name="email"
            onChange={(e) => validateFields(e, auth, setAuth)}
          />
          <input 
            className="input-password" 
            type="password" 
            placeholder="Senha"
            name="password"
            onChange={(e) => validateFields(e, auth, setAuth)}
          />
        </div>
        <div className="btns-form">
          <button className="btn-log" onClick={(e) => handleLogin(e)}>Entrar</button>
        </div>
      </div>
      <Footer />
    </Container>
  )
}
