import { withStyles } from 'react-jss';

const alertStyles = (theme) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-10px) scale(0.98)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0px) scale(1)',
    },
  },
  alert: {
    animation: '$slideRight ease-in 0.3s',
    padding: '20px',
    background: (props) => {
      if (!props.type) return theme.alert.error;
      if (props.type === 'success') return theme.alert.success;
    },
    borderLeft: (props) => {
      if (!props.type) return '5px solid #FFB3C0';
      if (props.type === 'success') return '5px solid #A7F3D0';
    },
    borderRadius: '4px',
    fontSize: '.875rem',
    margin: '10px 0px',
    color: theme.text.primary,
  },
  success: {
    background: '#fafffa',
    borderLeft: '5px solid #d4ffb3',
  },
  title: {
    fontWeight: 700,
  },
  link: {
    cursor: 'pointer',
  },
});

const Alert = withStyles(alertStyles)((props) => {
  const classes = props.classes;
  return (
    <>
      <div className={classes.alert}>
        <summary className={classes.title}>{props.title}</summary>
        {props.children}
      </div>
    </>
  );
});

export { Alert };
