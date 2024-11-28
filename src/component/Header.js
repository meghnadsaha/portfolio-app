import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptopCode,
  faBriefcase,
  faFileLines,
  faBlog,
  faEnvelopeOpenText,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: (
        <svg
          className="svg-inline--fa fa-x-twitter fa-fw"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="x-twitter"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          ></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: (
        <svg
          className="svg-inline--fa fa-linkedin-in fa-fw"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="linkedin-in"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          ></path>
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: (
        <svg
          className="svg-inline--fa fa-github-alt fa-fw"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="github-alt"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 512"
        >
          <path
            fill="currentColor"
            d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com",
      icon: (
        <svg
          className="svg-inline--fa fa-stack-overflow fa-fw"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="stack-overflow"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
          ></path>
        </svg>
      ),
    },
    {
      name: "CodePen",
      url: "https://codepen.io",
      icon: (
        <svg
          className="svg-inline--fa fa-codepen fa-fw"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="codepen"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
          ></path>
        </svg>
      ),
    },
  ];

  const SocialLinks = () => {
    return (
      <ul className="social-list list-inline py-2 mx-auto">
        {socialLinks.map((link) => (
          <li className="list-inline-item" key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  //   npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
  //   npm install --save @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
  //   npm install --save @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core

  const navItems = [
    {
      name: "About Me",
      href: "/blogpost",
      icon: faUser,
      isActive: true,
      isDropdown: false

    },
    {
      name: "Portfolio",
      href: "/portfolio",
      // href: 'https://themes.3rdwavemedia.com/devcard/bs5/portfolio.html',
      icon: faLaptopCode,
      isDropdown: false

    },
    {
      name: "Services & Pricing",
      href: 'https://themes.3rdwavemedia.com/devcard/bs5/services.html',
      icon: faBriefcase,
      isDropdown: false

    },
    {
      name: "Resume",
      href: "/resume",
      // href: "https://themes.3rdwavemedia.com/devcard/bs5/resume.html",
      icon: faFileLines,
      isDropdown: false

    },
    {
      name: "Blog",
      href: "/blog",
      icon: faBlog,
      isDropdown: false

    },
    {
      name: "Contact",
      href: "https://themes.3rdwavemedia.com/devcard/bs5/contact.html",
      icon: faEnvelopeOpenText,
      isDropdown: false

    },
    {
      name: "More Pages",
      icon: faGears,
      isDropdown: true,
      dropdownItems: [
        {
          name: "Project Page",
          href: "https://themes.3rdwavemedia.com/devcard/bs5/project.html",
        },
        {
          name: "Blog Home 1",
          href: "https://themes.3rdwavemedia.com/devcard/bs5/blog-home.html",
        },
        {
          name: "Blog Home 2",
          href: "https://themes.3rdwavemedia.com/devcard/bs5/blog-home-alt.html",
        },
        {
          name: "Blog Post",
          href: "/blogpost",
        },
      ],
    },
  ];

  const Navbar = () => {
    return (
      <ul className="navbar-nav flex-column text-start">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${item.isDropdown ? "dropdown" : ""}`}
          >
            <a
              className={`nav-link ${item.isActive ? 'active' : ''}`}
              href={item.href || '#'}
              id={item.isDropdown ? 'navbarDropdown' : ''}
              role={item.isDropdown ? 'button' : ''}
              data-bs-toggle={item.isDropdown ? 'dropdown' : ''}
              aria-expanded={item.isDropdown ? 'false' : ''}
            >
              <FontAwesomeIcon icon={item.icon} className="me-2" />
              {item.name}
              {item.isDropdown && <span className=" dropdown-toggle ml-0"></span>}
            </a>
            {/* Render dropdown menu if it's a dropdown */}
            {item.isDropdown && (
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {item.dropdownItems.map((dropdownItem, i) => (
                  <li key={i}>
                    <a className="dropdown-item" href={dropdownItem.href}>
                      {dropdownItem.name}
                    </a>
                </li>
              ))}
            </ul>
          )}
          
          {/* Display the value of item.isDropdown */}
          {/* <div className="dropdown-status">
            <p>isDropdown: {String(item.isDropdown)}</p>
          </div> */}
        </li>
      ))}
    </ul>
    );
  };

  return (
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0">
          <a
            className="no-text-decoration"
            href="https://themes.3rdwavemedia.com/devcard/bs5/index.html"
          >
            Simon Doe
          </a>
        </h1>

        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
              <img
                className="profile-image mb-3 rounded-circle mx-auto"
                src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/profile.png"
                alt="image"
              />
              <div className="bio mb-3">
                Hi, my name is Simon Doe and I'm a senior software engineer.
                Welcome to my personal website!
              </div>
              <SocialLinks />
              <hr />
            </div>
            {/* <!--//profile-section--> */}

            <Navbar />

            <div className="my-2">
              <a
                className="btn btn-primary"
                href="https://themes.3rdwavemedia.com/devcard/bs5/contact.html"
                target="_blank"
              >
                <svg
                  className="svg-inline--fa fa-paper-plane me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="paper-plane"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                  ></path>
                </svg>
                Hire Me
              </a>
            </div>

            <div className="dark-mode-toggle text-center w-100">
              <hr className="mb-4" />
              <h4 className="toggle-name mb-3 ">
                <svg
                  className="svg-inline--fa fa-circle-half-stroke me-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-half-stroke"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                  ></path>
                </svg>
                Dark Mode
              </h4>

              <input className="toggle" id="darkmode" type="checkbox" />
              <label className="toggle-btn mx-auto mb-0" for="darkmode"></label>
            </div>
            {/* <!--//dark-mode-toggle--> */}
          </div>
        </nav>
      </div>
      {/* <!--//force-overflow--> */}
    </header>
  );
};

export default Header;
