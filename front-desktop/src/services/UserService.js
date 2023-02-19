import React, { createContext, useState } from 'react';
import Api from '../Api';

export const UserContext = createContext({
  jwt: null,
  role: null,
  updateJwt: () => {},
  updateRole: () => {},
  updateEmail: () => {},
  updateUserId: () => {},
  updateClientId: () => {},
  updateBotanistId: () => {},
});

export const UserProvider = ({ children }) => {

  const jwtLocal = localStorage.getItem("Authorization");
  if(jwtLocal) {
    Api.defaults.headers.common["Authorization"] = jwtLocal
  }
  const [jwt, setJwt] = useState(jwtLocal);
  const [role, setRole] = useState(localStorage.getItem("role"));

  
  const updateJwt = jwt => {
    localStorage.setItem("Authorization", jwt);
    Api.defaults.headers.common["Authorization"] = jwt
    setJwt(jwt);
  };

  const updateRole = role => {
    localStorage.setItem("role", role);
    setRole(role);
  };


  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [clientId, setClientId] = useState(localStorage.getItem("clientId"));
  const [botanistId, setBotanistId] = useState(localStorage.getItem("botanistId"));

  const updateEmail = email => {
    localStorage.setItem("email", email);
    setEmail(email);
  };

  const updateUserId = userId => {
    localStorage.setItem("userId", userId);
    setUserId(role);
  };

  const updateClientId = clientId => {
    localStorage.setItem("clientId", clientId);
    setClientId(clientId);
  };

  const updateBotanistId = botanistId => {
    localStorage.setItem("botanistId", botanistId);
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