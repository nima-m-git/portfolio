import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Technologies } from './technologies';
import { projects, groupNames } from './projects/project_list.js';

function CreateProjectTile ({ project: { background, name, techs, codeURL, viewURL } }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.li
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}

            className='projectTile' 
            key={codeURL} 
            style={{ backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))
                ,url(${background})` }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h4>{name}</h4>
            {(isHovered 
                && 
                <div className='viewURLs'>
                    <a href={codeURL} target='_blank'>View Code</a>
                    <a href={viewURL} target='_blank'>View Project</a>
                </div>)
                ||
                (<ul className='techs'>
                    {techs.map((tech) => {
                        return (
                            <li key={tech}>{tech}</li>
                        )
                    })}
                </ul>)
            }
        </motion.li>
    )
}


function ProjectTiles (props) {
    const filteredProjects = (!props.filterOn) 
            ? projects 
            : projects.map(group => (
                group.filter(project => project.techs.includes(props.tech))
                ))
        
    return (
        <div className='projectTiles container'>
            <h2>Projects</h2>
            <div className='projects'>
                {filteredProjects.map((group, i) => {
                    return group.length > 0 &&
                        <div className='projectGroup' key={groupNames[i]}>
                            <h3 style={{'textTransform': 'capitalize'}}>{ groupNames[i] }</h3>
                            <ul>
                                <AnimatePresence>
                                    { group.map(project => <CreateProjectTile project={project} key={project.viewURL}/>) }
                                </AnimatePresence>
                            </ul>

                        </div>
                })}
            </div>
        </div>
    )
}


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterOn: false,
            tech: null,
        }
        this.filterTech = this.filterTech.bind(this);
        this.filterOff = this.filterOff.bind(this);
    }

    filterTech(tech) {
        this.setState({
            filterOn: true,
            tech,
        }) 
    }

    filterOff() {
        this.setState({
            filterOn: false,
            tech: null,
        })
    }

    render() {
        return (
            <div className='project'>
                {this.state.filterOn && 
                    <div className='view-all' >
                        <button onClick={this.filterOff}>View All</button>
                    </div>
                }
                <div className='tech-projects'>
                    <Technologies 
                        filterTech={this.filterTech}/>
                    <ProjectTiles 
                        filterOn={this.state.filterOn}
                        tech={this.state.tech}/>
                </div>
    
            </div>
        )
    }
}

export { Projects };