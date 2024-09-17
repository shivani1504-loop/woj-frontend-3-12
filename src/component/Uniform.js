import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Layout from "../Layout/Layout";
import boySaturday from "../uniformImage/canva/boy-saturday.png";
import boySaturdayOne from "../uniformImage/canva/boy-saturday-1.png";
import boySaturdayTwo from "../uniformImage/canva/boy-saturday-2.png";
import girlSaturday from "../uniformImage/canva/girl-saturday.png";
import girlSaturdayOne from "../uniformImage/canva/girl-saturday-1.png";
import girlSaturdayTwo from "../uniformImage/canva/girl-saturday-2.png";
import boysWinter from "../uniformImage/canva/boy-winter.png";
import boyWinterOne from "../uniformImage/canva/boy-winter-1.png";
import boyWinterTwo from "../uniformImage/canva/boy-winter-2.png";
import girlWinter from "../uniformImage/canva/girl-winter.png";
import girlWinterOne from "../uniformImage/canva/girl-winter-1.png";
import girlWinterTwo from "../uniformImage/canva/girl-winter-2.png";
import { Nav } from "react-bootstrap";
import SummerUniforms from "./UniformSeasons/SummerUniforms";
import WinterUniforms from "./UniformSeasons/WinterUniforms";

const Uniform = () => {
  const initialTab = localStorage.getItem("selectedTab") || "tab1";
  const [selectedTab, setSelectedTab] = useState("tab2");

  useEffect(() => {
    localStorage.setItem("selectedUniformTab", selectedTab);
  }, [selectedTab]);
  return (
    <>
      <Container>
        <Layout title={"school uniform - DG KIDOS"}>
          <h2 className="mt-5">School Uniform</h2>
          <div className="container-fluid d-flex navsect">
            <Nav
              className="side-cont"
              activeKey={selectedTab}
              onSelect={(selectedKey) => setSelectedTab(selectedKey)}
            >
              <Nav.Item>
                <Nav.Link eventKey="tab1" className="navlink">
                  Summer Uniform
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab2" className="navlink">
                  Winter Uniform
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="flex-grow-1 p-3 mainback">
              {selectedTab === "tab1" && <SummerUniforms />}
              {selectedTab === "tab2" && <WinterUniforms />}
            </div>
          </div>
        </Layout>
      </Container>
    </>
  );
};

export default Uniform;
const Container = styled.div`
  // background: url("https://res.cloudinary.com/antrix/image/upload/v1681813312/party%20people%20rockon/mid-two-bg_ego2on.png");

  .cardChange {
    width: 100%;
    height: 90%;
  }

  .dayHead {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  h2 {
    font-size: 3rem;
    font-family: "Bricolage Grotesque";
  }
  h3 {
    margin-bottom: 2rem;
  }

  .background {
    background-color: #74b9ff;
    color: #e0e0e0;
    height: 100%;
    @media screen and (min-width: 1500px) and (max-width: 2500px) {
      height: 100% !important;
    }
  }

  .imgslider {
    height: 17rem;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: black;
    border-radius: 1rem;
  }

  .navlink {
    background-color: #3d3f99;
    border-radius: 0.5rem;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
    margin-left: 1rem;
    color: white;
    border: none;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 500px) {
      width: 80%;
      display: flex;
      flex-direction: row;
    }
    @media screen and (min-width: 501px) and (max-width: 900px) {
      width: 7rem;
    }
  }

  .active {
    background-color: #f53237;
  }
  .side-cont {
    // background-color: #8dbcd8;
    margin-left: 0rem;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 2rem 0rem 2rem;
    background: linear-gradient(45deg, #13c277, #f9f9f9);
    box-shadow: inset 3px 0px 9px #000;
    @media screen and (max-width: 500px) {
      width: 100%;
      padding: 1rem 1rem 0rem 1rem;
    }
    @media screen and (min-width: 501px) and (max-width: 900px) {
      width: 10rem;
    }
  }

  .navsect {
    background-color: transparent;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
