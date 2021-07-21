import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about.js';
import Websites from './components/websites.js';
import Nav from './components/nav.js';
import Contact from './components/contact.js';
import Resume from './components/resume.js';

function App() {
  return (
    <Router>
      <Nav />
       <Switch>
         <Route path='/About' component={About} />
         <Route path='/Websites' component={Websites} />
         <Route path='/Contact' component={Contact} />
         <Route path='/Resume' component={Resume} />
       </Switch>
     </Router>
  )
};

export default App;