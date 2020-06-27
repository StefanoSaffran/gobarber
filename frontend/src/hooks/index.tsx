import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
