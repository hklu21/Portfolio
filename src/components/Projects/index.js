import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import P1 from '../../assets/images/shot_1.1.png'
import P2 from '../../assets/images/shot_2.1.png'
import P3_1 from '../../assets/images/shot_3.1.png'
import P3_2 from '../../assets/images/shot_3.2.png'
import P3_3 from '../../assets/images/shot_3.3.png'
import P5_1 from '../../assets/images/shot_5.1.png'
import P5_2 from '../../assets/images/shot_5.2.png'
import P5_3 from '../../assets/images/shot_5.3.png'
import P6_1 from '../../assets/images/shot_6.1.png'
import P6_2 from '../../assets/images/shot_6.2.png'
import P6_3 from '../../assets/images/shot_6.3.png'



const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div className='projects'>
            <div className='projects-info'>
                <div className='project-name'>
                    <h2 className='company-name'>Online Chat Rooms</h2>
                    <p className='des'>Full-Stack Web Application</p>
                </div>
                <br></br>
                <div className='project-description'>
                    <label><b>Project Description:</b></label>
                    <br></br>
                    <p className='pd'>
                        This is a chat app build with <b>React/Redux</b>, <b>Flask</b>, <b>SocketIO</b> and <b>MongoDB</b>.
                        After registration and logging in, one can view or edit his/her own profile, can view the list
                        of exist rooms and choose one to join, or can create a new room with specified topic and 
                        maximum number of poeple it can hold at a time. After joining a room, one can chat with
                        other poeple who are in the same room, can see the chatting history of the room of 
                        all the time, and can check the list of users currently in the room and view their profiles.
                    </p>
                    <br></br>
                    <p className='jd'><a href='https://github.com/hklu21/ReduxChatApp'>source code</a></p>
                    <p className='jd'><a href='https://hklu-chat-rooms.herokuapp.com/home'>live demo</a></p>
                </div>
                <br></br>
                <div className='project-steps'>
                    <label><b>Main Steps:</b></label>
                    <br></br>
                    <p className='jd'>1. Constructed front-end using <b>React/Redux</b> in <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>. 
                        Built a log-in/registration system using Redux Slice and a nav-bar with React Router.
                    </p>
                    <br></br>
                    <p className='jd'>2. Constructed back-end server with <b>Python Flask</b>(using <b>pymongo</b> to operate with mongoDB). 
                    Developed <b>REST API</b> for CRUD operations to data.
                    </p>
                    <br></br>
                    <p className='jd'>3. Added <b>AJAX</b> for HTTP Post requests. 
                        Displayed a spinner when a page is loading or uploading data.
                    </p>
                    <br></br>
                    <p className='jd'>4. Implemented chat-room functionalities using <b>SocketIO</b> API (applicable to both Falsk and React).
                    </p>
                    <br></br>
                    <p className='jd'>5. Provided APIs to load online users and chat history, and to check rooms' information.
                    </p>
                    <br></br>
                    <p className='jd'>6. Built a <b>Docker</b> image and a container for the application.
                    </p>
                    <br></br>
                    <p className='jd'>7. Deployed the application on <b>Heroku</b>.
                    </p>
                    <br></br>
                    <br></br>
                </div>
                <div className='project-view'>
                    <label><b>Sample View:</b></label>
                    <br></br>
                    <img
                        className='P1'
                        src={P1}
                        alt="P1"
                    />

                </div>
                
            </div>
          </div>
          <div className='projects'>
            <div className='projects-info'>
                <div className='project-name'>
                    <h2 className='company-name'>Easy Canvas</h2>
                    <p className='des'>Full-Stack Web Application</p>
                </div>
                <br></br>
                <div className='project-description'>
                    <label><b>Project Description:</b></label>
                    <br></br>
                    <p className='pd'>
                        This is a Canvas-like web application for students and teachers. Different APIs are designed for
                        different type of users(teacher, student, admin). For example, teachers can assign new assignments, 
                        students can submit assignments, and (only) admins can add new courses to the system and add students to a course.
                        Go to <a href="https://github.com/hklu21/MyCanvas/blob/main/README.md">this page</a> to view the full functionalities of 
                        Easy Canvas.
                        We used <b>React</b> for front-end and <b>Express</b> and sqlite for backend.
                    </p>
                    <br></br>
                    <p className='jd'><a href='https://github.com/hklu21/MyCanvas'>source code</a></p>
                </div>
                <br></br>
                <div className='project-steps'>
                    <label><b>Main Steps:</b></label>
                    <br></br>
                    <p className='jd'>1. Constructed front-end using <b>React</b> in <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>. 
                    </p>
                    <br></br>
                    <p className='jd'>2. Made the contents <b>responsive</b> to page size and availiable on different devices.
                    </p>
                    <br></br>
                    <p className='jd'>3. Constructed back-end server using <b>ExpressJs</b> with <b>Sqlite</b> databases.
                    </p>
                    <br></br>
                    <p className='jd'>4. Developed <b>REST API</b> for CRUD operations to data.
                    </p>
                    <br></br>
                    <p className='jd'>5. Added <b>AJAX</b> for HTTP Post requests. 
                        Designed server APIs for different type of users.
                    </p>
                    <br></br>
                    <p className='jd'>6. Created a live demo video for the application. (availiable on the source code page)
                    </p>
                    <br></br>
                    <br></br>
                </div>
                <div className='project-view'>
                    <label><b>Sample View:</b></label>
                    <br></br>
                    <img
                        className='P2'
                        src={P2}
                        alt="P2"
                    />

                </div>
                
            </div>
          </div>
          <div className='projects'>
            <div className='projects-info'>
                <div className='project-name'>
                    <h2 className='company-name'>Genomics Analysis Service</h2>
                    <p className='des'>Software as a Service (SaaS)</p>
                </div>
                <br></br>
                <div className='project-description'>
                    <label><b>Project Description:</b></label>
                    <br></br>
                    <p className='pd'>
                        This is a web service deployed on <b>AWS</b> for users to run programs performing annotations of genome sample. 
                        Users can upload input files from local devices and then the service will run annotation code, when the tasks is 
                        completed, the server will inform users by sending an email. Annotation is a process by which a sequenced genome 
                        sample is analyzed to identify the locations of genes and all of the coding regions in a genome, and determine 
                        what those genes do. (view <a href="https://www.ncbi.nlm.nih.gov/books/NBK20253/">this page</a> for explicit
                        definition about the science).
                    </p>
                    <br></br>
                    <p className='jd'><a href='https://github.com/hklu21/Genomics-Analysis-Service'>source code</a></p>
                </div>
                <br></br>
                <div className='project-steps'>
                    <label><b>Main Steps:</b></label>
                    <br></br>
                    <p className='jd'>1. Constructed front-end using <b>Bootstrap</b> in <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>. 
                        Deployed log-in system via <b>Globus Auth</b>.
                    </p>
                    <br></br>
                    <p className='jd'>2. Constructed back-end server with <b>Python Falsk</b> to run the annotation codes when a annotation
                        is requested from the client side. Developed <b>REST API</b> for CRUD operations to data.
                    </p>
                    <br></br>
                    <p className='jd'>3. Created <b>EC2</b> instances for web server and annotation server. Created <b>S3</b> buckets for input and output files.
                    Stored annotations data on <b>DynamoDB</b> and used <b>SQLAlchemy</b> and <b>Alembic</b> to manage users database.
                    </p>
                    <br></br>
                    <p className='jd'>4.Connected the front-end and back-end, web server and annation server using <b>SNS</b> topic and <b>SQS</b> message queue.
                    Triggered a Lambda function to send a reminding email when an annotation job is completed.
                    </p>
                    <br></br>
                    <p className='jd'>5. Archived the result files of free users to <b>Glacier vault</b> and restore them to S3 buckets when one upgrades to premium.
                    </p>
                    <br></br>
                    <p className='jd'>6. Added a load-balancer(<b>ELB</b>) for the web server.
                    </p>
                    <br></br>
                    <p className='jd'>7. Added auto sacling rules to all servers using <b>CloudWatch</b>.
                    </p>
                    <br></br>
                    <p className='jd'>8. Substituted the default Flask WSGI server with the <b>Gunicorn</b> server.
                    </p>
                    <br></br>
                    <br></br>
                </div>
                <div className='project-view'>
                    <label><b>Sample View:</b></label>
                    <br></br>
                    <img
                        className='P3'
                        src={P3_2}
                        alt="P3"
                    />
                    <img
                        className='P3'
                        src={P3_1}
                        alt="P3"
                    />
                    <img
                        className='P3'
                        src={P3_3}
                        alt="P3"
                    />
                    

                </div>
                
            </div>
          </div>
          <div className='projects'>
            <div className='projects-info'>
                <div className='project-name'>
                    <h2 className='company-name'>Golite Compiler</h2>
                    <p className='des'>Compiler</p>
                </div>
                <br></br>
                <div className='project-description'>
                    <label><b>Project Description:</b></label>
                    <br></br>
                    <p className='pd'>
                        This is a compiler for a language called Golite (a "tiny Go") built with <b>Golang</b>. 
                        The compiler runs in linear time to the text length of the original codes and generates ARM assembly code.
                        Go <a href='https://classes.cs.uchicago.edu/archive/2021/fall/51300-1/assignments/overview/index.html'>here</a> to check its grammar and semantics.
                    </p>
                    
                    <br></br>
                    <p className='jd'><a href='https://github.com/hklu21/GoLite-Compiler'>source code</a></p>
                </div>
                <br></br>
                <div className='project-steps'>
                    <label><b>Main Steps:</b></label>
                    <br></br>
                    <p className='jd'>1. Drew DFA of Golite using <b>Mermaid</b>. Designed a scanner for <b>lexical analysis</b>.
                    </p>
                    <br></br>
                    <p className='jd'>2. Applied the Abstract Syntax Tree data structure on the passer
                        for <b>syntactical analysis</b> and on the <b>semantic analysis</b>.
                    </p>
                    <br></br>
                    <p className='jd'>3. Implemented the transformation of Intermediate Representation(<b>IR</b> to <b>ILOC</b>)
                    </p>
                    <br></br>
                    <p className='jd'>4. Completed the code generation phase (ILOC to <b>ARM</b> assembly code).
                    </p>
                    <br></br>
                    <br></br>
                </div>
            </div>
          </div>
          <div className='projects'>
            <div className='projects-info'>
                <div className='project-name'>
                    <h2 className='company-name'>Python Projects</h2>
                </div>
                <br></br>
                <div className='project-description'>
                    <br></br>
                    <p className='pd'>
                        Below is a list of some Python application built with Python GUI framworks such as <b>Tkinter</b>, <b>PyQt5</b>, <b>PyGame</b>.
                        All the applications are distributed by <b>PyInstaller</b>. (Click to check source codes)
                    </p>
                    <br></br>
                </div>
                <br></br>
                <div className='projects-view'>
                    <div className="image-box" key='cc'>
                        <img 
                        src={P5_1}
                        className="portfolio-image"
                        alt="portfolio" />
                        <div className="content">
                            <h3 className="title">Currency-Converter</h3>
                            <h4 className="description"> A responsive currency converter(based on ERU) GUI built with Tkinter.</h4>
                            <button
                                className="btn"
                                onClick={() => window.open('https://github.com/hklu21/Python-Projects/tree/main/Currency_Converter')}
                            >Source Code</button>
                        </div>
                    </div>
                    <div className="image-box" key='rps'>
                        <img 
                        src={P5_2}
                        className="portfolio-image"
                        alt="portfolio" />
                        <div className="content">
                            <h3 className="title">Rock-Paper-Scissors</h3>
                            <h4 className="description">A simple Rock-Paper-Scissors game GUI built with Tkinter.</h4>
                            <button
                                className="btn"
                                onClick={() => window.open('https://github.com/hklu21/Python-Projects/tree/main/Rock_Paper_Scissors')}
                            >Source Code</button>
                        </div>
                    </div>

                    <div className="image-box" key='sg'>
                        <img 
                        src={P5_3}
                        className="portfolio-image"
                        alt="portfolio" />
                        <div className="content">
                            <h3 className="title">Snake Game</h3>
                            <h4 className="description">A classical Snake game built with Pygame and Tkinter</h4>
                            <button
                                className="btn"
                                onClick={() => window.open('https://github.com/hklu21/Python-Projects/tree/main/Snake_Game')}
                            >Source Code</button>
                        </div>
                    </div>

                </div>
                
            </div>
          </div>
          <div className='projects'>
            <div className='projects-info'>
                <div className='project-name'>
                    <h2 className='company-name'>iOS Applications</h2>
                </div>
                <br></br>
                <div className='project-description'>
                    <br></br>
                    <p className='pd'>
                        Below is a list of some iOS applications built with <b>Swift</b>. (Click to check source codes)
                    </p>
                    <br></br>
                </div>
                <br></br>
                <div className='projects-view'>
                    <div className="image-box" key='cc'>
                        <img 
                        src={P6_1}
                        className="portfolio-image"
                        alt="portfolio" />
                        <div className="content">
                            <h3 className="title">Gomoku Game</h3>
                            <h4 className="description">
                                1. Supported archive of unfinished games. 
                            </h4>
                            <h4 className="description">
                                2. Allowed time limit of each turn and regret of moves.
                            </h4>
                            <h4 className="description">
                                3. Enabled multi-players: several players can compete with each other by their points in a serial of games.
                            </h4>
                            <button
                                className="btn"
                                onClick={() => window.open('https://github.com/hklu21/iOS/tree/main/Gomoku')}
                            >Source Code</button>
                        </div>
                    </div>
                    <div className="image-box" key='rps'>
                        <img 
                        src={P6_2}
                        className="portfolio-image"
                        alt="portfolio" />
                        <div className="content">
                            <h3 className="title">Tic Tac Toe</h3>
                            <h4 className="description">An iOS app to play the Tic Tac Toe game.</h4>
                            <button
                                className="btn"
                                onClick={() => window.open('https://github.com/hklu21/iOS/tree/main/TicTacToe')}
                            >Source Code</button>
                        </div>
                    </div>

                    <div className="image-box" key='sg'>
                        <img 
                        src={P6_3}
                        className="portfolio-image"
                        alt="portfolio" />
                        <div className="content">
                            <h3 className="title">Github Fetcher</h3>
                            <h4 className="description">An iOS app to fetch github issues(both open and closed ones).</h4>
                            <button
                                className="btn"
                                onClick={() => window.open('https://github.com/hklu21/iOS/tree/main/Get%20Issues')}
                            >Source Code</button>
                        </div>
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

export default Projects