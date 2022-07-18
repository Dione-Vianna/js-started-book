import React, { useContext, createContext } from 'react';

import { withStyles } from 'react-jss';

import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

const CustomThemeContext = createContext();

const toggleThemeButtonStyles = (theme) => ({
  button: {
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    marginLeft: '15px',
    fontSize: (props) => (props.size ? props.size : '1.5em'),
    display: 'flex',
    borderRadius: '25px',
    // color: theme.text.outlinedButton,
    background: (props) => {
      if (props.transparent) return 'transparent';
      return theme.type === 'light' ? '#4d515d' : '#f2f3f5';
    },
    color: (props) => {
      if (props.transparent) return theme.text.activeLink;
      return theme.type === 'light' ? '#fff' : '#000';
    },
    outline: 'none',
    '&:hover': {
      transition: 'transform 0.2s',
      transform: 'scale(1) rotate(0.1turn)',
    },
  },
  '@keyframes roundIn': {
    from: {
      opacity: 0,
      transform: 'rotate(0.5turn)',
    },
    to: {
      opacity: 1,
      transform: 'rotate(0)',
    },
  },
  themeIcon: {
    animation: '$roundIn ease-in 0.4s',
  },
});

const useThemeContext = () => {
  return useContext(CustomThemeContext);
};

const ToggleThemeButton = withStyles(toggleThemeButtonStyles)((props) => {
  const classes = props.classes;
  const { currentTheme, toggleTheme } = useThemeContext();

  return (
    <button className={classes.button} onClick={toggleTheme}>
      {currentTheme === 'light' ? (
        <RiMoonClearLine className={classes.themeIcon} />
      ) : (
        <RiSunLine className={classes.themeIcon} />
      )}
    </button>
  );
});

export { ToggleThemeButton, CustomThemeContext };
