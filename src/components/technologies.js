import React from 'react';

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
                            <img src={PythonIcon} alt='Python icon'className='icon'/>
                            <span onClick={() => props.filterTech('Python')}>Python</span>                            
                        </li>
                        <li>
                            <img src={JavascriptIcon} alt='Javascript icon'className='icon'/>
                            <span onClick={() => props.filterTech('Javascript')}>Javascript</span>                            
                        </li>
                    </ul>
                </div>
                <div className='framework techs'>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>
                            <img src={ReactIcon} alt='React icon'className='icon'/>
                            <span onClick={() => props.filterTech('React')}>React</span>                            
                        </li>
                        <li>
                            <img src={NodeJSIcon} alt='Node icon'className='icon'/>
                            <span onClick={() => props.filterTech('Node')}>Node</span>                            
                        </li>
                        <li>
                            <img src={DjangoIcon} alt='Django icon'className='icon'/>
                            <span onClick={() => props.filterTech('Django')}>Django</span>                            
                        </li>
                    </ul>
                </div>
                <div className='design techs'>
                    <h3>Design</h3>
                    <ul>
                        <li onClick={() => props.filterTech('HTML')}>
                            <img src={HTML5Icon} alt='HTML icon'className='icon'/>
                            <span>HTML5</span>                            
                        </li>
                        <li onClick={() => props.filterTech('CSS')}>
                            <img src={CSS3Icon} alt='CSS icon'className='icon'/>
                            <span>CSS3</span>                            
                        </li>
                        <li onClick={() => props.filterTech('Sass')}>
                            <img src={SassIcon} alt='Sass icon'className='icon'/>
                            <span>Sass</span>                            
                        </li>
                    </ul>
                </div>
                <div className='databases techs'>
                    <h3>Databases</h3>
                    <ul>
                        <li onClick={() => props.filterTech('PostgreSQL')}>
                            <img src={PostgreSQLIcon} alt='PostgreSQL icon'className='icon'/>
                            <span>PostgreSQL</span>                            
                        </li>
                        <li onClick={() => props.filterTech('MySQL')}>
                            <img src={MySQLIcon} alt='MySQL icon'className='icon'/>
                            <span>MySQL</span>                            
                        </li>
                        <li onClick={() => props.filterTech('FireStore')}>
                            <img src={FireStoreIcon} alt='FireStore icon'className='icon'/>
                            <span>FireStore</span>                            
                        </li>
                    </ul>
                </div>
                <div className='other techs'>
                    <h3>Tools</h3>
                    <ul>
                        <li>
                            <img src={WebpackIcon} alt='webpack icon' className='icon'/>
                            <span>Webpack</span>                            
                        </li>
                        <li>
                            <img src={FireBaseIcon} alt='Firebase icon'className='icon'/>
                            <span>Firebase</span>                            
                        </li>
                        <li>
                            <img src={GitIcon} alt='Git icon'className='icon'/>
                            <span>Git</span>                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Technologies };