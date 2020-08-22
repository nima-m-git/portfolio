import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='logo'><h1>Neemz</h1></div>
            <ul className='redirects'>
                <li><a href=''>About</a></li>
                <li><a href=''>Portfolio</a></li>
                <li><a href=''>Contact me</a></li>
            </ul>
        </header>
    )
}  

export { Header }