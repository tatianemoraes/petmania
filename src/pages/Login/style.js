import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .form {
    display: flex;
    flex-direction: column;
    height: 360px;
    width: 515px;
    margin-top: 80px;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


    .title-form {
      display: flex;  
      padding-left: 35px;

      img {
        height: 100px;
        width: 110px;
      }

      h1 {
        padding-left: 25px;
        padding-top: 30px;
        font-size: 30px;
      }

    }

    .input-form {
      display: flex;
      margin: 0 auto;
      justify-content: center;
      flex-direction: column;
      margin-top: 10px;

      label {
        margin-bottom: 5px;
      }

      input {
        width: 406px;
        height: 80px;
        background: #9C7FFD;
        box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
        border: none;
        outline: none;
        padding-left: 10px;
        font-size: 25px;
        color: #f7f7f7;

        ::placeholder {
          color: #f7f7f7;
        }
      }

      .input-email {
        margin-bottom: 10px;
      }
    }

    .btns-form {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      margin-top: 10px;

      .btn-log {
        height: 50px;
        width: 115px;
        border-radius: 5px;
        outline: none;
        border: none;
        background: #9C7FFD;
        color: #fff;
        font-size: 19px;
        cursor: pointer;
      }
    }  
  }
`;
