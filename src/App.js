import Routes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './style/GlobalStyle';
import EmployeeContextProvider from './contexts/useEmployeeContext';

function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer
        autoClose={2000} 
      />
      <EmployeeContextProvider>
        <Routes />
      </EmployeeContextProvider>
    </>
  );
}

export default App;

