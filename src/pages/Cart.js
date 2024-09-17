import React, { useCallback, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import styled from "styled-components";
import { useAuth } from "../context/Index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useCart } from "../context/CartContext";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import cogoToast from "cogo-toast";
import { loadStripe } from "@stripe/stripe-js";

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject(new Error(`Failed to load script: ${src}`));
    };
    document.head.appendChild(script);
  });
};

const Cart = () => {
  // const [cart, setCart] = useCart();
  const [cartItems, setCartItems] = useState([]);
  const [auth, setAuth] = useAuth([]);
  const navigate = useNavigate();
  const [Razorpay, isLoaded] = useRazorpay();
  const [payStats, setPayStats] = useState("Pending");
  const [erpUser, setErpUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(null);

  const getUser = localStorage.getItem("auth");
  console.log(getUser);

  const getAllCartItems = async () => {
    const userId = auth.user;
    console.log(userId);
    try {
      const res = await axios.get(
        `https://wojindia.com/api/auth/getCartItems/${userId}`
      );
      console.log(res.data);
      setCartItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCartItems();
  }, []);

  const totalPrice = () => {
    try {
      let total = 0;
      cartItems.forEach((item) => {
        total = total + parseFloat(item.price);
      });
      return total;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  const initializeRazorpay = async () => {
    await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    try {
      // Make a request to your backend to create a new order
      const response = await axios.post(
        "https://wojindia.com/api/auth/create-order",
        {
          amount: totalPrice(),
          currency: "INR",
          status: payStats,
        }
      );

      console.log(response);
      console.log(payStats);
      const { amount, currency, id } = response.data;
      console.log(response);

      const options = {
        key: "rzp_test_BGDch2dcTs1gNs",
        amount: amount * 100,
        currency: currency,
        name: "DG KIDOS",
        description: "Description of the purchase",
        handler: async function (response) {
          try {
            const { razorpay_payment_id, orderId } = response;

            console.log(response);
            // Send payment details to your backend for verification
            const paymentVerificationResponse = await axios.post(
              "https://wojindia.com/api/auth/verify-payment",
              {
                paymentId: razorpay_payment_id,
              }
            );
            console.log(paymentVerificationResponse);
            const paymentStatus = paymentVerificationResponse.data.status;
            console.log(paymentStatus);
            console.log(id);
            // Update payment status in the database
            const payResponse = await axios.put(
              `https://wojindia.com/api/auth/update-order/${id}`,
              {
                status: paymentStatus,
              }
            );
            setPayStats(paymentStatus);
            console.log(payResponse);
            console.log(payStats);
            if (paymentStatus === "success") {
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
              a.download = "cartimages.zip";
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
            }

            console.log(
              payStats,
              "Payment verification response:",
              paymentVerificationResponse.data
            );
          } catch (error) {
            console.error("Error verifying payment:", error, error.message);
          }
        },
        prefill: {
          name: "User Name",
          email: "user@example.com",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error initializing Razorpay:", error);
    }
  };

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
  // delete item
  const removeCartItem = async (item_id) => {
    console.log(item_id);
    try {
      const res = await axios.delete(
        `https://wojindia.com/api/auth/cart-items-delete/${auth.user}/${item_id}`
      );
      console.log(res);
      setCartItems(cartItems);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(auth.user);
  const datause = auth.user;

  useEffect(() => {
    const fetchCartData = async () => {
      if (datause) {
        await getAllCartItems();
      }
    };

    const pollInterval = 3000; // Poll every 5 seconds (adjust as needed)
    const intervalId = setInterval(fetchCartData, pollInterval);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [datause]);

  useEffect(() => {
    if (payStats === "success") {
      deleteItemAfterPayment();
    }
  }, [payStats]);

  const getAllErpUser = async () => {
    try {
      const response = await axios.get(
        "https://wojindia.com/api/auth/getAllErpUser"
      );
      console.log(response.data);
      setErpUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(erpUser);
  const filteredUser = erpUser.find((erpUser) => erpUser.user_id === auth.user);

  useEffect(() => {
    getAllErpUser();
  }, []);

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
      a.download = "cartimages.zip";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error, "error in downloading image");
      alert("error downloading image  ");
    }
  };

  //payment integresation stripe
  const makePaymentStripe = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51O27AtSJ71FIkPeehPV7yvNpyrwxW6Id0V2q5vgGk9EMs54m0T6SXi9EOrvHmB71q0pYv8uVSKGAQmMsj1Dirh4h00EpBeyzJV"
      );

      const body = {
        products: cartItems,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      // Use Axios to make the POST request
      const response = await axios.post(
        "https://wojindia.com/api/auth/createCheckoutSession",
        body,
        {
          headers: headers,
        }
      );

      console.log(response.data);
      const session = response.data;
      console.log(session.id);
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error);
      } else {
        // Payment was initiated and session ID exists, so trigger downloadImageAfterPayment function.
        downloadImageAfterPayment();
        // You can call additional functions here.
        // Example: anotherFunction();
      }
    } catch (error) {
      console.error(error);
      console.error("Error in makePaymentStripe:", error);
    }
  };

  const makePaymentStripeAndDownload = async () => {
    try {
      // Initiate payment
      const paymentResult = await makePaymentStripe();

      // Check if the payment was successful
      if (paymentResult) {
        // If payment was successful, initiate image download
        await downloadImageAfterPayment();
      } else {
        console.error("Payment failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Layout title={"cart - DG KIDOS"}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {filteredUser ? (
                <h1 className="text-center bg-light p-2 mb-1">
                  Hello {filteredUser.name}
                </h1>
              ) : (
                <p>No matching user found</p>
              )}

              <h4 className="text-center">
                {cartItems?.length > 1
                  ? `You have ${cartItems.length} items in your cart ${
                      auth?.token ? "" : "please login to checkout"
                    }`
                  : "your cart is empty"}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              {cartItems?.map((p) => (
                <div className="row card m-3 flex-row">
                  <div className="col-md-4">
                    <img
                      className="card-img-top m-3"
                      src={p.image}
                      alt={p.name}
                      height={200}
                    />
                  </div>
                  <div className="col-md-8 pro-details">
                    <h4>{p.img_name}</h4>
                    <h4>Price : ₹{p.price}</h4>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p.item_id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4">
              <h4>Cart Summary</h4>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total :{totalPrice()}</h4>

              <button
                className="btn btn-success"
                onClick={makePaymentStripeAndDownload}
              >
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </Container>
  );
};

export default Cart;
const Container = styled.div`
  .pro-details {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    padding-left: 4rem;
    padding-top: 2rem;
  }
`;
