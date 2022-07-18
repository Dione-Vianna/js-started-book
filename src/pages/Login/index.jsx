import React, { useState } from 'react';

import { lightTheme, darkTheme } from './style';
import { ThemeProvider } from 'react-jss';

import { LoginPage } from './components/LoginPage';
import { LoginLayout } from './components/LoginLayout';
import { RegistrationPage } from './components/RegistrationPage';
import { CustomThemeContext } from './components/ToggleThemeButton';

const CustomThemeProvider = (props) => {
  const [currentTheme, setCurrentTheme] = useState('light');
  console.log(props);

  const toggleTheme = () => {
    let newValue = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newValue);
  };

  const themeData = { currentTheme, toggleTheme };
  return (
    <CustomThemeContext.Provider value={themeData}>
      <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export { LoginLayout, LoginPage, RegistrationPage, CustomThemeProvider };
