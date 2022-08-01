import './index.scss'
import LogoS from '../../assets/images/LHK.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faUser, faEnvelope, faSuitcase, faSchool, faLaptop, faBuildingUser} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="education-link" to="/education">
          <FontAwesomeIcon icon={faSchool} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faLaptop} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="experience-link" to="/experience">
          <FontAwesomeIcon icon={faBuildingUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/hengkuan-lu-9b480b22a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/hklu21"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar