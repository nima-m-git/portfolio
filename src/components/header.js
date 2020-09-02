import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to='/'><h1 className='logo'>Neemz</h1></Link>
                <ul className='nav-links'>
                    <Link className='nav-item' to='/about'>About</Link>
                    <Link className='nav-item' to='/portfolio'>Portfolio</Link>
                    <Link className='nav-item' to='/contact'>Contact</Link>
                </ul>
            </nav>
        </header>
    )
}  

export default withRouter(Header);