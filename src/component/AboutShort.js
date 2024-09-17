import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import axios from "axios";
import BirthdayList from "./BirthdayList";
import NoticeDisplay from "./NoticeDisplay";
import LogoName from '../Assets/images/LofoName.png'


const AboutShort = () => {
  const videoRef = useRef(null);
  const [details, setDetails] = useState([]);
  const [todaysBirthdays, setTodaysBirthdays] = useState([]);
  const [allNotice, setAllNotice] = useState([]);

  const getStudent = async () => {
    try {
      const res = await axios.get(
        `https://woj.nascorptechnologies.com/gw/gls/getBirthdayStuList?token=${"DIMslyQeRsiTks6g9s"}`
      );
      const data = await res.data;
      console.log(data);
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Start playing the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
    getStudent();
  }, []);

  useEffect(() => {
    const today = new Date();
    const birthdaysToday = details.filter((user) => {
      // Split the date string into day, month, and year
      const dobParts = user.dob.split("-");

      // Parse the date string parts into integers
      const day = parseInt(dobParts[0], 10);
      const month = parseInt(dobParts[1], 10) - 1; // Months are 0-indexed
      const year = parseInt(dobParts[2], 10);

      // Create a new Date object using the parsed values
      const birthDate = new Date(year, month, day);

      return (
        birthDate.getMonth() === today.getMonth() &&
        birthDate.getDate() === today.getDate()
      );
    });

    setTodaysBirthdays(birthdaysToday);
  }, [details]);

  console.log(todaysBirthdays);

  const getAllNotice = async () => {
    try {
      const res = await axios.get("https://wojindia.com/api/auth/getAllNotice");
      setAllNotice(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotice();
  }, []);

  return (
    <>
      <Container>
        <div className="container-fluid pt-5 pb-5">
          <div className="row">
            {/* <div className="w-full h-auto">

            </div> */}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="container">
                <div className="heading mt-5 ">
                  <img
                    src={LogoName}
                    alt="logo"
                    srcset=""
                    className="w-75 "
                  />
                  <div className="absolute">
                    <p className="para-about">
                    
                    Children in school are like little sponges, soaking up new knowledge and skills with enthusiasm. 
                    During playtime, they engage in creative activities that not only entertain them but also enhance 
                    their cognitive abilities. Whether it's building with blocks, solving puzzles, or participating in
                     group games, every moment is a learning opportunity. In the classroom, kids explore subjects like 
                     math, science, and language arts, often through interactive lessons that make learning fun. 

                      {/* Our institution has a rich history spanning over five
                      decades, during which we have continuously evolved. From
                      our humble beginnings, we have transformed into a leading
                      academic establishment specializing in pre-primary
                      // education. */}
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="container">
                <video
                  ref={videoRef}
                  src="https://videos.pexels.com/video-files/8363904/8363904-hd_1920_1080_30fps.mp4"
                  autoplay
                  controls
                  loop
                  muted
                ></video>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
              <div className="noticeBoard mt-2 rounded">
                <h1 className="text-black m-1">Notice</h1> <hr className="my-1 border-black" />
                <NoticeDisplay items={allNotice} />
              </div>
              <div className="noticeBoard mt-2 rounded">
                <h1 className="text-black ">
                  <LiaBirthdayCakeSolid /> Happy Birthday
                </h1> <hr className="my-1 border-black" />
                <BirthdayList items={todaysBirthdays} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutShort;
const Container = styled.div`
  .heading {
    p {
      font-family: "Bricolage Grotesque", sans-serif;
      text-align: justify;
    }
  }
  video {
    height: fit-object;
    width: 100%;
    margin-top: 2rem;
  }

  .noticeBoard {
    border: 1px solid #3c3e96;
    height: auto;
    font-family: "Bricolage Grotesque", sans-serif;
    @media screen and (max-width: 500px) {
      height: 20rem;
      overflow: hidden;
    }
    h1 {
      color: #ffffff;
      padding: 11px;
      font-size: 1.5rem;
    }
    ul {
      li {
        list-style: none;
        text-align: left;
        padding-left: 1rem;
      }
    }
  }
  .birthCard {
    height: 50%;
    align-items: center;
    img {
      height: 5rem;
      width: 5rem;
    }
  }
  .para-about {
    font-size: 1.5rem;
    margin-top: 16px;
  }
`;
