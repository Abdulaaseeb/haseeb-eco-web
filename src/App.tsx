import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './pages/NavBar';
import AppRouter from './cofig/router/router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
