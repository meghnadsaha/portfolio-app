// src/About.js
import React from "react";
//npm install react-router-dom

const About = () => {
  return (

    <div className="main-wrapper">

    <section class="about-me-section p-3 p-lg-5 theme-bg-light">
      <div>
        <div class="profile-teaser row">
          <div class="col">
            <h2 class="name font-weight-bold mb-1">Simon Doe</h2>
            <div class="tagline mb-3">Senior Software Engineer</div>
            <div class="bio mb-4">
              I'm a software engineer specialised in frontend and backend
              development for complex scalable web apps. I write about software
              development on{" "}
              <a class="text-link" href="blog-home.html">
                my blog
              </a>
              . Want to know how I may help your project? Check out my project{" "}
              <a class="text-link" href="project.html">
                portfolio
              </a>{" "}
              and{" "}
              <a class="text-link" href="resume.html">
                online resume
              </a>
              .
            </div>
            <div class="mb-4">
              <a class="btn btn-primary me-2 mb-3" href="portfolio.html">
                <svg
                  class="svg-inline--fa fa-circle-right me-2"
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
                <span class="d-none d-md-inline">View</span> Portfolio
              </a>
              <a class="btn btn-secondary mb-3" href="resume.html">
                <svg
                  class="svg-inline--fa fa-file-lines me-2"
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
                <span class="d-none d-md-inline">View</span> Resume
              </a>
            </div>
          </div>
          <div class="col-md-5 col-lg-5">
            <img
              class="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
              src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/profile-lg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
