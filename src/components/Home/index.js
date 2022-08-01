import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitleH from '../../assets/images/H.png'
import LogoTitleL from '../../assets/images/L.png'
import LogoUchicago from '../../assets/images/uchicago.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['e', 'n', 'g', 'k', 'u', 'a', 'n']
  const programArray = [
    'U', 'c', 'h', 'i', 'c', 'a', 'g', 'o',

    ' ', 
    'M', 'P', 'C', 'S'
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              className='H'
              src={LogoTitleH}
              alt="H"
            />
            <AnimatedLetters
              className="my-name"
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <img
              src={LogoTitleL}
              alt="L"
            />
            <span className={`${letterClass} _14`}>u</span>
            <br />
            <span className={`${letterClass} _14`}>f</span>
            <span className={`${letterClass} _14`}>r</span>
            <span className={`${letterClass} _14`}>o</span>
            <span className={`${letterClass} _14`}>m</span>
            <img
              className='uchicago'
              src={LogoUchicago}
              alt="uchicago"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={programArray}
              idx={22}
            />
          </h1>
          <h2>MS in Computer Science / new Grad</h2>
          <p>
            I'm a gradauting student looking for a role of Software Engineer / Front-End Developer / Back-End Developer / Web Developer / Python Developer 
            with the opportunity to work with the latest
            technologies on challenging and diverse projects in a passionate team.
          </p>
          <p align="LEFT">
            I am currently pursuing my <b>MS</b> degree in <b>Computer Science</b> at <b>the University of Chicago</b> (expected by Dec, 2022).
            I have concrete foundations in Computer Science and Mathematics, I have strong engineering capability with elegant coing styles.
          </p>
          <p>
            I'm a thirst learner, keeping learning and being curious to refresh my mind. 
            I am a team worker, feeling excited to see my own part well-performed and highly compatible to others. 
            I am also a deadline keeper, always trying to finish tasks earlier than what I have promised. 
          </p>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo className="name"/>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home