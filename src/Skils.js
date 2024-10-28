import React, { useState, useEffect } from 'react';
import './skills.css';

import htmlLogo from './img/html5-black7890.jpg';
import cssLogo from './img/css-logo-black-and-white.png';
import jsLogo from './img/Js.png';
import reactLogo from './img/react.svg';
import figmaLogo from './img/figma.png';
import cPlusPlusLogo from './img/c++.png';
import wordLogo from './img/word.png';
import excelLogo from './img/Excel.png';
import powerpointLogo from './img/powerpoint.png'; 
import outlookLogo from './img/outlook.png'; 
import accessLogo from './img/access-2.png'; 
import filmoraLogo from './img/filmora.png';
import clipchampLogo from './img/climpchamp.jpg'; 
import imovieLogo from './img/imovie.png'; 
import adobePremiereLogo from './img/adobe-premiere.png'; 
import davinciResolveLogo from './img/davinci .png'; 
import photoshopLogo from './img/photoshop.png';
import lightroomLogo from './img/lightroom.png'; 
import canvaLogo from './img/canva.png'; 
import pixlrLogo from './img/pixlr.jpg'; 
import corelPainterLogo from './img/corel-painter.svg';
import rebelleLogo from './img/Rebelle.png';
import clipStudioLogo from './img/clip studio-7.png'; 
import artweaverLogo from './img/artweaver.jpg'; 


const skillsData = {
  Frontend: [
    { name: 'HTML', logo: htmlLogo, level: 100 },
    { name: 'CSS', logo: cssLogo, level: 100 },
    { name: 'JS', logo: jsLogo, level: 70 },
    { name: 'React', logo: reactLogo, level: 80 },
    { name: 'Figma', logo: figmaLogo, level: 90 },
  ],
  Office: [
    { name: 'Word', logo: wordLogo, level: 85 },
    { name: 'Excel', logo: excelLogo, level: 75 },
    { name: 'PowerPoint', logo: powerpointLogo, level: 80 },
    { name: 'Outlook', logo: outlookLogo, level: 70 },
    { name: 'Access', logo: accessLogo, level: 60 },
  ],
  VideoEditing: [
    { name: 'Filmora', logo: filmoraLogo, level: 85 },
    { name: 'Clipchamp', logo: clipchampLogo, level: 75 },
    { name: 'iMovie', logo: imovieLogo, level: 80 },
    { name: 'Adobe Premiere', logo: adobePremiereLogo, level: 90 },
    { name: 'DaVinci Resolve', logo: davinciResolveLogo, level: 80 },
  ],
  PhotoEditing: [
    { name: 'Photoshop', logo: photoshopLogo, level: 95 },
    { name: 'Lightroom', logo: lightroomLogo, level: 85 },
    { name: 'Canva', logo: canvaLogo, level: 80 },
    { name: 'Pixlr', logo: pixlrLogo, level: 70 },
  ],
  Art: [
    { name: 'Corel Painter', logo: corelPainterLogo, level: 75 },
    { name: 'Rebelle', logo: rebelleLogo, level: 70 },
    { name: 'Clip Studio', logo: clipStudioLogo, level: 65 },
    { name: 'Artweaver', logo: artweaverLogo, level: 60 },
  ],
  Backend: [{ name: 'C++', logo: cPlusPlusLogo, level: 50 }],
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      {Object.keys(skillsData).map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category}</h3>
          <div className="skills-grid">
            {skillsData[category].map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const SkillCard = ({ skill }) => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = skill.level;
    const duration = 1500; 
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      if (start < end) {
        start++;
        setAnimationProgress(start);
      } else {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [skill.level]);

  return (
    <div
      className="skill-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
      <div className="progress-container">
        <svg className="progress-circle" viewBox="0 0 100 100">
          <circle className="progress-circle-bg" cx="50" cy="50" r="45" />
          <circle
            className={`progress-circle-fg ${hovered ? 'rotate' : ''}`}
            cx="50"
            cy="50"
            r="45"
            style={{
              strokeDasharray: `${animationProgress * 2.83} ${100 * 2.83}`, // 100% = 282.6
              transition: 'stroke-dasharray 0.5s ease-in-out',
            }}
          />
        </svg>
        <p className={`skill-level ${hovered ? 'reveal' : ''}`}>{animationProgress}%</p>
      </div>
      <p>{skill.name}</p>
    </div>
  );
};

export default Skills;
