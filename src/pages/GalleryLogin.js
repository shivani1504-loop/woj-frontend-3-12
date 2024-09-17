import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Header2 from "../Layout/Header2";

const GalleryLogin = () => {
  const galleryImages = [
    {
      src: "https://media.istockphoto.com/id/1458807880/photo/learning-through-play.jpg?s=612x612&w=0&k=20&c=W6mHfbgZXfGF4UbYn3FqP4BN_347dLD5Q9RvB6Yx1SQ=",
      alt: "Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1587616211892-f743fcca64f9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWd8fHx8fA%3D%3D",
      alt: "Image 2",
    },
    {
      src: "https://media.istockphoto.com/id/1332156804/photo/preschool-students-playing-in-kindergarten-with-color-dinosaur-figures.jpg?s=612x612&w=0&k=20&c=fzqA0uO2BQ1wKqmdClSBVdaakb5YJrZaNpXsoUIOBuc=",
      alt: "Image 3",
    },
    {
      src: "https://images.pexels.com/photos/3933276/pexels-photo-3933276.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image 4",
    },
    {
      src: "https://images.pexels.com/photos/5426391/pexels-photo-5426391.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Image 5",
    },
    {
      src: "https://images.pexels.com/photos/27661863/pexels-photo-27661863/free-photo-of-a-baby-playing-with-a-toy-tower-in-a-crib.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Image 6",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1684173662116-0e66b542774b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w0fHx8ZW58MHx8fHx8",
      alt: "Image 7",
    },
    {
      src: "https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2luZGVnYXJkZW51fGVufDB8fDB8fHww",
      alt: "Image 8",
    },
    {
      src: "https://images.unsplash.com/photo-1560130958-0ea787c275de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      alt: "Image 9",
    },
    {
      src: "https://media.istockphoto.com/id/924735534/photo/playful-little-boys-having-fun-with-toy-car.jpg?s=612x612&w=0&k=20&c=xDXUFvSmSNn9hlmZp1AVsBc6nzC6NicCdAyjWBWi0Ns=",
      alt: "Image 10",
    },
    {
      src: "https://childcare.earthscapeplay.com/wp-content/uploads/2015/06/Kids-Fort-768x480.jpg",
      alt: "Image 11",
    },
    {
      src: "https://i.pinimg.com/736x/fd/79/8d/fd798de75d233e22db27ec1d6e7ef120.jpg",
      alt: "Image 12",
    },
    {
      src: "https://media.istockphoto.com/id/817588604/photo/happy-baby-playing-with-toy-blocks.jpg?s=612x612&w=0&k=20&c=HNNd8StvB2ShC7rqHuH9Uc6gbE-8-F-mlEdQ3bU6r5E=",
      alt: "Image 13",
    },
    {
      src: "https://media.istockphoto.com/id/544351338/photo/storytime-at-nursery.jpg?s=612x612&w=0&k=20&c=g7K9wv5eh7wsbFq1mxX1X_es-m7oNsiJuQnpkImi1zY=",
      alt: "Image 14",
    },
    {
      src: "https://media.istockphoto.com/id/1412937088/photo/toddler-boy-plays-with-plastic-pyramid-in-playroom.jpg?s=612x612&w=0&k=20&c=wL9wLXVxuwcz9_XwpSOj6KlN1eVYExA_X603dj0rjLo=",
      alt: "Image 15",
    },
  ];

  const [visibleImages, setVisibleImages] = useState(6); // Show 6 images initially

  // Function to load more images
  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 6); // Show 6 more images on each click
  };

  return (
    <>
      <Container fluid className="p-0">
        <Header2 heading="Student Gallery" />
        <Layout title={"Gallery login - DG KIDOS"}>
          <Row className="mt-2 p-2">
            {/* Limit the number of images rendered using slice */}
            {galleryImages.slice(0, visibleImages).map((image, index) => (
              <Col sm={6} lg={4} md={12} className="mb-4 mb-lg-0 w-full"  key={index}>
                <StyledImage>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fluid
                    className="img-thumbnail "
                  />
                </StyledImage>
              </Col>
            ))}
          </Row>

          {/* Show the "Load More Images" button only if there are more images to display */}
          {visibleImages < galleryImages.length && (
            <div className="text-center mt-4">
              <Button onClick={loadMoreImages}> More Images</Button>
            </div>
          )}
        </Layout>
      </Container>
    </>
  );
};

export default GalleryLogin;

// Styled Component for the Images with hover zoom effect
const StyledImage = styled.div`
  .img-thumbnail {
    margin-bottom: 10px; /* Reduce margin between images */
    border: none; /* Remove the border */
    border-radius: 5px; /* Slight rounding of corners */
    width: 100%; /* Image takes full width of container */
    height: 100%; /* Make sure the height is consistent for all images */
    object-fit: cover; /* Ensures images fill the container without stretching */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effects */
  }

  .img-thumbnail:hover {
    transform: scale(1.05); /* Light zoom effect */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Add subtle shadow on hover */
  }

  /* Ensure images are properly aligned and responsive on smaller screens */
  @media (max-width: 1200px) {
    .img-thumbnail {
      margin-bottom: 10px; /* Adjust margin for tablet */
    }
  }

  @media (max-width: 768px) {
    .img-thumbnail {
      margin-bottom: 8px; /* Adjust margin for mobile */
    }
  }

  @media (max-width: 576px) {
    .img-thumbnail {
      margin-bottom: 5px; /* Tighten spacing for very small screens */
    }
  }
`;



          {/* <section class="vh-100" style={{ backgroundColor: "#eee" }}>
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                  <div
                    class="card text-black m-5"
                    style={{ borderRadius: "25px" }}
                  >
                    <div class="card-body p-md-5">
                      <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <h1 class="text-center h1 fw-bold mx-1 mx-md-4 mt-4 galleryhead">
                            Gallery Login
                          </h1>
                          <p>Please login with ERP application crediential</p>

                          <form
                            onSubmit={handleSubmit}
                            class="mx-1 mx-md-4 mt-5"
                          >
                            <div class="d-flex flex-row align-items-center mb-4">
                              <MdEmail className="icon-cont" />
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="user"
                                  class="form-control"
                                  name="user"
                                  onChange={(e) => setUser(e.target.value)}
                                  value={user}
                                  required
                                />
                                <label
                                  class="form-label text-start"
                                  for="form3Example3c"
                                >
                                  Your Email
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <MdPassword className="icon-cont" />
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="pass"
                                  class="form-control"
                                  name="password"
                                  onChange={(e) => setPassword(e.target.value)}
                                  value={password}
                                  required
                                />
                                <label class="form-label" for="form3Example4c">
                                  Password
                                </label>
                              </div>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="submit"
                                class="btn btn-primary btn-lg"
                              >
                                login
                              </button>
                            </div>
                            <p className="text-start">
                              In case you forget password please reset it from
                              ERP software.
                            </p>
                          </form>
                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <img
                            // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            src="https://res.cloudinary.com/antrix/image/upload/v1693050750/woj/login_vltcd7.png"
                            class="img-fluid"
                            alt="Sample"
                            style={{ boxShadow: "1px 10px 60px #e0d2d2" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}


           // const [user, setUser] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState(null);
  // const [auth, setAuth] = useAuth([]);
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("user:", user);
  //   console.log("password", password);
  //   try {
  //     const res = await axios.post(
  //       `https://woj.nascorptechnologies.com/gw/gls/checkIfValidUser?userid=${user}&pwd=${password}`
  //     );
  //     console.log(res.data);
  //     const data = res.data.name;

  //     erpLogin({ user, data });

  //     setAuth({
  //       user: user,
  //     });
  //     console.log(auth, "res.data.user :", res.data.name);
  //     const userId = res.data.user_id;
  //     console.log(userId);
  //     cogoToast.success("login successful");
  //     navigate("/gallery");
  //     localStorage.setItem("auth", JSON.stringify(user));
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     cogoToast.error("Login failed");
  //   }
  // };

  // console.log(username);
  // const erpLogin = async (user) => {
  //   console.log(user);
  //   try {
  //     const response = await axios.post(
  //       `https://wojindia.com/api/auth/ERPgalleryLogin`,
  //       {
  //         userID: user.user,
  //         name: user.data,
  //       }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(user, password);