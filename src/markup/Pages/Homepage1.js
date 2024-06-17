"use client";
import React, { useState } from "react";
import Link from "next/link";
// import {Link} from 'react-router-dom';
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";
import CountUp from "react-countup";
import IndexBanner from "../Element/IndexBanner";
import Jobcategories from "../Element/Jobcategories";
import Featureblog from "../Element/Featureblog";
import Jobsection from "../Element/Jobsection";
import Owltestimonial from "../Element/Owlblog1";

//Images
var bnr2 = require("./../../images/background/bg4.jpg");
var bnr3 = require("./../../images/lines.png");
var bnr7 = require("./../../images/background/plans.png");
var bnr9 = require("./../../images/background/bg-9-new.jpeg");

function Homepage() {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);

  const handleIconClick1 = () => {
    setIsClicked1(!isClicked1);
  };
  const handleIconClick2 = () => {
    setIsClicked2(!isClicked2);
  };
  const handleIconClick3 = () => {
    setIsClicked3(!isClicked3);
  };
  const handleIconClick4 = () => {
    setIsClicked4(!isClicked4);
  };

  return (
    <div className="page-wraper">
      <IndexBanner />
      <div
        className="page-content"
        style={{
          backgroundColor: "#fff3f3",
          backgroundImage: "url(" + bnr7.default.src + ")",
        }}
      >
        <div className="section-full content-inner-2 overlay-white-middle">
          <div className="container">
            <div className="section-head text-black text-center">
              <h2 style={{ fontWeight: "600" }} className="m-b0">
                Membership Plans
              </h2>
              <p>"Empowering Careers: CTC-BasedTiers,Your Path to Success."</p>
            </div>
            <div className="section-content box-sort-in button-example m-t80">
              <div className="pricingtable-row">
                <div className="display-property">
                  <div
                    className="pricingtable-wrapper style2 bg-white member-ship-div"
                    style={{
                      minHeight: "500px",
                      borderRadius: "20px",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      const button =
                        e.currentTarget.querySelector(".site-button");
                      button.style.backgroundColor = "#fff";
                      button.style.color = "#0B66C3";
                    }}
                    onMouseLeave={(e) => {
                      const button =
                        e.currentTarget.querySelector(".site-button");
                      button.style.backgroundColor = "";
                      button.style.color = "";
                    }}
                  >
                    <div className="">
                      <div className="pricingtable-price">
                        <h4
                          className="font-weight-900 m-t10 m-b0 text-center"
                          style={{
                            fontWeight: "bold",
                            fontSize: "28px",
                            border: "1.5px solid black",
                            borderRadius: "20px",
                            padding: "5px",
                          }}
                        >
                          WIZARD
                        </h4>
                      </div>
                      <ul style={{ marginTop: "40px" }}>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          Salary bracket &gt; 30 lacs
                        </li>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          3 Credit for 1 months and 9 credits for 3 months
                        </li>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          Connect with recruiter over chat
                        </li>
                      </ul>
                      <div className="m-t20">
                        <h3
                          className="font-weight-300 m-t10 m-b0"
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            textAlign: "center",
                            fontWeight: "700",
                          }}
                        >
                          Price
                        </h3>
                        <ul>
                          <li
                            style={{
                              color: "black",
                              margin: "5px 0px",
                              fontSize: "18px",
                            }}
                          >
                            699/-for 1 month
                          </li>
                          <li
                            style={{
                              color: "black",
                              margin: "5px 0px",
                              fontSize: "18px",
                            }}
                          >
                            1799/-for 3 months
                          </li>
                        </ul>
                        <div className="text-center">
                          <Link
                            href={"/register"}
                            className="site-button radius-xl white-hover"
                            style={{ border: "1px solid white" }}
                          >
                            <span className="p-lr30">Sign Up</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="pricingtable-wrapper style2 bg-white member-ship-div"
                    style={{
                      minHeight: "500px",
                      borderRadius: "20px",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      const button =
                        e.currentTarget.querySelector(".site-button");
                      button.style.backgroundColor = "#fff";
                      button.style.color = "#0B66C3";
                    }}
                    onMouseLeave={(e) => {
                      const button =
                        e.currentTarget.querySelector(".site-button");
                      button.style.backgroundColor = "";
                      button.style.color = "";
                    }}
                  >
                    <div className="">
                      <div className="pricingtable-price">
                        <h4
                          className="font-weight-900 m-t10 m-b0 text-center"
                          style={{
                            fontWeight: "bold",
                            fontSize: "28px",
                            border: "1.5px solid black",
                            borderRadius: "20px",
                            padding: "5px",
                          }}
                        >
                          TITANS
                        </h4>
                      </div>
                      <ul style={{ marginTop: "40px" }}>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          Salary 20 lacs
                        </li>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          3 Credit for 1 months and 9 credits for 3 months
                        </li>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          Connect with recruiter over chat
                        </li>
                      </ul>
                      <div className="m-t20">
                        <h3
                          className="font-weight-300 m-t10 m-b0"
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            textAlign: "center",
                            fontWeight: "700",
                          }}
                        >
                          Price
                        </h3>
                        <ul>
                          <li
                            style={{
                              color: "black",
                              margin: "5px 0px",
                              fontSize: "18px",
                            }}
                          >
                            599/-for 1 month
                          </li>
                          <li
                            style={{
                              color: "black",
                              margin: "5px 0px",
                              fontSize: "18px",
                            }}
                          >
                            1699/-for 3 months
                          </li>
                        </ul>
                        <div className="text-center">
                          <Link
                            href={"/register"}
                            className="site-button radius-xl white-hover"
                            style={{ border: "1px solid white" }}
                          >
                            <span className="p-lr30">Sign Up</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="pricingtable-wrapper style2 bg-white member-ship-div"
                    style={{
                      minHeight: "500px",
                      borderRadius: "20px",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      const button =
                        e.currentTarget.querySelector(".site-button");
                      button.style.backgroundColor = "#fff";
                      button.style.color = "#0B66C3";
                    }}
                    onMouseLeave={(e) => {
                      const button =
                        e.currentTarget.querySelector(".site-button");
                      button.style.backgroundColor = "";
                      button.style.color = "";
                    }}
                  >
                    <div className="">
                      <div className="pricingtable-price">
                        <h4
                          className="font-weight-900 m-t10 m-b0 text-center"
                          style={{
                            fontWeight: "bold",
                            fontSize: "28px",
                            border: "1.5px solid black",
                            borderRadius: "20px",
                            padding: "5px",
                          }}
                        >
                          PRODIGIES
                        </h4>
                      </div>
                      <ul style={{ marginTop: "40px" }}>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          Salary 10-20 lacs
                        </li>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          3 Credit for 1 months and 9 credits for 3 months
                        </li>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          Connect with recruiter over chat
                        </li>
                      </ul>
                      <div className="m-t20">
                        <h3
                          className="font-weight-300 m-t10 m-b0"
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            textAlign: "center",
                            fontWeight: "700",
                          }}
                        >
                          Price
                        </h3>
                        <ul>
                          <li
                            style={{
                              color: "black",
                              margin: "5px 0px",
                              fontSize: "18px",
                            }}
                          >
                            499/-for 1 month
                          </li>
                          <li
                            style={{
                              color: "black",
                              margin: "5px 0px",
                              fontSize: "18px",
                            }}
                          >
                            1399/-for 3 months
                          </li>
                        </ul>
                        <div className="text-center">
                          <Link
                            href={"/register"}
                            className="site-button radius-xl white-hover"
                            style={{ border: "1px solid white" }}
                          >
                            <span className="p-lr30">Sign Up</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="pricingtable-wrapper style2 bg-white member-ship-div"
                    style={{
                      minHeight: "500px",
                      borderRadius: "20px",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      const button =
                        e.currentTarget.querySelector(".site-button");
                      button.style.backgroundColor = "#fff";
                      button.style.color = "#0B66C3";
                    }}
                    onMouseLeave={(e) => {
                      const button =
                        e.currentTarget.querySelector(".site-button");
                      button.style.backgroundColor = "";
                      button.style.color = "";
                    }}
                  >
                    <div className="">
                      <div className="pricingtable-price">
                        <h4
                          className="font-weight-900 m-t10 m-b0 text-center"
                          style={{
                            fontWeight: "bold",
                            fontSize: "28px",
                            border: "1.5px solid black",
                            borderRadius: "20px",
                            padding: "5px",
                          }}
                        >
                          CHAMPS
                        </h4>
                      </div>
                      <ul style={{ marginTop: "40px" }}>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          Salary less than 10 lacs
                        </li>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          3 Credit for 1 months and 9 credits for 3 months
                        </li>
                        <li
                          style={{
                            color: "black",
                            margin: "5px 0px",
                            fontSize: "18px",
                          }}
                        >
                          Connect with recruiter over chat
                        </li>
                      </ul>
                      <div className="m-t20">
                        <h3
                          className="font-weight-300 m-t10 m-b0"
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            textAlign: "center",
                            fontWeight: "700",
                          }}
                        >
                          Price
                        </h3>
                        <ul>
                          <li
                            style={{
                              color: "black",
                              margin: "5px 0px",
                              fontSize: "18px",
                            }}
                          >
                            399/-for 1 month
                          </li>
                          <li
                            style={{
                              color: "black",
                              margin: "5px 0px",
                              fontSize: "18px",
                            }}
                          >
                            1099/-for 3 months
                          </li>
                        </ul>
                        <div className="text-center">
                          <Link
                            href={"/register"}
                            className="site-button radius-xl white-hover"
                            style={{ border: "1px solid white" }}
                          >
                            <span className="p-lr30">Sign Up</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full content-inner bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 section-head text-center">
                <h2 style={{ fontWeight: "600" }} className="m-b5">
                  Upcoming Meetups
                </h2>
              </div>
            </div>
            <ul className="post-job-bx browse-job-grid row">
              <li className="col-lg-6 col-md-6">
                <div className="post-bx">
                  <div className="d-flex">
                    <div className="job-post-info">
                      <div className="d-flex justify-content-between w-100">
                        <h5>
                          <Link style={{ fontWeight: "600" }} href="/">
                            Banglore Meetup
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 13"
                            fill="none"
                            style={{
                              fontSize: "16px",
                              fontWeight: 400,
                              marginLeft: "8px",
                              cursor: "pointer",
                              width: "20px",
                              height: "20px",
                            }}
                            onClick={handleIconClick1}
                          >
                            <path
                              d="M0.5 0H9.5V12.5L5 10L0.5 12.5V0Z"
                              fill={isClicked1 ? "#0B66C3" : "#fff"}
                              stroke="#0B66C3"
                            />
                          </svg>
                        </div>
                      </div>
                      <ul
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          marginTop: "20px",
                        }}
                      >
                        <li className="mr-4">
                          <i
                            className="fa fa-map-marker"
                            style={{ fontSize: "large" }}
                          ></i>
                          Whitefield, Banglore
                        </li>
                        <li className="mr-4">21 March 2023</li>
                        <li className="mr-4">10:00 Am onwards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col-lg-6 col-md-6">
                <div className="post-bx">
                  <div className="d-flex">
                    <div className="job-post-info">
                      <div className="d-flex justify-content-between w-100">
                        <h5>
                          <Link style={{ fontWeight: "600" }} href="/">
                            Banglore Meetup
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 13"
                            fill="none"
                            style={{
                              fontSize: "16px",
                              fontWeight: 400,
                              marginLeft: "8px",
                              cursor: "pointer",
                              width: "20px",
                              height: "20px",
                            }}
                            onClick={handleIconClick2}
                          >
                            <path
                              d="M0.5 0H9.5V12.5L5 10L0.5 12.5V0Z"
                              fill={isClicked2 ? "#0B66C3" : "#fff"}
                              stroke="#0B66C3"
                            />
                          </svg>
                        </div>
                      </div>
                      <ul
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          marginTop: "20px",
                        }}
                      >
                        <li className="mr-4">
                          <i
                            className="fa fa-map-marker"
                            style={{ fontSize: "large" }}
                          ></i>
                          Whitefield, Banglore
                        </li>
                        <li className="mr-4">21 March 2023</li>
                        <li className="mr-4">10:00 Am onwards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col-lg-6 col-md-6">
                <div className="post-bx">
                  <div className="d-flex">
                    <div className="job-post-info">
                      <div className="d-flex justify-content-between w-100">
                        <h5>
                          <Link style={{ fontWeight: "600" }} href="/">
                            Banglore Meetup
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 13"
                            fill="none"
                            style={{
                              fontSize: "16px",
                              fontWeight: 400,
                              marginLeft: "8px",
                              cursor: "pointer",
                              width: "20px",
                              height: "20px",
                            }}
                            onClick={handleIconClick3}
                          >
                            <path
                              d="M0.5 0H9.5V12.5L5 10L0.5 12.5V0Z"
                              fill={isClicked3 ? "#0B66C3" : "#fff"}
                              stroke="#0B66C3"
                            />
                          </svg>
                        </div>
                      </div>
                      <ul
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          marginTop: "20px",
                        }}
                      >
                        <li className="mr-4">
                          <i
                            className="fa fa-map-marker"
                            style={{ fontSize: "large" }}
                          ></i>
                          Whitefield, Banglore
                        </li>
                        <li className="mr-4">21 March 2023</li>
                        <li className="mr-4">10:00 Am onwards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col-lg-6 col-md-6">
                <div className="post-bx">
                  <div className="d-flex">
                    <div className="job-post-info">
                      <div className="d-flex justify-content-between w-100">
                        <h5>
                          <Link style={{ fontWeight: "600" }} href="/">
                            Banglore Meetup
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 10 13"
                            fill="none"
                            style={{
                              fontSize: "16px",
                              fontWeight: 400,
                              marginLeft: "8px",
                              cursor: "pointer",
                              width: "20px",
                              height: "20px",
                            }}
                            onClick={handleIconClick4}
                          >
                            <path
                              d="M0.5 0H9.5V12.5L5 10L0.5 12.5V0Z"
                              fill={isClicked4 ? "#0B66C3" : "#fff"}
                              stroke="#0B66C3"
                            />
                          </svg>
                        </div>
                      </div>
                      <ul
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          marginTop: "20px",
                        }}
                      >
                        <li className="mr-4">
                          <i
                            className="fa fa-map-marker"
                            style={{ fontSize: "large" }}
                          ></i>
                          Whitefield, Banglore
                        </li>
                        <li className="mr-4">21 March 2023</li>
                        <li className="mr-4">10:00 Am onwards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-full job-categories content-inner-2 bg-white">
          <div className="container">
            <div className="section-head d-flex head-counter clearfix">
              <div className="mr-auto">
                <h2 style={{ fontWeight: "600" }} className="m-b5">
                  Popular Categories
                </h2>
                <h6 className="fw3">20+ Catetories work wating for you</h6>
              </div>
              <div className="head-counter-bx">
                <h2 style={{ fontWeight: "600" }} className="m-b5 counter">
                  {<CountUp end={1800} duration={5} />}
                </h2>
                <h6 className="fw3">Jobs Posted</h6>
              </div>
              <div className="head-counter-bx">
                <h2 style={{ fontWeight: "600" }} className="m-b5 counter">
                  {<CountUp end={4500} duration={5} />}
                </h2>
                <h6 className="fw3">Tasks Posted</h6>
              </div>
              <div className="head-counter-bx">
                <h2 style={{ fontWeight: "600" }} className="m-b5 counter">
                  {<CountUp end={1500} duration={5} />}
                </h2>
                <h6 className="fw3">Freelancers</h6>
              </div>
            </div>
            <Jobcategories />
          </div>
        </div>

        <Featureblog />
        <Jobsection />
        <div
          className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix"
          style={{ backgroundImage: "url(" + bnr9.default.src + ")" }}
        >
          <div className="container">
            <div className="section-head text-center text-white">
              <h2 style={{ fontWeight: "600" }} className="m-b5">
                Testimonials
              </h2>
              <h5 className="fw4">Few words from candidates</h5>
            </div>
            <Owltestimonial />
          </div>
        </div>
      </div>
      <style jsx>{`
        .member-ship-div {
          min-height: 500px;
          border-radius: 20px;
        }
        .member-ship-div:hover {
          background-color: #0b66c3 !important;
          color: white !important;
        }
        .member-ship-div:hover .site-button {
          background-color: #fff !important; /* Changes the button background color to white */
          color: #000 !important; /* Changes the button text color to black */
        }
        .member-ship-div:hover div h4 {
          color: white !important;
          border-color: white !important;
        }
        .member-ship-div:hover div ul li {
          color: white !important;
        }
        .white-hover {
          border: 1px solid white !important;
        }
        .member-ship-div:hover div div h3 {
          color: white !important;
        }
        .display-property {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .pagination-bx .pagination {
          width: 300px;
          margin-left: 0px;
        }
        .display-item-center {
          display: flex !important;
          align-item: center;
          justify-content: center;
        }
        @media (max-width: 1042px) {
          .display-property {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .display-property {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
export default Homepage;
