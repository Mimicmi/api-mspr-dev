import React, { createContext, useState } from 'react';
import Api from '../Api';

export const UserContext = createContext({
  jwt: null,
  role: null,
  updateJwt: () => {},
  updateRole: () => {}
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

  const hasRoles = roles => {
    switch (roles) {
      case "*":
        return true;

      default:
        if (roles.includes(role)) {
          return true
        }
        break;
    }

    return false;
  };


  

  return (
    <UserContext.Provider
      value={{
        jwt,
        role,
        updateJwt,
        updateRole
      }}
    >
      {children}
    </UserContext.Provider>
  );
};