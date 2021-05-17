import Routes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer
        autoClose={2000} 
      />
      <Routes />
    </>
  );
}

export default App;

