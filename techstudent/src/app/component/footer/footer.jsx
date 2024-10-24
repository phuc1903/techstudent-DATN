import React from "react";


export default function Footercomponent(){
    return (
        <div>
             <div className="footer-callto-action-area bg-light-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="call-to-sction bg_image shape-move">
            <h2 className="title">
              Skills Certificate From <br /> the Studyhub
            </h2>
            <a
              href="course-one.html"
              className="rts-btn btn-primary-white with-arrow"
            >
              View All Course <i className="fa-regular fa-arrow-right" />
            </a>
            <div className="cta-image">
              {/* <img src="assets/images/cta/women.png" alt="" /> */}
            </div>
            <div className="shape-image">
              <div className="shape one" data-speed="0.04">
                {/* <img src="assets/images/cta/03.svg" alt="" /> */}
              </div>
              <div className="shape two" data-speed="0.04">
                {/* <img src="assets/images/cta/04.svg" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row  ptb--100">
        <div className="col-lg-12">
          {/* footer main wrapper */}
          <div className="footer-one-main-wrapper">
            {/* single sized  footer  */}
            <div className="footer-singl-wized left-logo">
              <div className="head">
                <a href="#">
                  <img
                    // src="assets/images/logo/logo-1.svg"
                    alt="logo"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="body">
                <p className="dsic">
                  We are passionate education dedicated to providing
                  high-quality resources learners all backgrounds.
                </p>
                <ul className="wrapper-list">
                  <li>
                    <i className="fa-regular fa-location-dot" />
                    Yarra Park, Melbourne, Australia{" "}
                  </li>
                  <li>
                    <i className="fa-regular fa-phone" />
                    <a href="tel:+4733378901">+(61) 485-826-710</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized">
              <div className="head">
                <h6 className="title">Quick Links</h6>
              </div>
              <div className="body">
                <ul className="menu">
                  <li>
                    <a href="course-two.html">Latest Courses</a>
                  </li>
                  <li>
                    <a href="about.html">Mission &amp; Vision</a>
                  </li>
                  <li>
                    <a href="become-instructor.html">Join a Carrer</a>
                  </li>
                  <li>
                    <a href="zoom-meeting.html">Zoom Meeting</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing Plan</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized">
              <div className="head">
                <h6 className="title">Explore</h6>
              </div>
              <div className="body">
                <ul className="menu">
                  <li>
                    <a href="course-one.html">Course One</a>
                  </li>
                  <li>
                    <a href="course-two.html">Course Two</a>
                  </li>
                  <li>
                    <a href="create-course.html">Create Course</a>
                  </li>
                  <li>
                    <a href="lesson-details.html">Lesson Details</a>
                  </li>
                  <li>
                    <a href="instructor.html">Instructor</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized input-area">
              <div className="head">
                <h6 className="title">Newsletter</h6>
              </div>
              <div className="body">
                <p className="disc">
                  Subscribe Our newsletter get update our new course
                </p>
                <form action="#">
                  <div className="input-area-fill">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <button> Subscribe</button>
                  </div>
                  <div className="d-flex align-items-center">
                    <input type="checkbox" id="exampleCheck1" />
                    <label htmlFor="exampleCheck1">
                      I agree to the terms of use and privacy policy.
                    </label>
                  </div>
                </form>
              </div>
            </div>
            {/* single sized  footer end */}
          </div>
          {/* footer main wrapper end */}
        </div>
      </div>
    </div>
    <div className="copyright-area-one-border">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-area-one">
              <p>Copyright © 2024 All Rights Reserved by Studyhub</p>
              <div className="social-copyright">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer call to action area end */}
  {/* Modal */}
  <div
    className="modal login-pupup-modal fade"
    id="exampleModal-login"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Hi, Welcome back!
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form action="#" className="login-form">
            <input
              type="text"
              placeholder="Username of Email Address"
            />
            <input type="password" placeholder="Password" />
            <div className="d-flex mb--20 align-items-center">
              <input type="checkbox" id="examplecheck-modal" />
              <label htmlFor="examplecheck-modal">
                I agree to the terms of use and privacy policy.
              </label>
            </div>
            <button type="submit" className="rts-btn btn-primary">
              Sign In
            </button>
            <p className="dont-acc mt--20">
              Dont Have an Account? <a href="registration.html">Sign-up</a>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* header style two */}

  {/* header style two End */}
  {/* modal */}
  <div id="myModal-1" className="modal fade" role="dialog">
    <div className="modal-dialog bg_image">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal">
            <i className="fa-light fa-x" />
          </button>
        </div>
        <div className="modal-body text-center">
          <div className="inner-content">
            <div className="title-area">
              <span className="pre">Get Our Courses Free</span>
              <h4 className="title">Wonderful for Learning</h4>
            </div>
            <form action="#">
              <input type="text" placeholder="Your Mail.."  />
              <button>Download Now</button>
              <span>
                Your information will never be shared with any third party
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts backto top start */}
  <div className="progress-wrap">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}
      />
    </svg>
  </div>
  {/* rts backto top end */}
  {/* offcanvase search */}
  <div className="search-input-area">
    <div className="container">
      <div className="search-input-inner">
        <div className="input-div">
          <input
            className="search-input autocomplete"
            type="text"
            placeholder="Search by keyword or #"
          />
          <button>
            <i className="far fa-search" />
          </button>
        </div>
      </div>
    </div>
    <div id="close" className="search-close-icon">
      <i className="far fa-times" />
    </div>
  </div>
  {/* offcanvase search */}
  <div id="anywhere-home" className=""></div>
        </div>
    )
}