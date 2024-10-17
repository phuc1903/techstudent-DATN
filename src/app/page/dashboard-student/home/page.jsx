import React from "react";

export default function Homedashboardstudent(){
    return(
        <div className="col-lg-9 overflow-y-scroll h-lvh">
        <div className="right-sidebar-dashboard">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              {/* single dashboard-card */}
              <div className="single-dashboard-card">
                <div className="icon">
                  <i className="fa-light fa-book-open-cover" />
                </div>
                <h5 className="title">
                  <span className="counter">30</span>
                </h5>
                <p>Enrolled Courses</p>
              </div>
              {/* single dashboard-card end */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              {/* single dashboard-card */}
              <div className="single-dashboard-card">
                <div className="icon">
                  <i className="fa-regular fa-graduation-cap" />
                </div>
                <h5 className="title">
                  <span className="counter">10</span>
                </h5>
                <p>Active Courses</p>
              </div>
              {/* single dashboard-card end */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              {/* single dashboard-card */}
              <div className="single-dashboard-card">
                <div className="icon">
                  <i className="fa-light fa-trophy" />
                </div>
                <h5 className="title">
                  <span className="counter">36</span>
                </h5>
                <p>Completed Courses</p>
              </div>
              {/* single dashboard-card end */}
            </div>
          </div>
          <div className="row mt--40">
            <div className="col-lg-12">
              {/* in progress course area */}
              <div className="in-progress-course-wrapper  title-between-dashboard mb--10">
                <h5 className="title">My Courses</h5>
                <a href="#" className="more">
                  View All
                </a>
              </div>
              {/* in progress course area end */}
              {/* my course enroll wrapper */}
              <div className="my-course-enroll-wrapper-board">
                {/* single course inroll */}
                <div className="single-course-inroll-board head">
                  <div className="name">
                    <p>My Course</p>
                  </div>
                  <div className="enroll">
                    <p>Enrolled</p>
                  </div>
                  <div className="rating">
                    <p>Rating</p>
                  </div>
                </div>
                {/* single course inroll end */}
                {/* single course inroll */}
                <div className="single-course-inroll-board">
                  <div className="name">
                    <p>New Course</p>
                  </div>
                  <div className="enroll">
                    <p>2</p>
                  </div>
                  <div className="rating">
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                  </div>
                </div>
                {/* single course inroll end */}
                {/* single course inroll */}
                <div className="single-course-inroll-board">
                  <div className="name">
                    <p>My Course</p>
                  </div>
                  <div className="enroll">
                    <p>0</p>
                  </div>
                  <div className="rating">
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                  </div>
                </div>
                {/* single course inroll end */}
                {/* single course inroll */}
                <div className="single-course-inroll-board">
                  <div className="name">
                    <p>Test New Course</p>
                  </div>
                  <div className="enroll">
                    <p>2</p>
                  </div>
                  <div className="rating">
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                  </div>
                </div>
                {/* single course inroll end */}
                {/* single course inroll */}
                <div className="single-course-inroll-board">
                  <div className="name">
                    <p>New Course</p>
                  </div>
                  <div className="enroll">
                    <p>2</p>
                  </div>
                  <div className="rating">
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                  </div>
                </div>
                {/* single course inroll end */}
              </div>
              {/* my course enroll wrapper end */}
            </div>
          </div>
        </div>
      </div>
    )
}