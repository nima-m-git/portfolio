import React from 'react';

import { projects } from './projects/project_list.js'


const Technologies = () => {
    return (
        <div className='technologies container'>
            <h2>Technologies</h2>
            <div className='programming-techs'>
                <h3>Programming</h3>
                <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>Node</li>
                    <li>Python</li>
                    <li>Django</li>
                </ul>
            </div>
            <div className='design-techs'>
                <h3>Design</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Sass</li>
                </ul>
            </div>
            <div className='databases-techs'>
                <h3>Databases</h3>
                <ul>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>sqlite</li>
                    <li>Firestore</li>
                </ul>
            </div>
            <div className='other-techs'>
                <h3>Other Tools</h3>
                <ul>
                    <li>WebPack</li>
                    <li>Firebase</li>
                    <li>sqlite</li>
                    <li>Firebase Firestore</li>
                </ul>
            </div>
            
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
                {/* DRY ** nested map? */}
                <div className='applications'>
                    <h4>Applications</h4>
                    <ul>
                        { projects.applications.map(project => createProjectTile(project)) }
                    </ul>
                </div>
                <div className='clones'>
                    <h4>Applications</h4>
                    <ul>
                        { projects.clones.map(project => createProjectTile(project))}
                    </ul>
                </div>
                <div className='misc'>
                    <h4>Applications</h4>
                    <ul>
                        { projects.misc.map(project => createProjectTile(project))}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export { Projects }