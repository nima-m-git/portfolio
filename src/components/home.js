import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { DotPulse } from './ThreeDots/ThreeDots';

import LinkedinIcon from '../icons/icons8-linkedin.svg';
import GithubIcon from '../icons/icons8-github.svg';
import ContactIcon from '../icons/icons8-messages.svg';

const animationProps = {
  initial: {
    opacity: 0,
    translateY: 40,
  },
  animate: {
    opacity: 1,
    translateY: 0,
  },
};

const animationTyping = {
  initial: {
    opacity: 0,
    translateY: 20,
  },
  animate: {
    opacity: 1,
    translateY: 0,
  },
  exit: {
    opacity: 0,
    translateY: -20,
  },
};

const messages = [
  [`Hello World!`, 1000],
  [`I'm Nima, a software developer from Toronto`, 1300],
  [
    `Want something built? Improved? Collaborate on a project? Invest in an idea that could change the world?`,
    2000,
  ],
  [`Or just chat about anything?`, 2300],
];

const icons = [
  {
    href: 'https://github.com/nima-m-git',
    src: GithubIcon,
    alt: 'Github icon',
    delay: 0.7,
  },
  {
    href: 'https://www.linkedin.com/in/nima-mirzaei/',
    src: LinkedinIcon,
    alt: 'Linkedin icon',
    delay: 1,
  },
  {
    href: '/contact',
    src: ContactIcon,
    alt: 'Contact icon',
    delay: 1.3,
  },
];

const Home = () => {
  const [messageQueue, setMessageQueue] = useState(messages);
  const [displayMessages, setDisplayMessages] = useState([]);

  useEffect(() => {
    if (!messageQueue.length) {
      return;
    }

    const queueCopy = [...messageQueue];
    const [nextMessage, delay] = queueCopy.shift();

    const timer = setTimeout(() => {
      setDisplayMessages([...displayMessages, nextMessage]);
      setMessageQueue([...queueCopy]);
    }, delay);

    return () => clearTimeout(timer);
  }, [messageQueue, displayMessages]);

  return (
    <div className="home container">
      <div className="avatar">{/* <img src=''></img> */}</div>
      <div className="messages">
        <AnimatePresence initial={false}>
          {displayMessages.map((message, index) => (
            <motion.div key={index} variants={animationProps} initial="initial" animate="animate">
              <div className="message">{message}</div>
            </motion.div>
          ))}
        </AnimatePresence>
        <AnimatePresence>
          {messageQueue.length && (
            <motion.div
              variants={animationTyping}
              initial="initial"
              animate="animate"
              exit="exit"
              className="typingIndicator"
            >
              {/* animate */}
              <DotPulse />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="social">
          <AnimatePresence>
            {!messageQueue.length &&
              icons.map(({ href, src, alt, delay }, index) => (
                <motion.div
                  key={index}
                  variants={animationProps}
                  initial="initial"
                  animate="animate"
                  transition={{ delay }}
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <img src={src} alt={alt} className="icon"></img>
                  </a>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Home;
