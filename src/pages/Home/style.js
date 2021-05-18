import styled from 'styled-components';

export const Container = styled.div`
  
  background: #7159C1; 
  width: 100vw; 
  height: 100vh;

  display: flex; 
  align-items: center;
  flex-direction: column;

  .homePage {


    .welcomePage {
      display: flex; 
      margin-top: 100px;
      margin-right: 30px;
      margin-left: 30px;

      .sentences {
        width: 50vw;
        margin-top: 115px;

        h1 {
          color: #fff; 
          font-size: 40px;
        }

        h2 {
          margin-top: 30px;
          color: #D4C2FF;
          font-size: 30px;
          width: 320px;
        }
      }

      .logo {
        margin-top: 20px;

        img {
          width: 400px;
        }
      }
    }

    .buttons {

      .btn-clients {
        width: 150px;
        height: 50px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        background: #9C7FFD;
        color: #fff;
        font-weight: bolder;
        border: none;
      }

      .btn-employees {
        width: 150px;
        height: 50px;
        margin-left: 10px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        background: #fff;
        color: #9C7FFD;
        font-weight: bolder;
        border: none; 
      }
    }
  }

`;
