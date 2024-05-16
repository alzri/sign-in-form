import React from 'react';
import './assets/style/style.css';
import AppRoutes from './routes/AppRoutes';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  )
}

export default App;
