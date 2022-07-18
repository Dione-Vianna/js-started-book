import { withStyles } from 'react-jss';

const buttonStyles = (theme) => ({
  buttonMain: {
    width: (props) => (props.fullWidth ? '100%' : 'auto'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingTop: '.75rem',
    paddingBottom: '.75rem',
    background: (props) => {
      if (props.color) return theme.colors[props.color];
      return theme.colors.primary;
    },
    borderRadius: '.25rem',
    border: 'none',
    color: '#fff',
    fontFamily: 'inherit',
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(90%)',
    },
    '&:focus': {
      boxShadow: (props) => {
        if (props.color) return `0 0 0 3px ${theme.colors[props.color] + '42'}`;
        return `0 0 0 3px ${theme.colors.primary + '42'}`;
      },
      outlineColor: 'rgba(0,0,0,0)',
      outlineOffset: '2px',
      outlineStyle: 'solid',
      borderColor: theme.colors.primary,
    },
  },
  iconLeft: {
    marginRight: '.5rem',
    display: 'flex',
    alignItems: 'center',
  },
});

const Button = withStyles(buttonStyles)((props) => {
  const classes = props.classes;
  return (
    <button
      className={classes.buttonMain}
      onClick={props.onClick}
      type={props.type}
    >
      {props.iconLeft ? (
        <span className={classes.iconLeft}>{props.iconLeft}</span>
      ) : (
        ''
      )}
      {props.children}
    </button>
  );
});
export { Button };