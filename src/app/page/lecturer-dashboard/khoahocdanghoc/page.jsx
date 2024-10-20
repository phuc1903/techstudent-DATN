"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";



export default function Khoahoccuatoi(){
    const [page,setPage] = useState(1);
    

    const khoahocdanghoc =() =>{
      setPage(1);
    }
    const khoahocdathanhtoan=()=>{
      setPage(2)
    }
    const khoahocdahoanthanh=()=>{
      setPage(3)
    }
    return(
        <div className="col-lg-9 overflow-y-scroll h-lvh">
  <div className="exrolled-course-wrapper-dashed">
    <h5 className="title">Khóa học của tôi</h5>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${page ===1 ? 'active' : ''} `}
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          onClick={() =>khoahocdanghoc()}
        >
          Khóa học đang học
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${page ===2 ? 'active' : ''} `}
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
          onClick={() =>khoahocdathanhtoan()}
        >
          Khóa học đã thanh toán
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${page ===3 ? 'active' : ''} `}
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          onClick={() =>khoahocdahoanthanh()}
        >
          Khóa học đã hoàn thành
        </button>
      </li>
    </ul>
    <div className="tab-content mt--30" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        {page ==1 && (
          <Khoahocdanghoc/>
        )}
        {page ==2 && (
          <Khoahocdathanhtoan/>
        )}
        {page ==3 && (
          <Khoahocdahoanthanh/>
        )}
      </div>
    </div>
  </div>
</div>

    )
}

const Khoahocdanghoc=() =>{
  const router = useRouter();
  
  const tieptuchoc =()=>{
      router.push("/page/lesson")
  }
  return(
    <div className="row g-5">
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/01.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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
          <div className="progress-wrapper-lesson-compleate">
            <div className="compleate">
              <div className="compl">Complete</div>
              <div className="end">
                <span>50%</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar wow fadeInLeft bg--primary"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
            Tiếp tục học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/02.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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
          <div className="progress-wrapper-lesson-compleate">
            <div className="compleate">
              <div className="compl">Complete</div>
              <div className="end">
                <span>70%</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar wow fadeInLeft bg--primary"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
            Tiếp tục học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/03.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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
          <div className="progress-wrapper-lesson-compleate">
            <div className="compleate">
              <div className="compl">Complete</div>
              <div className="end">
                <span>90%</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar wow fadeInLeft bg--primary"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
            Tiếp tục học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/04.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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
          <div className="progress-wrapper-lesson-compleate">
            <div className="compleate">
              <div className="compl">Complete</div>
              <div className="end">
                <span>20%</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar wow fadeInLeft bg--primary"
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
            tiếp tục học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/05.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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
          <div className="progress-wrapper-lesson-compleate">
            <div className="compleate">
              <div className="compl">Complete</div>
              <div className="end">
                <span>50%</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar wow fadeInLeft bg--primary"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
            Tiếp tục học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/06.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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
          <div className="progress-wrapper-lesson-compleate">
            <div className="compleate">
              <div className="compl">Complete</div>
              <div className="end">
                <span>80%</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar wow fadeInLeft bg--primary"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
            Tiếp tục học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
  </div>
  )
}
const Khoahocdathanhtoan=()=>{
  const router = useRouter();
  
  const tieptuchoc =()=>{
      router.push("/page/lesson")
  }
  return(
    <div className="row g-5">
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/01.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
            Bắt đầu học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/02.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
            Bắt đầu học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/03.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
            Bắt đầu học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/04.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
            Bắt đầu học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/05.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
           Bắt đầu học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/06.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" onClick={()=>tieptuchoc()}>
            Bắt đầu học
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
  </div>
  )
}
const Khoahocdahoanthanh=()=>{
  return(
    <div className="row g-5">
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/01.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" >
            Nhận chứng chỉ
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/02.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" >
            Nhận chứng chỉ
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/03.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" >
           Nhận chứng chỉ
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/04.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" >
            Nhận chứng chỉ
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/05.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" >
            Nhận chứng chỉ
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      {/* single course style two */}
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
          <img src="assets/images/course/06.jpg" alt="course" />
          <div className="tag-thumb">
            <span>Marketing</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
            <div className="price">$49.50</div>
          </div>
          <a href="single-course.html">
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

          <button className="rts-btn btn-border" >
            Nhận chứng chỉ
          </button>
        </div>
      </div>
      {/* single course style two end */}
    </div>
  </div>
  )
}