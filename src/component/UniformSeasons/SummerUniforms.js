import React from "react";
import styled from "styled-components";
import boyNormalDay from "../../uniformImage/canva/boy-normal-days.png";
import boyNormalDayOne from "../../uniformImage/canva/boy-normal-days-1.png";
import boyNormalDayTwo from "../../uniformImage/canva/boy-normal-days-2.png";
import girlNormalDay from "../../uniformImage/canva/girl-normal-days.png";
import girlNormalDayOne from "../../uniformImage/canva/girl-normal-days-1.png";
import girlNormalDayTwo from "../../uniformImage/canva/girl-normal-days-2.png";
import ReactImageMagnify from "react-image-magnify";

const SummerUniforms = () => {
  return (
    <>
      <Container>
        <div>
          <div className="container-fluid border shadow rounded background">
            <div className="row g-3">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="dayHead">
                  <h2>Boys</h2>
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
                          height: "auto",
                          src: "https://i.pinimg.com/474x/31/b3/ec/31b3ecb3bf7426d3b498e0ab8684e475.jpg",
                        },
                        largeImage: {
                          src: "https://i.pinimg.com/474x/31/b3/ec/31b3ecb3bf7426d3b498e0ab8684e475.jpg",
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
                    <li>Black Pant</li>
                    <li>light blue Shirt</li>
                    <li>Black Shoes</li>
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
                          height: "auto",
                          src: "https://5.imimg.com/data5/LL/FU/YE/ANDROID-31043671/product-jpeg.jpg",
                        },
                        largeImage: {
                          src: "https://5.imimg.com/data5/LL/FU/YE/ANDROID-31043671/product-jpeg.jpg",
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
                    <li>Lower</li>
                    <li>White T-Shirt</li>
                    <li>White Shoes</li>
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
                  {/* <img class="card-img-top" src="..." alt="Card cap" /> */}
                  <div className="magnify-container">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Mon-Fri",
                          isFluidWidth: true,
                          height: "auto",
                          src: "https://johnlewis.scene7.com/is/image/JohnLewis/school-uniform-girls-skirts-hyb-05624",
                        },
                        largeImage: {
                          src: "https://johnlewis.scene7.com/is/image/JohnLewis/school-uniform-girls-skirts-hyb-05624",
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
                    <li> black skirt</li>
                    <li>light Blue shirt</li>
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
                          height: "auto",
                          src: "https://5.imimg.com/data5/YH/XR/PZ/ANDROID-31043671/product-jpeg-500x500.jpg",
                        },
                        largeImage: {
                          src: "https://5.imimg.com/data5/YH/XR/PZ/ANDROID-31043671/product-jpeg-500x500.jpg",
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
                    <li>Skirt</li>
                    <li>House Color T-Shirt</li>
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

export default SummerUniforms;
const Container = styled.div`
  .magnify-container {
    position: relative;
    z-index: 9999;
  }
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
  .background {
    @media screen and (min-width: 1500px) and (max-width: 2500px) {
      height: 32rem !important;
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
