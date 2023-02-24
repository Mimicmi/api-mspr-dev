import React, { createContext, useState } from 'react';
import Api from '../Api';

export const UserContext = createContext({
  jwt: null,
  role: null,
  email: null,
  userId: null,
  clientId: null,
  botanistId: null,
  updateJwt: () => {},
  updateRole: () => {},
  updateEmail: () => {},
  updateUserId: () => {},
  updateClientId: () => {},
  updateBotanistId: () => {},
});

export const UserProvider = ({ children }) => {

  const jwtLocal = sessionStorage.getItem("Authorization");
  if(jwtLocal) {
    Api.defaults.headers.common["Authorization"] = jwtLocal
  }
  const [jwt, setJwt] = useState(jwtLocal);
  const [role, setRole] = useState(sessionStorage.getItem("role"));

  
  const updateJwt = jwt => {
    sessionStorage.setItem("Authorization", jwt);
    Api.defaults.headers.common["Authorization"] = jwt
    setJwt(jwt);
  };

  const updateRole = role => {
    sessionStorage.setItem("role", role);
    setRole(role);
  };


  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [userId, setUserId] = useState(sessionStorage.getItem("userId"));
  const [clientId, setClientId] = useState(sessionStorage.getItem("clientId"));
  const [botanistId, setBotanistId] = useState(sessionStorage.getItem("botanistId"));

  const updateEmail = email => {
    sessionStorage.setItem("email", email);
    setEmail(email);
  };

  const updateUserId = userId => {
    sessionStorage.setItem("userId", userId);
    setUserId(role);
  };

  const updateClientId = clientId => {
    sessionStorage.setItem("clientId", clientId);
    setClientId(clientId);
  };

  const updateBotanistId = botanistId => {
    sessionStorage.setItem("botanistId", botanistId);
    setBotanistId(botanistId);
  };

  return (
    <UserContext.Provider
      value={{
        jwt,
        role,
        email,
        userId,
        clientId,
        botanistId,
        updateJwt,
        updateRole,
        updateEmail,
        updateUserId, 
        updateClientId,
        updateBotanistId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};