import React from "react";
import styled from "styled-components";
import teacherIMG from "../Assets/images/teacger.png"

const SchoolFacility = () => {
  return (
    <>
      <Container>
        <div className="pt-4">
          <h1 data-aos="zoom-in" className="mt-5">School Facility</h1>
        </div>
        <div
          className="container  p-3" >
          <div className="row mt-5">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <div className="border border-black rounded-4" >
                  <img
                    src={teacherIMG}
                    alt=""
                  />
                </div>
                <h3 className="mt-3">
                  Dedicated and Experienced Teaching Staff
                </h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <div className="border border-black rounded-4">
                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1694006126/woj/fire_chute_piuv5j.png"
                    alt=""
                  />
                </div>
                <h3 className="mt-3">Fire Chute for Safe Evacuation</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <div className="border border-black rounded-4">

                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1694006449/woj/music_n4gsan.png"
                    alt=""
                  />
                </div>
                <h3 className="mt-3">Music and Dance</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <div className="border border-black rounded-4">

                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1694089529/woj/speech_therapy_b3lezz.png"
                    alt=""
                  />
                </div>
                <h3 className="mt-3">Special Education with Speech Therapy</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <div className="border border-black rounded-4">
                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1694089739/woj/nep_tifltb.png"
                    alt=""
                  />
                </div>
                <h3 className="mt-3">
                  NEP Inspired Curriculum for Holistic Education
                </h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <div className="border border-black rounded-4">
                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1694090196/woj/projector_otqvdp.png"
                    alt=""
                  />
                </div>
                <h3 className="mt-3">Projector Powered Audio Visual Content</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <div className="border border-black rounded-4">
                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1694090537/woj/cctv_1_jfsfiv.png"
                    alt=""
                  />
                </div>
                <h3 className="mt-3">CCTV Covered Safe Campus</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <div className="border border-black rounded-4">

                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1694090794/woj/seamless_rlf88v.png"
                    alt=""
                  />
                </div>
                <h3 className="mt-3">
                  ERP Enabled Institution for Seamless Communication
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SchoolFacility;
const Container = styled.div`
  h1 {
    font-size: 5rem;
    font-family: "Bricolage Grotesque", sans-serif;
    font-weight: bold;
    @media screen and (max-width: 500px) {
      font-size: 3rem;
    }
  }

  .class-level {
    img {
      height: object-fit;
      width: 100%;
      padding: 3rem;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }

    h3 {
      
      font-family:  sans-serif;
      font-size: 23px;
      font-weight: bold;
      letter-spacing: 2.2px;
      @media screen and (max-width: 500px) {
        font-size: 1.5rem;
      }
        padding-bottom: 1rem;
    }
  }

`;
