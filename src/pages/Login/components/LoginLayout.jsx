import { ToggleThemeButton } from './ToggleThemeButton';

import { loginLayoutStyles } from '../style';
import { withStyles } from 'react-jss';

const LoginLayout = withStyles(loginLayoutStyles)((props) => {
  const classes = props.classes;

  return (
    <div className={classes.loginLayout}>
      <div className={classes.rightAngleAction}>
        <ToggleThemeButton size={'2.2em'} transparent />
      </div>
      {props.children}
    </div>
  );
});

export { LoginLayout };
