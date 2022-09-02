import React from "react";
import logo from "../../assets/playIcon.png";

import "./footer.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContentContainer">
        {/* <div className="footerContentLogo">
          <div className="logo2">
            <img src={logo} alt="" />
            <p>DaliyaMovies</p>
          </div>
        </div> */}

        <div className="footerListItems">
          <div className="footerListItem">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Terms of Services</Link>
            <Link to="/">About us</Link>
          </div>

          <div className="footerListItem">
            <Link to="/">FAQ</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Premium</Link>
          </div>
          <div className="footerListItem">
            <Link to="/">Must Watch</Link>
            <Link to="/">Latest</Link>
            <Link to="/">Popular</Link>
          </div>
        </div>

        {/* <div>
          <ul className="footerList">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/")}>Terms of Service</li>
            <li onClick={() => navigate("/")}>Privacy Policy</li>
            <li onClick={() => navigate("/")}>FAQ</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
