import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import './index.scss';

import { default as Home } from './components/home.js';
import { default as Header } from './components/header.js';
import { default as About } from './components/about.js';
import { default as Portfolio } from './components/portfolio.js';
import { default as Contact } from './components/contact.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="page">
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/projects" exact component={() => <Portfolio />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </div>
      <footer>
        <div>2020 Nima Mirzaei</div>
      </footer>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
