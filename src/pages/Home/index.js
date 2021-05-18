import React from 'react'; 
import { useHistory } from 'react-router-dom';
import Pet from '../../assets/pet.png';
import { Container } from './style';

export default function Home() {

  const history = useHistory();

  return (
    <Container>
      <div className='homePage'>
        <div className='welcomePage'>
          <div className='sentences'>
            <h1>Petmania</h1>
            <h2>Sua plataforma  online de acompanhamento de Petshop.</h2>
          </div>
          <div className='logo'>
            <img src={ Pet } alt="" />
          </div>
        </div>
        <div className='buttons'>
          <button 
            className='btn-clients'
            onClick={() => window.location='/client'}
          >
            Clientes
          </button>
          <button 
            className='btn-employees'
            onClick={() => history.push('/painel/login')}
          >
            Funcionários
          </button>
        </div>
      </div>
    </Container>
  )
}
