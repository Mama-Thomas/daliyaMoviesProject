import React, {useRef, useEffect, useContext} from "react";
import "./navbar.scss";
import logo from "../../assets/playIcon.png";
import { Link, useLocation, useNavigate} from "react-router-dom";

import { AuthContext } from "../Auth/Auth";

// import SignInUpOut, {UserContext} from "../SignInUpOut/SignInUpOut";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV",
    path: "/tv",
  },
  {
    display: "People",
    path: "/person",
  }
];

const Navbar = (props) => {

  const {currentUser} = useContext(AuthContext);

  // const navigate = useNavigate();

  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/">DaliyaMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
          {currentUser ? (
            <li>
              <Link to="/myaccount"> My Account </Link>
            </li>
          ) : (
            <li>
              <Link to="/login"> Sign In </Link>
            </li>
          )}
        </ul>
        {/* {console.log(`User Logged In ${currentUser?.email}`)}
        {console.log(`UserContexts ${currentUser}`)} */}
        {/* {console.log(props)} */}
      </div>
    </div>
  );
};

export default Navbar;
