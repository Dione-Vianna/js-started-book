import { withStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';

import { FaChessBishop, FaPlusCircle } from 'react-icons/fa';

import { Alert } from './Alert';
import { Label } from './Label';
import { Button } from './Button';
import { Input } from './Input';
import { Divider } from './Divider';

import { emailValidate, passwordValidate } from '../utils';

const loginPageStyles = (theme) => ({
  '@keyframes slideLeft': {
    from: {
      opacity: 0,
      transform: 'translateX(30px) scale(0.98)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0px) scale(1)',
    },
  },
  loginCard: {
    animation: '$slideLeft ease-in 0.3s',
    boxShadow: '0 2px 20px 3px rgb(0 0 0 / 6%)',
    background: theme.background.paper,
    color: theme.text.primary,
    width: '410px',
    padding: '2rem',
    position: 'relative',
  },
  forgotPassLink: {
    color: theme.text.activeLink,
    textDecoration: 'none',
    fontSize: '0.9em',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  cardHeader: {
    color: theme.text.activeLink,
    fontWeight: 600,
    fontSize: '1.6em',
  },
});

const LoginPage = withStyles(loginPageStyles)((props) => {
  const classes = props.classes;
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState([]);
  const [isSuccessed, setSuccess] = useState(false);

  const redirectToRegistration = () => {
    history('/registration');
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    let errors = [];
    let emailCheck = emailValidate(email);
    if (emailCheck) errors.push(emailCheck);

    let passwordCheck = passwordValidate(password);
    if (passwordCheck) errors.push(passwordCheck);

    setFormErrors(errors);
    if (!errors.length) setSuccess(true);

    localStorage.setItem('user', 'login com sucesso');
    window.location.reload();
  };

  return (
    <div className={classes.loginCard}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 100,
          marginBottom: '25px',
        }}
      >
        <FaChessBishop
          style={{ marginRight: '10px', fontSize: '1.3em', color: '#83afe0' }}
        />
        <span>Books</span>
      </div>

      <h1 className={classes.cardHeader}>Log in</h1>

      <div className="form">
        <form onSubmit={loginSubmitHandler}>
          {formErrors.length ? (
            <Alert title="Failed to login">
              {formErrors.map((err) => (
                <div>{err}</div>
              ))}
            </Alert>
          ) : (
            ''
          )}

          {isSuccessed ? <Alert type="success">Welcome!</Alert> : ''}

          <div name="email" validate={emailValidate}>
            <Label>
              <span>Email</span>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </Label>
          </div>

          <div name="password" validate={passwordValidate}>
            <Label>
              <span>Password</span>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>
          </div>

          <div style={{ marginTop: '10px' }}>
            <Button type="submit" fullWidth>
              Log in
            </Button>
          </div>
        </form>
      </div>

      <Divider />
      <Button
        fullWidth
        onClick={redirectToRegistration}
        color="green"
        iconLeft={<FaPlusCircle />}
      >
        Create account
      </Button>
    </div>
  );
});

export { LoginPage };
