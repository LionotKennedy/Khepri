import React, { useState, useEffect, useRef } from 'react';
import './navbar.css'; // Import your CSS file
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importer le CSS de AOS

const Navbar_component = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations en millisecondes
    //   once: true,    // Pour que l'animation se joue une seule fois
    });
    const body = document.querySelector('body');
    const modeToggle = document.querySelector('.dark-light');

    // Check for initial state from localStorage
    const storedMode = localStorage.getItem('mode');
    if (storedMode === 'dark-mode') {
      setIsDarkMode(true);
      body.classList.add('dark');
    } else {
      setIsDarkMode(false);
      body.classList.remove('dark');
    }

    const handleModeToggle = () => {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      body.classList.toggle('dark');
      modeToggle.classList.toggle("active");
      localStorage.setItem('mode', newMode ? 'dark-mode' : 'light-mode');
    };

    modeToggle.addEventListener('click', handleModeToggle);

    // Cleanup on component unmount
    return () => {
      modeToggle.removeEventListener('click', handleModeToggle);
    };
  }, [isDarkMode]); // Dependency array to track isDarkMode changes

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
              activeLink.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    const handleMenuClick = () => {
      menuIconRef.current.classList.toggle('fa-xmark');
      navbarRef.current.classList.toggle('activeResponsive');
    };

    menuIconRef.current.addEventListener('click', handleMenuClick);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (menuIconRef.current) {
        menuIconRef.current.removeEventListener('click', handleMenuClick);
      }
    };
  }, []);

  // Function to highlight active navigation link
  const handleActiveLink = (href) => {
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach((link) => link.classList.remove('active'));
    const activeLink = document.querySelector(`header nav a[href="${href}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  };

  return (
    <>
      <header className={isDarkMode ? 'header dark' : 'header'} data-aos="slide-down">
        <i className="fa-solid fa-bars" id="menu-icons" ref={menuIconRef}></i>
        <a href="#acceuil" className="logo">
          K<span>Hepri</span>
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#accueil" className={isDarkMode ? '' : 'active'} onClick={() => handleActiveLink('#accueil')}>Acceuil</a>
          <a href="#services" className="" onClick={() => handleActiveLink('#services')}>Services</a>
          <a href="#apropos" className="" onClick={() => handleActiveLink('#apropos')}>À propos</a>
          <a href="#blog" className="" onClick={() => handleActiveLink('#blog')}>Blog</a>
          <a href="#contact" className="" onClick={() => handleActiveLink('#contact')}>Contact</a>
        </nav>
        <div className="dark-light">
          <i className="fa fa-moon moon icons"></i>
          <i className="fa fa-sun sun icons"></i>
        </div>
      </header>
    </>
  );
};

export default Navbar_component;
