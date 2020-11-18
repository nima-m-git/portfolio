import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import LinkedinIcon from '../icons/icons8-linkedin.svg';
import GithubIcon from '../icons/icons8-github.svg';


const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

const messages = [
    [`Hello World!`, 500],
    [`I'm Nima, a software developer from Toronto`, 800],
    [`Want something built? Improved?`, 1200],
    [`Collaborate on a project? Invest in an idea that could change the world?`, 1400],
    [`Or just chat about anything?`, 1600],
];

const icons = [
    {
        href: 'https://github.com/nima-m-git',
        src: GithubIcon,
        alt: 'Github icon',
        delay: 500,
    },
    {
        href: 'https://www.linkedin.com/in/nima-mirzaei/',
        src: LinkedinIcon,
        alt: 'Linkedin icon',
        delay: 1000,
    },
]


const Home = () => {
    let messageQueue = messages;
    const [displayMessages, setDisplayMessages] = useState([]);

    useEffect(() => {
        if (!messageQueue.length) { 
            return 
        }

        const [nextMessage, delay] = messageQueue.shift();

        const timer = setTimeout(() => {
            setDisplayMessages([...displayMessages, nextMessage]);
        }, delay);

        return () => clearTimeout(timer)
    })

    return (
        <div className='home container'>
            <div className='messageBox info'>
                <div className='messages'>
                    <AnimatePresence initial={false}>
                        {displayMessages.map((message, index) => (
                            <motion.div
                                key={index}
                                variants={animationProps}
                                initial='initial'
                                animate='animate'
                                >
                                {message}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <AnimatePresence>
                        {messageQueue &&
                            <motion.div>
                                {/* animate */}
                                ... 
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
                <div className='social'>
                    <AnimatePresence>
                        {!messageQueue.length && 
                            icons.map(({href, src, alt, delay}, index) =>(
                                <motion.div
                                    key={index}
                                    variants={animationProps}
                                    initial='initial'
                                    animate='animate'
                                    transition={delay}
                                >
                                    <a href={href}>
                                        <img src={src} alt={alt} className='icon'></img>
                                    </a>
                                </motion.div>
                            ))
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}


export default Home;