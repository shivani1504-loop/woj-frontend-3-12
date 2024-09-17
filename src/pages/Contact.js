import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import { FiPhoneCall, FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookSquare, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MapLocation from "../component/MapLocation";
import cogoToast from "cogo-toast";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import qrCode from '../Assets/images/qrCode.png'
import Header2 from "../Layout/Header2";

const Contact = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://wojindia.com/api/auth/inquiryMail", {
        name: fullname,
        email,
        message,
        number: mobile,
      });
      cogoToast.success("Message sent Successfully !");
      setFullName("");
      setEmail("");
      setMessage("");
      setMobile("");
      // navigate("/about");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <>
    <Header2 heading= "Contact Us" />
      <Container>

          
        <Layout title={"Contact - DG KIDOS"} >
          <div
            className="body-contact pt-5 pb-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {/* <div className="secondDiv"></div> */}
            <div className="container contact-body p-4 ">
              <div className="contact-form contact-body-less ">
                <div className="row mt-5 pt-5 pb-5 ">
                  {/* <div className="col-2"></div> */}
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <h1>Contact Info</h1>

                    <p className="mt-3 g-5 mt-3 text-start">
                      <span>
                        {/* <FiPhoneCall className="svgcontact" /> */}
                        <FaPhone />
                      </span>{" "}
                      <a href="tel:0761-2410880" className="text-dark ">
                        <b>Phone: </b>+91-7477253481,{" "}
                      </a>{" "}
                      <a href="tel:+91-7477253481" className="text-dark">
                        0761-6786482
                      </a>
                      <br />
                      <div className="mt-3">
                      <span>
                        {/* <FiPhoneCall className="svgcontact" /> */}
                        <FaPhone />
                      </span>{" "}
                      <b>Toll Free: </b>{" "}
                      <a href="tel:+91 93-64-41-72-72" className="text-dark">
                        +91 93-64-41-72-72
                      </a>
                      </div>
                    </p>
                    <p className="text-start">
                      <span>
                        <AiOutlineMail className="text-dark" />
                      </span>{" "}
                      <a
                        className="text-dark"
                        href="mailto:dgkidosjbp@gmail.com"
                      >
                        <b>E-mail: </b>dgkidosjbp@gmail.com
                      </a>
                    </p>
                    <p className="text-start">
                      <span>
                        <FaLocationDot className="text-dark" />
                        {/* <FaMapMarkerAlt className="text-dark" /> */}
                      </span>{" "}<b>Address: </b>
                      DG Kidos, Plot No. B, kF Complex No. 6/18, Right Town
                      Jabalpur 482001 M.P
                    </p>
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="qrbox">
                            <img
                              // src="https://res.cloudinary.com/antrix/image/upload/v1692023950/woj/QR_code_gg9sgq.jpg"
                              src={qrCode}
                              alt="logo"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="qrcont">
                            <p>Scan the QR to discover more</p>
                            <BsArrowLeftCircleFill
                              style={{ fontSize: "2rem" }}
                            />
                            {/* or click here
                            <a
                              href="https://scnv.io/9tI3?qr=1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://scnv.io/9tI3?qr=1
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="widthsett">
                      <ul className="socialcontact">
                        <li>
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
                    </div> */}
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <div className="container">
                      <h2 className="text-start">Get In Touch</h2>
                 
                      <div className='message-side col-lg-12 col-xl-6 col-xxl-5 w-100 '>

                      <form className="">
                        <div class=" row  ">
                            <div class=" col-md-6">
                                <label for="inputtext4"></label>
                                <input type="text" class="form-control fs-5" id="inputtext4" placeholder="First Name" />
                            </div>
                            <div class=" col-md-6">
                                <label for="inputtext4"></label>
                                <input type="text" class="form-control fs-5" id="inputtext4" placeholder="Last Name" />
                            </div>
                        </div>
                        <div class="">
                            <label for="inputEmail4"></label>
                            <input type="email" class="form-control fs-5" id="inputEmail4" placeholder="Enter Your Email Address" />
                        </div>
                        <div class="">
                            <label for="inputmobile2"></label>
                            <input type="tel" class="form-control fs-5" id="inputMobile2" placeholder="Enter Mobile Number" />
                        </div>
                        <div class="">
                            <label for="inputMessage2"></label>
                            <input type="text" class="form-control fs-5" id="inputMessage2" placeholder="Enter Your Message" />
                        </div>
                        <button type="button" class="submit-btn btn-primary px-4 mt-3   rounded">Submit</button>
                      </form>


                        </div>
                        </div>
                    </div>
                    <div className="mt-5 map-responsive rounded  ">

                  <div className="p-5  ">
                    {/* <h1>Map</h1> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.1801169036394!2d79.92041467531804!3d23.163625379075096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b116195eee4f%3A0x62196cfaef1c23c7!2sDOAGuru%20InfoSystems%20-%20Best%20Digital%20Marketing%20Company%20in%20Jabalpur%20%7C%20Best%20Software%20company%20in%20Jabalpur%20%7C%20IT%20Company%20in%20Jabalpur!5e0!3m2!1sen!2sin!4v1724494976655!5m2!1sen!2sin"
                     width="1000" height="450" 
                      allowFullScreen
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Responsive Google Map"></iframe>
                  </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          {/* <div className="container-fluid">
            <MapLocation />
          </div> */}
        </Layout>
      </Container>
    </>
  );
};

export default Contact;
const Container = styled.div`
  .subBtn {
    background-color: #4ebe93;
  }

  .socialcontact > li {
    list-style: none;
  }

  .socialImagenav {
    height: 2rem;
    width: 2rem;
    margin: 1rem;
  }

  .socialcontact {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .secondDiv {
    background-color: #4ebe93;
    height: 10rem;
    width: 100%;
    margin-top: 6rem;
    position: absolute;
    z-index: -9999;
  }

  .contact-form {
    background-color: white;
  }

  .widthsett {
    width: auto;
    margin-left: 0rem;
  }

  .contact-body {
    box-shadow: 0px 8px 25px #000;
    border-radius: 7px;
  }

  .svgcontact {
    color: #4ebe93;
  }

  .contact-body-less {
    display: flex;
    justify-content: space-evenly;
  }

  /* .body-contact {
  background-color: #c1c1c1;
  position: absolute;
  z-index: 1;
} */

  @media screen and (max-width: 542px) {
    .contact-body-less {
      text-align: center;
    }
    .socialcontact {
      display: flex;
      justify-content: space-around;
    }
    .widthsett {
      width: auto;
      margin-left: 0rem;
    }
  }

  .qrbox {
    img {
      height: auto;
      width: 10rem;
    }
  }
  .qrcont {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
  }
  a {
    text-decoration: none;
    color: sky-blue;
  }
  .map-responsive{
    overflow: hidden;
    padding-bottom: 30%;
    position: relative;
    height: 0;
  }
  .map-responsive iframe{
  left: 0;
  top: 0;
  bordder: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  }


  
`;


     {/* <form onSubmit={onSubmit}>
                        <div class=" bg-primary d-flex justify-content-between ">
                          <div class="mb-3 col-6 bg-success">
                            <input
                              type="First Name"
                              className="form-control p-3"
                              aria-describedby="emailHelp"
                              placeholder="Enter your first Name"
                              id="fullname"
                              value={fullname}
                              required
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </div>
                          <div class="mb-3 col-6 bg-danger">
                            <input
                              type="Name"
                              className="form-control p-3"
                              aria-describedby="emailHelp"
                              placeholder="Enter your Last Name"
                              id="fullname"
                              value={fullname}
                              required
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <input
                            type="email"
                            className="form-control p-3"
                            placeholder="Enter your Email"
                            id="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Enter your mobile number"
                            id="mobile"
                            value={mobile}
                            maxLength={10}
                            required
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </div>
                        <textarea
                          className="form-control mb-3 p-3"
                          placeholder="Enter your message"
                          id="message"
                          value={message}
                          required
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button
                          type="submit"
                          class="btn btn-primary w-40 subBtn border"
                        >
                          Submit
                        </button>
                      </form> */}