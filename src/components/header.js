import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <h1 className='logo'>Neemz</h1>
                <ul className='nav-links'>
                    <li className='nav-item'><a href='#'>About</a></li>
                    <li className='nav-item'><a href='#'>Portfolio</a></li>
                    <li className='nav-item'><a href='#'>Contact me</a></li>
                </ul>
            </nav>
        </header>
    )
}  

export { Header }