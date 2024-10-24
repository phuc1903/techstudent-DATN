import React from 'react'

export default function 
() {
  return (
      <>
          {/* Modal */}
          <div
              className="modal announcement fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
          >
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                              Add New Topic
                          </h5>
                          <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                          />
                      </div>
                      <div className="modal-body">
                          <form action="#" className="modal-form">
                              <select className="nice-select" name="price">
                                  <option>Select New Topic</option>
                                  <option value="asc">Recently Update Web Design </option>
                                  <option value="desc">Web Design Course</option>
                                  <option value="pop">Update Web Design</option>
                                  <option value="low">Recently Update Web</option>
                                  <option value="high">Course: New Courses</option>
                              </select>
                              <div className="single-input mt--20">
                                  <label htmlFor="course">Topic Title</label>
                                  <input id="course" type="text" placeholder="Topic title" />
                              </div>
                              <div className="single-input">
                                  <label htmlFor="message">Summary</label>
                                  <textarea
                                      id="message"
                                      placeholder="Summary..."
                                      defaultValue={""}
                                  />
                              </div>
                          </form>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="rts-btn btn-primary">
                              Publish
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          {/* cart area start */}
          {/* cart area start */}
          <div className="cart-bar">
              <div className="cart-header">
                  <h3 className="cart-heading">MY CART (3 ITEMS)</h3>
                  <div className="close-cart">
                      <i className="fal fa-times" />
                  </div>
              </div>
              <div className="product-area">
                  <div className="product-item">
                      <div className="product-detail">
                          <div className="product-thumb">
                              <img src="assets/images/course/cart/01.jpg" alt="product-thumb" />
                          </div>
                          <div className="item-wrapper">
                              <span className="product-name">Construct Map</span>
                              <div className="item-wrapper">
                                  <span className="product-variation">
                                      <span className="color">Green /</span>
                                      <span className="size">XL</span>
                                  </span>
                              </div>
                              <div className="item-wrapper">
                                  <span className="product-qnty">3 ×</span>
                                  <span className="product-price">$198.00</span>
                              </div>
                          </div>
                      </div>
                      <div className="cart-edit">
                          <div className="quantity-edit">
                              <button className="button">
                                  <i className="fal fa-minus minus" />
                              </button>
                              <input type="text" className="input" defaultValue={3} />
                              <button className="button plus">
                                  +<i className="fal fa-plus plus" />
                              </button>
                          </div>
                          <div className="item-wrapper d-flex mr--5 align-items-center">
                              <a href="#" className="product-edit">
                                  <i className="fal fa-edit" />
                              </a>
                              <a href="#" className="delete-cart">
                                  <i className="fal fa-times" />
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="product-item">
                      <div className="product-detail">
                          <div className="product-thumb">
                              <img src="assets/images/course/cart/02.jpg" alt="product-thumb" />
                          </div>
                          <div className="item-wrapper">
                              <span className="product-name"> Bridge product</span>
                              <div className="item-wrapper">
                                  <span className="product-variation">
                                      <span className="color">Green /</span>
                                      <span className="size">XL</span>
                                  </span>
                              </div>
                              <div className="item-wrapper">
                                  <span className="product-qnty">2 ×</span>
                                  <span className="product-price">$88.00</span>
                              </div>
                          </div>
                      </div>
                      <div className="cart-edit">
                          <div className="quantity-edit">
                              <button className="button">
                                  <i className="fal fa-minus minus" />
                              </button>
                              <input type="text" className="input" defaultValue={2} />
                              <button className="button plus">
                                  +<i className="fal fa-plus plus" />
                              </button>
                          </div>
                          <div className="item-wrapper d-flex mr--5 align-items-center">
                              <a href="#" className="product-edit">
                                  <i className="fal fa-edit" />
                              </a>
                              <a href="#" className="delete-cart">
                                  <i className="fal fa-times" />
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="product-item last-child">
                      <div className="product-detail">
                          <div className="product-thumb">
                              <img src="assets/images/course/cart/03.jpg" alt="product-thumb" />
                          </div>
                          <div className="item-wrapper">
                              <span className="product-name">Labour helmet</span>
                              <div className="item-wrapper">
                                  <span className="product-variation">
                                      <span className="color">Green /</span>
                                      <span className="size">XL</span>
                                  </span>
                              </div>
                              <div className="item-wrapper">
                                  <span className="product-qnty">1 ×</span>
                                  <span className="product-price">$289.00</span>
                              </div>
                          </div>
                      </div>
                      <div className="cart-edit">
                          <div className="quantity-edit">
                              <button className="button">
                                  <i className="fal fa-minus minus" />
                              </button>
                              <input type="text" className="input" defaultValue={2} />
                              <button className="button plus">
                                  +<i className="fal fa-plus plus" />
                              </button>
                          </div>
                          <div className="item-wrapper d-flex mr--5 align-items-center">
                              <a href="#" className="product-edit">
                                  <i className="fal fa-edit" />
                              </a>
                              <a href="#" className="delete-cart">
                                  <i className="fal fa-times" />
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="cart-bottom-area">
                  <span className="spend-shipping">
                      <i className="fal fa-truck" /> SPENT{" "}
                      <span className="amount">$199.00</span> MORE FOR FREE SHIPPING
                  </span>
                  <span className="total-price">
                      TOTAL: <span className="price">$556</span>
                  </span>
                  <a href="checkout.html" className="checkout-btn cart-btn">
                      PROCEED TO CHECKOUT
                  </a>
                  <a href="cart.html" className="view-btn cart-btn">
                      VIEW CART
                  </a>
              </div>
          </div>
          {/* cart area edn */}
          {/* cart area edn */}
          {/* header style two */}
          <div id="side-bar" className="side-bar header-two">
              <button className="close-icon-menu">
                  <i className="far fa-times" />
              </button>
              {/* inner menu area desktop start */}
              <div className="inner-main-wrapper-desk">
                  <div className="thumbnail">
                      <img src="assets/images/banner/04.jpg" alt="elevate" />
                  </div>
                  <div className="inner-content">
                      <h4 className="title">
                          We Build Building and Great Constructive Homes.
                      </h4>
                      <p className="disc">
                          We successfully cope with tasks of varying complexity, provide
                          long-term guarantees and regularly master new technologies.
                      </p>
                      <div className="footer">
                          <h4 className="title">Got a project in mind?</h4>
                          <a href="contact.html" className="rts-btn btn-primary">
                              Let's talk
                          </a>
                      </div>
                  </div>
              </div>
              {/* mobile menu area start */}
              <div className="mobile-menu-main">
                  <nav className="nav-main mainmenu-nav mt--30">
                      <ul className="mainmenu metismenu" id="mobile-menu-active">
                          <li className="has-droupdown">
                              <a href="#" className="main">
                                  Home
                              </a>
                              <ul className="submenu mm-collapse">
                                  <li>
                                      <a className="mobile-menu-link" href="index.html">
                                          Main Home
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="index-two.html">
                                          Online Course
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="index-three.html">
                                          Course Hub
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="index-four.html">
                                          Distance Learning
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="index-five.html">
                                          Single Instructor
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="index-six.html">
                                          Language Academy
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="index-seven.html">
                                          Gym Instructor
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="index-eight.html">
                                          Kitchen Coach
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="index-nine.html">
                                          Course Portal
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="index-ten.html">
                                          Business Coach
                                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li className="has-droupdown">
                              <a href="#" className="main">
                                  Pages
                              </a>
                              <ul className="submenu mm-collapse">
                                  <li>
                                      <a className="mobile-menu-link" href="about.html">
                                          About Us
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="about-two.html">
                                          About Us Two
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="instructor-profile.html">
                                          Profile
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="contact.html">
                                          Contact
                                      </a>
                                  </li>
                                  <li className="has-droupdown third-lvl">
                                      <a className="main" href="#">
                                          Zoom
                                      </a>
                                      <ul className="submenu-third-lvl mm-collapse">
                                          <li>
                                              <a href="zoom-meeting.html" />
                                              Zoom Meeting
                                          </li>
                                          <li>
                                              <a href="zoom-details.html" />
                                              Zoom Details
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="has-droupdown third-lvl">
                                      <a className="main" href="#">
                                          Event
                                      </a>
                                      <ul className="submenu-third-lvl mm-collapse">
                                          <li>
                                              <a href="event.html" />
                                              Event
                                          </li>
                                          <li>
                                              <a href="event-two.html" />
                                              Event Two
                                          </li>
                                          <li>
                                              <a href="event-details.html" />
                                              Event Details
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="has-droupdown third-lvl">
                                      <a className="main" href="#">
                                          Shop
                                      </a>
                                      <ul className="submenu-third-lvl mm-collapse">
                                          <li>
                                              <a href="shop.html" />
                                              Shop
                                          </li>
                                          <li>
                                              <a href="product-details.html" />
                                              Product Details
                                          </li>
                                          <li>
                                              <a href="checkout.html" />
                                              Checkout
                                          </li>
                                          <li>
                                              <a href="cart.html" />
                                              Cart
                                          </li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li className="has-droupdown">
                              <a href="#" className="main">
                                  Course
                              </a>
                              <ul className="submenu mm-collapse">
                                  <li>
                                      <a href="#" className="tag">
                                          Courses
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="course-one.html">
                                          Courses
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="course-two.html">
                                          Course List
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="course-three.html">
                                          Course Grid
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="course-four.html">
                                          Course List Two
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="course-five.html">
                                          Course Grid Two
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="course-six.html">
                                          Course Filter
                                      </a>
                                  </li>
                              </ul>
                              <ul className="submenu mm-collapse">
                                  <li>
                                      <a href="#" className="tag">
                                          Courses Details
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="single-course.html">
                                          Courses Details
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="single-course-two.html">
                                          Courses Details V2
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="single-course-three.html">
                                          Courses Details V3
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="single-course-four.html">
                                          Courses Details V4
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="single-course-five.html">
                                          Courses Details V5
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="single-course-free.html">
                                          Courses Details Free
                                      </a>
                                  </li>
                              </ul>
                              <ul className="submenu mm-collapse">
                                  <li>
                                      <a href="#" className="tag">
                                          Others
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="become-instructor.html">
                                          Become an Instructor
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="instructor-profile.html">
                                          Instructor Profile
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="instructor.html">
                                          Instructor
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="pricing.html">
                                          Membership Plan
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="log-in.html">
                                          Log In
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="registration.html">
                                          Registration
                                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li className="has-droupdown">
                              <a href="#" className="main">
                                  Dashboard
                              </a>
                              <ul className="submenu mm-collapse">
                                  <li className="has-droupdown third-lvl">
                                      <a className="main" href="#">
                                          Instructor Dashboard
                                      </a>
                                      <ul className="submenu-third-lvl mm-collapse">
                                          <li>
                                              <a href="dashboard.html" />
                                              Dashboard
                                          </li>
                                          <li>
                                              <a href="my-profile.html" />
                                              My Profile
                                          </li>
                                          <li>
                                              <a href="enroll-course.html" />
                                              Enroll Course
                                          </li>
                                          <li>
                                              <a href="wishlist.html" />
                                              Wishlist
                                          </li>
                                          <li>
                                              <a href="reviews.html" />
                                              Reviews
                                          </li>
                                          <li>
                                              <a href="quick-attempts.html" />
                                              Quick Attempts
                                          </li>
                                          <li>
                                              <a href="order-history.html" />
                                              Order History
                                          </li>
                                          <li>
                                              <a href="question-answer.html" />
                                              Question Answer
                                          </li>
                                          <li>
                                              <a href="calender.html" />
                                              Calender
                                          </li>
                                          <li>
                                              <a href="my-course.html" />
                                              My Course
                                          </li>
                                          <li>
                                              <a href="announcement.html" />
                                              Announcement
                                          </li>
                                          <li>
                                              <a href="assignments.html" />
                                              Assignments
                                          </li>
                                          <li>
                                              <a href="certificate.html" />
                                              Certificate
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="has-droupdown third-lvl">
                                      <a className="main" href="#">
                                          Students Dashboard
                                      </a>
                                      <ul className="submenu-third-lvl mm-collapse">
                                          <li>
                                              <a href="student-dashboard.html" />
                                              Dashboard
                                          </li>
                                          <li>
                                              <a href="student-profile.html" />
                                              My Profile
                                          </li>
                                          <li>
                                              <a href="student-enroll-course.html" />
                                              Enroll Course
                                          </li>
                                          <li>
                                              <a href="student-wishlist.html" />
                                              Wishlist
                                          </li>
                                          <li>
                                              <a href="student-reviews.html" />
                                              Reviews
                                          </li>
                                          <li>
                                              <a href="student-quick-attempts.html" />
                                              Quick Attempts
                                          </li>
                                          <li>
                                              <a href="student-order-history.html" />
                                              Order History
                                          </li>
                                          <li>
                                              <a href="student-question-answer.html" />
                                              Question Answer
                                          </li>
                                          <li>
                                              <a href="student-calender.html" />
                                              Calender
                                          </li>
                                          <li>
                                              <a href="student-settings.html" />
                                              Students Settings
                                          </li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li className="has-droupdown">
                              <a href="#" className="main">
                                  Blog
                              </a>
                              <ul className="submenu mm-collapse">
                                  <li>
                                      <a className="mobile-menu-link" href="blog.html">
                                          Blog
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="blog-grid.html">
                                          Blog Grid
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="blog-list.html">
                                          Blog List
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="blog-right-sidebar.html">
                                          Blog Right Sidebar
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="blog-left-sidebar.html">
                                          Blog Left Sidebar
                                      </a>
                                  </li>
                                  <li>
                                      <a className="mobile-menu-link" href="blog-details.html">
                                          Blog Details
                                      </a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </nav>
                  <div className="buttons-area">
                      <a href="#" className="rts-btn btn-border">
                          Log In
                      </a>
                      <a href="#" className="rts-btn btn-primary">
                          Sign Up
                      </a>
                  </div>
                  <div className="rts-social-style-one pl--20 mt--50">
                      <ul>
                          <li>
                              <a href="#">
                                  <i className="fa-brands fa-facebook-f" />
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  <i className="fa-brands fa-twitter" />
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  <i className="fa-brands fa-youtube" />
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  <i className="fa-brands fa-linkedin-in" />
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
              {/* mobile menu area end */}
          </div>
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
                      <div className="text-center modal-body">
                          <div className="inner-content">
                              <div className="title-area">
                                  <span className="pre">Get Our Courses Free</span>
                                  <h4 className="title">Wonderful for Learning</h4>
                              </div>
                              <form action="#">
                                  <input type="text" placeholder="Your Mail.." required="" />
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
      </>

  )
}
