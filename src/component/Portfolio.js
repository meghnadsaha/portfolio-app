import React from "react";
import ProjectsList from "./ProjectsList";

const Portfolio = () => {
  return (
    <div className="main-wrapper">

      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portfolio</h2>
          <div className="intro">
            <p>
              Welcome to my online portfolio. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              I'm taking on freelance work at the moment. Want some help
              building your software?
            </p>
          </div>
          <a
            className="btn btn-primary"
            href="contact.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-paper-plane me-2"></i>
            Hire Me
          </a>
        </div>
      </section>
      <ProjectsList/>
     

    </div>
  );
};

export default Portfolio;
