import { useState } from 'react';

import { SiDatabricks } from 'react-icons/si';
import { FaBars, FaTimes } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div name="top" className="Navbar">
      {/* name top is taken from react scroll */}
      <div className="container">
        <div className="logo">
          <SiDatabricks className="icon" />
          <h1>secured</h1>
        </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li>Home</li>
          <li>Recovery</li>
          <li>Cloud</li>
          <li>Contact</li>
          <button>Sign In</button>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
          {/* <FaBars className="icon" /> */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
