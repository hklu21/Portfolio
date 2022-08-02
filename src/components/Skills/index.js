import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {
    faPython,
    faJs,
    faJava,
    faGolang,
    faSwift,
    faHtml5,
    faCss3,
    faSass,
    faReact,
    faNodeJs,
    faAngular,
    faAws,
    faLinux,
    faGit,
    faDocker,
    faUbuntu,
    faMarkdown,
    faBootstrap,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skill-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['T', 'e', 'c', 'h', 'n', 'i', 'c', 'a', 'l', ' ',
                'S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <div className='skill'>
            <div className='skill-info'>
                <h2 className='skill-name'>Programming Languages</h2>
                <br></br>
                <br></br>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faPython} color="#28A4D9" />
                    <h3 className='language'>Python,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faJs} color="#28A4D9" />
                    <h3 className='language'>JavaScript,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faJava} color="#28A4D9" />
                    <h3 className='language'>Java,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faGolang} color="#28A4D9" />
                    <h3 className='language'>Golang,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faSwift} color="#28A4D9" />
                    <h3 className='language'>Swift,</h3>
                </div>
                <br></br>
                <br></br>
                <div className='language'>
                    <h3 className='language'>C/C++,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>SQL,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Matlab,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Shell,</h3>
                </div>
            </div>
            <div className="stage-cube-cont-skill">
                <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faJava} color="#DD0031" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faJs} color="#F06529" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faPython} color="#28A4D9" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faSwift} color="#F06529" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faGolang} color="#5ED4F4" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faPython} color="#28A4D9" />
                </div>
                </div>
            </div>
          </div>
          <br></br>
          <div className='skill'>
            <div className='skill-info'>
                <h2 className='skill-name'>Web Related:</h2>
                <br></br>
                <br></br>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faReact} color="#28A4D9" />
                    <h3 className='language'>React,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Redux,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>React Native,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faNodeJs} color="#28A4D9" />
                    <h3 className='language'>NodeJs,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Express,</h3>
                </div>
                <br></br>
                <br></br>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faHtml5} color="#28A4D9" />
                    <h3 className='language'>HTML5,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faCss3} color="#28A4D9" />
                    <h3 className='language'>CSS3,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faSass} color="#28A4D9" />
                    <h3 className='language'>Sass,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faBootstrap} color="#28A4D9" />
                    <h3 className='language'>Bootstrap,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faAngular} color="#28A4D9" />
                    <h3 className='language'>Angular,</h3>
                </div>
            </div>
            <div className="stage-cube-cont-skill">
                <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faCss3} color="#F06529" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faReact} color="#28A4D9" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faBootstrap} color="#aa00ff" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faSass} color="#FF3383" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
                </div>
                </div>
            </div>
          </div>
          <div className='skill'>
            <div className='skill-info'>
                <h2 className='skill-name'>Python Related:</h2>
                <br></br>
                <br></br>
                <div className='language'>
                    <h3 className='language'>Flask,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Django,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Tkinter,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>PyGame,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Bottle,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>PySpark,</h3>
                </div>
                <br></br>
                <br></br>
                <div className='language'>
                    <h3 className='language'>Numpy,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Pandas,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Faker,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Pytorch,</h3>
                </div>
            </div>
            <div className="stage-cube-cont-skill">
                <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faAws} color="#F06529" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faUbuntu} color="#5ED4F4" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faGit} color="gray" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faMarkdown} color="#EFD81D" />
                </div>
                </div>
            </div>
          </div>
          <div className='skill'>
            <div className='skill-info'>
                <h2 className='skill-name'>Databases:</h2>
                <br></br>
                <br></br>
                <div className='language'>
                    <h3 className='language'>DynamoDB,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>MongoDB,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>MySQL,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Firebase,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Sqlite,</h3>
                </div>
            </div>
            
          </div>

          <div className='skill'>
            <div className='skill-info'>
                <h2 className='skill-name'>Other Tools:</h2>
                <br></br>
                <br></br>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faAws} color="#28A4D9" />
                    <h3 className='language'>AWS,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faGit} color="#28A4D9" />
                    <h3 className='language'>Git,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faDocker} color="#28A4D9" />
                    <h3 className='language'>Docker,</h3>
                </div>
                <div className='language'>
                    <FontAwesomeIcon className='language-icon' icon={faLinux} color="#28A4D9" />
                    <h3 className='language'>Linux,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Heroku,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Netlify,</h3>
                </div>
                <br></br>
                <br></br>
                <div className='language'>
                    <h3 className='language'>Postman,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Hadoop,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>VirtualBox,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Wireshark,</h3>
                </div>
                <div className='language'>
                    <h3 className='language'>Gdb,</h3>
                </div>
            </div>
          </div>

        </div>
        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills