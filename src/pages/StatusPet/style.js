import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .status-pet {
    .search-pet-status {
      margin-top: 45px;
      margin-bottom: 30px;

      img {
        height: 100px;
        width: 110px;
        margin-bottom: -37px;
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
        margin-top: 15px;
        margin-left: 8px;

        ::placeholder {
          color: #f7f7f7;
        }
      }
    }

    .response-pet-status {
      h1 {
        font-size: 20px;
        margin-top: 120px;
        margin-bottom: 10px;
        justify-content: center;
        display: flex;
      }
      .services {
        display: flex;
        margin-top: 110px;

        .status {
          margin-left: 15px;
          align-items: center;
          justify-content: center;
          display: flex;
          flex-direction: column;
          
          h2 {
            font-size: 16px;
            margin-top: 15px;
          }
        }
      }
    }
    
  }
`;
