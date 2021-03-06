import React, { Component } from 'react';
import './styles/App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
