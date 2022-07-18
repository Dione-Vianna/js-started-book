import { withStyles } from 'react-jss';

const labelStyles = () => ({
  label: {
    fontSize: '.875rem',
    display: 'block',
    marginBottom: '1rem',
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    '& input': {
      marginTop: '.25rem',
    },
  },
});

const Label = withStyles(labelStyles)((props) => {
  const classes = props.classes;
  return <label className={classes.label}>{props.children}</label>;
});

export { Label };
