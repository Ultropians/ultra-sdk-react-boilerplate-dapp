import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useUltra } from '@ultra-alliance/react-ultra';
import { Button, Typography } from '@mui/material';

const App = () => {
  const {account, isAuthenticated, login, hasAuthError } = useUltra();
 
  if (!isAuthenticated) {
    return (
      <div className="centeredContent">
        <div className="connectButton"> 
          <Button color="primary" variant="contained" onClick={login}>
            Login
          </Button>
          {hasAuthError && (
            <div className="authErrorMessage"> 
              <Typography variant="body1" color="error">
                Login failed, please connect your wallet.
              </Typography>
            </div>
          )}
        </div>
      </div>
    );
  }  
 
  return (
    <div className="centeredContent">
      <Typography variant="body1">UOS Balance: {account.data.core_liquid_balance}</Typography>
    </div>
  );
};

export default App;
