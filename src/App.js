import React from 'react';
import './App.css';
import './common.scss';
import Sidebar from './components/sidebar/Sidebar';
import RouterNav from './Router/Router';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid">
        <RouterNav />
      </div>
    </div>
  </Router>
    
  );
}

export default App;
