import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import React, { useEffect, useState } from 'react'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);



  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
        <AnimatedLetters
        letterClass={letterClass}
          strArray={['A','b','o','u','t','- ','m','e']}
          idx={15}
        />

        </h1>

        <p> Hello, I'm Roshan! I am a software engineering undergraduate student at the Open University of Sri Lanka🎓. I specialize in Designing and Developing Websites 💻 . My deep passion for technology and relentless curiosity drive me to explore the ever-evolving world of software development continually.</p>

        <p>
        I'm actively seeking internship opportunities to apply my knowledge and gain practical experience in the software industry. If you're looking for a motivated and dedicated software engineering student to join your team or collaborate on a project, please feel free to reach out to me. I'm always open to new challenges and opportunities.
        </p>

      </div>
    </div>

    <Loader type='pacman'/>
    </>
  )
}

export default About