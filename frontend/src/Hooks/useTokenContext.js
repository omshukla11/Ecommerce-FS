import React, { useState, useContext } from "react"

const TokenContext = React.createContext({
  'token': JSON.parse(localStorage.getItem('token'))
})
const TokenUpdateContext = React.createContext()

export function useTokenCon() {
  return useContext(TokenContext).token?.token
}

export function useTokenUpdateCon() {
  return useContext(TokenUpdateContext)
}

export default function TokenProvider({ children }) {

  // const getToken = () => {
  //   const tokenString = localStorage.getItem('token');
  //   const userToken = JSON.parse(tokenString);
  //   return userToken?.token
  // };

  const token = useContext(TokenContext)

  function updateToken(userToken){
    localStorage.setItem('token', JSON.stringify(userToken));
    TokenContext.displayName = localStorage.setItem('token', JSON.stringify(userToken));
  };

  return (
    <TokenContext.Provider value={token} >
      <TokenUpdateContext.Provider value={updateToken} >
        {children}
      </TokenUpdateContext.Provider>
    </TokenContext.Provider>
  )
}