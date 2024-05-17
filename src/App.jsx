import React from 'react';
import './assets/style/style.css';
import AppRoutes from './routes/AppRoutes';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="content-card">
        <AppRoutes />
      </div>
    </>
  )
}

export default App;
