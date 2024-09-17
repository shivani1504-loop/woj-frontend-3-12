import React from "react";
import styled from "styled-components";

const LearningPro = () => {
  return (
    <>
      <Container>
        <div className="headpro mt-5">
          <h1>Learning Program</h1>
        </div>
        <div className="container">
          <div className="learnImage">
            <img
              src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697544567/MK_rpazj5.png"
              alt="learing chart"
              className="learning-chart rotateImg"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default LearningPro;
const Container = styled.div`
  .headpro {
    h1 {
      color: #348385;
      font-size: 5rem;
      font-family: "Bricolage Grotesque", sans-serif;
      text-shadow: 1px 1px 1px #ffffff;
      font-weight: bold;
      letter-spacing: 4px;
      @media screen and (max-width: 500px) {
        font-size: 3rem;
      }
    }
  }
  .learnImage {
    padding-top: 2rem;
    padding-bottom: 2rem;
    img {
      height: 40rem;
      width: 40rem;
      @media screen and (max-width: 500px) {
        height: 20rem;
        width: 20rem;
      }
    }
  
  }
  .rotateImg{
  animation: rotation 10s infinite linear;
  }
  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
