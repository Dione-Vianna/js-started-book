import { withStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';

import { FaChessBishop, FaArrowLeft } from 'react-icons/fa';

import { Alert } from './Alert';
import { Label } from './Label';
import { Button } from './Button';
import { Input } from './Input';
import { Divider } from './Divider';

import { emailValidate, passwordValidate, repeatValidate } from '../utils';

const registrationPageStyles = (theme) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-30px) scale(0.98)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0px) scale(1)',
    },
  },
  loginCard: {
    animation: '$slideRight ease-in 0.3s',
    boxShadow: '0 2px 20px 3px rgb(0 0 0 / 6%)',
    background: theme.background.paper,
    color: theme.text.primary,
    width: '410px',
    padding: '2rem',
    position: 'relative',
  },
  cardHeader: {
    color: theme.text.activeLink,
    fontWeight: 600,
    fontSize: '1.6em',
  },
});

const RegistrationPage = withStyles(registrationPageStyles)((props) => {
  const classes = props.classes;
  const history = useNavigate();
  const [response, setResponse] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [formErrors, setFormErrors] = useState([]);

  const backToLogin = () => {
    history('/login');
  };

  const registrationSubmitHandler = async (e) => {
    e.preventDefault();
    console.log('registration sumbmit handler');

    let errors = [];
    let emailCheck = emailValidate(email);
    if (emailCheck) errors.push(emailCheck);

    let passwordCheck = passwordValidate(password);
    if (passwordCheck) errors.push(passwordCheck);

    let repeatCheck = repeatValidate(password, repeatPassword);
    if (repeatCheck) errors.push(repeatCheck);

    setFormErrors(errors);
    if (!errors.length) setResponse('Registation done, check you email :');
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
        <span>Books </span>
      </div>

      <h1 className={classes.cardHeader}>Sign Up</h1>

      {!response ? (
        <div className="form">
          <form onSubmit={registrationSubmitHandler}>
            {formErrors.length ? (
              <Alert title="Registration failed">
                {formErrors.map((err) => (
                  <div>{err}</div>
                ))}
              </Alert>
            ) : (
              ''
            )}

            <div>
              <Label>
                <span>Email</span>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Label>
            </div>

            <div>
              <Label>
                <span>Password</span>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Label>
            </div>

            <div>
              <Label>
                <span>Repeat password</span>
                <Input
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </Label>
            </div>

            <div style={{ marginTop: '10px' }}>
              <Button type="submit" fullWidth>
                Create account
              </Button>
              <Divider />
            </div>
          </form>
        </div>
      ) : (
        <Alert type="success">{response}</Alert>
      )}

      <Button
        fullWidth
        onClick={backToLogin}
        color="green"
        iconLeft={<FaArrowLeft />}
      >
        Back to log in
      </Button>
    </div>
  );
});

export { RegistrationPage };
