import { SiDatabricks } from 'react-icons/si';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import {
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiFacebook,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';
import { Link } from 'react-scroll';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo_footer">
            <SiDatabricks className="icon" />
            <h2>Secured.</h2>
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        </div>
        <div className="col_contaniner">
          <div className="col">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>My Account</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>Information</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>Legal</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <form>
            <h3>Join Our Team</h3>
            <input type="text" placeholder="Enter Your E-mail" />
            <FiMail className="mail_icon" />
            <div className="social_group">
              <FiInstagram className="social_icon" />
              <FiFacebook className="social_icon" />
              <FiLinkedin className="social_icon" />
              <FiDribbble className="social_icon" />
              <FiGithub className="social_icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
