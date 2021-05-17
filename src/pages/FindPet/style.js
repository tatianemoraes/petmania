import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .form-search {
    display: flex;
    flex-direction: column;
    height: 550px;
    width: 680px;
    margin-top: 80px;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .search {
      display: flex;
      justify-content: space-around;

      img {
        height: 100px;
        width: 110px;
        margin-top: 15px;
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

        ::placeholder {
          color: #f7f7f7;
        }
      }
    }

    .results {
      display: flex;
      flex-direction: column;
      justify-content: space-around;  
      margin-left: 40px;
      margin-top: 30px;

      select {
        width: 300px;
        height: 40px;
        margin-top: 20px;
        background: #9C7FFD;
        color: #f7f7f7;
        font-size: 16px;
        border: 1px solid #9C7FFD;
      }
    }
  }
`;
