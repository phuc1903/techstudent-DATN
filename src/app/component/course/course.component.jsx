"use client"

import React, { useState, useEffect } from 'react';
import { Subcategory, Category } from '../category/category.component';

// import { Coursesoutstanding,Coursenew } from "@/app/service/course/course.service";



const OutstandingCourse = () => {
  const [KhoaHoc, setKhoaHoc] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/allkhoahoc")
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setKhoaHoc(data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(KhoaHoc);


  return (
    <div>
      <div className="course-area-start rts-section-gap ">
        <div className="container">
          <Category />

          <div className="border-t border-orange-100 ms-portfolio-filter-area main-isotop">
            <div className="flex justify-center mt-5">
              <h6>CNTT</h6>
            </div>
            <Subcategory />
            
              <div className="portfolio_wrap">
                <div className="filter row g-5 mt--20 portfolio-feed personal">
                {KhoaHoc.map((item, index) => (
                  <div
                    className="transition flash grid-item-p element-item creative col-xl-3 col-lg-4 col-md-6 col-sm-6"
                    data-category="transition"
                  >

                    <div className="rts-single-course">
                      <a href={'/page/course-detail'} className="thumbnail">
                        <img src={item.hinh} alt="course" />
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
                          <span>{item.chude.ten}</span>
                        </div>
                      </div>
                      <div className="lesson-studente">
                        <div className="lesson">
                          <i className="fa-light fa-calendar-lines-pen" />
                          <span>{item.baihocs} Lessons</span>
                        </div>
                        <div className="lesson">
                          <i className="fa-light fa-user-group" />
                          <span>{item.dangky} Students</span>
                        </div>
                      </div>
                      <a href={'/page/course-detail'}>
                        <h5 className="title">
                          {item.ten}
                        </h5>
                      </a>
                      <p className="teacher">{item.giangvien}</p>
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
                          <div className="not price">${item.gia}</div>
                          <div className="price">${item.giamgia}</div>
                        </div>
                      </div>
                    </div>
                    {/* rts single course end */}
                  </div>
                ))}
                </div>
              </div>
         



          </div>
        </div>
      </div>

    </div>
  )
}

const CourseNew = () => {
  return (
    <div>
      {/* {course.map((item,index) =>(
                <div>
                    <h1>{item.id}</h1>
                </div>
            ))} */}

      <div className="course-area-start rts-section-gap ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-between-area">
                <div className="title-area-left-style">
                  <div className="pre-title">
                    <i className="mr-1 bi bi-lightbulb" style={{ color: '#32ADE6' }}></i>
                    <span>Courses</span>
                  </div>
                  <h2 className="title">Khám phá các khóa học mới nhất</h2>
                  <p className="post-title">
                    Bạn sẽ tìm thấy thứ gì đó khơi dậy sự tò mò của bạn và nâng cao
                  </p>
                </div>

              </div>
            </div>

          </div>

          <div className="border-t border-orange-100 ms-portfolio-filter-area main-isotop">
            <div className="flex justify-center mt-5">
              <h6>CNTT</h6>
            </div>
            <Subcategory />

            <div className="portfolio_wrap">
              <div className="filter row g-5 mt--20 portfolio-feed personal">
                <div
                  className="transition flash grid-item-p element-item creative col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <p className="teacher">Dr. Angela Yu</p>
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
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item design col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                    <a href={'/page/course-detail'}>
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
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item photo col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>23 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>40 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        100 Days Of Code - 2023 Web Development Bootcamp
                      </h5>
                    </a>
                    <p className="teacher">Dr. Angela Yu</p>
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
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item style col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Design</span>
                      </div>
                      <div className="single-tag">
                        <span>UI/UX</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>19 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>14 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        User Experience The Ultimate Guide to Usability and UX
                      </h5>
                    </a>
                    <p className="teacher">David Travis</p>
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
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item creative col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Music</span>
                      </div>
                      <div className="single-tag">
                        <span>Art</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        Complete Guitar Lessons System Beginner to Advanced
                      </h5>
                    </a>
                    <p className="teacher">Erich Andreas</p>
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
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item design col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        How to Market Yourself as Coach or Consultant Market
                      </h5>
                    </a>
                    <p className="teacher">Dr. Angela Yu</p>
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
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item photo col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Business</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        How to Run truly Productive in Meetings – and add value
                      </h5>
                    </a>
                    <p className="teacher">Dr. Angela Yu</p>
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
                        <div className="not price">$79.99</div>
                        <div className="price">$39.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item style col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Dance</span>
                      </div>
                      <div className="single-tag">
                        <span>Meditation</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        Pole Dancing Video Course with Noelle Wood
                      </h5>
                    </a>
                    <p className="teacher">Dr. Angela Yu</p>
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
                        <div className="price">$59.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

const Courseseal = () => {
  return (
    <div>
      {/* {course.map((item,index) =>(
                <div>
                    <h1>{item.id}</h1>
                </div>
            ))} */}

      <div className="p-0 course-area-start rts-section-gap ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-between-area">
                <div className="title-area-left-style">
                  <div className="pre-title">
                    <i className="mr-1 bi bi-lightbulb" style={{ color: '#32ADE6' }}></i>
                    <span>Courses</span>
                  </div>
                  <h2 className="title">Khóa học giảm giá</h2>
                  <p className="post-title">
                    Bạn sẽ tìm thấy thứ gì đó khơi dậy sự tò mò của bạn và nâng cao
                  </p>
                </div>

              </div>
            </div>

          </div>

          <div className="border-t border-orange-100 ms-portfolio-filter-area main-isotop">
            <div className="flex justify-center mt-5">
              <h6>CNTT</h6>
            </div>
            <Subcategory />

            <div className="portfolio_wrap">
              <div className="filter row g-5 mt--20 portfolio-feed personal">
                <div
                  className="transition flash grid-item-p element-item creative col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={"/page/course-detail"} className="thumbnail">
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
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <p className="teacher">Dr. Angela Yu</p>
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
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item design col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                    <a href={'/page/course-detail'}>
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
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item photo col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>23 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>40 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        100 Days Of Code - 2023 Web Development Bootcamp
                      </h5>
                    </a>
                    <p className="teacher">Dr. Angela Yu</p>
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
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item style col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Design</span>
                      </div>
                      <div className="single-tag">
                        <span>UI/UX</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>19 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>14 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        User Experience The Ultimate Guide to Usability and UX
                      </h5>
                    </a>
                    <p className="teacher">David Travis</p>
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
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
const Coursefree = () => {
  return (
    <div>
      {/* {course.map((item,index) =>(
                <div>
                    <h1>{item.id}</h1>
                </div>
            ))} */}

      <div className="p-0 course-area-start rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-between-area">
                <div className="title-area-left-style">
                  <div className="pre-title">
                    <i className="mr-1 bi bi-lightbulb" style={{ color: '#32ADE6' }}></i>
                    <span>Courses</span>
                  </div>
                  <h2 className="title">Khóa học miễn phí</h2>
                  <p className="post-title">
                    Bạn sẽ tìm thấy thứ gì đó khơi dậy sự tò mò của bạn và nâng cao
                  </p>
                </div>

              </div>
            </div>

          </div>

          <div className="border-t border-orange-100 ms-portfolio-filter-area main-isotop">
            <div className="flex justify-center mt-5">
              <h6>CNTT</h6>
            </div>
            <Subcategory />

            <div className="portfolio_wrap">
              <div className="filter row g-5 mt--20 portfolio-feed personal">
                <div
                  className="transition flash grid-item-p element-item creative col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>25 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        The Complete Web Developer in 2023: Zero to Mastery
                      </h5>
                    </a>
                    <p className="teacher">Dr. Angela Yu</p>
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
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item design col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                    <a href={'/page/course-detail'}>
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
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item photo col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>23 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>40 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        100 Days Of Code - 2023 Web Development Bootcamp
                      </h5>
                    </a>
                    <p className="teacher">Dr. Angela Yu</p>
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
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>
                <div
                  className="transition flash grid-item-p element-item style col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  data-category="transition"
                >
                  {/* rts single course */}
                  <div className="rts-single-course">
                    <a href={'/page/course-detail'} className="thumbnail">
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
                        <span>Design</span>
                      </div>
                      <div className="single-tag">
                        <span>UI/UX</span>
                      </div>
                    </div>
                    <div className="lesson-studente">
                      <div className="lesson">
                        <i className="fa-light fa-calendar-lines-pen" />
                        <span>19 Lessons</span>
                      </div>
                      <div className="lesson">
                        <i className="fa-light fa-user-group" />
                        <span>14 Students</span>
                      </div>
                    </div>
                    <a href={'/page/course-detail'}>
                      <h5 className="title">
                        User Experience The Ultimate Guide to Usability and UX
                      </h5>
                    </a>
                    <p className="teacher">David Travis</p>
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
                        <div className="not price">$79.99</div>
                        <div className="price">$79.99</div>
                      </div>
                    </div>
                  </div>
                  {/* rts single course end */}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export { OutstandingCourse, CourseNew, Courseseal, Coursefree }