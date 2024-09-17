import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import school1 from "../Assets/images/school1.png"
// import logo from "../Assets/images/hero3.jpg"

// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronUp,
//   faChevronDown,
// } from "@fortawesome/free-solid-svg-icons";

function Header2(props) {
  const [
    submenusOpen,
    setSubmenusOpen,
  ] = useState({
    aboutUs: false,
    schoolAppLink: false,
    happening: false,
    studentcorner: false,
  });

  // const handleSubMenuToggle = (
  //   submenuName
  // ) => {
  //   setSubmenusOpen((prevState) => ({
  //     ...prevState,
  //     [submenuName]:
  //       !prevState[submenuName],
  //   }));
  // };
  return (
    <>
      <Wrapper>
        <div className="card border border-0">
          <img
            className="card-img object-fit-cover "
            src={school1}
            alt="image"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-between px-0">
            <div className="row px-2 text-center  w-full">
              {/* <div className="col-md-12 col-12 ">
                <img
                  src={logo}
                  className=""
                  id="doagurulogo"
                  alt="DoaschoolLogo"></img>
              </div> */}
            </div>
            <div className="row ">
              {/* <div className="col-md-6 justify-content-between px-8"></div> */}
              <div className="col-md-6 py-lg-5 py-3 heading-banner  m-auto">
                <h1 className="banner-heading text-light pb-1 text-center">
                  {props.heading}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Header2;

const Wrapper = styled.div`

  * {
    overflow: hidden;
  }
  #doagurulogo {
    width: 200px;
  }
  .card-img-overlay {
    padding-bottom: 0px;
  }
  .btn-close-white {
    color: #ffffff;
  }

  .card {
    /* height: 620px; */
  }

  .card {
    border-radius: none;
  }



  /* Styles for screens up to 600px wide */
  @media screen and (max-width: 600px) {
    #doagurulogo {
      width: 45px;
      
    }

    .card-img-overlay {
      padding-top: 2px;
      padding-bottom: 0px;
    }
  }
  .menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu-list li {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 500;
    font-family: "DINEngschriftStd";
    padding: 0px 0px 0px 40px;
    text-align: start;
  }

  .menu-list li a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
  .heading-banner {
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-top-left-radius: 12px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: -16px;
    margin-left: 0px;
    /* padding-top: 3em; */
    /* padding-right: 8em; */
    /* padding-bottom: 3em; */
    /* padding-left: 3em; */
    background-color: #777799;
  }
  #submenu {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 5px;
  }
  #submenu li {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 400;
    // padding: 0px 0px 0px 20px;
  }
  #submenu li a {
    text-decoration: none;
    color: #fff;
  }

  /* Styles for screens between 601px and 1200px wide */
  @media screen and (min-width: 601px) and (max-width: 1200px) {
    #doagurulogo {
      width: 300px;
    }
    .card-img-overlay {
      padding-top: 2px;
      padding-bottom: 0px;
    }

  }
  
  /* Styles for screens above 1200px wide */
  @media screen and (min-width: 1201px) {
    #doagurulogo {
      width: 400px;
    }
  }
  @media screen and (max-width: 767px) { 
    .banner-heading
    {
        font-size: 20px;
      }
   
    #doagurulogo {
    width: 100px;
  }
  }

  @media (min-width: 992px){

    .card-img {
      height: 640px;
    }
  }
`;