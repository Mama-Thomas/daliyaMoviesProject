import React, {useContext} from 'react';
import { Navigate} from 'react-router-dom';

import { AuthContext } from './components/Auth/Auth';

const PrivateRoute = ({children}) => {
  const { currentUser } = useContext(AuthContext);
  
  return <>{currentUser ? <Navigate to="/myaccount" /> : children}</>}

export default PrivateRoute;