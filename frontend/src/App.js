import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import routes from './routes';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        {routes()}
      </Router>
    </div>
  );
}

export default App;
