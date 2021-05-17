import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

export const useEmployeeContext = createContext(); 

const EmployeeContextProvider = ({ children }) => {

  const [login, setLogin] = useState({});
  const [user, setUser] = useState({}); 

  const getLogin = async () => {
    try {
      const { data } = await api.post('/session', login);
      setUser(data);
    } catch (error) {
      toast.error(error.response.data.error.message);
    }
  } 

  if(!user.length > 0 && login.length > 0) {
    getLogin();
  }

  return (
    <useEmployeeContext.Provider value={{ setLogin, user }}>
      { children }
    </useEmployeeContext.Provider>
  )

}

export default EmployeeContextProvider;

