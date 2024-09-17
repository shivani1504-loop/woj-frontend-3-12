import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/Index";
import Logo from "../../src/Assets/images/logo.png"

const Header = () => {
  const [auth, setAuth] = useAuth();
  const location = useLocation();

  return (
    <>
      <Container>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light naxbar">
            <div className="container-fluid">
              <Link className="w-25 ">
                <img
                  src={Logo}
                  className="Logo  "
                  alt="logo"
                />
              </Link>

              <Link to="/e-register" className="d-sm-none">
                  <button className="btn btn-info fs-5 text-white bg-danger buttonref px-3 ">
                    Enroll Now
                  </button>
                </Link>

              <button
                className="navbar-toggler d-none d-sm-block d-md-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 midnav">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  {/* <div className="borderbt"></div> */}
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/about" ? "active" : ""
                      }`}
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/founder" ? "active" : ""
                      }`}
                      to="/founder"
                    >
                      Founder
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/gallery" ? "active" : ""
                      }`}
                      to={!auth.user ? "/gallery-login" : "/gallery"}
                    >
                      Gallery
                    </Link>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="https://woj.nascorptechnologies.com/Index"
                      id="navbarDropdown"
                      role="button"
                      target="_blank"
                      rel="noreferrer"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      School App Link
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a
                          className="dropdown-item"
                          target="_blank"
                          rel="noreferrer"
                          href="https://play.google.com/store/apps/details?id=com.db.nascorp.woj"
                        >
                          For Android Mobile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          target="_blank"
                          rel="noreferrer"
                          href="https://apps.apple.com/us/app/wings-of-joy-jabalpur/id6447137020"
                        >
                          For IOS Mobile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          target="_blank"
                          rel="noreferrer"
                          href="https://woj.nascorptechnologies.com/Index"
                        >
                          For Web Browser
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <Link className={`nav-link ${
                        location.pathname === "/uniform" ? "active" : ""
                      }`} to="/uniform">
                      Uniform
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/contact" ? "active" : ""
                      }`}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <Link to="/e-register">
                  <button className="btn btn-info fs-5 text-white bg-danger buttonref px-3 ">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </>
  );
};

export default Header;
const Container = styled.div`
  .naxbar {
    position: fixed;
    top:0;
    z-index: 999;
    width: 100%;
    padding: 0.5rem;
    box-shadow: 0px 0px 11px #c4b8b8;
    li {
      font-size: 1.5rem;
      font-weight: bold;
      font-family: "Bricolage Grotesque", sans-serif;
      // color: #3d3f99;
    }
    button {
      font-family: "Bricolage Grotesque", sans-serif;
      // background-color: #f53237;
      border: none;
    }
  }
  .Logo{
    width: 5rem;
  }
  .midnav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 44rem;
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
    }

    li {
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      transition: transform 0.2s;
     
      a {
        padding: 0.1rem;
        color: black !important;
         &:hover {
        border-bottom: blue solid;
        transform: scale(1.15);
        border-radius: 5px;
      }
      }
    }
  }

 }
  .dropdown-menu {
    background: #74b9ff;
  }
  .active {
    border-top: solid red;
    border-left: solid red;
    border-right: solid red;
    border-radius: 5px;
  }
`;
