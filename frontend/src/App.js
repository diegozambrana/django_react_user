import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import routes from './routes';
import './App.css';

import Login from './components/pages/login';

function App() {
  console.log(`-------- here`)
  console.log(Login)
  return (
    <div>
      <Router>
        {routes()}
      </Router>
    </div>
  );
}

export default App;
