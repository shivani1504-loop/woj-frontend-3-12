import React from "react";
import boyNormalDay from "../../uniformImage/canva/boy-normal-days.png";
import boyNormalDayOne from "../../uniformImage/canva/boy-normal-days-1.png";
import boyNormalDayTwo from "../../uniformImage/canva/boy-normal-days-2.png";
import girlNormalDay from "../../uniformImage/canva/girl-normal-days.png";
import girlNormalDayOne from "../../uniformImage/canva/girl-normal-days-1.png";
import girlNormalDayTwo from "../../uniformImage/canva/girl-normal-days-2.png";
import styled from "styled-components";
import ReactImageMagnify from "react-image-magnify";
import Header2 from "../../Layout/Header2";

const WinterUniforms = () => {
  return (
    <>
      <Container>
      {/* <Header2 heading= "Uniform Section"/> */}
        <div>
          <div className="container-fluid border shadow rounded background">
            <div className="row g-3">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="dayHead">
                  <h2>Boys</h2>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card cardChange mt-2 mb-1 shadow">
                  <h3 className="m-0">Mon-Fri</h3>
                  {/* <img class="card-img-top" src="..." alt="Card cap" /> */}
                  <div>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="magnify-container">
                          <ReactImageMagnify
                            {...{
                              smallImage: {
                                alt: "Mon-Fri",
                                isFluidWidth: true,
                                height: "10rem",
                                src: "http://www.henllyschurchinwalesschool.co.uk/wp-content/uploads/2024/01/IMG_5707-300x225.jpg",
                              },
                              largeImage: {
                                src: "hhttp://www.henllyschurchinwalesschool.co.uk/wp-content/uploads/2024/01/IMG_5707-300x225.jpg",
                                width: 2000,
                                height: 2000,
                              },
                            }}
                          />
                        </div>

                        {/* <img
                          src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1698424167/woj/winter_boys_mon-fri_qbpc9i.png"
                          class="d-block w-100 imgslider"
                          alt="..."
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dressCont">
                  <ul>
                    <li>Blue pant</li>
                    <li>Grey color jacket and head caps</li>
                    <li>Black shoes</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card cardChange mt-2 mb-2 shadow">
                  <h3 className="m-0">Saturday</h3>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="leftmagnify-container">
                        <ReactImageMagnify
                          {...{
                            smallImage: {
                              alt: "Mon-Fri",
                              isFluidWidth: true,
                              height: "10rem",
                              src: "http://www.henllyschurchinwalesschool.co.uk/wp-content/uploads/2024/01/IMG_5707-300x225.jpg",
                            },
                            largeImage: {
                              src: "http://www.henllyschurchinwalesschool.co.uk/wp-content/uploads/2024/01/IMG_5707-300x225.jpg",
                              width: 2500,
                              height: 2000,
                            },
                          }}
                        />
                      </div>
                      {/* <img
                        src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1698424702/woj/winter_boys_saturday_btrkyb.png"
                        class="d-block w-100 imgslider"
                        alt="..."
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dressCont">
                  <ul>
                    <li>Grey color lower</li>
                    <li>Grey color jacket and head caps</li>
                    <li>White shoes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid border shadow rounded background">
            <div className="row g-3">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="dayHead">
                  <h2>Girls</h2>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card cardChange mt-2 mb-2 shadow">
                  <h3 className="m-0">Mon-Fri</h3>
                  <div className="magnify-container">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Mon-Fri",
                          isFluidWidth: true,
                          height: "10rem",
                          src: "https://www.henllyschurchinwalesschool.co.uk/wp-content/uploads/2019/11/odd-socks-day-2019.jpg",
                        },
                        largeImage: {
                          src: "https://www.henllyschurchinwalesschool.co.uk/wp-content/uploads/2019/11/odd-socks-day-2019.jpg",
                          width: 2500,
                          height: 2000,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dressCont">
                  <ul>
                    <li>Blue pant</li>
                    <li>Grey color jacket and head caps</li>
                    <li>Black shoes</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card cardChange mt-2 mb-2 shadow">
                  <h3 className="m-0">Saturday</h3>
                  <div className="leftmagnify-container">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Mon-Fri",
                          isFluidWidth: true,
                          height: "10rem",
                          src: "https://www.henllyschurchinwalesschool.co.uk/wp-content/uploads/2019/11/odd-socks-day-2019.jpg",
                        },
                        largeImage: {
                          src: "https://www.henllyschurchinwalesschool.co.uk/wp-content/uploads/2019/11/odd-socks-day-2019.jpg",
                          width: 2500,
                          height: 2000,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dressCont">
                  <ul>
                    <li>Grey color lower</li>
                    <li>Grey color jacket and head caps</li>
                    <li>White shoes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WinterUniforms;
const Container = styled.div`
  .magnify-container {
    position: relative;
    z-index: 9999;
    @media (max-width: 768px) {
      width: 100%; // Full width for small screens
      max-width: none; // Remove the maximum width for small screens
    }
  }

  // img {
  //   height: 17rem;
  // }

  .leftmagnify-container {
    @media screen and (max-width: 500px) {
      margin-top: 3rem;
    }
  }
  .magnify-container {
    @media screen and (max-width: 500px) {
      margin-top: 3rem;
    }
  }

  .dressCont {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    li {
      text-align: start;
      font-size: 2rem;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;
