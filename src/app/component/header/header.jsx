"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';


import './cart.css'
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import { Cart } from './cart/cartheader';
// import { Button } from '@/components/ui/button';
import { Categoryheader } from '../category/category.component';




export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [visible, setVisible] = useState(false);
  const [isopensearch, setIsopensearch] = useState(false);
  const [opencart, setOpencart] = useState(false);
  const [header2, setHeader2] = useState(false);

  const handleScroll = () => {


    const scrollTop = window.scrollY;

    if (scrollTop > 70) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const Opensearch = () => {
    setIsopensearch(true)
  }
  const Closesearch = () => {
    setIsopensearch(false);
  }
  const closeheader2 = () => {
    setHeader2(false)
  }
  const openheader2 = () => {
    setHeader2(true);
  }
  const clickopencart = () => {
    setOpencart(true);
  }
  const clickclosecart = () => {
    setOpencart(false)
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const test = () => {
    alert("test")
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const data = JSON.parse(localStorage.getItem('data'));
  return (
    <>
      {/* Mirrored from html.themewant.com/studyhub/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 30 Sep 2024 19:38:48 GMT */}

      {/* <link rel="shortcut icon" type="image/x-icon" href="assets/images/fav.png" /> */}

      <header className="fixed top-0 header-one header--sticky ">

        {visible && (
          <div className="scroll" onClick={scrollToTop}>
            <i className="bi bi-chevron-up"></i>
          </div>
        )}

        {opencart && (
          <Cart onAction={clickclosecart} />
        )}

        {isopensearch && (
          <div className='input-search'>
            <div className='div-input'>
              <form>
                <input type="text" placeholder='tìm kiếm' />
              </form>
              <p className='hover:cursor-pointer' onClick={() => Closesearch()}>hủy</p>
            </div>
            <div className='w-full h-full blur' onClick={() => Closesearch()}>

            </div>

          </div>
        )}




        <div className="header-top-one-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-top-one">
                  <div className="left-information">
                    <a href="mailto:someone@example.com" className="email">
                      <i className="fa-light fa-envelope" />
                      techstudent@gmail.com
                    </a>
                    <a href="tel:+4733378901" className="email">
                      <i className="fa-light fa-phone" />
                      +123 456 789
                    </a>
                  </div>
                  <div className="right-information">
                    <ul className="rts-dropdown-menu switcher-language">
                      <li className="has-child-menu">
                        <a href="#">

                          <span className="menu-item">English</span>
                          <i className="fa-regular fa-chevron-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">

                              <span className="menu-item">Deutsch</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">

                              <span className="menu-item">Portuguese</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">

                              <span className="menu-item">Russian</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="rts-dropdown-menu switcher-currency">
                      <li className="has-child-menu">
                        <a href="#">
                          <span className="menu-item">USD</span>
                          <i className="fa-regular fa-chevron-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <span className="menu-item">Euro</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="menu-item">Real</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="menu-item">Ruble</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-one-wrapper">
                <div className="left-side-header">
                  <a href={'/'} className="logo-area">
                    <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727967044/z5893902778330_3f5bed4df0f1d220b06d64708c4d87fc_rfjfty.jpg"
                      className="w-72"
                      alt="logo" />
                  </a>
                  <div className="category-area">
                    <div className="category-btn">
                      <i className="bi bi-list"></i>
                      <span>Thể loại</span>
                      <i className="fa-sharp fa-regular fa-chevron-down" />
                      <Categoryheader />
                    </div>
                  </div>
                </div>
                <div className="main-nav-one">
                  <nav>
                    <ul>
                      <li className="has-dropdown" style={{ position: "static" }}>
                        <Link className="nav-link" href="#">
                          Trang chủ
                        </Link>
                        <ul className="megamenu-hub">
                          <li>
                            <ul className="">
                              <li>
                                <Link href="index.html">Main Home</Link>
                              </li>
                              <li>
                                <Link href="index-two.html">Online course </Link>
                                <span className="popular">Popular</span>
                              </li>
                              <li>
                                <a href="index-three.html">Course hub</a>
                                <span>Hot</span>
                              </li>
                              <li>
                                <a href="index-four.html">Distance learning</a>
                              </li>
                              <li>
                                <a href="index-five.html">Single Instructor</a>
                                <span>Hot</span>
                              </li>
                            </ul>
                            <ul className="">
                              <li>
                                <a href="index-six.html">Language Academy</a>
                                <span>Hot</span>
                              </li>
                              <li>
                                <a href="index-seven.html">Gym Instructor</a>
                              </li>
                              <li>
                                <a href="index-eight.html">Kitchen coach</a>
                                <span className="popular">Popular</span>
                              </li>
                              <li>
                                <a href="index-nine.html">Course Portal</a>
                              </li>
                              <li>
                                <a href="index-ten.html">Business coach</a>
                              </li>
                            </ul>
                            <div className="absolute-image-shape shape-image">
                              <img
                                className=" shape one"
                                // src="assets/images/nav/02.png"
                                data-speed="0.04"
                                data-revert="true"
                                alt="nav"
                              />
                              <img
                                className=" shape two"
                                // src="assets/images/nav/03.png"
                                data-speed="0.04"
                                alt="nav"
                              />
                            </div>
                            <div className="nav-mega-image">
                              <a href="single-course.html">
                                {/* <img src="assets/images/nav/01.jpg" alt="nav" /> */}
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a className="nav-link" href="#">
                          Trang
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="about-two.html">About Two</a>
                          </li>
                          <li>
                            <a href="instructor-profile.html">Profile</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li className="sub-dropdown">
                            <a href="javascript:void(0);">Zoom</a>
                            <ul className="submenu third-lvl base">
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="zoom-meeting.html"
                                >
                                  Zoom Meeting
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="zoom-details.html"
                                >
                                  Zoom Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-dropdown">
                            <a href="javascript:void(0);">Event</a>
                            <ul className="submenu third-lvl base">
                              <li>
                                <a className="mobile-menu-link" href="event.html">
                                  Event
                                </a>
                              </li>
                              <li>
                                <a className="mobile-menu-link" href="event-2.html">
                                  Event Two
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="event-details.html"
                                >
                                  Event Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-dropdown">
                            <a href="javascript:void(0);">Shop</a>
                            <ul className="submenu third-lvl base">
                              <li>
                                <a className="mobile-menu-link" href="shop.html">
                                  Shop
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="product-details.html"
                                >
                                  Product Details
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="checkout.html"
                                >
                                  Checkout
                                </a>
                              </li>
                              <li>
                                <a className="mobile-menu-link" href="cart.html">
                                  Cart
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="404.html">Error 404</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown" style={{ position: "static" }}>
                        <a className="nav-link" href="#">
                          Khóa học
                        </a>
                        <ul className="megamenu-hub min-mega shape-move">
                          <li>
                            <ul className="">
                              <li className="parent">
                                <a href="#">Courses</a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="course-one.html"
                                >
                                  Courses
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="course-two.html"
                                >
                                  Course List
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="course-three.html"
                                >
                                  Course Grid
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="course-four.html"
                                >
                                  Course List Two
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="course-five.html"
                                >
                                  Course Grid Two
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="course-six.html"
                                >
                                  Course Grid Three
                                </a>
                              </li>
                            </ul>
                            <ul className="">
                              <li className="parent">
                                <a href="#">Courses Details</a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="single-course.html"
                                >
                                  Course Details
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="single-course-two.html"
                                >
                                  Course Details v2
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="single-course-three.html"
                                >
                                  Course Details v3
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="single-course-four.html"
                                >
                                  Course Details v4
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="single-course-five.html"
                                >
                                  Course Details v5
                                </a>
                              </li>
                              <li>
                                <a
                                  className="mobile-menu-link"
                                  href="single-course-free.html"
                                >
                                  Course Details Free
                                </a>
                              </li>
                            </ul>
                            <ul className="">
                              <li className="parent">
                                <a href="#">Others</a>
                              </li>
                              <li>
                                <a href="become-instructor.html">
                                  Become an Instructor
                                </a>
                              </li>
                              <li>
                                <a href="instructor-profile.html">
                                  Instructor Profile
                                </a>
                              </li>
                              <li>
                                <a href="instructor.html">Instructor</a>
                              </li>
                              <li>
                                <a href="pricing.html">Membership Plan</a>
                              </li>
                              <li>
                                <a href={"/page/login"}>Log In</a>
                              </li>
                              <li>
                                <a href="registration.html">Registration</a>
                              </li>
                            </ul>
                            <div className="thumbnav-area">
                              {/* single thumbnav */}
                              <a
                                href="create-course.html"
                                className="single-thumbnav"
                              >
                                <div className="icon">
                                  {/* <img src="assets/images/nav/04.png" alt="nav" /> */}
                                </div>
                                <span>Create Course</span>
                              </a>
                              {/* single thumbnav end */}
                              {/* single thumbnav */}
                              <a
                                href="lesson-details.html"
                                className="single-thumbnav mash"
                              >
                                <div className="icon">
                                  {/* <img src="assets/images/nav/05.png" alt="nav" /> */}
                                </div>
                                <span>Lesson Details</span>
                              </a>
                              {/* single thumbnav end */}
                              {/* single thumbnav */}
                              <a href="instructor.html" className="single-thumbnav">
                                <div className="icon">
                                  {/* <img src="assets/images/nav/06.png" alt="nav" /> */}
                                </div>
                                <span>Instructor</span>
                              </a>
                              {/* single thumbnav end */}
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a className="nav-link" href="#">
                          Trang tính
                        </a>
                        <ul className="submenu">
                          <li >
                            <a className="submenu-link" href={"/page/dashboard-student"}>
                              trang tính học viên
                            </a>

                          </li>
                          <li >
                            <a className="submenu-link" href={"/page/lecturer-dashboard"}>
                              Trang tính giảng viên
                            </a>

                          </li>
                        </ul>
                      </li>

                    </ul>
                  </nav>
                </div>
                <div className="main-nav-one"></div>
                <div className="header-right-area-one">
                  <div className="actions-area">
                    <div className="search-btn" id="search" onClick={() => Opensearch()}>
                      <i className="bi bi-search search" style={{ color: '#32ADE6', fontSize: '20px', fontWeight: 'bold' }}></i>
                    </div>
                    <div className='relative cart cart-icon'>
                      <i className="fa-sharp fa-light fa-bookmark" style={{ color: '#32ADE6', fontSize: '20px' }} />
                      <div className='absolute hidden w-32 h-16 border rounded-md carthover group-hover:block'>
                        <p>yêu thích</p>
                      </div>
                    </div>
                    <div className="relative cart cart-icon">
                      <i className="fa-regular fa-cart-shopping" onClick={clickopencart} />
                      <div className='absolute hidden h-16 border rounded-md carthover w-28 group-hover:block'>
                        <p>giỏ hàng</p>
                      </div>
                    </div>
                  </div>
                  {!localStorage.getItem('data') ? (
                    <div className="buttons-area">
                      <a href={"/page/login"} className="rts-btn btn-border">
                        Log In
                      </a>
                      <a href="registration.html" className="rts-btn btn-primary">
                        Sign Up
                      </a>
                    </div>
                  ) : (
                    <div className="buttons-area">
                        <a href={"/page/login"} className="rts-btn btn-border"
                          onClick={() => {
                            localStorage.removeItem('lecturerId');
                            localStorage.removeItem('data');
                            window.location.reload();
                          }}
                        >
                        Đăng xuất
                      </a>
                        <div className='flex items-center'>
                          <Link href={data && data.vaitro === 1 ? "/Lecturer" : "/chuyendoi"}
                            className="ml-4 hover:text-gray-300">
                            <div className='m-4 '>
                            <p className='p-2 m-0 font-bold text-center rounded-lg f text- bg-cyan-200'>Giảng viên</p>
                          </div>
                          </Link>
                        
                          <div className='relative div-imguser'>
                            <img
                              src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1728130178/01_vqeuoq.jpg"
                              alt=""
                              className='rounded-full cursor-pointer h-14 w-14'
                              onClick={toggleDropdown}
                            />
                            {isOpen && (
                              <div className='absolute right-0 bg-white border shadow-lg header-user'>
                                <div className='flex items-center justify-center py-6 border-b'>
                                  <div className='mr-4'>
                                    <img
                                      src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1728130178/01_vqeuoq.jpg"
                                      alt=""
                                      className='w-16 h-16 rounded-full'
                                    />
                                  </div>
                                  <div>
                                    <p>Nguyen Van A</p>
                                  </div>
                                </div>
                                <div className='p-2'>
                                  <button onClick={test} className='px-4 py-2 text-white bg-blue-500 rounded'>
                                    Click Meme
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                    </div>
                  )}
                  <div className="menu-btn" id="menu-btn" onClick={() => openheader2()}>
                    <svg
                      width={20}
                      height={16}
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y={14} width={20} height={2} fill="#1F1F25" />
                      <rect y={7} width={20} height={2} fill="#1F1F25" />
                      <rect width={20} height={2} fill="#1F1F25" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* header two */}

        {header2 && (
          <div className='absolute top-0 right-0 flex border header-two h-lvh'>
            <div className='blur' onClick={() => closeheader2()}>

            </div>
            <div className=' menu-header'>
              <div className='div-close-header'>

                <div className='close-header' onClick={() => closeheader2()}>
                  <i className="p-4 bi bi-x-lg "></i>
                </div>
              </div>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel-header"
                    className='AccordionSummary'
                  >
                    <div className='flex items-center'>
                      <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1728130178/01_vqeuoq.jpg" alt="" className='w-16 h-16 rounded-full' />
                      <p className='ml-4'>nguyen van a</p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <a href="">đăng xuất</a>

                  </AccordionDetails>
                  <AccordionDetails>
                    <a href="">cài đặt</a>

                  </AccordionDetails>
                </Accordion>


                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel-header"
                    className='AccordionSummary'
                  >
                    Home
                  </AccordionSummary>
                  <AccordionDetails>
                    <a href="">xem tất cả</a>

                  </AccordionDetails>
                  <AccordionDetails>
                    <a href="">xem tất cả</a>

                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel-header"
                  >
                    Accordion 2
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel-header"
                  >
                    page
                  </AccordionSummary>
                  <AccordionDetails>
                    <a href="">pag1 </a>
                  </AccordionDetails>
                  <AccordionDetails>
                    <a href="">pag2 </a>
                  </AccordionDetails>
                  <AccordionDetails>
                    <a href="">pag3 </a>
                  </AccordionDetails>
                  <AccordionDetails>
                    <a href="">pag4 </a>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel-header"
                  >
                    page
                  </AccordionSummary>
                  <AccordionDetails>
                    <a href="">pag1 </a>
                  </AccordionDetails>
                  <AccordionDetails>
                    <a href="">pag2 </a>
                  </AccordionDetails>
                  <AccordionDetails>
                    <a href="">pag3 </a>
                  </AccordionDetails>
                  <AccordionDetails>
                    <a href="">pag4 </a>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel-header"
                  >
                    page
                  </AccordionSummary>
                  <AccordionDetails>
                    <a href="">pag1 </a>
                  </AccordionDetails>
                  <AccordionDetails>
                    <a href="">pag2 </a>
                  </AccordionDetails>
                  <AccordionDetails>
                    <a href="">pag3 </a>
                  </AccordionDetails>
                  <AccordionDetails>
                    <a href="">pag4 </a>
                  </AccordionDetails>
                </Accordion>
                {/* <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion> */}
              </div>
            </div>
          </div>
        )}



      </header>
      {/* header style end */}
      {/* banner area start */}







      {/* footer call to action area start */}

      {/* all scripts */}
      {/* jquery min js */}
      {/* jquery ui js */}
      {/* metismenu js */}
      {/* magnific popup js*/}
      {/* swiper JS 10.2.0 */}
      {/* counterup js */}
      {/* waypoint js */}
      {/* wow js */}
      {/* isotop mesonary */}
      {/* jquery imageloaded */}
      {/* resize sensor js */}
      {/* sticky sidebar */}
      {/* gsap twinmax js */}
      {/* chroma js */}
      {/* bootstrap 5.0.2 */}
      {/* dymanic Contact Form */}
      {/* calender js */}
      {/* main Js */}
      {/* Mirrored from html.themewant.com/studyhub/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 30 Sep 2024 19:39:26 GMT */}
    </>

  )
}