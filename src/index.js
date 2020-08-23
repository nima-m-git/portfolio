import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import './index.scss';


import { Header } from './components/header.js'
import { About } from './components/about.js';
import { Projects } from './components/projects.js';
import { Contact } from './components/contact.js';


ReactDOM.render(
    <React.StrictMode>
      <Header />
      <div className='page'>
        <About />
        <Projects />
        <Contact />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
  