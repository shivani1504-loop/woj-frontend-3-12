import React from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
// import Header2 from "../Layout/Header2";
// import MeetExpert from "../component/MeetExpert";

const Founder = () => {
  return (
    <>
      {/* <Header2 heading= "founder"/> */}
      <Container>
        <Layout title={"Contact - DG KIDOS"}>
          <div className="container-fluid pt-5 founder-header mt-5 ">
            <h1>Our Founder</h1>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-5 ">
                  <img
                    src="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/01/preschool-learning.jpg"
                    alt="founder"
                  />
                  <h2>foundation of educational system</h2>
                  {/* <p
                    className="text-center fw-bold"
                    style={{
                      fontFamily: "Bricolage Grotesque",
                      color: "brown",
                    }}
                  >
                    17 March 1929 - 05 January 2012
                  </p> */}
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  {/* <h1>Our Founder</h1> */}
                  <p className="mt-3">
                    <strong>The foundation of this educational system</strong>{" "}
                    was laid by drawing inspiration from the principles of
                    discipline and the importance of striving for perfection.
                    These qualities are deeply embedded in the system designed
                    for DG Kidos School. The little school, Joy Prep & K.G.
                    Classes, gradually expanded its reach, offering education up
                    to the Senior Secondary level. The DG Kidos family grew
                    bigger and more efficient, dedicated to imparting education
                    from Kindergarten to the twelfth grade.
                    <br />
                    <br />
                    Today, the school continues to work tirelessly to provide
                    quality education to its students. It all began modestly
                    with just six kids who received tutoring, and over time, the
                    system grew and evolved, much like a tiny seed growing into
                    a flourishing tree. The staff at DG Kidos School have been
                    well-trained to share the vision of providing quality
                    education.
                  </p>
                </div>
              </div>
            </div>
            {/* <SchoolFacility /> */}
            {/* <div className="container-fluid pt-5" data-aos="zoom-in"> */}
           

              {/* <MeetExpert /> */}
            </div>
          {/* </div> */}
        </Layout>
      </Container>
    </>
  );
};

export default Founder;
const Container = styled.div`
  // background: url("https://res.cloudinary.com/antrix/image/upload/v1681813312/party%20people%20rockon/mid-two-bg_ego2on.png");
  .founder-header {
    h1 {
      font-size: 6rem;
      font-family: "Bricolage Grotesque";
      letter-spacing: 0.5rem;
      color: #3f4197;

      margin-left: 0rem;
      @media screen and (max-width: 500px) {
        font-size: 3rem;
      }
    }
    h2 {
      font-size: 1.5rem;
      font-family: "Trebuchet MS", sans-serif;
      letter-spacing: 3px;
      margin-top: 1.5rem;
      color: #3f4197;

      margin-left: 0rem;
    }
    p {
      text-align: justify;
      font-size: 1.2rem;
    }
    img {
      box-shadow: 1px 6px 15px #918a8a;
      width: 100%;
      border-radius: 1rem;
    }

  
  }
`;
