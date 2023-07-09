import React from "react"
import {
  FaGithub,
  FaLinkedin,

  FaInstagram,
} from "react-icons/fa"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <ul>
          <li>
            <a href="https://github.com/Atharw318/" target="blank">
              <FaGithub className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/durgeshkumar384/"
              target="blank"
            >
              <FaLinkedin className="icon" />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer__text">Built by Santosh Kumar</p>
    </footer>
  )
}

export default Footer
