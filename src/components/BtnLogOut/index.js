import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Container } from './style';

export default function BtnLogOut() {

  function handleClick() {
    window.localStorage.clear();
    window.location.href="/";
  }

  return (
    <Container>
      <button className="icon-logout" onClick={() => handleClick()}>
        <FiLogOut size="25"/>
      </button>
    </Container>
  )
}
