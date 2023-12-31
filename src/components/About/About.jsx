import React from "react"
import "./about.scss"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <h1 className="about__title">About Me</h1>
        <p className="about__text">
          From the moment I was able to finish my first project, I knew I was
          hooked into the world of web development. Web development has never
          been "just a passion" for me.It has offered an engaging challenge to
          continuously learn and improve my skills in creating better websites
          or web apps.
        </p>
        <p>
          What started with just a curiosity of building something has become a
          full-fledged passion that only makes me more interested as the years
          go by.
        </p>
        <p>
          I am a motivated developer with skills in HTML5, CSS3, Sass,
          JavaScript, Bootstrap, React, Next.js,
          MongoDB. I’m also confident with backend frameworks like Node.js, Express.js
          , API.
        </p>
      </div>
    </section>
  )
}
export default About
