import { useEffect, useState } from 'react'
import LogoUchicago1 from '../../assets/images/uchicago.png'
import LogoUchicago2 from '../../assets/images/uchicago2.png'
import LogoFdu1 from '../../assets/images/fdu1.png'
import LogoFdu2 from '../../assets/images/fdu2.png'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Education = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container education-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n', 's']}
              idx={15}
            />
          </h1>
          <div className='education'>
            <div className='education-info'>
                <h2 className='university-name'>The University of Chicago</h2>
                <br></br>
                <br></br>
                <p className='time'>Sep 2021 - Dec 2022 (expected)</p>
                <br></br>
                <br></br>
                <br></br>
                <label>Degree:</label>
                <h3 className='degree'>Master of Science</h3>
                <br></br>
                <br></br>
                <br></br>
                <label>Major:</label>
                <h3>Computer Science</h3>
                <br></br>
                <br></br>
                <br></br>
                <label>Coursework:</label>
                <p>Algorithms,</p>
                <p>Computer Networks,</p>
                <p>Web Development,</p>
                <br></br>
                <p>Data Base,</p>
                <p>Cloud Computing,</p>
                <p>Compilers,</p>
                <p>iOS Development</p>
            </div>
            <div className="stage-cube-cont-edu">
                <div className="cubespinner-schools">
                    <div className="face1">
                        <img
                        className='uchicago'
                        src={LogoUchicago1}
                        alt="uchicago_1"
                        />
                    </div>
                    <div className="face2">
                        <img
                        className='uchicago'
                        src={LogoUchicago2}
                        alt="uchicago_1"
                        />
                    </div>
                    <div className="face4">
                        <img
                        className='uchicago'
                        src={LogoUchicago1}
                        alt="uchicago_2"
                        />
                    </div>
                    <div className="face5">
                        <img
                        className='uchicago'
                        src={LogoUchicago2}
                        alt="uchicago_1"
                        />
                    </div>
                </div>
            </div>
          </div>
          <br></br>
          <div className='education'>
            <div className='education-info'>
                <h2 className='university-name'>Fudan University</h2>
                <br></br>
                <br></br>
                <p className='time'>Sep 2016 - June 2021</p>
                <br></br>
                <br></br>
                <br></br>
                <label>Degree:</label>
                <h3 className='degree'>Bachelor of Engineering</h3>
                <br></br>
                <br></br>
                <br></br>
                <label>Major:</label>
                <h3>Electronic Engineering & Data Science</h3>
                <br></br>
                <br></br>
                <br></br>
                <label>Coursework:</label>
                <p>Computer Architectures,</p>
                <p>Data Structure,</p>
                <p>Big Data Analysis,</p>
                <br></br>
                <p>Machine Learning,</p>
                <p>Artificial Intelligence,</p>
            </div>
          <div className="stage-cube-cont-edu">
          <div className="cubespinner-schools">
            <div className="face1">
                <img
                className='fdu1'
                src={LogoFdu2}
                alt="fdu_1"
                />
            </div>
            <div className="face2">
                <img
                className='fdu1'
                src={LogoFdu1}
                alt="fdu_1"
                />
            </div>
            <div className="face5">
                <img
                className='fdu1'
                src={LogoFdu1}
                alt="fdu_1"
                />
            </div>
            <div className="face4">
                <img
                className='fdu2'
                src={LogoFdu2}
                alt="fdu_2"
                />
            </div>
          </div>
        </div>
            
          </div>

        </div>
        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Education