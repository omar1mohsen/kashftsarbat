'use client'
import React, { useEffect } from 'react';

const ScrollAnimation = () => {
  // Function to handle animation on scroll
  const handleScrollAnimation = () => {
    const elements = document.querySelectorAll('.animate__animated'); // Select elements with the target class
    if(elements.length){

      elements.forEach((el) => {
        if (el.classList.contains('animate__fadeInUp')) return; // Skip if already animated
  
        const rect = el.getBoundingClientRect();
        const inView =
          rect.top <= window.innerHeight && rect.bottom >= 0; // Check if element is in view
  
        if (inView) {
          el.classList.add('animate__animated', 'animate__fadeInUp', );
        }
      });
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);

    // Trigger animation on page load
    handleScrollAnimation();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <></>
  );
};

export default ScrollAnimation;
