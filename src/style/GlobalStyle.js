import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap'); 

  * {
    box-sizing:border-box;
    margin: 0; 
    padding: 0;
    font-family: 'PT Sans', sans-serif;
  }
`;

export default GlobalStyle;
