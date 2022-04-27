import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/playIcon.png';

import './footer.scss'


const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="content">
        <div className="logo2">
          <img src={logo} alt="" />
          <p>DaliyaMovies</p>
        </div>
        <div>
          <ul className="footerList">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/")}>Terms of Service</li>
            <li onClick={() => navigate("/")}>Privacy Policy</li>
            <li onClick={() => navigate("/")}>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;