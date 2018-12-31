import React from 'react';
import { Link } from 'gatsby';

const Nav = ({ buttonText }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
};

export default Nav;
