"use client"
import React, { useState } from "react";
import Link from 'next/link';


import { useRouter } from 'next/navigation';


const Headerdashboardstudent1=()=>{
    return(
        <div className="col-lg-12">
          <div className="dashboard-banner-area-start bg_image  student-dashboard">
            <div className="rating-area-banner-dashboard">
             
            </div>
            <div className="author-profile-image-and-name">
              <div className="profile-pic">
                <img src="assets/images/dashboard/04.png" alt="dashboard"  />
              </div>
              <div className="name-desig">
                <h1 className="title">Jon Adam</h1>
                <div className="course-vedio">
                  <div className="single">
                    <i className="fa-thin fa-book" />
                    <span>5 Course Enrolled</span>
                  </div>
                  <div className="single">
                    <i className="fa-thin fa-file-certificate" />
                    <span>4 Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
const Headerdashboardstudent2=({page})=>{
    const [pagess,setPagess] = useState(page)
   
    const click=(pages)=>{
        setPagess(pages)
        
    }
    
    return(
        <div className="col-lg-3">
        <div className="left-sindebar-dashboard overflow-y-scroll">
          <div className="dashboard-left-single-wrapper">
            {/* single item */}
            <Link href="/page/dashboard-student" className={`single-item ${pagess === 'home' ? 'active' : ''}`} onClick={()=>click("home")}>
                <i className="fa-light fa-house" />
                <p>Bảng điều khiển</p>
            </Link>
            {/* single item end */}
            {/* single item */}
            <Link href={"/page/dashboard-student/myprofile"} className={`single-item ${pagess === 'hoso' ? 'active' : ''}`} onClick={()=>click("hoso")}>
              <i className="fa-regular fa-user" />
              <p>Hồ sơ</p>
            </Link>
            {/* single item end */}
            {/* single item */}
            <Link href={"/page/dashboard-student/khoahocdanghoc"} className={`single-item ${pagess === 'khoahocdanghoc' ? 'active' : ''}`} onClick={()=>click("khoahocdanghoc")}>
              <i className="fa-light fa-graduation-cap" />
              <p>Các khóa học đang học</p>
            </Link>
            {/* single item end */}
            {/* single item */}
          
            {/* single item end */}
            {/* single item */}

            {/* single item end */}
            {/* single item */}
            <Link href={"/page/dashboard-student/lichsudonhang"} className={`single-item ${pagess === 'lichsumuahang' ? 'active' : ''}`} onClick={()=>click("lichsumuahang")}>
              <i className="fa-sharp fa-light fa-bag-shopping" />
              <p>Lịch sử đơn hàng</p>
            </Link>
            {/* single item end */}
            {/* single item */}

            {/* single item end */}
            {/* single item */}

            {/* single item end */}
          </div>
          <div className="dashboard-left-single-wrapper bbnone mt--40">
            <h4 className="title mb--5">User</h4>
            {/* single item */}
            <a href="student-settings.html" className="single-item ">
              <i className="fa-sharp fa-regular fa-gear" />
              <p>Settings</p>
            </a>
            {/* single item end */}
            {/* single item */}
            <a href="index.html" className="single-item">
              <i className="fa-light fa-right-from-bracket" />
              <p>Logout</p>
            </a>
            {/* single item end */}
          </div>
        </div>
      </div>
    )
}

export {Headerdashboardstudent1,Headerdashboardstudent2}