import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Technologies } from './technologies';
import { projects, groupNames } from './projects/project_list.js';

// import './tiles.scss';

function ProjectTile({ project: { background, name, techs, codeURL, viewURL } }) {
  return (
    <motion.li
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 1 }}
      className="projectTile"
      key={codeURL}
      style={{
        backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.7))
                ,url(${background})`,
      }}
    >
      <h4>{name}</h4>
      <div className="viewURLs hide--hover">
        <button>
          <a href={codeURL} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </button>
        <button>
          <a href={viewURL} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </button>
      </div>
      <ul className="techs display--hover">
        {techs.map((tech) => {
          return <li key={tech}>{tech}</li>;
        })}
      </ul>
    </motion.li>
  );
}

function ProjectTilesContainer(props) {
  const filteredProjects = !props.tech
    ? projects
    : projects.map((group) => group.filter((project) => project.techs.includes(props.tech)));

  return (
    <div className="projectTiles">
      <h2>Projects</h2>
      {props.tech && (
        <div className="view-all">
          <button onClick={props.filterOff}>View All</button>
        </div>
      )}
      <div className="projects glow-border-purple">
        {filteredProjects.map((group, i) => {
          return (
            group.length > 0 && (
              <div className="projectGroup" key={groupNames[i]}>
                <h3 style={{ textTransform: 'capitalize' }}>{groupNames[i]}</h3>
                <ul>
                  <AnimatePresence>
                    {group.map((project) => (
                      <ProjectTile project={project} key={project.viewURL} />
                    ))}
                  </AnimatePresence>
                </ul>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: null,
    };
    this.filterTech = this.filterTech.bind(this);
    this.filterOff = this.filterOff.bind(this);
  }

  filterTech(tech) {
    this.setState({
      tech,
    });
  }

  filterOff() {
    this.setState({
      tech: null,
    });
  }

  render() {
    return (
      <div className="project">
        <div className="tech-projects">
          <Technologies filterTech={this.filterTech} />
          <ProjectTilesContainer filterOff={this.filterOff} tech={this.state.tech} />
        </div>
      </div>
    );
  }
}

export { Projects };
