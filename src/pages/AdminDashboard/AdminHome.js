import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentDetails from "../../component/adminDashboard/StudentDetails";
import NoticeBoardUpdate from "../../component/adminDashboard/NoticeBoardUpdate";
// import GalleryUpdate from "../../component/adminDashboard/GalleryUpdate";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Index";
import GalleryMainPart from "../../component/adminDashboard/GalleryPart/GalleryMainPart";
import RegStudentDetails from "../../component/adminDashboard/RegStudentDetails";

const AdminHome = () => {
  const initialTab = localStorage.getItem("selectedTab") || "tab1";
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [auth] = useAuth();
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    // get-request
    localStorage.removeItem("admin");
    navigate("/adminLogin");
    // window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("selectedTab", selectedTab);
  }, [selectedTab]);

  return (
    <>
      <Container>
        {auth.admin === null ? (
          <>
            <div className="container d-flex justify-content-center align-items-center flex-column">
              <h1>Please Login First</h1>
              <Link to="/adminLogin">Login here</Link>
            </div>
          </>
        ) : (
          <>
            <div className="container-fluid d-flex navsect">
              <Nav
                className="flex-column side-cont"
                activeKey={selectedTab}
                onSelect={(selectedKey) => setSelectedTab(selectedKey)}
              >
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1691994477/woj/logowoj_iezamm.png"
                  alt="logo"
                  width={200}
                  className="mb-5 logoimg"
                />

                <Nav.Item>
                  <Nav.Link eventKey="tab1" className="navlink">
                    All Student Details
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab2" className="navlink">
                    Notice Board
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab3" className="navlink">
                    Gallery
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab4" className="navlink">
                    Registered Student List
                  </Nav.Link>
                </Nav.Item>

                <button
                  className="btn btn-success logoutbtn"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </Nav>
              <div className="flex-grow-1 p-3 mainback">
                {selectedTab === "tab1" && <StudentDetails />}
                {selectedTab === "tab2" && <NoticeBoardUpdate />}
                {selectedTab === "tab3" && <GalleryMainPart />}
                {selectedTab === "tab4" && <RegStudentDetails />}
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default AdminHome;
const Container = styled.div`
  // background: url("https://res.cloudinary.com/antrix/image/upload/v1681813312/party%20people%20rockon/mid-two-bg_ego2on.png");
  // background-image: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);

  .navsect {
    background-color: transparent;
    height: 100%;
  }
  .hdiv {
    height: 35rem;
  }
  .navlink {
    background-color: #3d3f99;
    border-radius: 0.5rem;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
    color: white;
    border: none;
    @media screen and (max-width: 500px) {
      width: 80%;
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
    margin-left: -1rem;
    width: 20%;
    padding: 1rem 2rem 0rem 2rem;
    background: linear-gradient(45deg, #13c277, #f9f9f9);
    box-shadow: inset 3px 0px 9px #000;
    @media screen and (max-width: 500px) {
      width: 8rem;
      padding: 1rem 1rem 0rem 1rem;
    }
    @media screen and (min-width: 501px) and (max-width: 900px) {
      width: 10rem;
    }
  }
  h1 {
    font-family: "Bricolage Grotesque", sans-serif;
  }
  .logoutbtn {
    @media screen and (max-width: 500px) {
      width: 5rem !important;
    }
    @media screen and (min-width: 501px) and (max-width: 900px) {
      width: 7rem !important;
    }
  }

  .logoimg {
    @media screen and (max-width: 500px) {
      width: 5rem !important;
    }
    @media screen and (min-width: 501px) and (max-width: 900px) {
      width: 7rem !important;
    }
  }

  .mainback {
    background: url("https://res.cloudinary.com/antrix/image/upload/v1681813312/party%20people%20rockon/mid-two-bg_ego2on.png");
  }
`;
