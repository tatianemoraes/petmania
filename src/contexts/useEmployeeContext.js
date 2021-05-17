import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

export const useEmployeeContext = createContext(); 

const EmployeeContextProvider = ({ children }) => {

  const [login, setLogin] = useState({});

  const [user, setUser] = useState({}); 

  const [sync, setSync] = useState(false);

  const logged = localStorage.getItem('logged');
   
  if(!logged && login) {
    const getLogin = async () => {

      try {
        localStorage.clear();
        const { data } = await api.post('/session', login);

        const paramsUser = {
          token: data.token,
          id: data.user.id,
          name: data.user.name,
          email: data.user.email
        };
        
        setUser(paramsUser);
        setSync(true);
        toast.success('Usuário autenticado');

        localStorage.setItem('logged', JSON.stringify(paramsUser));

      } catch (error) {
        toast.error(error.response.data.error);
      }
    } 
  
    if(login.email) {
      getLogin();
    }
  }

  if(logged && !sync) {
    setUser(JSON.parse(logged))
    setSync(true);
    return;
  }


  return (
    <useEmployeeContext.Provider value={{ setLogin, user }}>
      { children }
    </useEmployeeContext.Provider>
  )

}

export default EmployeeContextProvider;

