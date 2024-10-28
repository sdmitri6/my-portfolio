import React, { useState } from 'react';
import project1Video from './Video/Magma main.mov';
import project2Video from './Video/3D Cyber Fiction.mov';
import project3Video from './Video/Chess.mov';
import MusicPlayer from './MusicPlayer';
import './projects.css';

const Projects = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleVideoPlay = (video) => {
    setPlayingVideo(video);
  };

  const handleMouseEnter = (video) => {
    handleVideoPlay(video); 
  };

  const handleMouseLeave = () => {
    setPlayingVideo(null); 
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <p>Here are some of my projects:</p>
      <div className="project-list">
        <div className="project-item">
          <a 
            href="https://github.com/sdmitri6/Magma" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter(project1Video)} 
            onMouseLeave={handleMouseLeave}
          >
            <h3>Magma main</h3>
          </a>
        </div>
        <div className="project-item">
          <a 
            href="https://github.com/sdmitri6/3D-cyber-fiction" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter(project2Video)} 
            onMouseLeave={handleMouseLeave}
          >
            <h3>3D Cyber</h3>
          </a>
        </div>
        <div className="project-item">
          <a 
            href="https://github.com/sdmitri6/CHESS-JS-master" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter(project3Video)} 
            onMouseLeave={handleMouseLeave}
          >
            <h3>Chess</h3>
          </a>
        </div>
      </div>

      {/* Video Player */}
      {playingVideo && (
        <div className="video-player">
          <video 
            src={playingVideo} 
            muted 
            loop 
            autoPlay 
            className="background-video"
          />
        </div>
      )}

      {}
      <MusicPlayer />
    </div>
  );
};

export default Projects;
