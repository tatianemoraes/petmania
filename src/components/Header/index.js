import React from 'react';
import Pet from '../../assets/pet.png'
import { Container } from './style';


export default function Header() {
  return (
    <Container>
      <img className="img-logo" src={Pet} alt="" />
      <h1 className="title-header">PETMANIA</h1>
    </Container>
  )
}
