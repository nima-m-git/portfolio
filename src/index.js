import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { Header } from './components/header.js'
import { About } from './components/about.js';


ReactDOM.render(
    <React.StrictMode>
      <h1>Portfolio</h1>
      <Header />
      <About />
    </React.StrictMode>,
    document.getElementById('root')
  );
  