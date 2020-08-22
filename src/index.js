import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { Header } from './components/header.js'
import { About } from './components/about.js';
import { Projects } from './components/projects.js';


ReactDOM.render(
    <React.StrictMode>
      <h1>Portfolio</h1>
      <Header />
      <About />
      <Projects />
    </React.StrictMode>,
    document.getElementById('root')
  );
  