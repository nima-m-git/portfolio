import React from 'react';

import { projects } from './projects/project_list.js'

const createProjectTile = ({background, name, techs, codeURL, viewURL}) => {
    return (
        <li style={{ backgroundImage: `url(${background})` }} key={name} className='projectTile'>
            <h4>{name}</h4>
            <ul className='techs'>{ console.log(Array.isArray(techs)) }</ul>
            <div className='viewURLs'>
                <a href={codeURL}>View Code</a>
                <a href={viewURL}>View Project</a>
            </div>
        </li>
    )
}

const ProjectTiles = () => {
    return (
        <div className='projectTiles container'>
            <h2>Projects</h2>
            <div className='projects'>
                <div className='projectGroups'>
                    {/* DRY ** nested map? */}
                    <div className='projectGroup'>
                        <h3>Applications</h3>
                        <ul>
                            { projects.applications.map(project => createProjectTile(project)) }
                        </ul>
                    </div>
                    <div className='projectGroup'>
                        <h3>Clones</h3>
                        <ul>
                            { projects.clones.map(project => createProjectTile(project))}
                        </ul>
                    </div>
                    <div className='projectGroup'>
                        <h3>Misc</h3>
                        <ul>
                            { projects.misc.map(project => createProjectTile(project))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Technologies = () => {
    return (
        <div className='technologies container'>
            <h2>Technologies</h2>
            <div className='techs-container'>
                <div className='programming techs'>
                    <h3>Programming</h3>
                    <ul>
                        <li>Python</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className='framework techs'>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>React</li>
                        <li>Node</li>
                        <li>Django</li>
                    </ul>
                </div>
                <div className='design techs'>
                    <h3>Design</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Sass</li>
                    </ul>
                </div>
                <div className='databases techs'>
                    <h3>Databases</h3>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>sqlite3</li>
                        <li>Firestore</li>
                    </ul>
                </div>
                <div className='other techs'>
                    <h3>Software & Tools</h3>
                    <ul>
                        <li>WebPack</li>
                        <li>Firebase</li>
                        <li>Git</li>
                        <li>Firebase</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


const Projects = () => {
    return (
        <div className='portfolio container'>
            <h1>Portfolio</h1>
            <div className='tech-projects-container'>
                <Technologies />
                <ProjectTiles />
            </div>

        </div>
    )
}


export { Projects }