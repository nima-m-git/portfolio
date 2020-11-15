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
                        I'm Nima, <span className='load-3'>a software developer from Toronto.</span>
                    </p>
                    <p className='load-4'>
                        Want something built? <span className='load-5'>Improved? </span>
                        <br></br><span className='load-6'>Collaborate on a project? </span>
                        <br></br><span className='load-7'>Invest in an idea that could change the world?</span>
                        <br></br> <span className='load-8'>Or just chat about anything.</span>
                    </p>
                    <p className='load-9'>
                        <a href='/contact'> Reach out</a>
                    </p>
                    <ul className='load-10 social'>
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