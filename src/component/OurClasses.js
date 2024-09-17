import React from "react";
import styled from "styled-components";

const OurClasses = () => {
  return (
    <>
      <Container>
        <div className="classHeading mt-3" data-aos="zoom-in">
          <h1 className="mt-3">Our Classes</h1>
        </div>
        <div className="container pb-3">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697470682/NURSEY_afdcxy.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="class-level">
                <img
                  // src="https://res.cloudinary.com/antrix/image/upload/v1693656326/woj/lower-kg_kwaa4l.png"
                  src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1698411442/woj/LOWER_KINDERGARTAN_rf8pgy.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="class-level">
                <img

                  src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1698411639/woj/upper_kindergartan_a3rc2z.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurClasses;
const Container = styled.div`
  .classHeading {
    h1 {
    font-size: 5rem;
    font-family: "Bricolage Grotesque", sans-serif;
    font-weight: bold;
      @media screen and (max-width: 500px) {
        font-size: 3rem;
      }
    }
  }
  .class-level {
    img {
      height: object-fit;
      width: 100%;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
    .btnLevelone {
      // background-color: #f0ad4e;
      color: #742b16;
      border: none;
      font-size: 2rem;
      font-weight: bold;
      font-family: "Bricolage Grotesque", sans-serif;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
