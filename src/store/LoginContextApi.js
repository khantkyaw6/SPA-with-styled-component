import { createContext, useContext, useState } from 'react';

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

function LoginContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  let value = { loggedIn, setLoggedIn };

  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
