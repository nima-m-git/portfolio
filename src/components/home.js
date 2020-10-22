import React from 'react';

import LinkedinIcon from '../icons/icons8-linkedin.svg';
import GithubIcon from '../icons/icons8-github.svg';

const Home = () => {
    return (
        <div className='home container'>
            <section className='info'>
                <div>
                    <p className='load-1'>
                        <big>Hello,</big>
                    </p>
                    <p className='load-2'>
                        I'm Nima, a software developer from Toronto.
                    </p>
                    <p className='load-3'>
                        Need something built? Improved? Meaningful insights from data? Collaborate on a project? Invest in an idea that could change the world? 
                        New friend? Chat about anything? 
                    </p>
                    <p className='load-4'>
                        <a href='/contact'> Send me a message</a>
                    </p>
                    <ul className='load-5 social'>
                        <li>
                            <a href='https://github.com/nima-m-git' target='_blank'>
                                <img src={GithubIcon} alt='Github icon'className='icon'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/nima-mirzaei/' target='_blank'>
                            <img src={LinkedinIcon} alt='Linkedin icon'className='icon'/>
                            </a>
                        </li>
                    </ul>
                </div>

            </section>
        </div>
    )
}


export default Home;