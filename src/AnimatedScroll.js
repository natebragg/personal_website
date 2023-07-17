import React from 'react';

const AnimatedScroll = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ul className="menu">
      <li><a className="sitenavitem" onClick={() => scrollToSection('about')}>About</a></li>
      <li><a className="sitenavitem" onClick={() => scrollToSection('featured-projects')}>Projects</a></li>
      <li><a className="sitenavitem" onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
      <li><a className="sitenavitem" onClick={() => scrollToSection('contact')}>Contact</a></li>
      <li><a className="sitenavitem" href="history.html">History</a></li>
    </ul>
  );
};

export default AnimatedScroll;
