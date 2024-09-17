import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CgOrganisation } from "react-icons/cg";


const Footer = () => {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container className="container-fluid pt-5 pb-1 footer-body">
      <div className="bg-black">
        <hr />
        <div className="row">
          <div className="col-1"></div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="foot-data">
              <h3  className="h3-foot">
                Contact
              </h3>
              <ul className="mt-3">
                <li>

                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="foot-data">
              <h3 >
                <CgOrganisation /> School links
              </h3>
              <ul>
                <li onClick={handleTop}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={handleTop}>
                  <Link to="/founder">Founder</Link>
                </li>
                <li onClick={handleTop}>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li onClick={handleTop}>
                  <Link to="/contact">Contact</Link>
                </li>
                <li onClick={handleTop}>
                  <Link to="/admin-home">Admin</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="foot-data">
              <h3 className="text-center" >
                Follow Us
              </h3>
              <div className="widthsett mt-4">
                <ul className="socialcontact d-flex justify-content-center">
                  <li className="mx-3">
                    <a
                      href="https://www.facebook.com/people/Wings-Of-Joy/100094887574349/?locale=hi_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/antrix/image/upload/v1678714799/facebook-2429746_640_pwgv7r.png"
                        alt=""
                        srcset=""
                        className="socialImagenav"
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/woj.laxmipur/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/antrix/image/upload/v1678771526/instagram-1675670_640_qpdp85.png"
                        alt=""
                        srcset=""
                        className="socialImagenav"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <hr className="m-0" />
      <div className="last-foot text-center">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <Link to="/Terms" onClick={handleTop}>
              <p>Terms & Conditions</p>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            {" "}
            <p className="text-center">Copyright 	&#169; 2024 DOAGuru Infosystem</p>{" "}
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            {" "}
            <Link to="/privacy" onClick={handleTop}>
              <p>Privacy Policy</p>
            </Link>{" "}
          </div>
        </div>
      </div>
      <hr className="m-0 white" />
    </Container>
  );
};

export default Footer;
const Container = styled.div`/* General Styling for Foot Data */
background: black;
color: white;
.foot-data {
  
  h3 {
    font-family: "Bricolage Grotesque", sans-serif;
    font-size: 1.5rem;
    color: white;
  }
  ul {
    padding-left: 0;
    li {
      list-style: none;
      font-size: 1rem;

      a {
        text-decoration: none;
        font-family: "Bricolage Grotesque", sans-serif;
        &:hover {
          color: #ffff;
        }
      }
    }
  }
}

hr {
  background: white;
  border-top: 3px dotted black;

}

/* Social Image Navigation Styling */
.socialImagenav {
  height: 2rem;
}
`;
