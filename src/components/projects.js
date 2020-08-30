import React from 'react';

import { projects, groupNames } from './projects/project_list.js';

import WebpackIcon from '../icons/icons8-webpack.svg';
import FireStoreIcon from '../icons/icons8-cloud-firestore.svg';
import CSS3Icon from '../icons/icons8-css3.svg';
import DjangoIcon from '../icons/icons8-django.svg';
import FireBaseIcon from '../icons/icons8-firebase.svg';
import GitIcon from '../icons/icons8-git.svg';
import HTML5Icon from '../icons/icons8-html-5.svg';
import JavascriptIcon from '../icons/icons8-javascript.svg';
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

const ProjectTiles = (props) => {
    const filteredProjects = (!props.filterOn) 
        ? projects 
        : projects.map(group => (
            group.filter(project => project.techs.includes(props.tech))
            ))
        
    return (
        <div className='projectTiles container'>
            <h2>Projects</h2>
            <div className='projects'>
                {filteredProjects.map((group, i) => (
                    
                    <div className='projectGroup'>
                        <h3 style={{'text-transform': 'capitalize'}}>{ groupNames[i] }</h3>
                        <ul>
                            { group.map(project => createProjectTile(project)) }
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}


const Technologies = (props) => {
    return (
        <div className='technologies container'>
            <h2>Technologies</h2>
            <div className='techs-container'>
                {/* Combine Techs into fxn -- DRY */}
                <div className='programming techs'>
                    <h3>Programming</h3>
                    <ul>
                        <li>
                            <img src={PythonIcon} alt=' icon'className='icon'/>
                            <span onClick={() => props.filterTech('Python')}>Python</span>                            
                        </li>
                        <li>
                            <img src={JavascriptIcon} alt=' icon'className='icon'/>
                            <span onClick={() => props.filterTech('Javascript')}>Javascript</span>                            
                        </li>
                    </ul>
                </div>
                <div className='framework techs'>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>
                            <img src={ReactIcon} alt=' icon'className='icon'/>
                            <span onClick={() => props.filterTech('React')}>React</span>                            
                        </li>
                        <li>
                            <img src={NodeJSIcon} alt=' icon'className='icon'/>
                            <span onClick={() => props.filterTech('Node')}>Node</span>                            
                        </li>
                        <li>
                            <img src={DjangoIcon} alt=' icon'className='icon'/>
                            <span onClick={() => props.filterTech('Django')}>Django</span>                            
                        </li>
                    </ul>
                </div>
                <div className='design techs'>
                    <h3>Design</h3>
                    <ul>
                        <li onClick={() => props.filterTech('HTML')}>
                            <img src={HTML5Icon} alt=' icon'className='icon'/>
                            <span>HTML5</span>                            
                        </li>
                        <li onClick={() => props.filterTech('CSS')}>
                            <img src={CSS3Icon} alt=' icon'className='icon'/>
                            <span>CSS3</span>                            
                        </li>
                        <li onClick={() => props.filterTech('Sass')}>
                            <img src={SassIcon} alt=' icon'className='icon'/>
                            <span>Sass</span>                            
                        </li>
                    </ul>
                </div>
                <div className='databases techs'>
                    <h3>Databases</h3>
                    <ul>
                        <li onClick={() => props.filterTech('PostgreSQL')}>
                            <img src={PostgreSQLIcon} alt=' icon'className='icon'/>
                            <span>PostgreSQL</span>                            
                        </li>
                        <li onClick={() => props.filterTech('MySQL')}>
                            <img src={MySQLIcon} alt=' icon'className='icon'/>
                            <span>MySQL</span>                            
                        </li>
                        <li onClick={() => props.filterTech('FireStore')}>
                            <img src={FireStoreIcon} alt=' icon'className='icon'/>
                            <span>FireStore</span>                            
                        </li>
                    </ul>
                </div>
                <div className='other techs'>
                    <h3>Softwares & Tools</h3>
                    <ul>
                        <li>
                            <img src={WebpackIcon} alt='webpack icon' className='icon'/>
                            <span>Webpack</span>                            
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
            <div className='portfolio container'>
                <h1>Portfolio</h1>
                {this.state.filterOn && 
                    <div className='view-all' >
                        <button onClick={this.filterOff}>View All</button>
                    </div>
                }
                <div className='tech-projects-container'>
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


export { Projects }