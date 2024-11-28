import React, { useState } from "react";

// Project data
const projects = [
  {
    id: 1,
    title: "Project Heading",
    description:
      "Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client: "Google",
    image: " https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-1.jpg",
    link: "project.html",
    categories: ["mobileapp", "frontend"]
  },
  {
    id: 2,
    title: "Project Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Dropbox",
    image: " https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-2.jpg",
    link: "project.html",
    categories: ["webapp", "frontend"]
  },
  {
    id: 3,
    title: "Project Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Google",
    image: " https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-3.jpg",
    link: "project.html",
    categories: ["mobileapp"]
  },
  {
    id: 4,
    title: "Project Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Startup Hub",
    image: " https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-4.jpg",
    link: "project.html",
    categories: ["webapp", "backend"]
  },
  {
    id: 5,
    title: "Project Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "SalesForce",
    image: " https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-5.jpg",
    link: "project.html",
    categories: ["mobileapp", "frontend"]
  },
  {
    id: 6,
    title: "Project Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Uber",
    image: " https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-6.jpg",
    link: "project.html",
    categories: ["webapp", "backend"]
  },
  {
    id: 7,
    title: "Project Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Lyft",
    image: " https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-7.jpg",
    link: "project.html",
    categories: ["webapp", "frontend", "backend"]
  },
  {
    id: 8,
    title: "Project Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "GitLab",
    image: " https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-8.jpg",
    link: "project.html",
    categories: ["webapp", "frontend"]
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className={`isotope-item col-md-6 mb-5 ${project.categories.join(" ")}`}>
      <div className="card project-card">
        <div className="row">
          <div className="col-12 col-xl-5 card-img-holder">
            <img src={project.image} className="card-img" alt="Project" />
          </div>
          <div className="col-12 col-xl-7">
            <div className="card-body">
              <h5 className="card-title">
                <a href={project.link} className="theme-link">
                  {project.title}
                </a>
              </h5>
              <p className="card-text">{project.description}</p>
              <p className="card-text">
                <small className="text-muted">Client: {project.client}</small>
              </p>
            </div>
          </div>
        </div>
        <div className="link-mask">
          <a className="link-mask-link" href={project.link}></a>
          <div className="link-mask-text">
            <a className="btn btn-secondary" href={project.link}>
              <i className="fas fa-eye me-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsList = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="projects-list px-3 py-5 p-md-5">
      <div className="container">
        <div className="text-center">
          <ul id="filters" className="filters mb-5 mx-auto ps-0">
            <li
              className={`type ${activeFilter === "*" ? "active" : ""} mb-3 mb-lg-0`}
              data-filter="*"
              onClick={() => handleFilterChange("*")}
            >
              All
            </li>
            <li
              className={`type ${activeFilter === ".webapp" ? "active" : ""} mb-3 mb-lg-0`}
              data-filter=".webapp"
              onClick={() => handleFilterChange(".webapp")}
            >
              Web App
            </li>
            <li
              className={`type ${activeFilter === ".mobileapp" ? "active" : ""} mb-3 mb-lg-0`}
              data-filter=".mobileapp"
              onClick={() => handleFilterChange(".mobileapp")}
            >
              Mobile App
            </li>
            <li
              className={`type ${activeFilter === ".frontend" ? "active" : ""} mb-3 mb-lg-0`}
              data-filter=".frontend"
              onClick={() => handleFilterChange(".frontend")}
            >
              Frontend
            </li>
            <li
              className={`type ${activeFilter === ".backend" ? "active" : ""} mb-3 mb-lg-0`}
              data-filter=".backend"
              onClick={() => handleFilterChange(".backend")}
            >
              Backend
            </li>
          </ul>
        </div>

        <div className="project-cards row isotope">
          {projects
            .filter((project) => activeFilter === "*" || project.categories.includes(activeFilter.replace(".", "")))
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
