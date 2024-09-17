import React from "react";
import styled from "styled-components";
import LearnLang from '../Assets/images/LEarnLang.png'

const CardSection = () => {
  return (
    <>
      <Container>
        <div className="container-fluid cardSection p-5  mx-auto" data-aos="zoom-in">
          <div className="row d-flex justify-content-around ">
            {/* <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12 "></div> */}
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12 mb-4  ">
              <div className="card card-sect" >
                <img
                  src="https://img.freepik.com/premium-photo/3d-render-kid-playing-educational-games-creative-concept-digital-native-gen-alpha_655090-463335.jpg"
                  className="card-img-top   "
                  alt="education"
                  
                />
                <div className="card-body">
                  <h5 className="card-title" >
                    Education Games and Activities
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12 mb-3 ">
              <div className="card card-sect">
                <img
                  src="https://img.freepik.com/premium-photo/cartoon-man-teaching-front-class-students-generative-ai_902639-147737.jpg"
                  className="card-img-top "
                  alt="education"
                />
                <div className="card-body">
                  <h5 className="card-title" >
                    Teaching kids to express their creativity
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 mb-3 col-12">
              <div className="card card-sect">
                <img
                  src="https://img.freepik.com/premium-photo/photoshoot-3d-render-with-future-scene-kids-learning-code-alongside-hologr_655090-437493.jpg"
                  className="card-img-top "
                  alt="education"
                />
                <div className="card-body">
                  <h5 className="card-title" >
                    Gifted & Talented Program
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12 mb-3">
              <div className="card card-sect">
                <img
                  src="https://img.freepik.com/free-vector/set-kids-playing-different-musical-instrument_1308-122457.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722643200&semt=ais_hybrid"
                  className="card-img-top "
                  alt="education"
                />
                <div className="card-body">
                  <h5 className="card-title" >
                    Music Activities
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
              <div className="card card-sect">
                <img
                  src={LearnLang}
                  className="card-img-top "
                  alt="education"
                />
                <div className="card-body">
                  <h5 className="card-title" >
                    Learning Languages
                  </h5>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default CardSection;
const Container = styled.div`
  .card-sect {
    border: none;
    background: transparent;
    img {
      border-radius: 10px;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
.card-img-top{
  width: 15rem;
}
    h5 {
      font-family: "Bricolage Grotesque", sans-serif;
      font-weight: bold;
      line-height: 21px;
      letter-spacing: 1.7px;
      word-spacing: 1px;
    }
  }
`;
