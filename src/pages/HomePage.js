import React from "react";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <>
      {/* <!-- NAV --> */}


      {/* <!-- HERO --> */}
        <YouTubeEmbed videoId="JPSS5BHrY0Y" useBorder/>


      <section className="Hero border-solid texture-noise2 background-light">
        <div className="Hero-header">
          <div className="Headline-text">
          <Link to='/projects'><p> Software Engineer</p></Link>
          <Link to='/videos?role=Animator'><p> Motion Designer</p></Link>
          <Link to='/videos?role=Director'><p> Creative Consultant</p></Link>
          </div>
        </div>


        <div className="Socials columns-2">
          <a href="https://github.com/StuFleisher" target="_blank" rel="noreferrer">
            <div className="Socials-card texture-noise1 background-accent2">
              <i className="fa-brands fa-github"></i>
            </div>
          </a>
          <a href="https://medium.com/@stufleisher" target="_blank" rel="noreferrer">
            <div className="Socials-card texture-waves-accent1">
              <i className="fa-brands fa-medium"></i>
            </div>
          </a>
          <a href="https://linkedin.com/in/StuFleisher" target="_blank" rel="noreferrer">
            <div className="Socials-card background-white ">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </a>
          <a href="mailto:stufleisher@gmail.com" target="_blank" rel="noreferrer">
            <div className="Socials-card background-accent1 ">
              <i className="fa-solid fa-envelope"></i>
            </div>
          </a>
        </div>
      </section>

      {/* <section className="Headline texture-noise2 background-light border-solid">
        <div className="Headline-text">
          <Link to='/projects?filter=animator'><p> Motion Designer</p></Link>
          <p> Creative Director</p>
          <p> Software Engineer</p>
        </div>
      </section> */}
      <div className="Headline-separator texture-waves-accent1 border-solid"></div>


      {/* <!-- BIO --> */}
      <section id="BioSection" className="About border-solid">
        <div className="ContentCard Bio background-white border-solid">
          <h2 className="textAlign-center">Hi, I'm Stu.</h2>

          <p>I'm a <span className="texture-waves-accent1 highlight "> motion designer</span>, <span className="texture-waves-accent1 highlight ">software engineer</span> and <span className="texture-waves-accent1 highlight ">creative leader</span> with 15 years of experience supporting artists and creatives. In my career I've built projects for some of the world’s most regognizable brands and won industry awards in categories like <span className="texture-waves-accent1 highlight">animation</span>, <span className="texture-waves-accent1 highlight">art direction</span>, <span className="texture-waves-accent1 highlight">copywriting</span> and <span className="texture-waves-accent1 highlight">ad creative.</span> In 2022 I expanded my creative endeavors to the world of web development, designing and building full-stack applications using <span className="texture-waves-accent1 highlight">Typescript</span>, <span className="texture-waves-accent1 highlight">Express</span>, <span className="texture-waves-accent1 highlight">React</span> and <span className="texture-waves-accent1 highlight">Django.</span> I'm passionate about work that supports creative people, projects and teams.</p>
          <p>In my spare time I’m a board-gamer, theatrical improviser, dog-father and neighborhood organizer. </p>
        </div>
        <div className="BgGrid columns-2">
          <div className="texture-noise2 background-accent2 border-solid"></div>
          <div className="texture-waves-light"></div>
          <div className="background-white border-dashed"></div>
          <div className="background-accent1 border-solid"></div>
        </div>
      </section>

      <div className="Headline-separator texture-noise2 background-accent2 border-solid"></div>

      {/* <section id="ProjectsSection" className="Projects texture-waves-light">
      <div className="Projects-headline background-light texture-noise2 border-solid">
        <h2>Projects</h2>
      </div>

      <div className="Headline-separator texture-noise2 background-accent2 border-solid"></div>

    </section> */}

      <section className="Footer">
        <div className="Footer-links">
          <a href="mailto:stufleisher@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-envelope"></i> StuFleisher@gmail.com
          </a>
          <a href="https://github.com/StuFleisher" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i> github.com/StuFleisher
          </a>
          <a href="https://linkedin.com/in/StuFleisher" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i> linkedin.com/in/StuFleisher
          </a>
        </div>
        <div className="Footer-copyright highlight"> Designed and built by Stuart Fleisher <i
          className="fa-regular fa-copyright"></i> 2024</div>
      </section>
    </>
  );
}