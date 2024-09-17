import React from "react";
import styled from "styled-components";
// import Button from "react-bootstrap/Button";
import { Card, Row, Col } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
// import placeholder from "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"

const MeetExpert = () => {
  let placeholder =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  return (
    <>
      <Container>
        <div className="container">
          {/* <div className="row mt-5">
            {/* <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div> */}
          {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="cardbox d-flex flex-column justify-content-center align-items-center">
                <div class="card cardRange">
                  <img
                    src="data:image/jpeg;base64,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"
                    class="card-img-top cardimg"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Counselor</h5>
                    <p class="card-text fw-bold">Captain</p>
                  </div>
                </div>
              </div>
            </div> */}

          {/* <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <p className="mt-2">
                At DG Kidos, our Counselor plays a vital role in supporting the
                emotional and social development of our students. With a deep
                understanding of early childhood psychology, our Counselor is
                dedicated to creating a nurturing environment where each child
                feels valued and understood. <br />
                <br />
                The Counselor works closely with both teachers and parents to
                ensure that every child’s needs are met, whether they need help
                adjusting to the school environment, building confidence, or
                developing social skills. Through one-on-one sessions, group
                activities, and regular check-ins, our Counselor is committed to
                helping children navigate their early years with positivity and
                resilience.
                <br />
                At DG Kidos, we believe that a strong support system is key to a
                child’s growth, and our Counselor is an integral part of that
                system, guiding our little learners on their journey of growth
                and discovery.
              </p>
            </div> */}
          {/* </div> */}
          {/* <Carousel interval={3000} controls={true} indicators={true}> */}
          {/* <Carousel.Item> */}
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <Card
                className="teams-card"
                style={{ backgroundColor: "#E0F2F1", width: "100%" }}
              >
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTNuCDMBfhn9zNyDHc0AIYlDdO11ecRsuMRav0ZQlpsqFK6n2s6hIHOpp6x59aGp6h_c&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Ms. Clara</Card.Title>
                  <h6>Counselor Captain</h6>
                  <Card.Text>
                    At DG Kidos, our Counselor fosters students' emotional and
                    social growth by providing personalized guidance and support
                    in collaboration with teachers and parents.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card
                className="teams-card"
                style={{ backgroundColor: "#E0F7FA", width: "100%" }}
              >
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQGTydnHpdujBxvEiUFzg3LaL0tD31WYzGA&s"
                />
                <Card.Body>
                  <Card.Title>Mr. Sudhir</Card.Title>
                  <h6>Chief Executive Officer</h6>
                  <Card.Text>
                    The Chief Executive Officer at DG Kidos leads with a vision
                    to provide a nurturing and innovative learning environment
                    that fosters the holistic growth and development of every
                    child.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card
                className="teams-card"
                style={{ backgroundColor: "#E0F2F1", width: "100%" }}
              >
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxrOMNLRFfHWtLMCh6pX4d-XgpqYjffL3QU7vBRqG03D55VHmJZSikel-G63T62uQc9w&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Ms. Sofiya</Card.Title>
                  <h6>Chief Operating Officer Academics</h6>
                  <Card.Text>
                    The Chief Operating Officer of Academics at DG Kidos
                    oversees the academic programs, ensuring high-quality
                    education and effective curriculum implementation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* </Carousel.Item> */}
          {/* Add more Carousel.Items for other slides */}
          {/* </Carousel> */}
        </div>
        <hr />
        <div className="container">
          <div className="row mt-5">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <h5 class="card-title textshadow">From Headmistress’s Desk</h5>
              <p className="mt-2">
                DG KIDOS school is a part of Joy Group of schools is committed
                towards serving the society from past 6 Decades. Our dedicated
                and skilled teaching staff focus on building a strong
                educational foundation in a nurturing environment. The school
                offers a wide range of activities that cater to all aspects of a
                child’s development including physical, emotional and social
                growth. The school ensures that the curriculum is age –
                appropriate and engaging to keep children interest in learning.
                <br />
                <br />
                <span
                  className="headmis-span"
                  style={{ fontFamily: "monospace" }}
                >
                  "Teaching and learning is not merely a process but a passion
                  at DG KIDOS"
                </span>
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="cardbox d-flex flex-column justify-content-center align-items-center">
                <div class="card cardRange">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOTo6r8XGKxTNepH75_UoqdV7Yj8CauHGaRw&s"
                    class="card-img-top cardimg"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Headmistress</h5>
                    <p class="card-text fw-bold">Mrs Demo Ji</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div> */}
          </div>

          <div className="row mt-5">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="cardbox d-flex flex-column justify-content-center align-items-center">
                <div class="card cardRange">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZPzNUlBfbSaavkWjkz9vEoll9U6Qjbr0wkocFEUaYNDWrir_PY9G4f97VlCcruqUrWg&usqp=CAU"
                    class="card-img-top cardimg"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Headmistress</h5>
                    <p class="card-text fw-bold">Mrs Demo Ji</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <h5 class="card-title textshadow"> CHAIRMAN'S MESSAGE</h5>
              <p className="mt-2">
                DG KIDOS school is a part of Joy Group of schools is committed
                towards serving the society from past 6 Decades. Our dedicated
                and skilled teaching staff focus on building a strong
                educational foundation in a nurturing environment. The school
                offers a wide range of activities that cater to all aspects of a
                child’s development including physical, emotional and social
                growth. The school ensures that the curriculum is age –
                appropriate and engaging to keep children interest in learning.
                <br />
                <br />
                <span
                  className="headmis-span"
                  style={{ fontFamily: "monospace" }}
                >
                  "Teaching and learning is not merely a process but a passion
                  at DG KIDOS"
                </span>
              </p>
            </div>
            {/* <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div> */}
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="flex justify-center mb-4">
              <div className="w-3/12 sm:w-4/12 md:w-1/4 text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuvz_T1oLONt4k8hyK1sBMcRh2atFPh1FN2PGY9-xFbeEHSjLNd8hwFBR2Phh_bBF0tA&usqp=CAU"
                  alt="Descriptive Alt Text"
                  className="img-fly rotate-image w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <h2>Our Academic Team</h2>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="cardbox d-flex flex-column justify-content-center align-items-center">
                <div class="card cardRange">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwNGmDlzjctivw-Dc0olVbudfR1dLgC_kQg&s"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Nursery Kidos</h5>
                    {/* <p class="card-text fw-bold">Mrs Richa Khatwani Chopra</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="cardbox d-flex flex-column justify-content-center align-items-center">
                <div class="card cardRange">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSna3gD1zo-923YVOqj-uAunf8g7Y4taL9NTQ&s"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Lower Kidos</h5>
                    {/* <p class="card-text fw-bold">Mrs Richa Khatwani Chopra</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="cardbox d-flex flex-column justify-content-center align-items-center">
                <div class="card cardRange">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRiYn0Vs9yBPyJosLjMwDfmJD6UUoQtPU6aQ&s"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Upper Kidos</h5>
                    {/* <p class="card-text fw-bold">Mrs Richa Khatwani Chopra</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12"></div> */}
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="cardbox d-flex flex-column justify-content-center align-items-center">
                <div class="card cardRange">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSAbvL93pSTr1F4f8MqYG2o0pinRvGQ82eg&s"
                    alt="..."
                    className="card-img-top "
                  />
                  <div class="card-body">
                    <h5 class="card-title">Kidos Support Staff</h5>
                    {/* <p class="card-text fw-bold">Mrs Richa Khatwani Chopra</p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="cardbox d-flex flex-column justify-content-center align-items-center">
                <div class="card cardRange">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3O9TQ8sKgNxAFODK5zHiG46PVMpYM1_Crdg&s"
                    alt="..."
                    className="card-img-top "
                  />
                  <div class="card-body">
                    <h5 class="card-title">Kidos Play Ground</h5>
                    {/* <p class="card-text fw-bold">Mrs Richa Khatwani Chopra</p> */}
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="container">
              <div className="flex justify-center mb-4">
                <div className="w-3/12 sm:w-4/12 md:w-1/4 text-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1J_6rP-ud8SgdyTQ6dKJ4vffGbtmAvn00vg&s"
                    alt="Descriptive Alt Text"
                    className="img-fly rotate-image w-full h-auto"
                    loading="lazy"
                  />
                </div>

                <h2>Our Mission</h2>
                <div className="text-bold">
                  <h3>
                    <b>
                      <i> DG Kidos</i> is to build crucial skills, inculcate
                      fearless learning and lay a strong foundation through play
                      activities, in the formative years of childhood.
                    </b>
                  </h3>
                  <br />
                  <p>
                    <b>
                      our mission is to nurture young minds through engaging and
                      holistic learning experiences, fostering creativity,
                      curiosity, and a lifelong love for learning."DG Kidos is
                      dedicated to providing a vibrant, supportive environment
                      where children thrive through innovative learning, play,
                      and personalized care."
                    </b>
                  </p>
                  <p>
                    <i>
                      <b>
                        "Our mission at DG Kidos is to inspire and empower each
                        child to reach their full potential through a nurturing
                        and dynamic early education experience."
                      </b>
                    </i>
                  </p>
                  <h3>
                    <b>
                      “Questions? We have the 
                      <span className="text-success"> Answers”</span>
                    </b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MeetExpert;
const Container = styled.div`
  .cardimg {
    height: 18rem;
  }
  img {
  }

  .headmis-span {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: monoscope;
    font-style: italic;
  }

  .teams-card {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    border: none;
  }

  .teams-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
