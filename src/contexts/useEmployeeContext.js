import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

export const useEmployeeContext = createContext(); 

const EmployeeContextProvider = ({ children }) => {

  const [user, setUser] = useState({}); 

  const [sync, setSync] = useState(false);

  const logged = localStorage.getItem('logged');

  const getLogin = async (auth) => {
    try {
      localStorage.clear();
      const { data } = await api.post('/session', auth);

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

  if(logged && !sync) {
    setUser(JSON.parse(logged));
    setSync(true);
    return;
  }

  return (
    <useEmployeeContext.Provider value={{ user, getLogin }}>
      { children }
    </useEmployeeContext.Provider>
  )

}

export default EmployeeContextProvider;

