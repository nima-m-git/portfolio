import React from 'react';

import { Projects } from './projects';

import LinkedinIcon from '../icons/icons8-linkedin.svg';
import GithubIcon from '../icons/icons8-github.svg';

const Portfolio = () => {
  return (
    <div className="portfolio container">
      <ul className="social">
        <li>
          <a href="https://github.com/nima-m-git" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="Github icon" className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nima-mirzaei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="Linkedin icon" className="icon" />
          </a>
        </li>
      </ul>
      <p className="centered">
        This section is under constant construction - There is no limit to what can be learnt,
        built, and improved.
        <br></br>You may see something new or different next time you check here.
        <br></br>
        <small>
          See something you believe could be improved? Please <a href="/contact">let me know</a>.
        </small>
      </p>
      <Projects />
    </div>
  );
};

export default Portfolio;
