import React from 'react';

import { projects } from './projects/project_list.js'


const Technologies = () => {
    return (
        <div className='technologies'>
            <h2>Technologies</h2>
            <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>Node</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass</li>
                <li>WebPack</li>
                <li>Python</li>
                <li>Django</li>
                <li>PostgreSQL</li>
            </ul>
        </div>
    )
}


const createProjectTile = ({background, name, techs, codeURL, viewURL}) => {
    return (
        <li styles={{ backgroundImage: `url(${background})` }}>
            <h4>{name}</h4>
            <p className='techs'>{techs}</p>
            <div className='viewURLs'>
                <a href={codeURL}>View Code</a>
                <a href={viewURL}>View Project</a>
            </div>
        </li>
    )
}


const Projects = () => {
    return (
        <div className='Projects'>
            <Technologies />
            <div className='projectTiles'>
                <ul>
                    { projects.map(project => createProjectTile(project)) }
                </ul>
            </div>
        </div>
    )
}


export { Projects }