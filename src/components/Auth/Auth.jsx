import React, {useState,useEffect,createContext} from 'react';

import { auth } from '../../api/firebase-config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      console.log(auth);
      auth.onAuthStateChanged(setCurrentUser);
    }, [])
    
  return (
    <>
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
      {console.log(currentUser?.email)}
      {console.log(currentUser?.displayName)}
    </>
  );
}