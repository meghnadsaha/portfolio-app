// src/About.js
import React from "react";
//npm install react-router-dom

const Resume = () => {
  return (
    <div class="main-wrapper">
      <section class="cta-section theme-bg-light py-5">
        <div class="container text-center single-col-max-width">
          <h2 class="heading mb-3">Online Resume</h2>
          <a
            class="btn btn-primary
        "
            href="https://themes.3rdwavemedia.com/resources/sketch-template/resume-sketch-sketch-resume-template-for-software-developers/"
            target="_blank"
          >
            <i class="fas fa-file-pdf me-2"></i>{" "}
			Download PDF Version
          </a>
        </div>
      </section>
      <div class="container resume-container px-3 px-lg-5">
        <article class="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          <div class="resume-header">
            <div class="row align-items-center">
              <div class="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                <h2 class="resume-name mb-0 text-uppercase">Simon Doe</h2>
                <div class="resume-tagline mb-3 mb-md-0">
                  Senior Software Engineer
                </div>
              </div>
              <div class="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                <ul class="list-unstyled mb-0">
                  <li class="mb-2">
                    <i class="fas fa-phone-square fa-fw fa-lg me-2 "></i>
                    <a class="resume-link" href="tel:#">
                      0123 4567 890
                    </a>
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-envelope-square fa-fw fa-lg me-2"></i>
                    <a class="resume-link" href="mailto:#">
                      simon@yourwebsite.com
                    </a>
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-globe fa-fw fa-lg me-2"></i>
                    <a class="resume-link" href="#">
                      www.yourwebsite.com
                    </a>
                  </li>
                  <li class="mb-0">
                    {" "}
                    <i class="fas fa-map-marker-alt fa-fw fa-lg me-2"></i> New
                    York
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div class="resume-intro py-3">
            <div class="row align-items-center">
              <div class="col-12 col-md-3 col-xl-2 text-center">
                <img
                  class="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded mx-auto"
                  src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/resume-profile.png"
                  alt="image"
                />
              </div>

              <div class="col text-start">
                <p class="mb-0">
                  Summarise your career here.{" "}
                  <a
                    class="theme-link"
                    href="https://themes.3rdwavemedia.com/resources/sketch-template/resume-sketch-sketch-resume-template-for-software-developers/"
                    target="_blank"
                  >
                    You can make a PDF version of your resume using our free
                    Sketch template here
                  </a>
                  . Donec quam felis, ultricies nec, pellentesque eu. Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Maecenas nec odio et ante tincidunt tempus. Donec
                  vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.{" "}
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div class="resume-body">
            <div class="row">
              <div class="resume-main col-12 col-lg-8 col-xl-9   pe-0   pe-lg-5">
                <section class="work-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">
                    Work Experiences
                  </h3>
                  <div class="item mb-3">
                    <div class="item-heading row align-items-center mb-2">
                      <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Senior Software Engineer
                      </h4>
                      <div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                        Google | 2019 - Present
                      </div>
                    </div>
                    <div class="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Donec pede justo, fringilla vel.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis.
                      </p>
                      <ul class="resume-list">
                        <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                        <li>Aenean commodo ligula eget dolor.</li>
                        <li>Etiam ultricies nisi vel augue.</li>
                      </ul>
                    </div>
                  </div>
                  <div class="item mb-3">
                    <div class="item-heading row align-items-center mb-2">
                      <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Lead Software Developer
                      </h4>
                      <div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                        Apple | 2016 - 2019
                      </div>
                    </div>
                    <div class="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Donec pede justo, fringilla vel.
                      </p>
                      <ul class="resume-list">
                        <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                        <li>Aenean commodo ligula eget dolor.</li>
                      </ul>
                    </div>
                  </div>
                  <div class="item mb-3">
                    <div class="item-heading row align-items-center mb-2">
                      <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Senior Software Developer
                      </h4>
                      <div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                        Dropbox | 2014 - 2016
                      </div>
                    </div>
                    <div class="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-heading row align-items-center mb-2">
                      <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Senior Developer
                      </h4>
                      <div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                        Uber | 2013 - 2014
                      </div>
                    </div>
                    <div class="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-heading row align-items-center mb-2">
                      <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Backend Developer
                      </h4>
                      <div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                        Amazon | 2014 - 2016
                      </div>
                    </div>
                    <div class="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-heading row align-items-center mb-2">
                      <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Frontend Developer
                      </h4>
                      <div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                        Startup | 2013 - 2014
                      </div>
                    </div>
                    <div class="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus.{" "}
                      </p>
                    </div>
                  </div>
                </section>

                <section class="project-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">
                    Projects
                  </h3>
                  <div class="item mb-3">
                    <div class="item-heading row align-items-center mb-2">
                      <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Project Lorem Ipsum
                      </h4>
                      <div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                        Open Source
                      </div>
                    </div>
                    <div class="item-content">
                      <p>
                        You can use this section for your side projects. You can{" "}
                        <a href="#" class="theme-link">
                          provide a project link here
                        </a>{" "}
                        as well. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-heading row align-items-center mb-2">
                      <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Project Sed Fringilla
                      </h4>
                      <div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                        Open Source
                      </div>
                    </div>
                    <div class="item-content">
                      <p>
                        You can use this section for your side projects. Cras
                        dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim.
                      </p>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-heading row align-items-center mb-2">
                      <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Project Praesent{" "}
                      </h4>
                      <div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                        Open Source
                      </div>
                    </div>
                    <div class="item-content">
                      <p>
                        You can use this section for your side projects. Cras
                        dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <aside class="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                <section class="skills-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">
                    Skills
                  </h3>
                  <div class="item">
                    <h4 class="item-title">Technical</h4>
                    <ul class="list-unstyled resume-skills-list">
                      <li class="mb-2">JavaScript/Angular/React/Vue</li>
                      <li class="mb-2">Python/Ruby/PHP</li>
                      <li></li>
                      <li class="mb-2">Node.js/ASP.NET</li>
                      <li class="mb-2">PostgreSQL/MySQL</li>
                      <li class="mb-2">Object-oriented design</li>
                      <li class="mb-2">
                        Design and implement database structures
                      </li>
                      <li>Lead and deliver complex software systems</li>
                    </ul>
                  </div>
                  <div class="item">
                    <h4 class="item-title">Professional</h4>
                    <ul class="list-unstyled resume-skills-list">
                      <li class="mb-2">Effective communication</li>
                      <li class="mb-2">Team player</li>
                      <li></li>
                      <li class="mb-2">Strong problem solver</li>
                      <li>Good time management</li>
                    </ul>
                  </div>
                </section>
                <section class="education-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">
                    Education
                  </h3>
                  <ul class="list-unstyled resume-education-list">
                    <li class="mb-3">
                      <div class="resume-degree font-weight-bold">
                        MSc in Computer Science
                      </div>
                      <div class="resume-degree-org text-muted">
                        University College London
                      </div>
                      <div class="resume-degree-time text-muted">
                        2010 - 2011
                      </div>
                    </li>
                    <li>
                      <div class="resume-degree font-weight-bold">
                        BSc Maths and Physics
                      </div>
                      <div class="resume-degree-org text-muted">
                        Imperial College London
                      </div>
                      <div class="resume-degree-time text-muted">
                        2007 - 2010
                      </div>
                    </li>
                  </ul>
                </section>
                <section class="education-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">
                    Awards
                  </h3>
                  <ul class="list-unstyled resume-awards-list">
                    <li class="mb-3">
                      <div class="font-weight-bold">Award Lorem Ipsum</div>
                      <div class="text-muted">Microsoft lorem ipsum (2019)</div>
                    </li>
                    <li>
                      <div class="font-weight-bold">Award Donec Sodales</div>
                      <div class="text-muted">Oracle Aenean (2017)</div>
                    </li>
                  </ul>
                </section>
                <section class="skills-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">
                    Languages
                  </h3>
                  <ul class="list-unstyled resume-lang-list">
                    <li class="mb-2">
                      English <span class="text-muted">(Native)</span>
                    </li>
                    <li>
                      Spanish <span class="text-muted">(Professional)</span>
                    </li>
                  </ul>
                </section>
                <section class="skills-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">
                    Interests
                  </h3>
                  <ul class="list-unstyled resume-interests-list mb-0">
                    <li class="mb-2">Climbing</li>
                    <li class="mb-2">Snowboarding</li>
                    <li class="mb-2">Photography</li>
                    <li>Travelling</li>
                  </ul>
                </section>
              </aside>
            </div>
          </div>
          <hr />
          <div class="resume-footer text-center">
            <ul class="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
              <li class="list-inline-item mb-lg-0 me-3">
                <a class="resume-link" href="#">
                  <i
                    class="fa-brands fa-github-square fa-2x me-2"
                    data-fa-transform="down-4"
                  ></i>{" "}
                  <span class="d-none d-lg-inline-block text-muted">
                    github.com/username
                  </span>
                </a>
              </li>
              <li class="list-inline-item mb-lg-0 me-3">
                <a class="resume-link" href="#">
                  <i
                    class="fa-brands fa-linkedin fa-2x me-2"
                    data-fa-transform="down-4"
                  ></i>{" "}
                  <span class="d-none d-lg-inline-block text-muted">
                    linkedin.com/in/username
                  </span>
                </a>
              </li>
              {/* <li class="list-inline-item mb-lg-0 me-lg-3"><a class="resume-link" href="#"><svg class="svg-inline--fa fa-square-x-twitter fa-2x me-2" data-fa-transform="down-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="square-x-twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" style="transform-origin: 0.4375em 0.75em;"><g transform="translate(224 256)"><g transform="translate(0, 128)  scale(1, 1)  rotate(0 0 0)"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" transform="translate(-224 -256)"></path></g></g></svg><!-- <i class="fa-brands fa-square-x-twitter fa-2x me-2" data-fa-transform="down-4"></i> <span class="d-none d-lg-inline-block text-muted">@twittername</span></a></li> */}
            </ul>
          </div>
        </article>
      </div>

      <footer class="footer text-center py-4">
        <small class="copyright">
          Template Copyright ©{" "}
          <a href="https://google.com/" target="_blank">
            Google
          </a>
        </small>
      </footer>
    </div>
  );
};

export default Resume;
