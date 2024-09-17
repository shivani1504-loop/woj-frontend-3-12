import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import cogoToast from "cogo-toast";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
// import useRazorpay, { RazorpayOptions } from "react-razorpay";

// const loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve();
//     };
//     script.onerror = () => {
//       reject(new Error(`Failed to load script: ${src}`));
//     };
//     document.head.appendChild(script);
//   });
// };

const Eregister = () => {
  const navigate = useNavigate();
  // const [Razorpay, isLoaded] = useRazorpay();
  // const [selectedDate, setSelectedDate] = useState(null);
  const [dateform, setDateForm] = useState("");
  const [payStats, setPayStats] = useState("Pending");
  const [birth_certificate, setBirthCertificate] = useState(null);
  const [birthCertificatePreview, setBirthCertificatePreview] = useState(null);
  const [fatherPicture, setFatherPicture] = useState(null);
  const [fatherPicturePreview, setFatherPicturePreview] = useState(null);
  const [motherPicture, setMotherPicture] = useState(null);
  const [motherPicturePreview, setMotherPicturePreview] = useState(null);
  const [studentPicture, setStudentPicture] = useState(null);
  const [studentPicturePreview, setStudentPicturePreview] = useState(null);
  const [allStudData, setAllStudData] = useState([]);
  const [data, setData] = useState({
    class: "",
    present_school: "",
    present_class: "",
    present_school_city: "",
    firstname: "",
    lastname: "",
    mobile: "",
    gender: "",
    religion: "",
    caste: "",
    category: "",
    father_name: "",
    father_qualification: "",
    father_occupation: "",
    father_profession: "",
    father_employer: "",
    father_business: "",
    father_email: "",
    father_mobile: "",
    father_annual_income: "",
    father_res_address: "",
    father_office_address: "",
    father_adhar_card: "",
    mother_name: "",
    mother_qualification: "",
    mother_occupation: "",
    mother_profession: "",
    mother_employer: "",
    mother_business: "",
    mother_email: "",
    mother_mobile: "",
    mother_annual_income: "",
    mother_res_address: "",
    mother_office_address: "",
    mother_adhar_card: "",
    first_childname: "",
    first_child_addmission_number: "",
    first_child_class: "",
    first_child_section: "",
    second_childname: "",
    second_child_addmission_number: "",
    second_child_class: "",
    second_child_section: "",
    selectedDate: null,
    formattedDate: null,
  });

  const educationLevels = [
    "10th",
    "12th",
    "Diploma",
    "ITI",
    "Intermediate",
    "Graduation",
    "B.A",
    "B.Com",
    "B.Sc",
    "B.Tech",
    "MBBS",
    "BBA",
    "BCA",
    "B.Ed",
    "B.Pharm",
    "B.Arch",
    "BDS",
    "BHMS",
    "BAMS",
    "B.Voc",
    "BPT",
    "BHM",
    "LLB",
    "Post Graduation",
    "M.A",
    "M.Com",
    "M.Sc",
    "M.Tech",
    "MBA",
    "MCA",
    "M.Phil",
    "Ph.D.",
    "Other",
  ];

  const professions = [
    "Engineer",
    "Doctor",
    "Teacher",
    "Software Developer",
    "Nurse",
    "Accountant",
    "Lawyer",
    "Chef",
    "Police Officer",
    "Artist",
    "Entrepreneur",
    "Pilot",
    "Architect",
    "Scientist",
    "Journalist",
    "Marketing Specialist",
    "Electrician",
    "Plumber",
    "Carpenter",
    "Photographer",
    "Fitness Trainer",
    "Hair Stylist",
    "Real Estate Agent",
    "Graphic Designer",
    "Librarian",
    "Social Worker",
    "Musician",
    "Writer",
    "Chef",
    "Veterinarian",
    "Farmer",
    "Dentist",
    "Psychologist",
    "Salesperson",
    "Biologist",
    "Chemist",
    "Economist",
    "Actor",
    "Fashion Designer",
    "Mechanic",
    "Physicist",
    "Singer",
    "Athlete",
    "Banker",
    "Meteorologist",
    "Geologist",
    "Pharmacist",
    "Therapist",
    "Flight Attendant",
    "Security Guard",
    "Translator",
    "Researcher",
    "other",
  ];

  // const studentName = data.firstname + " " + data.lastname;
  const [isChecked, setIsChecked] = useState(false);
  const [isDueCleared, setIsDueCleared] = useState(false);

  const handleAdharDuplicate = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4400/api/auth/getAllStudent"
      );
      console.log(response.data);
      setAllStudData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(allStudData);
  useEffect(() => {
    handleAdharDuplicate();
  }, []);

  const handleCheckboxChange = () => {
    // Update the state when the checkbox is clicked
    setIsChecked(!isChecked);
    setIsDueCleared(!isDueCleared);
  };

  const isAgeValid = (selectedDate, selectedClass) => {
    const dateOfBirth = new Date(selectedDate);
    const currentDate = new Date();
    const ageInMonths =
      (currentDate.getFullYear() - dateOfBirth.getFullYear()) * 12 +
      (currentDate.getMonth() - dateOfBirth.getMonth());

    const ageRanges = {
      Nursery: { min: 2 * 12 + 9, max: 3 * 12 + 8 },
      KG_Lower: { min: 3 * 12 + 9, max: 4 * 12 + 8 },
      KG_Upper: { min: 4 * 12 + 9, max: 5 * 12 + 8 },
    };

    const validAgeRange = ageRanges[selectedClass];
    return (
      validAgeRange &&
      ageInMonths >= validAgeRange.min &&
      ageInMonths <= validAgeRange.max
    );
  };
  console.log(isAgeValid);
  const handleBirthCertificateChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Update the state with the selected file
      setBirthCertificate(selectedFile);

      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setBirthCertificatePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleFatherPictureChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Update the state with the selected file
      setMotherPicture(selectedFile);

      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setFatherPicturePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleMotherPictureChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFatherPicture(selectedFile);

      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setMotherPicturePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleStudentPictureChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setStudentPicture(selectedFile);

      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentPicturePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  console.log(birth_certificate);
  console.log(fatherPicture);
  console.log(motherPicture);
  console.log(studentPicture);

  const handleSubmit = async (paymentStatus) => {
    // e.preventDefault();
    const matchingStudData = allStudData.filter((item) => {
      return item.father_adhar_card === data.father_adhar_card;
    });

    if (matchingStudData.length > 0) {
      // Aadhar number already exists in the database
      console.error("Aadhar number already exists");
      cogoToast.error("Aadhar number already exists");
      return; // Exit the function to prevent further execution
    }

    const formData = new FormData();

    // Append user.data fields to formData
    for (const key in data) {
      formData.append(key, data[key]);
    }

    formData.append("birth_certificate", birth_certificate);
    formData.append("father_passport_picture", fatherPicture);
    formData.append("mother_passport_picture", motherPicture);
    formData.append("student_picture", studentPicture);

    console.log(
      data,
      birth_certificate,
      fatherPicture,
      motherPicture,
      studentPicture
    );

    try {
      const registerData = await axios.post(
        "http://localhost:4400/api/auth/e-register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(registerData);
      console.log(data, birth_certificate);
      cogoToast.success("User registered successfully!");
      return registerData;
      // navigate("/reg-response");

      setData({
        class: "",
        school: "",
        present_class: "",
        present_school_city: "",
        firstname: "",
        lastname: "",
        // birth_certificate_file: "",
        mobile: "",
        gender: "",
        religion: "",
        caste: "",
        category: "",
        // adhar_card: "",
        // dateInput: "",
        father_name: "",
        father_qualification: "",
        father_occupation: "",
        father_profession: "",
        father_employer: "",
        father_business: "",
        father_email: "",
        father_mobile: "",
        father_annual_income: "",
        father_res_address: "",
        father_office_address: "",
        // mother
        mother_name: "",
        mother_qualification: "",
        mother_occupation: "",
        mother_profession: "",
        mother_employer: "",
        mother_business: "",
        mother_email: "",
        mother_mobile: "",
        mother_annual_income: "",
        mother_res_address: "",
        mother_office_address: "",
        // siblings
        // first
        first_childname: "",
        first_child_addmission_number: "",
        first_child_class: "",
        first_child_section: "",

        // second
        second_childname: "",
        second_child_addmission_number: "",
        second_child_class: "",
        second_child_section: "",
      });

      // setBirthCertificateFileName("");
    } catch (error) {
      // console.error(error.response.status); // Log the HTTP status code
      console.error(error.response.data.error);
      cogoToast.error(error.response.data.error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Use spread syntax to update only the changed field
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const handleDateChange = (date) => {
  //   setData((prevData) => ({
  //     ...prevData,
  //     selectedDate: date,
  //   }));
  // };

  const handleDateChange = (date) => {
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setData((prevData) => ({
      ...prevData,
      selectedDate: date,
      formattedDate: formattedDate,
    }));
  };

  console.log(data);
  console.log(data.selectedDate);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const selectedDate = data.selectedDate;
    const selectedClass = data.class;

    console.log(selectedDate);

    if (!isAgeValid(selectedDate, selectedClass)) {
      cogoToast.error(
        "Nursery : Minimum age 2 years and 9 months, maximum age 3 years and 8 months. KG Lower : Minimum age 3 years and 9 months, maximum age 4 years and 8 months. KG Upper : Minimum age 4 years and 9 months, maximum age 5 years and 8 months."
      );
      return;
    }

    const studentName = data.firstname + " " + data.lastname;
  };
  console.log(data.birth_certificate_file);

  //payment integresation stripe
  const makePaymentStripe = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51O27AtSJ71FIkPeehPV7yvNpyrwxW6Id0V2q5vgGk9EMs54m0T6SXi9EOrvHmB71q0pYv8uVSKGAQmMsj1Dirh4h00EpBeyzJV"
      );
      const studentName = data.firstname + " " + data.lastname;

      const body = {
        name: studentName,
        amount: 1,
        currency: "INR",
        status: payStats,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      // Use Axios to make the POST request
      const response = await axios.post(
        "http://localhost:4400/api/auth/registerPayment",
        body,
        {
          headers: headers,
        }
      );

      console.log(response.data);
      const session = response.data;

      console.log(session.order.id);
      console.log(session);
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
        // Use 'id' instead of 'receipt' to get the correct session ID
      });
      console.log(result);
      // handleSubmit();
      if (result.error) {
        console.error(result.error);
      } else {
        // Assuming handleSubmit is a function you want to call after successful payment
        // handleSubmit();
        console.log("payment successful");
      }
    } catch (error) {
      console.error("Error in makePaymentStripe:", error);
    }
  };

  const additionalFunction = async () => {
    try {
      console.log("payment successful");
    } catch (error) {
      console.log(error);
    }
  };

  const makePaymentStripeAndRegistered = async () => {
    try {
      // Initiate payment
      if (isAgeValid) {
        const paymentResult = await handleSubmit();
        console.log(paymentResult, "299");

        if (paymentResult) {
          // If payment was successful, initiate image download
          console.log("Payment successful");

          // Now, initiate the Stripe payment
          const response = await makePaymentStripe();
          if (response.status === 201) {
            const data = await response.json();
            console.log("Order created:", data.order);

            // Call the additional function if it exists
            if (data.additionalFunction) {
              additionalFunction();
            }
          } else {
            console.error("Failed to create order:", response.statusText);
          }

          // Other actions after successful payment
        } else {
          console.error("Payment failed");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <Layout title={"E-registeration - DG KIDOS"}>
          <div className="container-fluid">
            <h1>E-Registration Form</h1>
            <form onSubmit={handleFormSubmit} enctype="multipart/form-data">
              <div class="container student-sec">
                <h2>Student Details</h2>
                <div class="form-group nursery-sec">
                  <label for="class">
                    Class into which admission is sought{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    class="form-control"
                    id="class"
                    name="class"
                    value={data.class}
                    onChange={handleInputChange}
                  >
                    <option>--select--</option>
                    <option value="Nursery">Nursery</option>
                    <option value="KG_Lower">Kindergartan Lower</option>
                    <option value="KG_Upper">Kindergartan Upper</option>
                  </select>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="present_school">
                          Present School(if any)
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="present_school"
                          id="present_school"
                          placeholder="Enter Present School"
                          value={data.present_school}
                          onChange={handleInputChange}
                          required={data.class !== "Nursery"}
                          disabled={data.class === "Nursery"}
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="present-class">
                          Present Class<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="present_class"
                          value={data.present_class}
                          placeholder="Enter Present Class"
                          id="present_class"
                          onChange={handleInputChange}
                          required={data.class !== "Nursery"}
                          disabled={data.class === "Nursery"}
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="present-school-city">
                          Present School City
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="present_school_city"
                          value={data.present_school_city}
                          placeholder="Enter Present School City"
                          id="present_school_city"
                          onChange={handleInputChange}
                          required={data.class !== "Nursery"}
                          disabled={data.class === "Nursery"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="firstname">
                          First Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="firstname"
                          placeholder="Enter First Name"
                          value={data.firstname}
                          onChange={handleInputChange}
                          id="firstname"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="lastname">
                          Last Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="lastname"
                          placeholder="Enter Last Name"
                          value={data.lastname}
                          onChange={handleInputChange}
                          id="lastname"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="birth_certificate">
                          Upload Birth Certificate
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <small className="text-start" style={{ color: "red" }}>
                          Format ex: .pdf, .jpg, .jpeg, .png
                        </small>
                        <input
                          onChange={handleBirthCertificateChange}
                          type="file"
                          class="form-control"
                          name="birth_certificate"
                          placeholder="upload birth certificate"
                          id="birth_certificate"
                          accept=".pdf, .jpg, .jpeg, .png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="student_picture">
                          Upload Student Picture
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <small className="text-start" style={{ color: "red" }}>
                          Format ex: .pdf, .jpg, .jpeg, .png
                        </small>
                        <input
                          onChange={handleStudentPictureChange}
                          type="file"
                          class="form-control"
                          name="student_picture"
                          placeholder="upload student picture"
                          id="student_picture"
                          accept=".pdf, .jpg, .jpeg, .png"
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="gender">
                          Gender<span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          class="form-control"
                          id="gender"
                          name="gender"
                          value={data.gender}
                          onChange={handleInputChange}
                        >
                          <option>--select gender--</option>
                          <option value="male">male</option>
                          <option value="female">female</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="religion">
                          Religion<span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          class="form-control"
                          id="religion"
                          name="religion"
                          value={data.religion}
                          onChange={handleInputChange}
                        >
                          <option>--select religion--</option>
                          <option value="hindu">Hindu</option>
                          <option value="muslim">Muslim</option>
                          <option value="sikh">Sikh</option>
                          <option value="christian">Christian</option>
                          <option value="jain">Jain</option>
                          <option value="buddhist">Buddhist</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="caste">
                          Caste<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="caste"
                          placeholder="Enter Caste"
                          value={data.caste}
                          onChange={handleInputChange}
                          id="caste"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="category">
                          Category<span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          class="form-control"
                          id="category"
                          name="category"
                          value={data.category}
                          className="form-control"
                          onChange={handleInputChange}
                        >
                          <option>--select--</option>
                          <option value="general">General</option>
                          <option value="obc">OBC</option>
                          <option value="st">ST</option>
                          <option value="sc">SC</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <label for="dateInput">Enter Date of Birth:</label>
                      <div class="input-group">
                        <DatePicker
                          selected={data.selectedDate}
                          onChange={(date) => handleDateChange(date)}
                          className="form-control"
                          dateFormat="dd-MM-yyyy"
                          placeholderText="Select a date"
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      {/* <div class="form-group">
                        <label for="adhar_card">Adhar Number</label>
                        <input
                          type="text"
                          class="form-control"
                          name="adhar_card"
                          value={data.adhar_card}
                          id="adhar_card"
                          onChange={handleInputChange}
                          pattern="[0-9]{12}"
                          maxlength="12"
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div class="container student-sec mt-5">
                <h2>Father's Details</h2>
                <div class="container-fluid mt-3">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="father_name">
                          Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          onChange={handleInputChange}
                          name="father_name"
                          value={data.father_name}
                          placeholder="Enter Father Name"
                          id="father_name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="father_qualification">
                          Educational Qualification
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          name="father_qualification"
                          value={data.father_qualification}
                          onChange={handleInputChange}
                          id="father_qualification"
                          required
                        >
                          <option value="">
                            Select Father's Qualification
                          </option>
                          {educationLevels.map((qualification, index) => (
                            <option key={index} value={qualification}>
                              {qualification}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="form-group">
                        <label htmlFor="father_occupation">
                          Occupation<span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          name="father_occupation"
                          value={data.father_occupation}
                          onChange={handleInputChange}
                          id="father_occupation"
                          required
                        >
                          <option value="">--Select Occupation--</option>
                          <option value="Govt_job">Govt Job</option>
                          <option value="Private_Job">Private Job</option>
                          <option value="Home_Maker">Home Maker</option>
                          <option value="Farmer">Farmer</option>
                          <option value="self_employment">
                            Self-employment
                          </option>
                          <option value="None">None</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="father_profession">
                          Profession<span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          name="father_profession"
                          value={data.father_profession}
                          onChange={handleInputChange}
                          id="father_profession"
                          required
                        >
                          <option value="">Select Father's Profession</option>
                          {professions.map((profession, index) => (
                            <option key={index} value={profession}>
                              {profession}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="father_employer">Employer</label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          value={data.father_employer}
                          name="father_employer"
                          placeholder="Enter Father Employer"
                          id="father_employer"
                          required={data.father_occupation === "Private_Job"}
                          disabled={data.father_occupation !== "Private_Job"}
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="father_business">
                          Business/Firm Details
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="father_business"
                          value={data.father_business}
                          placeholder="Enter Father's Business/Firm Details"
                          id="father_business"
                          required={
                            data.father_occupation === "self_employment"
                          }
                          disabled={
                            data.father_occupation !== "self_employment"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="father_email">
                          Email ID<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="email"
                          class="form-control"
                          placeholder="Enter Email Address"
                          value={data.father_email}
                          name="father_email"
                          id="father_email"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="father_mobile">
                          Mobile No.<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="d-flex">
                          <p>
                            <img
                              src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1704208108/woj/india-26828_1280_m0v8js.png"
                              alt="indian-flag"
                              srcset=""
                              style={{ height: "1rem" }}
                            />
                            +91
                          </p>
                          <input
                            onChange={handleInputChange}
                            type="text"
                            class="form-control"
                            name="father_mobile"
                            placeholder="Enter Mobile Number"
                            value={data.father_mobile}
                            style={{ height: "3rem" }}
                            id="father_mobile"
                            maxLength="10"
                            minLength="10"
                            title="Please enter a valid 10-digit mobile number"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="father_annual_income">
                          Annual Income<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="father_annual_income"
                          placeholder="Enter Father's Annual Income"
                          value={data.father_annual_income}
                          id="father_annual_income"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="father_res_address">
                          Residential Address
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="textarea"
                          class="form-control"
                          name="father_res_address"
                          value={data.father_res_address}
                          placeholder="Enter Address"
                          id="father_res_address"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="father_office_address">
                          Office Address
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="textarea"
                          class="form-control"
                          name="father_office_address"
                          placeholder="Enter Office Address"
                          value={data.father_office_address}
                          id="father_office_address"
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="adhar_card">
                          Aadhar Number<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="father_adhar_card"
                          value={data.father_adhar_card}
                          id="father_adhar_card"
                          placeholder="Enter Aadhar Number"
                          onChange={handleInputChange}
                          pattern="[0-9]{12}"
                          inputMode="numeric"
                          maxLength="12"
                          minLength="12"
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="father_passport_picture">
                          Upload Father's Picture
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <small className="text-start" style={{ color: "red" }}>
                          Format ex: .pdf, .jpg, .jpeg, .png
                        </small>
                        <input
                          onChange={handleFatherPictureChange}
                          type="file"
                          class="form-control"
                          name="father_passport_picture"
                          placeholder="upload father passport picture"
                          id="father_passport_picture"
                          accept=".pdf, .jpg, .jpeg, .png"
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"></div>
                  </div>
                </div>
              </div>

              <div class="container student-sec mt-5">
                <h2>Mother's Details</h2>
                <div class="container-fluid mt-3">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="mother_name">
                          Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="mother_name"
                          placeholder="Enter Mother's Name"
                          value={data.mother_name}
                          id="mother_name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="mother_qualification">
                          Educational Qualification
                          <span style={{ color: "red" }}>*</span>
                        </label>

                        <select
                          className="form-control"
                          name="mother_qualification"
                          value={data.mother_qualification}
                          onChange={handleInputChange}
                          id="mother_qualification"
                          required
                        >
                          <option value="">
                            Select Mother's Qualification
                          </option>
                          {educationLevels.map((qualification, index) => (
                            <option key={index} value={qualification}>
                              {qualification}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="form-group">
                        <label htmlFor="mother_occupation">
                          Occupation<span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          name="mother_occupation"
                          value={data.mother_occupation}
                          onChange={handleInputChange}
                          id="mother_occupation"
                          required
                        >
                          <option value="">--Select Occupation--</option>
                          <option value="Govt_job">Govt Job</option>
                          <option value="Private_Job">Private Job</option>
                          <option value="Home_Maker">Home Maker</option>
                          <option value="Farmer">Farmer</option>
                          <option value="self_employment">
                            Self-employment
                          </option>
                          <option value="None">None</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="mother_profession">
                          Profession<span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                          className="form-control"
                          name="mother_profession"
                          value={data.mother_profession}
                          onChange={handleInputChange}
                          id="mother_profession"
                          required
                        >
                          <option value="">Select Mother's Profession</option>
                          {professions.map((profession, index) => (
                            <option key={index} value={profession}>
                              {profession}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="mother_employer">Employer</label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="mother_employer"
                          value={data.mother_employer}
                          placeholder="Enter Mother's Employer"
                          id="mother_employer"
                          required={data.mother_occupation === "Private_Job"}
                          disabled={data.mother_occupation !== "Private_Job"}
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="mother_business">
                          Business/Firm Details
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="mother_business"
                          value={data.mother_business}
                          placeholder="Enter Mother's Business/Firm details"
                          id="mother_business"
                          required={
                            data.mother_occupation === "self_employment"
                          }
                          disabled={
                            data.mother_occupation !== "self_employment"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="mother_email">
                          Email ID<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="email"
                          class="form-control"
                          name="mother_email"
                          value={data.mother_email}
                          placeholder="Enter Mother's Email"
                          id="mother_email"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="mother_mobile">
                          Mobile No. <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="d-flex">
                          <p>
                            <img
                              src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1704208108/woj/india-26828_1280_m0v8js.png"
                              alt="indian-flag"
                              srcset=""
                              style={{ height: "1rem" }}
                            />
                            +91
                          </p>
                          <input
                            onChange={handleInputChange}
                            type="text"
                            class="form-control"
                            name="mother_mobile"
                            value={data.mother_mobile}
                            style={{ height: "3rem" }}
                            id="mother_mobile"
                            pattern="[0-9]{10}"
                            placeholder="Enter Mobile Number"
                            maxLength={10}
                            title="Please enter a valid 10-digit mobile number"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="mother_annual_income">
                          Annual income<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="mother_annual_income"
                          value={data.mother_annual_income}
                          id="mother_annual_income"
                          placeholder="Enter Mother's Annual Income"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="mother_res_address">
                          Residential Address
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="textarea"
                          class="form-control"
                          name="mother_res_address"
                          value={data.mother_res_address}
                          placeholder="Enter Address"
                          id="mother_res_address"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="mother_office_address">
                          Office Address
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="textarea"
                          class="form-control"
                          name="mother_office_address"
                          value={data.mother_office_address}
                          placeholder="Enter Office Address"
                          id="mother_office_address"
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="adhar_card">
                          Aadhar Number<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="mother_adhar_card"
                          value={data.mother_adhar_card}
                          id="mother_adhar_card"
                          placeholder="Enter Aadhar Number"
                          onChange={handleInputChange}
                          pattern="[0-9]{12}"
                          inputMode="numeric"
                          minLength="12"
                          maxLength="12"
                          title="Aadhar number must be exactly 12 digits"
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="mother_passport_picture">
                          Upload Mother's Picture
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <small className="text-start" style={{ color: "red" }}>
                          Format ex: .pdf, .jpg, .jpeg, .png
                        </small>
                        <input
                          onChange={handleMotherPictureChange}
                          type="file"
                          class="form-control"
                          name="mother_passport_picture"
                          placeholder="upload mother passport picture"
                          id="mother_passport_picture"
                          accept=".pdf, .jpg, .jpeg, .png"
                        />
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"></div>
                  </div>
                </div>
              </div>

              <div class="container student-sec mt-5">
                <h2 style={{ fontSize: "1.5rem" }}>
                  Brother / Sister Studying In Joy Sr. Sec. / DG KIDOS
                  School, Jabalpur
                </h2>
                <div class="container-fluid mt-3">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="first_childname">First Child name</label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="first_childname"
                          value={data.first_childname}
                          placeholder="Enter Name"
                          id="first_childname"
                        />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="first_child_addmission_number">
                          Admission No.{" "}
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="first_child_addmission_number"
                          placeholder="Enter Admission Number"
                          value={data.first_child_addmission_number}
                          id="first_child_addmission_number"
                        />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="first_child_class">Class</label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="first_child_class"
                          placeholder="Enter Class"
                          value={data.first_child_class}
                          id="first_child_class"
                        />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="first_child_section">Section</label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="first_child_section"
                          placeholder="Enter Section"
                          value={data.first_child_section}
                          id="first_child_section"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid mt-3">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="second_childname">Second Child name</label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="second_childname"
                          placeholder="Enter Name"
                          value={data.second_childname}
                          id="second_childname"
                        />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="second_child_addmission_number">
                          Admission No.{" "}
                        </label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="second_child_addmission_number"
                          value={data.second_child_addmission_number}
                          placeholder="Enter Admission Number"
                          id="second_child_addmission_number"
                        />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="second_child_class">Class</label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="second_child_class"
                          placeholder="Enter Class"
                          value={data.second_child_class}
                          id="second_child_class"
                        />
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="second_child_section">Section</label>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          class="form-control"
                          name="second_child_section"
                          placeholder="Enter Section"
                          value={data.second_child_section}
                          id="second_child_section"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container mt-5">
                <h2>Document Required</h2>
                <p className="text-start">
                  The following documents are must at the time of Admission.
                </p>
                <ol>
                  <li>Birth Certificate of the child.</li>
                  <li>
                    Caste Certificate of the child. (For ST / SC /OBC
                    Candidates)
                  </li>
                </ol>
              </div>
              <div class="container mt-5">
                <h2>NOTE</h2>

                <ol>
                  <li>Limited seats are available.</li>
                  <li>
                    This registration does not entitle a child for admission.
                  </li>
                  <li>
                    Please ensure that the Name of the child and parents are
                    same in all the documents or it may lead to the discrepancy
                    and may result in the rejection of the form.
                  </li>
                  <li>
                    More than one Registration forms for one candidate will be
                    rejected.
                  </li>
                  <li>Incomplete Registration will be summarily rejected</li>
                  <li>
                    No future request will be entertained to have any change in
                    the date of birth of the child.
                  </li>
                  <li>
                    In case of remaining / absent on due Date / Time of
                    interview or test the registration charges get forfeited.
                  </li>
                  <li>e-Registration charges (Rs. 500/-) is non-refundable.</li>
                  <li className="fw-bold">
                    Nursery: Minimum age 2 years and 9 months, maximum age 3
                    years and 8 months. <br />
                    Lower Kindergartan : Minimum age 3 years and 9 months,
                    maximum age 4 years and 8 months. <br />
                    Upper Kindergartan: Minimum age 4 years and 9 months,
                    maximum age 5 years and 8 months.
                  </li>
                </ol>
              </div>
              <div class="container mt-5">
                <div class="boxnot">
                  <h2 class="text-center mb-3"> PLEASE NOTE</h2>
                  <h3>
                    ✓ DONATIONS/RECOMMENDATIONS ARE NOT TAKEN AGAINST
                    ADMISSIONS.
                  </h3>
                  <h3>
                    ✓ WITHOUT THE COMPLETE DOCUMENTATION THE ADMISSION WILL NOT
                    BE GRANTED.
                  </h3>
                  {/* <h3>✓ e-REGISTRATION FEES ARE NOT REFUNDABLE.</h3> */}
                </div>
              </div>

              <div className="container d-flex justify-content-center">
                {/* Render the checkbox input */}
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="mt-2 checkbx"
                />

                {/* Display a message based on the checkbox state */}
                {isChecked ? (
                  <p className="mt-2 confpara">Thank you.</p>
                ) : (
                  <p className="mt-2 confpara">
                    Please confirm that you have read all the notes carefully
                    and you are agree with our conditions and Please Confirm
                    that you have cleared all the pending datause.
                  </p>
                )}
              </div>

              {/* modal */}

              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Preview
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Preview
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="container">
                        <div class="container student-sec">
                          <h2>Student Details</h2>
                          <div class="form-group">
                            <label for="class" style={{ width: "100%" }}>
                              Class into which admission is sought{" "}
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <p
                              className="fw-bold text-start p-1 rounded"
                              style={{ background: "white" }}
                            >
                              {data.class}
                            </p>
                          </div>
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="school">
                                    Present School(if any)
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.present_school}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="present-class">
                                    Present Class
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.present_class}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="present-school-city">
                                    Present School City
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.present_school_city}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="firstname">
                                    First Name
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.firstname}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="lastname">
                                    Last Name
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.lastname}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="birth_certificate">
                                    Birth Certificate
                                    <span style={{ color: "red" }}>*</span>
                                  </label>

                                  {birthCertificatePreview && (
                                    <img
                                      src={birthCertificatePreview}
                                      alt="birthcertificate"
                                      style={{
                                        maxWidth: "200px",
                                        maxHeight: "200px",
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="student_picture">
                                    Student Picture
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  {studentPicturePreview && (
                                    <img
                                      src={studentPicturePreview}
                                      alt="studentPicturePreview"
                                      style={{
                                        maxWidth: "200px",
                                        maxHeight: "200px",
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="gender">
                                    Gender
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.gender}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="religion">
                                    Religion
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.religion}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="caste">
                                    Caste<span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.caste}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="category">
                                    Category
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.category}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <label for="dateInput">Date of Birth:</label>
                                <p
                                  className="fw-bold text-start p-1 rounded"
                                  style={{ background: "white" }}
                                >
                                  {data.formattedDate}
                                </p>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"></div>
                            </div>
                          </div>
                        </div>

                        <div class="container student-sec mt-5">
                          <h2>Father's Details</h2>
                          <div class="container-fluid mt-3">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="father_name">
                                    Name<span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_name}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="father_qualification">
                                    Educational Qualification
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_qualification}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="form-group">
                                  <label htmlFor="father_occupation">
                                    Occupation
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_occupation}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="father_profession">
                                    Profession
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_profession}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="father_employer">Employer</label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_employer}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="father_business">
                                    Business/Firm Details
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_business}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="father_email">
                                    Email ID
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_email}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="father_mobile">
                                    Mobile No.
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_mobile}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="father_annual_income">
                                    Annual Income
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_annual_income}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="father_res_address">
                                    Residential Address
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_res_address}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="father_office_address">
                                    Office Address
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_office_address}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="adhar_card">
                                    Aadhar Number
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.father_adhar_card}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="father_passport_picture">
                                    Upload Father's Picture
                                    <span style={{ color: "red" }}>*</span>
                                  </label>

                                  {fatherPicturePreview && (
                                    <img
                                      src={fatherPicturePreview}
                                      alt="Father's Preview"
                                      style={{
                                        maxWidth: "200px",
                                        maxHeight: "200px",
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"></div>
                            </div>
                          </div>
                        </div>

                        <div class="container student-sec mt-5">
                          <h2>Mother's Details</h2>
                          <div class="container-fluid mt-3">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="mother_name">
                                    Name<span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_name}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="mother_qualification">
                                    Educational Qualification
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_qualification}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="form-group">
                                  <label htmlFor="mother_occupation">
                                    Occupation
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_occupation}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="mother_profession">
                                    Profession
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_profession}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="mother_employer">Employer</label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_employer}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="mother_business">
                                    Business/Firm Details
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_business}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="mother_email">
                                    Email ID
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_email}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="mother_mobile">
                                    Mobile No.{" "}
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_mobile}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="mother_annual_income">
                                    Annual income
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_annual_income}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="mother_res_address">
                                    Residential Address
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_res_address}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="mother_office_address">
                                    Office Address
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_office_address}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="adhar_card">
                                    Aadhar Number
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.mother_adhar_card}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="mother_passport_picture">
                                    Mother's Picture
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  {motherPicturePreview && (
                                    <img
                                      src={motherPicturePreview}
                                      alt="mother's Preview"
                                      style={{
                                        maxWidth: "200px",
                                        maxHeight: "200px",
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"></div>
                            </div>
                          </div>
                        </div>

                        <div class="container student-sec mt-5">
                          <h2 style={{ fontSize: "1.5rem" }}>
                            Brother / Sister Studying In Joy Sr. Sec. / Wings of
                            Joy School, Jabalpur
                          </h2>
                          <div class="container-fluid mt-3">
                            <div class="row">
                              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="first_childname">
                                    First Child name
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.first_childname}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="first_child_addmission_number">
                                    Admission No.{" "}
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.first_child_addmission_number}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="first_child_class">Class</label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.first_child_class}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="first_child_section">
                                    Section
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.first_child_section}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container-fluid mt-3">
                            <div class="row">
                              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="second_childname">
                                    Second Child name
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.second_childname}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="second_child_addmission_number">
                                    Admission No.{" "}
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.second_child_addmission_number}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="second_child_class">Class</label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.second_child_class}
                                  </p>
                                </div>
                              </div>
                              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                  <label for="second_child_section">
                                    Section
                                  </label>
                                  <p
                                    className="fw-bold text-start p-1 rounded"
                                    style={{ background: "white" }}
                                  >
                                    {data.second_child_section}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      {/* <button type="button" class="btn btn-primary">
                        Save changes
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <button
                  type="submit"
                  class="btn btn-warning mt-3 mb-3 mx-auto d-block"
                  disabled={!isChecked}
                  onClick={makePaymentStripeAndRegistered}
                >
                  Pay & Submit
                </button>
                {/* <button
                  type="submit"
                  class="btn btn-success mt-3 mb-5 mx-auto d-block"
                  disabled={!isChecked || payStats !== "success"}
                >
                  submit
                </button> */}
              </div>
            </form>
          </div>
        </Layout>
      </Container>
    </>
  );
};

export default Eregister;
const Container = styled.div`
  h1 {
    font-size: 3rem;
    font-family: "Bricolage Grotesque", sans-serif;
    color: #3c3e97;
    margin-right: 1rem;
    margin-top: 2rem;
  }

  .nursery-sec {
    width: 50%;
  }

  .container-fluid {
    padding-left: 0 !important;
  }

  .student-sec {
    // border: 5px solid #3498db;
    padding: 2rem;
    background-color: #e1e5e6;
    box-shadow: 1px 4px 11px #cec3c3;
  }

  h2 {
    color: #e74c3c;
    text-decoration: underline;
    font-family: cursive;
    text-align: start;
  }

  .boxnot {
    border: 1px solid black;
    padding: 2rem;
  }

  @media (max-width: 576px) {
    .form-group {
      width: 100%;
    }
  }
  li {
    text-align: start;
  }

  label,
  small {
    display: flex;
    text-align: left;
  }
  h3 {
    font-size: 1rem;
  }
  .checkbx {
    height: 2rem;
    width: 2rem;
  }
  .confpara {
    font-size: 1.5rem;
  }

  .modal-dialog {
    max-width: 80%;
    margin: 1.75rem auto;
  }
`;
