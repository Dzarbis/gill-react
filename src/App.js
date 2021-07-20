import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Websites from './components/Websites';
import Nav from './components/Nav';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path='/About' component={About} />
          <Route path='/Websites' component={Websites} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </Router>
    )
  }
};

export default App;