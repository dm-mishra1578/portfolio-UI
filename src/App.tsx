import React from 'react';
import logo from './logo.svg';
import AppRoutes from './routes/AppRoutes';
import GlobalProvider from './context/GLobalProvider';

function App() {
  return (
    <>
    <GlobalProvider>
    <AppRoutes />
    </GlobalProvider>
    </>
  );
}

export default App;
