import React from "react";

import styled from "styled-components";
import HeroImg from "../Assets/images/home.png";
import Logo from "../Assets/images/logo.png";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const HeroSection = () => {
  return (
    <>
      <Container>
        <div className="herosection mt-5 pt-2 mt-sm-0 pt-sm-0">
          <div className="row">
            <div className="col-xl-6 col-lg-8  col-md-6 col-sm-12 col-12 ">
              <div className="herocontent m-[10rem] ">
                <h1 className="headingh1">
                  Welcome to <br />{" "}
                </h1>
                <span className=" mb-3">
                  <img
                    src={Logo}
                    alt="logo"
                    srcset=""
                    className="heroSectionLogo rotate-image"
                  />
                </span>
                <h2>Where Learning and Fun Go Hand in Hand!</h2>
                {/* <Link to="/e-register">
                  <button className="btn btn-success">Know more</button>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12 mt-sm-5">
              <img
                // src={HeroImg}
                src="https://i.pinimg.com/736x/cb/28/04/cb2804dd9e98c15cb0695b58d31b5d01.jpg"
                alt="hero section"
                className="heroImage mt-sm-5 pt-sm-5  "
                // style={{ filter: 'brightness(0.7)' }}
                data-aos="flip-left"
              />
            </div>
          </div>

          <div>
            <div className="w-3/12 sm:w-4/12 md:w-1/4 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfcY7IBlNSn5Q3qKtG-MEnyUcEehWPMD-v_g0LJHlERLKb1_yeGBWVe7Ms-R4YPiXB8Sk&usqp=CAU"
                alt="Descriptive Alt Text"
                className="img-fly rotate-image w-full h-auto"
                loading="lazy"
              />
            </div>
            <h1>OUR EARLY LEARNING PROGRAMS</h1>
            <p className="text-danger">
              Empowering young minds with our diverse, engaging programs
            </p>
            <div className="">
              <div className="container-fluid">
                <div className="aboutDetails" data-aos="fade-left">
                  <div>
                    <Row className="justify-content-center">
                      <div className="container">
                        <div className="row justify-content-between">
                          <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-4 ">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuvz_T1oLONt4k8hyK1sBMcRh2atFPh1FN2PGY9-xFbeEHSjLNd8hwFBR2Phh_bBF0tA&usqp=CAU"
                              alt="Descriptive Alt Text"
                              className="img-fly rotate-image img-fluid"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-4">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5g9sOq95eHArd-Mj9no1t5lA8X3MSntC6NGJDVYsWAqfYlAJpiJ5MZ154AL9KgHAIwI&usqp=CAU"
                              alt="Descriptive Alt Text"
                              className="img-fly rotate-image img-fluid"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-4">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsy6K9IiJXhYOtJkyBXxUQFOP2lGqZptKt9w&s"
                              alt="Descriptive Alt Text"
                              className="img-fly rotate-image img-fluid"
                              loading="lazy"
                            />
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-4">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYLQL4tX-ncMwuUxLqUOcwCDW9tTL5Bo9aUVlcuZwsIL3nWiGFumYfIAgJ5eHBMtrGmM&usqp=CAU"
                              alt="Descriptive Alt Text"
                              className="img-fly rotate-image img-fluid"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>

                      <Col md={3} className="mb-4">
                        <Card
                          className="team-cards"
                          style={{ backgroundColor: "#90CAF9", width: "100%" }}
                        >
                          <video
                            width="100%" // Adjust the size to fit the card
                            controls // Adds play/pause controls to the video
                          >
                            <source
                              src="https://media.istockphoto.com/id/469802844/video/nursery-workers-with-children-playing-with-toys.mp4?s=mp4-640x640-is&k=20&c=ZQjd8NWV5DLgE1Whv0wUIOhKrXz4o79Dd_TxtLyisxc=" // Replace with your video URL
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                          <Card.Body>
                            <Card.Title>DG KIDOS PLAY GROUP</Card.Title>
                            {/* <h6>Counselor Captain</h6>
                          <Card.Text>
                            At DG Kidos, our Counselor fosters students'
                            emotional and social growth by providing
                            personalized guidance and support in collaboration
                            with teachers and parents.
                          </Card.Text> */}
                            <Button variant="primary">Age 2+</Button>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col md={3} className="mb-4">
                        <Card
                          className="team-cards"
                          style={{ backgroundColor: "#EF9A9A", width: "100%" }}
                        >
                          <video
                            width="100%" // Adjust the size to fit the card
                            controls // Adds play/pause controls to the video
                          >
                            <source
                              src="https://media.istockphoto.com/id/472706791/video/two-little-girls-and-female-teacher-in-kindergarten.mp4?s=mp4-640x640-is&k=20&c=i4sVSHuppIQr1jYD8m_eACzfLJvbLv8ci0hpkeC2zNA=" // Replace with your video URL
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                          <Card.Body>
                            <Card.Title>DG KIDOS NURSERY</Card.Title>
                            {/* <h6>Chief Executive Officer</h6>
                          <Card.Text>
                            The Chief Executive Officer at DG Kidos leads with a
                            vision to provide a nurturing and innovative
                            learning environment that fosters the holistic
                            growth and development of every child.
                          </Card.Text> */}
                            <Button variant="primary">Age 3+</Button>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col md={3} className="mb-4">
                        <Card
                          className="team-cards"
                          style={{ backgroundColor: "#5C6BC0", width: "100%" }}
                        >
                          <video
                            width="100%" // Adjust the size to fit the card
                            controls // Adds play/pause controls to the video
                          >
                            <source
                              src="https://media.istockphoto.com/id/1135736309/video/little-girl-counting-and-giving-high-five.mp4?s=mp4-640x640-is&k=20&c=8-kTqENKp0xbw5OLeSqtzcjb_cqBs5CJ5jR99zcGB0Q=" // Replace with your video URL
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                          <Card.Body>
                            <Card.Title>DG KIDOS JUNIOR</Card.Title>
                            {/* <h6>Chief Operating Officer Academics</h6>
                          <Card.Text>
                            The Chief Operating Officer of Academics at DG Kidos
                            oversees the academic programs, ensuring
                            high-quality education and effective curriculum
                            implementation.
                          </Card.Text> */}
                            <Button variant="primary">Age 4+</Button>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col md={3} className="mb-4">
                        <Card
                          className="team-cards"
                          style={{ backgroundColor: "#F06292", width: "100%" }}
                        >
                          <video
                            width="100%" // Adjust the size to fit the card
                            controls // Adds play/pause controls to the video
                          >
                            <source
                              src="https://media.istockphoto.com/id/1048922264/video/kids-drawing-at-kindergarten.mp4?s=mp4-640x640-is&k=20&c=B6OdZmBE47SZF4JXQwAEOdIzovokOzxLEyIHJPXIotw=" // Replace with your video URL
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                          <Card.Body>
                            <Card.Title>DG KIDOS SENIOR</Card.Title>

                            <Button variant="primary">Age 5+</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>

                  <div className="row">
                    {/* Left Column */}
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      {/* <div className="herocontent m-[10rem]"> */}
                        <div className="container-fluid m-[10rem]">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKau5v-M9ljQwqkRxsl2qaZyt5hZP4gNsjRrOpDJdCU2xDwLMrPkLECvLiCQ8v8izOnz4&usqp=CAU"
                            alt="logo-about"
                            className="img-write"
                            data-aos="fade-up-right"
                          />
                          
                        </div>
                      {/* </div> */}
                    </div>

                    {/* Right Column */}
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <div
                        className="container tri-cont"
                        data-aos="fade-down-left"
                      >
                        <p className="paracontent">
                          We are an institution dedicated to early childhood
                          education, with a legacy spanning over five decades.
                          Since our humble beginnings, we have gradually evolved
                          into a system of pre-primary education that focuses on
                          nurturing toddlers through a balanced approach of
                          learning and play. At DG Kidos Preschool, we emphasize
                          the development of writing and oral skills with utmost
                          care, ensuring that each child receives the time and
                          attention needed to grow and flourish. <br />
                          <br />
                          We are well-regarded in the region for the discipline
                          we maintain, the personalized attention our teachers
                          provide to each child, and our innovative methods that
                          integrate academics with playful learning. Our
                          commitment extends to fostering strong communication
                          between teachers and parents, ensuring a smooth
                          exchange of information and understanding for the
                          benefit of every child.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
const Container = styled.div`
  .herosection {
    .heroImage {
      height: 40rem;
      width: 90%;
      @media screen and (max-width: 500px) {
        margin-top: 0rem;
        height: 100%;
      }
    }
  }
  .headingh1 {
    font-family: "Freehand", cursive;
    font-weight: 400;
    font-style: normal;
  }
  .herocontent {
    text-align: left;
    margin-top: 12rem;
    padding-left: 9rem;
    @media screen and (max-width: 500px) {
      padding: 1rem;
      margin-top: 1rem;
    }

    h2 {
      font-family: "Freehand", cursive;
      font-weight: 400;
      font-style: normal;
      @media screen and (max-width: 500px) {
        text-align: center;
      }
    }
    button {
      font-family: "Bricolage Grotesque", sans-serif;
    }
    span {
      text-shadow: 1px 8px 12px #ffeaa7;
      color: #3c3e96;
      @media screen and (max-width: 500px) {
        font-size: 4rem;
      }
    }
  }

  .heroSectionLogo {
    width: 70%;
    @media screen and (max-width: 500px) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .rotate-image {
    transition: transform 0.5s ease;
    position: relative;
  }

  .rotate-image:hover {
    transform: rotate(360deg) scaleX(-1);
    // left: 20px;
  }

  .img-fly {
    // margin-bottom: 1rem;
    width: 150px;
    height: 150px;
    vertical-align: middle;
    @media screen and (max-width: 200px) {
      width: 100%;
    }
  }

  .team-cards {
    transition: transform 0.4s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transform-style: preserve-3d;
    position: relative;
    border-radius: 12px; /* Rounded corners */
    background-color: #ffffff; /* White background */
    overflow: hidden; /* Ensures child elements are contained within the card */
  }

  .team-cards:hover {
    transform: scale(1.05) rotate(2deg); /* Scale and slight rotation */
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3); /* More prominent shadow */
  }

  .team-cards img {
    width: 100%; /* Full-width image inside the card */
    border-radius: 12px 12px 0 0; /* Rounded top corners */
  }

  .team-cards .card-content {
    padding: 16px;
    text-align: center;
  }

  .team-cards .card-content h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }

  .team-cards .card-content p {
    font-size: 1rem;
    color: #666;
    margin-top: 8px;
  }
`;
