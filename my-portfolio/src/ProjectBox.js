import React, { useState, useEffect} from 'react';

const ProjectBox = ({ title, imgSrc, description, githubLink, dockerLink }) => {
  const [showMore, setShowMore] = useState(false);


  const formatDescription = (text) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    return (
      <ul>
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    const handleClick = (event) => {
      const clickedBox = event.currentTarget;
  
      if (!showMore) {
        // Calculate the center position of the screen
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const boxWidth = clickedBox.offsetWidth;
        const boxHeight = clickedBox.offsetHeight;
        const centerX = (screenWidth - boxWidth) / 2;
        const centerY = (screenHeight - boxHeight) / 2;
  
        // Apply centering styles
        clickedBox.style.position = 'fixed';
        clickedBox.style.top = centerY + 'px';
        clickedBox.style.left = centerX + 'px';
        clickedBox.style.zIndex = '9999';
  
        // Create and append overlay element
        // const overlay = document.createElement('div');
        // overlay.classList.add('overlay');
        // document.body.appendChild(overlay);
      } else {
        // Restore original position
        clickedBox.style.position = 'static'; // or whatever the original position was
        clickedBox.style.top = ''; // Clear the top style
        clickedBox.style.left = ''; // Clear the left style
        clickedBox.style.zIndex = ''; // Clear the z-index style
  
        // Remove overlay element
        // const overlay = document.querySelector('.overlay');
        // if (overlay) {
        //   document.body.removeChild(overlay);
        // }
      }
    };
  
    const projectBoxes = document.querySelectorAll('.project-box');
    projectBoxes.forEach(box => {
      box.addEventListener('click', handleClick);
    });
  
    return () => {
      projectBoxes.forEach(box => {
        box.removeEventListener('click', handleClick);
      });
    };
  }, [showMore]);
  

  return (
    <div className="project-box">
      <h3>{title}</h3>
      <img src={imgSrc} alt={title} />
      <div className={`description ${showMore ? 'expanded' : ''}`}>
        {formatDescription(description)}
      </div>
      <p className="toggle" onClick={() => setShowMore(!showMore)}>
        {showMore ? '..... show less' : '..... read more'}
      </p>
      <div class="buttons">
            <a href="https://github.com/PraveenAllam93/employee-churn-prediction" target="_blank" rel="noopener noreferrer">View Project</a>
            <a href="https://hub.docker.com/r/praveenallam69/employee-churn" target="_blank" rel="noopener noreferrer">Docker link</a>
          </div>
    </div>
  );
};

export default ProjectBox;