"use client"

import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
export default function Homedashboardlecturer(){
    return(
       
        <div className="col-lg-9 h-lvh overflow-y-scroll">
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
                <p>Khóa học đã đăng ký</p>
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
                <p>Khóa học đang học</p>
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
                <p>Khóa học đã hoàn thành</p>
              </div>
              {/* single dashboard-card end */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              {/* single dashboard-card */}
              <div className="single-dashboard-card">
                <div className="icon">
                  <i className="fa-light fa-book" />
                </div>
                <h5 className="title">
                  <span className="counter">28</span>
                </h5>
                <p>Tổng khóa học của tôi</p>
              </div>
              {/* single dashboard-card end */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              {/* single dashboard-card */}
              <div className="single-dashboard-card">
                <div className="icon">
                  <i className="fa-light fa-user" />
                </div>
                <h5 className="title">
                  <span className="counter">41</span>
                </h5>
                <p>Tổng số học sinh</p>
              </div>
              {/* single dashboard-card end */}
            </div>
           
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              {/* single dashboard-card */}
              <div className="single-dashboard-card">
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-dollar-sign" />
                </div>
                <h5 className="title">
                  <span className="counter">130</span>
                </h5>
                <p>Tổng khóa học bán đc</p>
              </div>
              {/* single dashboard-card end */}
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              {/* single dashboard-card */}
              <div className="single-dashboard-card">
                <div className="icon">
                  <i className="fa-light fa-user" />
                </div>
                <h5 className="title">
                  <span className="counter">41</span>
                </h5>
                <p>Tổng khóa học đang phát hành</p>
              </div>
              {/* single dashboard-card end */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              {/* single dashboard-card */}
              <div className="single-dashboard-card">
                <div className="icon">
                  <i className="fa-light fa-book" />
                </div>
                <h5 className="title">
                  <span className="counter">28</span>
                </h5>
                <p>Tổng khóa học tạm dừng</p>
              </div>
              {/* single dashboard-card end */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              {/* single dashboard-card */}
              <div className="single-dashboard-card">
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-dollar-sign" />
                </div>
                <h5 className="title">
                  $<span className="counter">2900</span>
                </h5>
                <p>Tổng thu nhập</p>
              </div>
              {/* single dashboard-card end */}
            </div>

            <Chart/>
          </div>
          <div className="row mt--40">
            <div className="col-lg-12">
              {/* in progress course area */}
              <div className="in-progress-course-wrapper">
                <h5 className="title">In Progress Courses</h5>
              </div>
              {/* in progress course area end */}
              {/* single progress area start */}
              <div className="single-progress-course">
                <a href="single-course.html" className="thumbnail">
                  <img src="assets/images/dashboard/02.jpg" alt="img" />
                </a>
                <div className="information-progress-course">
                  <div className="rating-area">
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <span>(0)</span>
                  </div>
                  <a href="single-course.html">
                    <h5 className="title">
                      User Experience The Ultimate Guide to Usability and UX
                    </h5>
                  </a>
                  <span className="comp">
                    Completed Lessons: 0 of 1 lesson
                  </span>
                  <div className="progress-wrapper-lesson-compleate">
                    <div className="progress">
                      <div
                        className="progress-bar wow fadeInLeft bg--primary"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <div className="end">
                      <span>0% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* single progress area end */}
              {/* single progress area start */}
              <div className="single-progress-course">
                <a href="single-course.html" className="thumbnail">
                  <img src="assets/images/dashboard/03.jpg" alt="img" />
                </a>
                <div className="information-progress-course">
                  <div className="rating-area">
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <span>(0)</span>
                  </div>
                  <a href="single-course.html">
                    <h5 className="title">
                      Front-End Course With Bootstrap 5
                    </h5>
                  </a>
                  <span className="comp">
                    Completed Lessons: 5 of 7 lesson
                  </span>
                  <div className="progress-wrapper-lesson-compleate">
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
                    <div className="end">
                      <span>80% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* single progress area end */}
              {/* single progress area start */}
              <div className="single-progress-course">
                <a href="single-course.html" className="thumbnail">
                  <img src="assets/images/dashboard/04.jpg" alt="img" />
                </a>
                <div className="information-progress-course">
                  <div className="rating-area">
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <i className="fa-light fa-star" />
                    <span>(0)</span>
                  </div>
                  <a href="single-course.html">
                    <h5 className="title">
                      PHP Basic to Advance Full Course In English
                    </h5>
                  </a>
                  <span className="comp">
                    Completed Lessons: 3 of 6 lesson
                  </span>
                  <div className="progress-wrapper-lesson-compleate">
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
                    <div className="end">
                      <span>50% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* single progress area end */}
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
const Chart=()=>{
    const [fixMargin, setFixMargin] = useState(true);
    const [fixLabel, setFixLabel] = useState(true);
  
    return (
        <Box sx={{ width: '100%' }}>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <FormControlLabel
              checked={fixMargin}
              control={
                <Checkbox onChange={(event) => setFixMargin(event.target.checked)} />
              }
              label="fix chart margin"
              labelPlacement="end"
            />
            <FormControlLabel
              checked={fixLabel}
              control={
                <Checkbox onChange={(event) => setFixLabel(event.target.checked)} />
              }
              label="fix axis label position"
              labelPlacement="end"
            />
          </Stack>
    
          <BarChart
            xAxis={[
              {
                scaleType: 'band',
                dataKey: 'code',
                valueFormatter: (value, context) =>
                  context.location === 'tick'
                    ? value.split('').join('\n')
                    : usAirportPassengers.find((item) => item.code === value).fullName,
                label: 'airports',
                labelStyle: fixLabel
                  ? {
                      // Move the x-axis label with style
                      transform: 'translateY(30px)',
                    }
                  : {},
              },
            ]}
            // Modify the margin
            margin={fixMargin ? { top: 5, right: 5, bottom: 80, left: 100 } : undefined}
            sx={
              fixLabel
                ? {
                    [`.${axisClasses.left} .${axisClasses.label}`]: {
                      // Move the y-axis label with CSS
                      transform: 'translateX(-35px)',
                    },
                  }
                : {}
            }
            // Other props
            height={300}
            dataset={usAirportPassengers}
            series={[
              { dataKey: '2018', label: '2018' },
              { dataKey: '2019', label: '2019' },
              { dataKey: '2020', label: '2020' },
              { dataKey: '2021', label: '2021' },
              { dataKey: '2022', label: '2022' },
            ]}
            slotProps={{ legend: { hidden: true } }}
            yAxis={[
              {
                valueFormatter: (value) => `${(value / 1000).toLocaleString()}k`,
                label: 'passengers',
              },
            ]}
          />
        </Box>
      );
}

const usAirportPassengers = [
    {
      fullName: 'Hartsfield–Jackson Atlanta International Airport',
      code: 'ATL',
      2022: 45396001,
      2021: 36676010,
      2020: 20559866,
      2019: 53505795,
      2018: 51865797,
    },
    {
      fullName: 'Dallas/Fort Worth International Airport',
      code: 'DFW',
      2022: 35345138,
      2021: 30005266,
      2020: 18593421,
      2019: 35778573,
      2018: 32821799,
    },
    {
      fullName: 'Denver International Airport',
      code: 'DEN',
      2022: 33773832,
      2021: 28645527,
      2020: 16243216,
      2019: 33592945,
      2018: 31362941,
    },
    {
      fullName: "O'Hare International Airport",
      code: 'ORD',
      2022: 33120474,
      2021: 26350976,
      2020: 14606034,
      2019: 40871223,
      2018: 39873927,
    },
    {
      fullName: 'Los Angeles International Airport',
      code: 'LAX',
      2022: 32326616,
      2021: 23663410,
      2020: 14055777,
      2019: 42939104,
      2018: 42624050,
    },
    {
      fullName: 'John F. Kennedy International Airport',
      code: 'JFK',
      2022: 26919982,
      2021: 15273342,
      2020: 8269819,
      2019: 31036655,
      2018: 30620769,
    },
    {
      fullName: 'Harry Reid International Airport',
      code: 'LAS',
      2022: 25480500,
      2021: 19160342,
      2020: 10584059,
      2019: 24728361,
      2018: 23795012,
    },
    {
      fullName: 'Orlando International Airport',
      code: 'MCO',
      2022: 24469733,
      2021: 19618838,
      2020: 10467728,
      2019: 24562271,
      2018: 23202480,
    },
    {
      fullName: 'Miami International Airport',
      code: 'MIA',
      2022: 23949892,
      2021: 17500096,
      2020: 8786007,
      2019: 21421031,
      2018: 21021640,
    },
    {
      fullName: 'Charlotte Douglas International Airport',
      code: 'CLT',
      2022: 23100300,
      2021: 20900875,
      2020: 12952869,
      2019: 24199688,
      2018: 22281949,
    },
    {
      fullName: 'Seattle–Tacoma International Airport',
      code: 'SEA',
      2022: 22157862,
      2021: 17430195,
      2020: 9462411,
      2019: 25001762,
      2018: 24024908,
    },
    {
      fullName: 'Phoenix Sky Harbor International Airport',
      code: 'PHX',
      2022: 21852586,
      2021: 18940287,
      2020: 10531436,
      2019: 22433552,
      2018: 21622580,
    },
    {
      fullName: 'Newark Liberty International Airport',
      code: 'EWR',
      2022: 21572147,
      2021: 14514049,
      2020: 7985474,
      2019: 23160763,
      2018: 22797602,
    },
    {
      fullName: 'San Francisco International Airport',
      code: 'SFO',
      2022: 20411420,
      2021: 11725347,
      2020: 7745057,
      2019: 27779230,
      2018: 27790717,
    },
    {
      fullName: 'George Bush Intercontinental Airport',
      code: 'IAH',
      2022: 19814052,
      2021: 16242821,
      2020: 8682558,
      2019: 21905309,
      2018: 21157398,
    },
    {
      fullName: 'Logan International Airport',
      code: 'BOS',
      2022: 17443775,
      2021: 10909817,
      2020: 6035452,
      2019: 20699377,
      2018: 20006521,
    },
    {
      fullName: 'Fort Lauderdale–Hollywood International Airport',
      code: 'FLL',
      2022: 15370165,
      2021: 13598994,
      2020: 8015744,
      2019: 17950989,
      2018: 17612331,
    },
    {
      fullName: 'Minneapolis–Saint Paul International Airport',
      code: 'MSP',
      2022: 15242089,
      2021: 12211409,
      2020: 7069720,
      2019: 19192917,
      2018: 18361942,
    },
    {
      fullName: 'LaGuardia Airport',
      code: 'LGA',
      2022: 14367463,
      2021: 7827307,
      2020: 4147116,
      2019: 15393601,
      2018: 15058501,
    },
    {
      fullName: 'Detroit Metropolitan Airport',
      code: 'DTW',
      2022: 13751197,
      2021: 11517696,
      2020: 6822324,
      2019: 18143040,
      2018: 17436837,
    },
  ];