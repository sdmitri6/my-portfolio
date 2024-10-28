import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Загварын файлаа дуудаж байна

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Sdmitriy</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/cv">CV</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


