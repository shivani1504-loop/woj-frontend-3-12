import React from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
// import { BiSolidBookReader } from "react-icons/bi";
// import { RiParentFill } from "react-icons/ri";
// import { GiTeacher } from "react-icons/gi";
// import { FaMusic } from "react-icons/fa";
import MeetExpert from "../component/MeetExpert";
import Logo from "../Assets/images/logo.png";
import Header2 from "../Layout/Header2";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// import SchoolFacility from "../component/SchoolFacility";

const About = () => {
  return (
    <>
      <Container>
        <Header2 heading="About Us" />
        <Layout title={"About - DG KIDOS"} >
          <div className="aboutHero m-5">
            <div className="row">
              <div>
                <div className="abouthead p-8" data-aos="fade-right">
                
                  {/* <h1>About </h1> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="aboutDetails" data-aos="fade-left">
              <div className="row pt-5">
                <div className="aboutT mb-3">
                  {/* <h1>Read about DG KIDOS</h1> */}
                  <img
                    src={Logo}
                    alt="logo"
                    srcset=""
                    className="img-flk rotate-image"
                  />
                </div>
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
                        className="team-card"
                        style={{ backgroundColor: "#90CAF9", width: "100%" }}
                      >
                        <Card.Img
                          variant="top"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZx5m3LXF3Ex9wGYEzLDNlF1HJEyaLujPYA&s"
                        />
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
                        className="team-card"
                        style={{ backgroundColor: "#EF9A9A", width: "100%" }}
                      >
                        <Card.Img
                          variant="top"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxRH4d0yMxvGpUM7pNvUG6-8TyhIknAf7qw&s"
                        />
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
                        className="team-card"
                        style={{ backgroundColor: "#5C6BC0", width: "100%" }}
                      >
                        <Card.Img
                          variant="top"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXo8Vi6PwJruT3kug0464BG0Pe4Ro4Tce3Pw&s"
                        />
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
                        className="team-card"
                        style={{ backgroundColor: "#F06292", width: "100%" }}
                      >
                        <Card.Img
                          variant="top"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-vKjzOjbYKzL8xBD7WUFzjJfcckRDVqHSQ&s"
                        />
                        <Card.Body>
                          <Card.Title>DG KIDOS SENIOR</Card.Title>
                          {/* <h6>Chief Executive Officer</h6>
                          <Card.Text>
                            The Chief Executive Officer at DG Kidos leads with a
                            vision to provide a nurturing and innovative
                            learning environment that fosters the holistic
                            growth and development of every child.
                          </Card.Text> */}
                          <Button variant="primary">Age 5+</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="container-fluid">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKau5v-M9ljQwqkRxsl2qaZyt5hZP4gNsjRrOpDJdCU2xDwLMrPkLECvLiCQ8v8izOnz4&usqp=CAU"
                      alt="logo-about"
                      className="img-write"
                      data-aos="fade-up-right"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="container tri-cont" data-aos="fade-down-left">
                    <p className="paracontent">
                      We are an institution dedicated to early childhood
                      education, with a legacy spanning over five decades. Since
                      our humble beginnings, we have gradually evolved into a
                      system of pre-primary education that focuses on nurturing
                      toddlers through a balanced approach of learning and play.
                      At DG Kidos Preschool, we emphasize the development of
                      writing and oral skills with utmost care, ensuring that
                      each child receives the time and attention needed to grow
                      and flourish. <br />
                      <br />
                      We are well-regarded in the region for the discipline we
                      maintain, the personalized attention our teachers provide
                      to each child, and our innovative methods that integrate
                      academics with playful learning. Our commitment extends to
                      fostering strong communication between teachers and
                      parents, ensuring a smooth exchange of information and
                      understanding for the benefit of every child.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <SchoolFacility /> */}
          <div className="container-fluid pt-5" data-aos="zoom-in">
            <div className="teacherheading">
              <h1>Meet our Team</h1>
            </div>
            <MeetExpert />
          </div>
        </Layout>
      </Container>
    </>
  );
};

export default About;
const Container = styled.div`
  overflow-x: hidden;

  .aboutHero {
    height: auto;
  }
  .rightImage {
    img {
      width: 100%;
      height: 100%;
      animation: App-logo-spin infinite 20s linear;
    }
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  .abouthead {
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 8rem;
      font-family: "Birthstone Bounce", cursive;
      // font-family: montserrat;
      letter-spacing: 0.5rem;
      color: #3f4197;
      margin-left: 0rem;
      @media screen and (max-width: 500px) {
        font-size: 3rem;
      }
    }
  }
  .aboutT {
    h1 {
      font-size: 3rem;
      font-family: "Bricolage Grotesque", sans-serif;
      letter-spacing: 0.5rem;
      color: #3f4197;
    }
  }
  .img-write {
    border-radius: 2rem;
    width: 100%;
    @media screen and (max-width: 500px) {
      width: 100%;
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
  p {
    text-align: justify;
  }
  .card {
    padding: 1rem;
    background: transparent;
    border: none;
    align-items: center;
    .card-title {
      margin-bottom: 0.5rem;
    }
    .box {
      border-radius: 50%;
      height: 4rem;
      width: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h2 {
      color: #3d3f99;
    }
    p {
      text-align: justify;
    }
  }

  .cardbox {
  }

  .teacherheading {
    h1 {
      font-family: "Bricolage Grotesque", sans-serif;
      font-weight: bold;
      font-size: 3.5rem;
      color: #3e4096;
      letter-spacing: 0.5rem;
      @media screen and (max-width: 500px) {
        font-size: 3rem;
      }
    }
  }

  .paracontent {
    font-size: 1.3rem;
  }
  .img-flk {
    margin-bottom: 3rem;
    width: 35rem;
    height: auto;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
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

/* Add perspective to the parent container */
.team-container {
  perspective: 1000px;
}

.team-card {
  transition: transform 0.6s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  position: relative;
}

/* Rotate on hover with a 3D flip effect */
.team-card:hover {
  transform: rotateY(180deg) rotate(3deg); /* Adds slight rotation and flip */
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
}

/* Add styles for the back side (optional) */
.team-card .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
}

.team-card .front {
  backface-visibility: hidden;
}




`;
