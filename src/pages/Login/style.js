const mainTheme = {
  sizes: {
    container: '850px',
  },
  colors: {
    primary: '#4299e1',
    primaryLight: '#fff',
    secondary: '#818CF8',
    secondaryLight: '#fff',
    green: '#10B981',
  },
};

const lightTheme = {
  ...mainTheme,
  type: 'light',
  background: {
    default: '#f7fafc',
    paper: '#fff',
    linkHover: '#edf2f7',
    input: '#fff',
  },
  alert: {
    error: '#fff0f3',
    success: '#a7f3d0',
  },
  border: {
    primary: '#e2e2e2',
    input: '#e2e8f0',
  },
  progress: {
    linear: '#e6fffa',
    linearBar: '#bde8e0',
  },
  text: {
    primary: '#000',
    link: '#718096',
    activeLink: '#2b3044',
    outlinedButton: '#4c4f52',
    input: '#4a5568',
  },
  snackbar: {
    background: '#323232',
    text: '#fff',
  },
  blob: 'C7D2FE',
};

const darkTheme = {
  ...mainTheme,
  type: 'dark',
  background: {
    default: '#161a23',
    paper: '#252836',
    linkHover: '#1c2633',
    input: '#2d303e',
  },
  alert: {
    error: '#a54a5c',
    success: '#359a6c',
  },
  border: {
    primary: '#43454e',
    input: '#505261',
  },
  progress: {
    linear: '#588e83',
    linearBar: '#32695f',
  },
  text: {
    primary: '#fff',
    link: '#8493a9',
    activeLink: '#9b9fb1',
    outlinedButton: '#fff',
    input: '#cccede',
  },
  snackbar: {
    background: '#fff',
    text: '#000',
  },
  blob: '6373b3',
};

const loginLayoutStyles = (theme) => ({
  loginLayout: {
    maxWidth: '100vw',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `${theme.background.default} url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve" height="800px" width="800px"><g><path fill="%23${theme.blob}" d="M41.3,-52.9C54.4,-47.3,66.6,-36.4,73.8,-22.1C81,-7.8,83.2,10,75.4,21.7C67.7,33.4,50.1,39.1,35.9,47.5C21.7,56,10.8,67.3,0,67.3C-10.8,67.3,-21.6,55.9,-35.7,47.4C-49.9,38.9,-67.3,33.2,-70,23.2C-72.7,13.1,-60.6,-1.3,-53.8,-15.9C-46.9,-30.5,-45.3,-45.3,-37.2,-52.5C-29.1,-59.7,-14.6,-59.4,-0.2,-59.1C14.1,-58.7,28.2,-58.5,41.3,-52.9Z" transform="translate(100 100) scale(1.21)" fill-rule="nonzero"/></g></svg>') 50% no-repeat`,
  },
  rightAngleAction: {
    position: 'absolute',
    top: '10px',
    right: '20px',
  },
});

export { lightTheme, darkTheme, loginLayoutStyles };
