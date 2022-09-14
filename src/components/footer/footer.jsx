import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContentContainer">

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


      </div>
    </div>
  )
}

export default Footer;
