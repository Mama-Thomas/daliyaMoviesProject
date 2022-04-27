import React from 'react'
import './navbar.scss';
import logo from '../../assets/playIcon.png'
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className="navbar wrap">
      <div className="logo">
        <img src={logo} alt="" />
        DaliyaMovies
      </div>
      <div>
        <ul className="navlist">
          <li onClick={() => navigate("/movie")}>Movies</li>
          <li onClick={() => navigate("/tv")}>Tv Shows</li>
          <li onClick={() => navigate('/people')}>People</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;