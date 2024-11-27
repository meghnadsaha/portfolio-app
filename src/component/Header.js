import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faBriefcase, faFileLines, faBlog, faEnvelopeOpenText, faGears } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: (
        <svg className="svg-inline--fa fa-x-twitter fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com',
      icon: (
        <svg className="svg-inline--fa fa-linkedin-in fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: (
        <svg className="svg-inline--fa fa-github-alt fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512">
          <path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
        </svg>
      ),
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com',
      icon: (
        <svg className="svg-inline--fa fa-stack-overflow fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="stack-overflow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path fill="currentColor" d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"></path>
        </svg>
      ),
    },
    {
      name: 'CodePen',
      url: 'https://codepen.io',
      icon: (
        <svg className="svg-inline--fa fa-codepen fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
        </svg>
      ),
    }
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

const navItems = [
    {
      name: 'About Me',
      href: 'https://themes.3rdwavemedia.com/devcard/bs5/index.html',
      icon: faUser,
      isActive: true,
    },
    {
      name: 'Portfolio',
      href: 'https://themes.3rdwavemedia.com/devcard/bs5/portfolio.html',
      icon: faLaptopCode,
    },
    {
      name: 'Services & Pricing',
      href: 'https://themes.3rdwavemedia.com/devcard/bs5/services.html',
      icon: faBriefcase,
    },
    {
      name: 'Resume',
      href: 'https://themes.3rdwavemedia.com/devcard/bs5/resume.html',
      icon: faFileLines,
    },
    {
      name: 'Blog',
      href: 'https://themes.3rdwavemedia.com/devcard/bs5/blog-home.html',
      icon: faBlog,
    },
    {
      name: 'Contact',
      href: 'https://themes.3rdwavemedia.com/devcard/bs5/contact.html',
      icon: faEnvelopeOpenText,
    },
    {
      name: 'More Pages',
      icon: faGears,
      isDropdown: true,
      dropdownItems: [
        { name: 'Project Page', href: 'https://themes.3rdwavemedia.com/devcard/bs5/project.html' },
        { name: 'Blog Home 1', href: 'https://themes.3rdwavemedia.com/devcard/bs5/blog-home.html' },
        { name: 'Blog Home 2', href: 'https://themes.3rdwavemedia.com/devcard/bs5/blog-home-alt.html' },
        { name: 'Blog Post', href: 'https://themes.3rdwavemedia.com/devcard/bs5/blog-post.html' },
      ],
    },
  ];
  
  const Navbar = () => {
    return (
      <ul className="navbar-nav flex-column text-start">
        {navItems.map((item, index) => (
          <li key={index} className={`nav-item ${item.isDropdown ? 'dropdown' : ''}`}>
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
              {item.isDropdown && <span className="caret"></span>}
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
          </li>
        ))}
      </ul>
    );
  };
  
  
  return (
    <header className="header text-center">	    
    <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0"><a className="no-text-decoration" href="https://themes.3rdwavemedia.com/devcard/bs5/index.html">Simon Doe</a></h1>
        
        <nav className="navbar navbar-expand-lg navbar-dark">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div id="navigation" className="collapse navbar-collapse flex-column">
                <div className="profile-section pt-3 pt-lg-0">
                    <img className="profile-image mb-3 rounded-circle mx-auto" src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/profile.png" alt="image"/>			
                    <div className="bio mb-3">Hi, my name is Simon Doe and I'm a senior software engineer. Welcome to my personal website!</div>
                  <SocialLinks/>
                    <hr/> 
                </div>
                {/* <!--//profile-section--> */}
                
                <ul className="navbar-nav flex-column text-start">
                    <li className="nav-item">
                        <a className="nav-link active" href="https://themes.3rdwavemedia.com/devcard/bs5/index.html"><svg className="svg-inline--fa fa-user fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>
                        About Me<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://themes.3rdwavemedia.com/devcard/bs5/portfolio.html"><svg className="svg-inline--fa fa-laptop-code fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path></svg>
                        Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://themes.3rdwavemedia.com/devcard/bs5/services.html"><svg className="svg-inline--fa fa-briefcase fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path></svg>
                      
                        Services &amp; Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://themes.3rdwavemedia.com/devcard/bs5/resume.html"><svg className="svg-inline--fa fa-file-lines fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-lines" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
                      
                        Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://themes.3rdwavemedia.com/devcard/bs5/blog-home.html"><svg className="svg-inline--fa fa-blog fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="blog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"></path></svg>
                        Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://themes.3rdwavemedia.com/devcard/bs5/contact.html"><svg className="svg-inline--fa fa-envelope-open-text fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open-text" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
                        Contact</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg className="svg-inline--fa fa-gears fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gears" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                            More Pages
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="https://themes.3rdwavemedia.com/devcard/bs5/project.html">Project Page</a></li>
                            <li><a className="dropdown-item" href="https://themes.3rdwavemedia.com/devcard/bs5/blog-home.html">Blog Home 1</a></li>
                            <li><a className="dropdown-item" href="https://themes.3rdwavemedia.com/devcard/bs5/blog-home-alt.html">Blog Home 2</a></li>
                            <li><a className="dropdown-item" href="https://themes.3rdwavemedia.com/devcard/bs5/blog-post.html">Blog Post</a></li>
                        </ul>
                    </li>
                </ul>
                
                <div className="my-2">
                    <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/devcard/bs5/contact.html" target="_blank"><svg className="svg-inline--fa fa-paper-plane me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg>
                    Hire Me</a>
                </div>
                

                <div className="dark-mode-toggle text-center w-100">
                    <hr className="mb-4"/>
                    <h4 className="toggle-name mb-3 "><svg className="svg-inline--fa fa-circle-half-stroke me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-half-stroke" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>
                    Dark Mode</h4>
                    
                    <input className="toggle" id="darkmode" type="checkbox"/>
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
