import React from "react";
import TestimonialCarousel from "./carousel/TestimonialCarousel";

function MainWrapper() {
  const skills = [
    {
      title: "Vanilla JavaScript",
      description:
        "List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
      icons: ["fab fa-square-js"],
    },
    {
      title: "Angular, React & Vue",
      description:
        "List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
      icons: ["fab fa-angular", "fab fa-react", "fab fa-vuejs"],
    },
    {
      title: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine for building fast and scalable network applications.",
      icons: ["fab fa-node"],
    },
    {
      title: "Python & Django",
      description:
        "Python for general-purpose programming, and Django for building powerful web applications.",
      icons: ["fab fa-python", "fab fa-django"],
    },
    {
      title: "PHP",
      description:
        "A popular general-purpose scripting language that is especially suited to web development.",
      icons: ["fab fa-php"],
    },
    {
      title: "npm, Gulp & Grunt",
      description:
        "Tools for managing dependencies, automating tasks, and optimizing build processes.",
      icons: ["fab fa-npm", "fab fa-gulp", "fab fa-grunt"],
    },
    {
      title: "HTML & CSS",
      description:
        "The fundamental building blocks of web development: HTML for structure and CSS for styling.",
      icons: ["fab fa-html5", "fab fa-css3-alt"],
    },
    {
      title: "Sass & LESS",
      description:
        "CSS preprocessors that extend CSS with variables, nested rules, and mixins for more powerful styles.",
      icons: ["fab fa-sass", "fab fa-less"],
    },
    {
      title: " Bootstrap",
      description:
        "Bootstrap components built with React, for faster and easier web development.",
      icons: ["fab fa-bootstrap"],
    },
    {
      title: "React & Angular.js",
      description:
        "React for building user interfaces and Next.js for server-side rendering and static site generation.",
      icons: ["fab fa-react", "fa-brands fa-angular"], // Add more icons if needed
    },
  ];

  const SkillsList = () => {
    return (
      <div className="row">
        {skills.map((skill, index) => (
          <div className="item col-6 col-lg-3" key={index}>
            <div className="item-inner">
              <div className="item-icon">
                {skill.icons.map((icon, i) => (
                  <svg
                    key={i}
                    className={`svg-inline--fa ${icon}`}
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path fill="currentColor" d="..." />{" "}
                    {/* Add appropriate paths here for icons */}
                  </svg>
                ))}
              </div>
              <h3 className="item-title">{skill.title}</h3>
              <div className="item-desc">{skill.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="main-wrapper">
      <section className="about-me-section p-3 p-lg-5 theme-bg-light">
        <div className="container">
          <div className="profile-teaser row">
            <div className="col">
              <h2 className="name font-weight-bold mb-1">Simon Doe</h2>
              <div className="tagline mb-3">Senior Software Engineer</div>
              <div className="bio mb-4">
                I'm a software engineer specialised in frontend and backend
                development for complex scalable web apps. I write about
                software development on{" "}
                <a className="text-link" href="blog-home.html">
                  my blog
                </a>
                . Want to know how I may help your project? Check out my project{" "}
                <a className="text-link" href="project.html">
                  portfolio
                </a>{" "}
                and{" "}
                <a className="text-link" href="resume.html">
                  online resume
                </a>
                .
              </div>
              {/* <!--//bio--> */}
              <div className="mb-4">
                <a className="btn btn-primary me-2 mb-3" href="portfolio.html">
                  <svg
                    className="svg-inline--fa fa-circle-right me-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"
                    ></path>
                  </svg>
                  <span className="d-none d-md-inline">View</span> Portfolio
                </a>
                <a className="btn btn-secondary mb-3" href="resume.html">
                  <svg
                    className="svg-inline--fa fa-file-lines me-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="file-lines"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                    ></path>
                  </svg>
                  <span className="d-none d-md-inline">View</span> Resume
                </a>
              </div>
            </div>
            {/* <!--//col--> */}

            <div className="col-md-5 col-lg-5">
              <img
                className="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
                src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/profile-lg.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!--//about-me-section--> */}
      <section className="overview-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-3">What I do</h2>
          <div className="section-intro mb-5">
            I have more than 10 years' experience building software for clients
            all over the world. Below is a quick overview of my main technical
            skill sets and technologies I use. Want to find out more about my
            experience? Check out my{" "}
            <a className="text-link" href="resume.html">
              online resume
            </a>{" "}
            and{" "}
            <a className="text-link" href="portfolio.html">
              project portfolio
            </a>
            .
          </div>
          <SkillsList />
          <div className="text-center py-3">
            <a href="services.html" className="btn btn-primary">
            <i class="fas fa-arrow-alt-circle-right me-2"></i>
              Services & Pricing
            </a>
          </div>
        </div>
        {/* <!--//container--> */}
      </section>
      <div className="container">
        <hr />
      </div>
      {/* <TestimonialCarousel/> */}
      <section className="testimonials-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">Testimonials</h2>

          <div className="testiomonial-carousel-container">
            <TestimonialCarousel />
            {/* <!--//testimonial-carousel-->	 */}
          </div>
          {/* <!--//testimonial-carousel-container-->	 */}
        </div>
        {/* <!--//container--> */}
      </section>
      <div class="container"><hr/></div>
     
     
    </div>
  );
}

export default MainWrapper;
