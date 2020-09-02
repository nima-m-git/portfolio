import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import './index.scss';


import { default as Header } from './components/header.js'
import { default as About } from './components/about.js';
import { default as Projects } from './components/projects.js';
import { default as Contact } from './components/contact.js';


ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Header />
        <div className='page'>
          <Switch>
            <Route path='/about' exact component={() => <About />} />
            <Route path='/portfolio' exact component={() => <Projects />} />
            <Route path='/contact' exact component={() => <Contact />} />
          </Switch>
        </div>
        <footer>
          <div>
              <p>Designed by yours truly</p>
          </div>
        </footer>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
  