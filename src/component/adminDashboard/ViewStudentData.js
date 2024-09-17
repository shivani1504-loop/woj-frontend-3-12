import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

const ViewStudentData = () => {
  const [details, setDetails] = useState([]);
  const [currentAge, setCurrentAge] = useState(null);
  const { id } = useParams();

  const getSelectedStudentData = async () => {
    try {
      const res = await axios.get(
        `https://wojindia.com/api/auth/getstudentviaid/${id}`
      );
      setDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadBirthCertificate = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(
        `https://wojindia.com/api/auth/getStudentBirthCertificateviaId/${id}`,
        {
          responseType: "blob", // Request binary data
        }
      );

      // Create a blob from the response data
      const blob = new Blob([response.data], { type: "application/pdf" });

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Open the URL in a new tab
      window.open(url, "_blank");

      // Release the URL when it's no longer needed to free up memory
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectedStudentData();
  }, []);

  console.log(details.time);
  const dateString = details.time;
  const dateObj = new Date(dateString);
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
  const day = dateObj.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);

  function printDocument() {
    const printContents =
      document.getElementById("printable-section").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  // console.log(details.date_of_birth);
  useEffect(() => {
    if (details.date_of_birth) {
      const dob = new Date(details.date_of_birth);
      const currentDate = new Date();

      const yearDiff = currentDate.getFullYear() - dob.getFullYear();
      const monthDiff = currentDate.getMonth() - dob.getMonth();
      const dayDiff = currentDate.getDate() - dob.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        setCurrentAge(yearDiff - 1);
      } else {
        setCurrentAge(yearDiff);
      }
    }
  }, [details.date_of_birth]);

  console.log(currentAge);

  console.log(details);

  return (
    <>
      <Container>
        <div id="printable-section">
          <div className="headimg">
            <div className="pt-1 pb-1">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="https://res.cloudinary.com/antrix/image/upload/v1692194664/woj/wojlogpdf_aogzak.png"
                      alt="woj"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="titleWoj">
                    <h1 className="text-center">DG KIDOS School</h1>
                    <h2 className="text-center">Jabalpur</h2>
                    <p className="text-center m-0">
                      Phone No. : 9696412222 | Email : wingsofjoyjbp@gmail.com
                      Website : http://wojindia.com
                    </p>
                    <h5 className="text-center mb-0">
                      Registration Form({details.class_for_admission}) 2023 -
                      2024
                    </h5>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="https://res.cloudinary.com/antrix/image/upload/v1692195547/woj/wojpdf2_x7okg9.jpg"
                      alt="woj"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container pb-1">
              <p className="text-end">Application Date : {formattedDate}</p>
              {/* <button
                className="btn btn-success"
                style={{ float: "right" }}
                onClick={printDocument}
              >
                Print
              </button> */}
            </div>
          </div>
          <div className="container student-section mb-2">
            <h3 className="text-start m-2">STUDENT DETAILS</h3>
            <div className="container mt-2">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">
                      Class into which admission is sought:{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.class_for_admission}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Student Name :</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.firstname + " " + details.lastname}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">DOB:</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.date_of_birth}</p>
                </div>
              </div>
            </div>
            {/* <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">DOB in Words</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start mb-0">Third June Two Thousand Twenty</p>
             
                </div>
              </div>
            </div> */}
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Age</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{currentAge}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Gender</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.gender}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Religion</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.Religion}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Caste</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.caste}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Category</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.category}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Mobile No.</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.mobile}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Aadhar No.</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.adhar_number}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* father */}
          <div className="container student-section mb-2">
            <h3 className="text-start m-2">FATHER'S DETAILS</h3>
            <div className="container mt-2">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Name: </p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.father_name}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">
                      Educational Qualification :
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.father_qualification}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Occupation :</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.father_occupation}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Profession</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.father_profession}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Employer</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.father_employer}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Business details</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.father_business_details}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Email</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.father_email}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Mobile</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.father_mobile}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Annual Income</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.father_annual_income}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Residential Address</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.father_residential_address}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Office Address</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.father_office_address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* mother */}
          <div className="container student-section pb-2">
            <h3 className="text-start m-2">MOTHER'S DETAILS</h3>
            <div className="container mt-2">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Name: </p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.mother_name}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">
                      Educational Qualification :
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.mother_qualification}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Occupation :</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.mother_occupation}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Profession</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.mother_profession}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Employer</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.mother_employer}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Business details</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.mother_business_details}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Email</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.mother_email}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Mobile</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.mother_mobile}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Annual Income</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.mother_annual_income}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Residential Address</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.mother_residential_address}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Office Address</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.mother_office_address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          {/* siblings details */}
          <div className="container student-section mb-2">
            <h3 className="text-start m-2">
              Brother / Sister studying in Joy Sr. Sec. School, Jabalpur
            </h3>
            <h4 className="text-start m-2">Sibling details 1 :</h4>
            <div className="container mt-5">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Child Name: </p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.child_one_name}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Roll no :</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.child_one_addmission_no}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Class :</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.child_one_class}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Section</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.child_one_section}</p>
                </div>
              </div>
            </div>
            <h4 className="text-start m-3">Sibling details 2 :</h4>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Child Name :</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.child_two_name}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Roll No. :</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">
                    {details.child_two_addmission_no}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Class :</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.child_two_section}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start mb-0">Section :</p>
                  </div>
                </div>
                <div
                  className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                >
                  {" "}
                  <p className="text-start mb-0">{details.child_two_section}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success mt-5 mb-2" onClick={printDocument}>
            Print Details
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-info mb-2"
            onClick={() => downloadBirthCertificate(details.id)}
          >
            Download Birth Certificate
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/admin-home">
            <button className="btn btn-success">Admin Dashboard</button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default ViewStudentData;
const Container = styled.div`
  .headimg {
    background-color: #fff;
  }
  .titleWoj {
    h1,
    h2,
    h3,
    p {
      color: #7e7474;
    }
  }
  h1 {
    color: #3e409b;
  }

  .student-section {
    border: 1px solid black;
    margin-top: 0rem;
  }
`;
