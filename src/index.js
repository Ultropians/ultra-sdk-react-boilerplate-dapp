import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ultraTheme } from '@ultra-alliance/uikit';
import { ThemeProvider } from '@mui/material';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { UltraProvider } from '@ultra-alliance/react-ultra';
import { DEFAULT_BP_API_ENDPOINT } from '@ultra-alliance/ultra-sdk';

createRoot(document.getElementById('root')).render(
  <UltraProvider bpApiEndpoint={DEFAULT_BP_API_ENDPOINT}>
    <ThemeProvider theme={ultraTheme}>
    <CssBaseline />
        <GlobalStyles
          styles={{
            body: { background: ultraTheme.palette.background.default },
          }}
        />
      <App />
    </ThemeProvider>
  </UltraProvider>
);




