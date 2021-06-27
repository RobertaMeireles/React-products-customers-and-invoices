import React from 'react'
import Routes from './routes'
import history from './services/history'
import { Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/style'

function App() {
  
  return (
      <Router history={history}>
         <Routes />
      </Router>
  );
}

export default App;