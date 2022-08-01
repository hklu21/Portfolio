import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Hypergryph from '../../assets/images/hypergryph.png'
import './index.scss'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['I', 'n', 't', 'e', 'r', 'n', 's', 'h', 'i', 'p', 
                ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>
          <div className='experience'>
            <div className='experience-info'>
                <img
                    className='hypergryph'
                    src={Hypergryph}
                    alt="Hypergryph"
                />
                <h2 className='company-name'>HYPERGRYPH</h2>
                <br></br>
                <br></br>
                <p className='time'>Sep 2020 - Dec 2020</p>
                <p className='address' >Shanghai, China</p>
                <br></br>
                <br></br>
                <br></br>
                <label>Position:</label>
                <h3 className='degree'>Software Engineer</h3>
                <br></br>
                <br></br>
                <br></br>
                <label><b>About the Company:</b></label>
                <br></br>
                <p className='company'>
                    <a href='https://www.hypergryph.com/'>HYPERGRYPH</a> is a young 
                    and energetic game company with great potential. The company was 
                    established in Shanghai, China in 2017. One of its works:  
                    <a href='https://ak.hypergryph.com/#'>  Arknights</a>, is among the 
                    most popular mobile games in Chinese mainland since it came to the world
                    in May, 2019.
                </p>
                <br></br>
                <br></br>
                <br></br>
                <label><b>Job Description:</b></label>
                <br></br>
                <p className='jd'><b className='head'>·</b> Worked with teammates to 
                    provide solutions to decrease illegal users of our product by 
                    more than 50% in a season. Built data-driven model to support the company's decision.
                </p>
                <br></br>
                <p className='jd'><b className='head'>·</b> Applied and unsupervised learning algorithms (K-means, Clustering) 
                    and feature learning methods to classify legal and illegal users using <b>Spark</b>(PySpark).
                </p>
                <br></br>
                <p className='jd'><b className='head'>·</b> Wrote <b>Shell</b> and <b>Python</b> script to parse JSON data. 
                    Processed data screening using Python's <b>Numpy</b> and <b>Pandas</b>. Improved
                    the efficiency of our machine-learning model by by more than 25%.
                </p>
                <br></br>
                <p className='jd'><b className='head'>·</b> Designed efficient <b>SQL</b> queries on <b>MySQL</b> server on TB-level data.
                </p>
                <br></br>
                <p className='jd'><b className='head'>·</b> Wrote Python scripts for daily auto-test to monitoring sensitive tags of data.
                </p>
            </div>
          </div>

        </div>
        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience