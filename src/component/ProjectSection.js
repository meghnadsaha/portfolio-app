import React, { useState } from "react";

const ProjectSection = () => {
  // State to track the active tab
  const [activeFilter, setActiveFilter] = useState("*");

  // Handle tab change
  const handleTabChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="projects-list px-3 py-5 p-md-5">
      <div className="container">
        <div className="text-center">
          <ul id="filters" className="filters mb-5 mx-auto ps-0">
            <li
              className={`type ${activeFilter === "*" ? "active" : ""} mb-3 mb-lg-0`}
              onClick={() => handleTabChange("*")}
            >
              All
            </li>
            <li
              className={`type ${activeFilter === ".webapp" ? "active" : ""} mb-3 mb-lg-0`}
              onClick={() => handleTabChange(".webapp")}
            >
              Web App
            </li>
            <li
              className={`type ${activeFilter === ".mobileapp" ? "active" : ""} mb-3 mb-lg-0`}
              onClick={() => handleTabChange(".mobileapp")}
            >
              Mobile App
            </li>
            <li
              className={`type ${activeFilter === ".frontend" ? "active" : ""} mb-3 mb-lg-0`}
              onClick={() => handleTabChange(".frontend")}
            >
              Frontend
            </li>
            <li
              className={`type ${activeFilter === ".backend" ? "active" : ""} mb-3 mb-lg-0`}
              onClick={() => handleTabChange(".backend")}
            >
              Backend
            </li>
          </ul>
        </div>

        <div className="project-cards row isotope">
          {/* Project cards filtered by active filter */}
          <div
            className={`isotope-item col-md-6 mb-5 mobileapp frontend ${activeFilter === "*" || activeFilter === ".mobileapp" || activeFilter === ".frontend" ? "" : "d-none"}`}
          >
            <div className="card project-card">
              <div className="row">
                <div className="col-12 col-xl-5 card-img-holder">
                  <img
                    src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-1.jpg"
                    className="card-img"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-xl-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="project.html" className="theme-link">
                        Project Heading
                      </a>
                    </h5>
                    <p className="card-text">
                      Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Client: Google</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-mask">
                <a className="link-mask-link" href="project.html"></a>
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href="project.html">
                    <i className="fas fa-eye me-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`isotope-item col-md-6 mb-5 webapp frontend ${activeFilter === "*" || activeFilter === ".webapp" || activeFilter === ".frontend" ? "" : "d-none"}`}
          >
            <div className="card project-card">
              <div className="row">
                <div className="col-12 col-xl-5 card-img-holder">
                  <img
                    src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-2.jpg"
                    className="card-img"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-xl-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="project.html" className="theme-link">
                        Project Heading
                      </a>
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Client: Dropbox</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-mask">
                <a className="link-mask-link" href="project.html"></a>
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href="project.html">
                    <i className="fas fa-eye me-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
