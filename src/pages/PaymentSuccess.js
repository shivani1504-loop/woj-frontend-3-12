import axios from "axios";
import React from "react";
import { useAuth } from "../context/Index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const [auth, setAuth] = useAuth([]);
  const navigate = useNavigate();

  const getUser = localStorage.getItem("auth");
  console.log(getUser);

  console.log(auth.user);

  const deleteItemAfterPayment = async () => {
    try {
      const res = await axios.delete(
        `https://wojindia.com/api/auth/deleteCartItems/${auth.user}`
      );
      console.log(res);
      navigate("/gallery");
    } catch (error) {
      console.log(error);
    }
  };

  const downloadImageAfterPayment = async () => {
    alert(auth.user);

    try {
      const downloadResponse = await axios.get(
        "https://wojindia.com/api/auth/downloadImages",
        {
          params: {
            user_id: auth.user,
          },
          responseType: "blob",
        }
      );

      // Create a blob URL and trigger the download
      const blob = new Blob([downloadResponse.data]);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "cartimages.zip"; // Set the download attribute
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      deleteItemAfterPayment();
    } catch (error) {
      console.log(error, "error in downloading image");
      alert("error downloading image");
    }
  };

  return (
    <>
      <Container>
        <div className="container">
          <div className="d-flex justify-content-center flex-column align-items-center hnav shadow">
            <h1>Payment successfull</h1>
            <button
              className="btn btn-outline-success"
              onClick={downloadImageAfterPayment}
            >
              Download Images
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PaymentSuccess;
const Container = styled.div`
  .hnav {
    height: 100vh;
  }
`;
