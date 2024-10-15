import React from "react";
import Header from "../../component/header/header";
import Footercomponent from "../../component/footer/footer";
export default function Coursedetailcomponent(){
    return(
        <div className="mt-32">
            <Header/>


            <>
  <div className="course-details-breadcrumb-1 bg_image rts-section-gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="single-course-left-align-wrapper">
            <div className="meta-area">
              <a href="index.html">Home</a>
              <i className="fa-solid fa-chevron-right" />
              <a className="active" href="#">
                Course Details
              </a>
            </div>
            <h1 className="title">
              The Complete Web Developer in <br /> 2024: Zero to Mastery
            </h1>
            <div className="rating-area">
              <div className="stars-area">
                <span>4.5</span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-regular fa-star" />
              </div>
              <div className="students">
                <i className="fa-solid fa-users" />
                <span>3054 Students</span>
              </div>
              <div className="calender-area-stars">
                <i className="fa-light fa-calendar-lines-pen" />
                <span>Last updated 12/2024</span>
              </div>
            </div>
            <div className="author-area">
              <div className="author">
                {/* <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1728959336/01_w5siua.jpg" alt="breadcrumb" /> */}
                <h6 className="name">
                  <span>By</span> William U.
                </h6>
              </div>
              <p>
                {" "}
                <span>Categories: </span> Web Developments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* course details breadcrumb end */}
  {/* course details area start */}
  <div
    className="rts-course-area rts-section-gap"
    style={{ transform: "none" }}
  >
    <div className="container" style={{ transform: "none" }}>
      <div className="row g-5" style={{ transform: "none" }}>
        <div className="col-lg-8 order-cl-1 order-lg-1 order-md-2 order-sm-2 order-2">
          <div className="course-details-btn-wrapper pb--50">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Course Information
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Course Content
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Instructor
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contacts-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  Review
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content mt--50" id="myTabContent">
            <div
              className="tab-pane fade active show"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="course-content-wrapper">
                <h5 className="title">About Course</h5>
                <p className="disc">
                  If filmmaking is your passion but you never went to film
                  school you’ve come to the right place. Here, you will get
                  hands-on experience and acquire skills that you never would’ve
                  elsewhere like learning how to make feature films on your own,
                  making do with any equipment, and doing it all faster and
                  better.
                </p>
                <h5 className="title">Description</h5>
                <p className="disc">
                  You will be taught the full process of filmmaking starting
                  from planning, filming, and editing. Not only that but you
                  will learn how to make films that look way more expensive than
                  they are without spending a whole lot of time or money on
                  them. In this course, we’ll focus on a few different forms of
                  films from video ads, to movie trailers to travel vlogs, you
                  name it.
                </p>
                <p className="disc">
                  In addition to that, we’ll also go over Adobe Premiere Pro in
                  detail so that you get an idea of all that you need to know to
                  become an editing genius. And, if you feel like you’re stuck
                  at any point then you can always ask for guidance and I’ll
                  reply as soon as possible.
                </p>
                <p className="disc">
                  With this course, you also have access to a whole lot of
                  resources not only for reference but also free media like
                  aerial video shots, background music, fonts, and more. These
                  all come with proper licensing so you can use them in your
                  production worry free.
                </p>
                <div className="module-wrapper">
                  <h6 className="title">What Will You Learn?</h6>
                  <div className="inner-content">
                    <div className="single-wrapper">
                      <div className="single-codule">
                        <i className="fa-regular fa-check" />
                        <p>Learn the basics of computer programming</p>
                      </div>
                      <div className="single-codule">
                        <i className="fa-regular fa-check" />
                        <p>Differences between ads, trailers, vlogs, etc</p>
                      </div>
                      <div className="single-codule">
                        <i className="fa-regular fa-check" />
                        <p>Learn JavaScript</p>
                      </div>
                    </div>
                    <div className="single-wrapper">
                      <div className="single-codule">
                        <i className="fa-regular fa-check" />
                        <p>Learn CSS</p>
                      </div>
                      <div className="single-codule">
                        <i className="fa-regular fa-check" />
                        <p>Tools you need for best results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="course-content-wrapper-main">
                <h5 className="title">Course Content</h5>
                {/* course content accordion area */}
                <div className="accordion mt--30" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span>Introduction</span>
                        <span>3 Lectures . 9 min</span>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Introduction to the course</span>
                          </div>
                          <div className="right">
                            <span className="play">Preview</span>
                            <span>9 min</span>
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Introduction to the course</span>
                          </div>
                          <div className="right">
                            <span className="play">Preview</span>
                            <span>9 min</span>
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Introduction to the course</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span>Learn to Storyboard</span>
                        <span>7 Lectures . 120 min</span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Become a storyboard artist</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>storyboard artist</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Introduction PHP</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>LEarning Fundamentsl Elementor</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Enter to the course</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Main Part of the course</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Function About PHP</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span>How to draw characters, layouts, and scenes</span>
                        <span>7 Lectures . 83 min</span>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Become a storyboard artist</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>storyboard artist</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Introduction PHP</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>LEarning Fundamentsl Elementor</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Enter to the course</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Main Part of the course</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Function About PHP</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <span>1-point and 2-point perspective</span>
                        <span>7 Lectures . 72 min</span>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Become a storyboard artist</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>storyboard artist</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Introduction PHP</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>LEarning Fundamentsl Elementor</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Enter to the course</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Main Part of the course</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Function About PHP</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <span>Digital drawing application</span>
                        <span>7 Lectures . 90 min</span>
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Become a storyboard artist</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>storyboard artist</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Introduction PHP</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>LEarning Fundamentsl Elementor</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Enter to the course</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Main Part of the course</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                        {/* play single area start */}
                        <a href="#" className="play-vedio-wrapper">
                          <div className="left">
                            <i className="fa-light fa-circle-play" />
                            <span>Function About PHP</span>
                          </div>
                          <div className="right">
                            <i className="fa-regular fa-lock" />
                          </div>
                        </a>
                        {/* play single area end */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* course content accordion area end */}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              {/* single instructor area staret */}
              <div className="single-instructor-area-details">
                <a href="#" className="thumbnail">
                  <img src="assets/images/instructor/10.jpg" alt="instructor" />
                </a>
                <div className="inner-instrustor-area">
                  <h5 className="title">William U.</h5>
                  <span className="deg">Advanced Educator</span>
                  <div className="stars-area-wrapper">
                    <div className="stars-area">
                      <span>4.5</span>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <div className="users-area">
                      <i className="fa-light fa-users" />
                      <span>1350 Students</span>
                    </div>
                    <div className="users-area">
                      <i className="fa-light fa-video" />
                      <span>26 Courses</span>
                    </div>
                  </div>
                  <p className="disc">
                    William U. Peña, MBA, CISSP No. 349867, is a former college
                    professor and the lead instructor at Dion Training
                    Solutions.
                  </p>
                  <div className="follow-us">
                    <span>Follow</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* single instructor area end */}
              {/* single instructor area staret */}
              <div className="single-instructor-area-details">
                <a href="#" className="thumbnail">
                  <img src="assets/images/instructor/11.jpg" alt="instructor" />
                </a>
                <div className="inner-instrustor-area">
                  <h5 className="title">William U.</h5>
                  <span className="deg">Advanced Educator</span>
                  <div className="stars-area-wrapper">
                    <div className="stars-area">
                      <span>4.5</span>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <div className="users-area">
                      <i className="fa-light fa-users" />
                      <span>1350 Students</span>
                    </div>
                    <div className="users-area">
                      <i className="fa-light fa-video" />
                      <span>26 Courses</span>
                    </div>
                  </div>
                  <p className="disc">
                    William U. Peña, MBA, CISSP No. 349867, is a former college
                    professor and the lead instructor at Dion Training
                    Solutions.
                  </p>
                  <div className="follow-us">
                    <span>Follow</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* single instructor area end */}
            </div>
            <div
              className="tab-pane fade "
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <div className="rating-main-wrapper">
                {/* single-top-rating */}
                <div className="rating-top-main-wrapper">
                  {/* rating area start */}
                  <div className="rating-area-main-wrapper">
                    <h2 className="title">4.5</h2>
                    <div className="stars-wrapper">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <span>Total 2 Ratings</span>
                  </div>
                  {/* rating area end */}
                  <div className="progress-wrapper-main">
                    <div
                      className="single-progress-area-h"
                      data-sal-delay={150}
                      data-sal="slide-up"
                      data-sal-duration={800}
                    >
                      <div className="progress-top">
                        <i className="fa-regular fa-star" />
                        <span className="parcent">5</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft bg--primary animated"
                          role="progressbar"
                          style={{
                            width: "100%",
                            visibility: "visible",
                            animationName: "fadeInLeft"
                          }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <div className="end">
                        <span>25 Rating</span>
                      </div>
                    </div>
                    <div
                      className="single-progress-area-h"
                      data-sal-delay={150}
                      data-sal="slide-up"
                      data-sal-duration={800}
                    >
                      <div className="progress-top">
                        <i className="fa-regular fa-star" />
                        <span className="parcent">4</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft bg--primary animated"
                          role="progressbar"
                          style={{
                            width: "80%",
                            visibility: "visible",
                            animationName: "fadeInLeft"
                          }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <div className="end">
                        <span>20 Rating</span>
                      </div>
                    </div>
                    <div
                      className="single-progress-area-h"
                      data-sal-delay={150}
                      data-sal="slide-up"
                      data-sal-duration={800}
                    >
                      <div className="progress-top">
                        <i className="fa-regular fa-star" />
                        <span className="parcent">3</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft bg--primary animated"
                          role="progressbar"
                          style={{
                            width: "60%",
                            visibility: "visible",
                            animationName: "fadeInLeft"
                          }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <div className="end">
                        <span>5 Rating</span>
                      </div>
                    </div>
                    <div
                      className="single-progress-area-h"
                      data-sal-delay={150}
                      data-sal="slide-up"
                      data-sal-duration={800}
                    >
                      <div className="progress-top">
                        <i className="fa-regular fa-star" />
                        <span className="parcent">2</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft bg--primary animated"
                          role="progressbar"
                          style={{
                            width: "40%",
                            visibility: "visible",
                            animationName: "fadeInLeft"
                          }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <div className="end">
                        <span>2 Rating</span>
                      </div>
                    </div>
                    <div
                      className="single-progress-area-h"
                      data-sal-delay={150}
                      data-sal="slide-up"
                      data-sal-duration={800}
                    >
                      <div className="progress-top">
                        <i className="fa-regular fa-star" />
                        <span className="parcent">1</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft bg--primary animated"
                          role="progressbar"
                          style={{
                            width: "20%",
                            visibility: "visible",
                            animationName: "fadeInLeft"
                          }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <div className="end">
                        <span>1 Rating</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single-top-rating end*/}
                {/* person indevidual rating area  */}
                <div className="indevidual-rating-area">
                  {/* author-area */}
                  <div className="author-area">
                    <img
                      src="assets/images/instructor/12.jpg"
                      alt="instructor"
                    />
                    <div className="information">
                      <span>William U.</span>
                      <div className="stars">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-regular fa-star" />
                        <span className="ml--30">a week ago</span>
                      </div>
                    </div>
                  </div>
                  {/* author-area end */}
                  <p className="disc">
                    I still have a lot of studying to do using this course and
                    the other practice exams, but so far it&apos;s been great! I have
                    not taken my Security+ exam as well, so I&apos;ll update this at
                    a later time.
                  </p>

                  <div className="like-love-area">
                    <a href="#">
                      <i className="fa-sharp fa-light fa-thumbs-up" />
                    </a>
                    <a href="#">
                      <i className="fa-regular fa-heart" />
                    </a>
                  </div>
                </div>
                {/* person indevidual rating area end */}
                {/* person indevidual rating area  */}
                <div className="indevidual-rating-area">
                  {/* author-area */}
                  <div className="author-area">
                    <img
                      src="assets/images/instructor/13.jpg"
                      alt="instructor"
                    />
                    <div className="information">
                      <span>William U.</span>
                      <div className="stars">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-regular fa-star" />
                        <span className="ml--30">a week ago</span>
                      </div>
                    </div>
                  </div>
                  {/* author-area end */}
                  <p className="disc">
                    I still have a lot of studying to do using this course and
                    the other practice exams, but so far it&apos;s been great! I have
                    not taken my Security+ exam as well, so I&apos;ll update this at
                    a later time.
                  </p>

                  <div className="like-love-area">
                    <a href="#">
                      <i className="fa-sharp fa-light fa-thumbs-up" />
                    </a>
                    <a href="#">
                      <i className="fa-regular fa-heart" />
                    </a>
                  </div>
                </div>
                {/* person indevidual rating area end */}
              </div>
            </div>
          </div>
          <div className="wrapper-bottom-course-details-page g-5 row mt--50 pr--60 pr_sm--0 pl_sm--0">
            <div className="title-between-area pr--150">
              <h5 className="title mb-0">More Courses by William U.</h5>
              <a href="#" className="rts-btn with-arrow p-0">
                View All Course <i className="fa-light fa-arrow-right" />
              </a>
            </div>
            {/* các khóa học khác của giảng viên này */}
           <div className="flex overflow-x-scroll gap-4">
           <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="rts-single-course">
                <a href="single-course.html" className="thumbnail">
                  <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                </a>
                <div
                  className="save-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal-login"
                >
                  <i className="fa-sharp fa-light fa-bookmark" />
                </div>
                <div className="tags-area-wrapper">
                  <div className="single-tag">
                    <span>Marketing</span>
                  </div>
                  <div className="single-tag">
                    <span>Finance</span>
                  </div>
                </div>
                <div className="lesson-studente">
                  <div className="lesson">
                    <i className="fa-light fa-calendar-lines-pen" />
                    <span>22 Lessons</span>
                  </div>
                  <div className="lesson">
                    <i className="fa-light fa-user-group" />
                    <span>60 Students</span>
                  </div>
                </div>
                <a href="single-course.html">
                  <h5 className="title">
                    How to Write the Ultimate 1 Page Strategic Business Plan
                  </h5>
                </a>
                <p className="teacher">William U. Peña, MBA</p>
                <div className="rating-and-price">
                  <div className="rating-area">
                    <span>4.5</span>
                    <div className="stars">
                      <ul>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="price-area">
                    <div className="price">$79.99</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="rts-single-course">
                <a href="single-course.html" className="thumbnail">
                  <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                </a>
                <div
                  className="save-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal-login"
                >
                  <i className="fa-sharp fa-light fa-bookmark" />
                </div>
                <div className="tags-area-wrapper">
                  <div className="single-tag">
                    <span>Marketing</span>
                  </div>
                  <div className="single-tag">
                    <span>Finance</span>
                  </div>
                </div>
                <div className="lesson-studente">
                  <div className="lesson">
                    <i className="fa-light fa-calendar-lines-pen" />
                    <span>22 Lessons</span>
                  </div>
                  <div className="lesson">
                    <i className="fa-light fa-user-group" />
                    <span>60 Students</span>
                  </div>
                </div>
                <a href="single-course.html">
                  <h5 className="title">
                    How to Write the Ultimate 1 Page Strategic Business Plan
                  </h5>
                </a>
                <p className="teacher">William U. Peña, MBA</p>
                <div className="rating-and-price">
                  <div className="rating-area">
                    <span>4.5</span>
                    <div className="stars">
                      <ul>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="price-area">
                    <div className="price">$79.99</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="rts-single-course">
                <a href="single-course.html" className="thumbnail">
                  <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                </a>
                <div
                  className="save-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal-login"
                >
                  <i className="fa-sharp fa-light fa-bookmark" />
                </div>
                <div className="tags-area-wrapper">
                  <div className="single-tag">
                    <span>Marketing</span>
                  </div>
                  <div className="single-tag">
                    <span>Finance</span>
                  </div>
                </div>
                <div className="lesson-studente">
                  <div className="lesson">
                    <i className="fa-light fa-calendar-lines-pen" />
                    <span>22 Lessons</span>
                  </div>
                  <div className="lesson">
                    <i className="fa-light fa-user-group" />
                    <span>60 Students</span>
                  </div>
                </div>
                <a href="single-course.html">
                  <h5 className="title">
                    How to Write the Ultimate 1 Page Strategic Business Plan
                  </h5>
                </a>
                <p className="teacher">William U. Peña, MBA</p>
                <div className="rating-and-price">
                  <div className="rating-area">
                    <span>4.5</span>
                    <div className="stars">
                      <ul>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="price-area">
                    <div className="price">$79.99</div>
                  </div>
                </div>
              </div>
            </div>
           </div>
           {/*đóng các khóa học khác của giảng viên này */}
          </div>
        </div>
        <div
          className="col-lg-4 order-cl-2 order-lg-2 order-md-1 order-sm-1 order-1  rts-sticky-column-item"
          style={{
            position: "relative",
            overflow: "visible",
            boxSizing: "border-box",
            minHeight: 1
          }}
        >
          {/* right- sticky bar area */}
          {/* right- sticky bar area end */}
          {/* right- sticky bar area */}
          {/* right- sticky bar area end */}
          <div
            className="theiaStickySidebar"
            style={{
              paddingTop: 1,
              paddingBottom: 1,
              position: "static",
              transform: "none",
              left: "1023.16px",
              top: 0
            }}
          >
            <div className="right-course-details">
              {/* single course-sidebar */}
              <div className="course-side-bar">
                <div className="thumbnail">
                  <img src="assets/images/course/20.jpg" alt="" />
                  <div className="vedio-icone">
                  <iframe
                        height="250px"
                        src="https://www.youtube.com/embed/fPL3-cODrVU?si=8Nz05i6TzsiG7WpY"
                        title="YouTube video player"
                        frameBorder="0"  // Thay đổi ở đây
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"  // Thay đổi ở đây
                        allowFullScreen  // Thay đổi ở đây
                        >

                    </iframe>

                    <div className="video-overlay">
                      <a className="video-overlay-close">×</a>
                    </div>
                  </div>
                </div>
                <div className="price-area">
                  <h3 className="title animated fadeIn">$39.99</h3>
                  <h4 className="none">$79.99</h4>
                  <span className="discount">-50%</span>
                </div>
                <div className="clock-area">
                  <i className="fa-light fa-clock" />
                  <span>2 Day left at this price!</span>
                </div>
                <a href="#" className="rts-btn btn-primary">
                  Add To Cart
                </a>
                <a href="#" className="rts-btn btn-border">
                  Buy Now
                </a>
                <div className="what-includes">
                  <span className="m">30-Day Money-Back Guarantee</span>
                  <h5 className="title">This course includes: </h5>
                  <div className="single-include">
                    <div className="left">
                      <i className="fa-light fa-chart-bar" />
                      <span>Levels</span>
                    </div>
                    <div className="right">
                      <span>Beginner</span>
                    </div>
                  </div>
                  <div className="single-include">
                    <div className="left">
                      <i className="fa-light fa-timer" />
                      <span>Duration</span>
                    </div>
                    <div className="right">
                      <span>6 hours 56 minutes</span>
                    </div>
                  </div>
                  <div className="single-include">
                    <div className="left">
                      <i className="fa-regular fa-floppy-disk" />
                      <span>Subject</span>
                    </div>
                    <div className="right">
                      <span>Web Development</span>
                    </div>
                  </div>
                  <div className="single-include">
                    <div className="left">
                      <i className="fa-regular fa-pen-to-square" />
                      <span>Update</span>
                    </div>
                    <div className="right">
                      <span>29 October, 2023 Last Update</span>
                    </div>
                  </div>
                  <div className="single-include">
                    <div className="left">
                      <i className="fa-sharp fa-light fa-file-certificate" />
                      <span>Certificate</span>
                    </div>
                    <div className="right">
                      <span>Certificate of completion </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* single course-sidebar end */}
            </div>
            <div className="right-course-details mt--30">
              {/* single course-sidebar */}
              <div className="course-side-bar">
                {/* course single sidebar */}
                <div className="course-single-information">
                  <h5 className="title">A course by</h5>
                  <div className="body">
                    <div className="author">
                      <img src="assets/images/course/13.png" alt="" />
                      <span>Dr. Angela Yu</span>
                    </div>
                    <div className="author">
                      <img src="assets/images/course/13.png" alt="" />
                      <span>Mr. John Yu</span>
                    </div>
                  </div>
                </div>
                {/* course single sidebar end*/}
                {/* course single sidebar */}
                <div className="course-single-information">
                  <h5 className="title">Material Includes</h5>
                  <div className="body">
                    {/* ingle check */}
                    <div className="single-check">
                      <i className="fa-light fa-circle-check" />
                      Flexible Deadlines
                    </div>
                    {/* ingle check end */}
                    {/* ingle check */}
                    <div className="single-check">
                      <i className="fa-light fa-circle-check" />
                      Hours of live- demo
                    </div>
                    {/* ingle check end */}
                    {/* ingle check */}
                    <div className="single-check">
                      <i className="fa-light fa-circle-check" />
                      Hours of live- demo
                    </div>
                    {/* ingle check end */}
                    {/* ingle check */}
                    <div className="single-check">
                      <i className="fa-light fa-circle-check" />
                      200+ downloadable resoursces
                    </div>
                    {/* ingle check end */}
                  </div>
                </div>
                {/* course single sidebar end*/}
                {/* course single sidebar */}
                <div className="course-single-information">
                  <h5 className="title">Requirements</h5>
                  <div className="body">
                    {/* ingle check */}
                    <div className="single-check">
                      <i className="fa-light fa-circle-check" />
                      Access to Adobe Premiere Pro
                    </div>
                    {/* ingle check end */}
                    {/* ingle check */}
                    <div className="single-check">
                      <i className="fa-light fa-circle-check" />
                      Familiarity with computers and other devices
                    </div>
                    {/* ingle check end */}
                  </div>
                </div>
                {/* course single sidebar end*/}
                {/* course single sidebar */}
                <div className="course-single-information">
                  <h5 className="title">Tags</h5>
                  <div className="body">
                    <div className="tags-wrapper">
                      {/* single tags */}
                      <span>Course</span>
                      <span>Design</span>
                      <span>Web development</span>
                      <span>Business</span>
                      <span>UI/UX</span>
                      <span>Financial</span>
                      {/* single tags end */}
                    </div>
                  </div>
                </div>
                {/* course single sidebar end*/}
                {/* course single sidebar */}
                <div className="course-single-information">
                  <h5 className="title">Share</h5>
                  <div className="body">
                    {/* social-share-course-sidebar */}
                    <div className="social-share-course-side-bar">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* social-share-course-sidebar end */}
                  </div>
                </div>
                {/* course single sidebar end*/}
                {/* course single sidebar */}
                <div className="course-single-information last">
                  <h5 className="title">Audience</h5>
                  <div className="body">
                    {/* ingle check */}
                    <div className="single-check">
                      <i className="fa-light fa-circle-check" />
                      Suitable for beginners and intermediates
                    </div>
                    {/* ingle check end */}
                  </div>
                </div>
                {/* course single sidebar end*/}
              </div>
              {/* single course-sidebar end */}
            </div>
            <div
              className="resize-sensor"
              style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                zIndex: -1,
                visibility: "hidden"
              }}
            >
              <div
                className="resize-sensor-expand"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  overflow: "hidden",
                  zIndex: -1,
                  visibility: "hidden"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    transition: "all 0s ease 0s",
                    width: 506,
                    height: 1805
                  }}
                />
              </div>
              <div
                className="resize-sensor-shrink"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  overflow: "hidden",
                  zIndex: -1,
                  visibility: "hidden"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    transition: "0s",
                    width: "200%",
                    height: "200%"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* course details area end */}
  <div className="rts-section-gapBottom  rts-feature-course-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-between-area">
            <div className="title-area-left-style">
              <div className="pre-title">
              <i className="bi bi-lightbulb mr-1" style={{color:'#32ADE6'}}></i>
              <span>More Similar Courses</span>
              </div>
              <h2 className="title">Related Courses</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt--50 ">
        <div className="col-lg-12">
          <div
            className="swiper swiper-float-right-course swiper-data swiper-initialized swiper-horizontal swiper-pointer-events overflow-x-scroll"
           
          >
            <div
              className="swiper-wrapper"
              
            >
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active "
                data-swiper-slide-index={3}
                role="group"
                aria-label="4 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        Complete Guitar Lessons System Beginner to Advanced
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                data-swiper-slide-index={4}
                role="group"
                aria-label="5 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        Automate the Boring Stuff with Python Programming
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        Automate the Boring Stuff with Python Programming
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={6}
                role="group"
                aria-label="7 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={0}
                role="group"
                aria-label="1 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={1}
                role="group"
                aria-label="2 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide swiper-slide-prev"
                data-swiper-slide-index={2}
                role="group"
                aria-label="3 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        User Experience The Ultimate Guide to Usability and UX
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                data-swiper-slide-index={3}
                role="group"
                aria-label="4 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        Complete Guitar Lessons System Beginner to Advanced
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                data-swiper-slide-index={4}
                role="group"
                aria-label="5 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        Automate the Boring Stuff with Python Programming
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={5}
                role="group"
                aria-label="6 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        Automate the Boring Stuff with Python Programming
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={6}
                role="group"
                aria-label="7 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={0}
                role="group"
                aria-label="1 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={1}
                role="group"
                aria-label="2 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index={2}
                role="group"
                aria-label="3 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        User Experience The Ultimate Guide to Usability and UX
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index={3}
                role="group"
                aria-label="4 / 7"
                style={{ width: "342.25px", marginRight: 30 }}
              >
                {/* single course style two */}
                <div className="single-course-style-three">
                  <a href="#" className="thumbnail">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="course" />
                    <div className="tag-thumb">
                      <span>Marketing</span>
                    </div>
                  </a>
                  <div className="body-area">
                    <div className="course-top">
                      <div className="tags">Best Seller</div>
                      <div className="price">$49.50</div>
                    </div>
                    <a href="#">
                      <h5 className="title">
                        Complete Guitar Lessons System Beginner to Advanced
                      </h5>
                    </a>
                    <div className="teacher-stars">
                      <div className="teacher">
                        <span>Dr. Angela Yu</span>
                      </div>
                      <ul className="stars">
                        <li className="span">4.5</li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-sharp fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="leasson-students">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="students">
                        <i className="fa-light fa-users" />
                        <span>25 Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single course style two end */}
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

              <Footercomponent/>

        </div>
    )
}

