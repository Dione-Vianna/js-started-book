import React, { useState, createContext } from 'react';

const initialState = {
  state: {
    theme: 'light',
  },
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  console.log('ThemeProvider', state);

  return (
    <ThemeContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
