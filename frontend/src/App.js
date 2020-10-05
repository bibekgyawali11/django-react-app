import React from 'react';
import './App.css';
import {Router, Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import history from './history';

function App() {
  return (
    <div className="App">
      DucieClub UNT
      <Router history={history}>
        <Route path="/" exact component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Router>
    </div>
  );
}

export default App;
