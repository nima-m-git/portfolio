import React from 'react';

import { projects } from './projects/project_list.js';

import WebPackIcon from '../icons/icons8-webpack.svg';
import FireStoreIcon from '../icons/icons8-cloud-firestore.svg';
import CSS3Icon from '../icons/icons8-css3.svg';
import DjangoIcon from '../icons/icons8-django.svg';
import FireBaseIcon from '../icons/icons8-firebase.svg';
import GitIcon from '../icons/icons8-git.svg';
import HTML5Icon from '../icons/icons8-html-5.svg';
import JavaScriptIcon from '../icons/icons8-javascript.svg';
import NodeJSIcon from '../icons/icons8-nodejs.svg';
import PostgreSQLIcon from '../icons/icons8-postgresql.svg';
import PythonIcon from '../icons/icons8-python.svg';
import ReactIcon from '../icons/icons8-react.svg';
import SassIcon from '../icons/icons8-sass.svg';
import MySQLIcon from '../icons/mysql-icon.svg';



const createProjectTile = ({background, name, techs, codeURL, viewURL}) => {
    return (
        <li 
            style={{ backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))
                ,url(${background})` }} 
            key={name} className='projectTile'>
            <h4>{name}</h4>
            <ul className='techs'>{ console.log(Array.isArray(techs)) }</ul>
            <div className='viewURLs'>
                <a href={codeURL} target='_blank'>View Code</a>
                <a href={viewURL} target='_blank'>View Project</a>
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
                        <li>
                            <span><img src={PythonIcon} alt=' icon'className='icon'/></span>
                            
                            <span>Python</span>                            
                        </li>
                        <li>
                            <img src={JavaScriptIcon} alt=' icon'className='icon'/>
                            <span>Javascript</span>                            
                        </li>
                    </ul>
                </div>
                <div className='framework techs'>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>
                            <img src={ReactIcon} alt=' icon'className='icon'/>
                            <span>React</span>                            
                        </li>
                        <li>
                            <img src={NodeJSIcon} alt=' icon'className='icon'/>
                            <span>Node</span>                            
                        </li>
                        <li>
                            <img src={DjangoIcon} alt=' icon'className='icon'/>
                            <span>Django</span>                            
                        </li>
                    </ul>
                </div>
                <div className='design techs'>
                    <h3>Design</h3>
                    <ul>
                        <li>
                            <img src={HTML5Icon} alt=' icon'className='icon'/>
                            <span>HTML5</span>                            
                        </li>
                        <li>
                            <img src={CSS3Icon} alt=' icon'className='icon'/>
                            <span>CSS3</span>                            
                        </li>
                        <li>
                            <img src={SassIcon} alt=' icon'className='icon'/>
                            <span>Sass</span>                            
                        </li>
                    </ul>
                </div>
                <div className='databases techs'>
                    <h3>Databases</h3>
                    <ul>
                        <li>
                            <img src={PostgreSQLIcon} alt=' icon'className='icon'/>
                            <span>PostgreSQL</span>                            
                        </li>
                        <li>
                            <img src={MySQLIcon} alt=' icon'className='icon'/>
                            <span>MySQL</span>                            
                        </li>
                        <li>
                            <img src={FireStoreIcon} alt=' icon'className='icon'/>
                            <span>FireStore</span>                            
                        </li>
                    </ul>
                </div>
                <div className='other techs'>
                    <h3>Software & Tools</h3>
                    <ul>
                        <li>
                            <img src={WebPackIcon} alt='webpack icon' className='icon'/>
                            <span>WebPack</span>                            
                        </li>
                        <li>
                            <img src={FireBaseIcon} alt=' icon'className='icon'/>
                            <span>Firebase</span>                            
                        </li>
                        <li>
                            <img src={GitIcon} alt=' icon'className='icon'/>
                            <span>Git</span>                            
                        </li>
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