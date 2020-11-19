import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { DotPulse } from './ThreeDots/ThreeDots';

import LinkedinIcon from '../icons/icons8-linkedin.svg';
import GithubIcon from '../icons/icons8-github.svg';


const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

const animationTyping = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0}
}

const messages = [
    [`Hello World!`, 500],
    [`I'm Nima, a software developer from Toronto`, 800],
    [`Want something built? Improved? Collaborate on a project? Invest in an idea that could change the world?`, 1200],
    [`Or just chat about anything?`, 1600],
];

const icons = [
    {
        href: 'https://github.com/nima-m-git',
        src: GithubIcon,
        alt: 'Github icon',
        delay: 1000,
    },
    {
        href: 'https://www.linkedin.com/in/nima-mirzaei/',
        src: LinkedinIcon,
        alt: 'Linkedin icon',
        delay: 1500,
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
            <div className='avatar'>
                <span role="img" aria-label="Nima's avatar">😎</span>
            </div>
            <div className='messages'>
                <AnimatePresence initial={false}>
                    {displayMessages.map((message, index) => (
                        <motion.div
                            key={index}
                            variants={animationProps}
                            initial='initial'
                            animate='animate'
                            >
                            <div className='message'>
                                {message}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <AnimatePresence>
                    {messageQueue.length &&
                        <motion.div
                            variants={animationTyping}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className='typingIndicator'
                        >
                            {/* animate */}
                            <DotPulse/>
                        </motion.div>
                    }
                </AnimatePresence>
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