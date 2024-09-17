import React from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";

const RegSchedule = () => {
  return (
    <>
      <Container>
        <Layout title={"Registration - DG KIDOS"}>
          <div
            className="container d-flex  justify-content-center align-items-center"
            style={{ height: "35vh" }}
          >
            <h1 className="textshadow">
              The eRegistration for classes- Nursery, KG Lower, & KG Upper will
              begin from 10th January 2024, 08:00 am onwards.
            </h1>
          </div>
          <div className="container">
          <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col"></th>
      <th scope="col" className="fs-3">Required Documents</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td className="fw-bolder">Birth Certificate of the child</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td className="fw-bolder">Student Passport Size Photo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td className="fw-bolder">Father and Mother of Passport Size Photo</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td className="fw-bolder">AADHAAR Card of Child</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td className="fw-bolder">Samagra Family Card</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td className="fw-bolder">Blood group of the child (Certified from the recognized pathology)</td>
    </tr>
  </tbody>
</table>
          </div>
        </Layout>
      </Container>
    </>
  );
};

export default RegSchedule;
const Container = styled.div`
  .textshadow {
    text-shadow: 1px 1px 1px black;
  }
`;