import React from "react"
import "./links.scss"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"

const Links = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <a href="https://github.com/Atharw318" target="blank">
            <FaGithub className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/santosh-kumar-2a2995278/" target="blank">
            <FaLinkedin className="icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Links
