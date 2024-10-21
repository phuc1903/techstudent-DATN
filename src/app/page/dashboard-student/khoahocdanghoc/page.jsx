"use client"
import { useRouter } from "next/navigation";
import React, { useState , useEffect } from "react";
import { KhoaHocDangHoc } from "../../../../service/dashbordStuden/Dashboard-service";
import { Dashboard } from "../../../../service/dashbordStuden/Dashboard-service";
import { KhoaHocDaHoc } from "../../../../service/dashbordStuden/Dashboard-service";



export default function Khoahoccuatoi(){
    const [page,setPage] = useState(1);
    const [khoahocdanghoc1,setKhoahocdanghoc] = useState([]);
    const [data, setData] = useState([]);
    const [khoahocdahoc, setKhoahocdahoc] = useState([]);

  useEffect(() => {
    KhoaHocDangHoc()
      .then((res) => {
        setKhoahocdanghoc(res.data);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
    Dashboard()
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });

    KhoaHocDaHoc()
      .then((res) => {
        setKhoahocdahoc(res.data);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, []);

  

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
        <div className="overflow-y-scroll col-lg-9 h-lvh">
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
  const [khoahocdanghoc1, setKhoahocdanghoc] = useState([]);

  useEffect(() => {
    KhoaHocDangHoc()
      .then((res) => {
        setKhoahocdanghoc(res);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, []);
  console.log(khoahocdanghoc1);
  
  
  const tieptuchoc =()=>{
      router.push("/page/lesson")
  }
  return(
    <div className="row g-5">      {khoahocdanghoc1.map ((item,index) =>(
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
        {/* single course style two */}
  
      <div className="single-course-style-three enroll-course">
        <a href="single-course.html" className="thumbnail">
            <img src={item.hinh} alt="course" />
          <div className="tag-thumb">
              <span>{item.chude}</span>
          </div>
        </a>
        <div className="body-area">
          <div className="course-top">
            <div className="tags">Best Seller</div>
              <div className="line-through price">${item.gia}</div>
              <div className="price">${item.giamgia}</div>
          </div>
          <a href="single-course.html">
            <h5 className="title">
                  {item.ten}
            </h5>
          </a>
          <div className="teacher-stars">
            <div className="teacher">
                <span>{item.giangvien}</span>
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
                <span> {item.baihoc1.length} Lessons</span>
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
                  <span>{item.TongTongHoanthanhphantram}%</span>
              </div>
            </div>
            <div className="progress">
                <div
                  className="progress-bar wow fadeInLeft bg--primary"
                  role="progressbar"
                  style={{ width: `${item.TongTongHoanthanhphantram}%` }}
                  aria-valuenow={item.TongTongHoanthanhphantram}
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
    ))}
  </div>
  )
}
const Khoahocdathanhtoan=()=>{
  const router = useRouter();
  const [data, setData] = useState([]);


  useEffect(() => {
  
    Dashboard()
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });

  }, []);
  console.log(data);
  
  
  const tieptuchoc =()=>{
      router.push("/page/lesson")
  }
  return(
    <div className="row g-5">
      {data.map((item, itemIndex) => (
        item.khoahocs.map((khoahoc, khoahocIndex) => (
          <div key={`${itemIndex}-${khoahocIndex}`} className="col-lg-4 col-md-6 col-sm-12 col-12">
            {/* single course style two */}
            <div className="single-course-style-three enroll-course">
              <a href="single-course.html" className="thumbnail">
                <img src={khoahoc.hinh} alt="course" />
                <div className="tag-thumb">
                  <span>{khoahoc.chuDe}</span>
                </div>
              </a>
              <div className="body-area">
                <div className="course-top">
                  <div className="tags">Best Seller</div>
                  <div className="price">$49.50</div>
                </div>
                <a href="single-course.html">
                  <h5 className="title">
                    {khoahoc.ten}
                  </h5>
                </a>
                <div className="teacher-stars">
                  <div className="teacher">
                    <span>{khoahoc.tenGiangVien}</span>
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
                <button className="rts-btn btn-border" onClick={() => tieptuchoc()}>
                  Bắt đầu học
                </button>
              </div>
            </div>
            {/* single course style two end */}
          </div>
        ))
      ))}
  </div>
  )
}
const Khoahocdahoanthanh = () => {
  const [khoahocdahoc, setKhoahocdahoc] = useState([]);

  useEffect(() => {
    KhoaHocDaHoc()
      .then((res) => {
        setKhoahocdahoc(res.data);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, []);

  console.log(khoahocdahoc);

  return (
    <div className="row g-5">
      {khoahocdahoc.map((item, itemIndex) => (
        item.khoahoc && (
          <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="single-course-style-three enroll-course">
              <a href="single-course.html" className="thumbnail">
                <img src={item.khoahoc.hinh} alt="course" />
                <div className="tag-thumb">
                  <span>{item.khoahoc.chude}</span>
                </div>
              </a>
              <div className="body-area">
                <div className="course-top">
                  <div className="tags">Best Seller</div>
                  <div className="line-through price">${item.khoahoc.gia}</div>
                  <div className="price">${item.khoahoc.giamgia}</div>

                </div>
                <a href="single-course.html">
                  <h5 className="title">
                    {item.khoahoc.ten}
                  </h5>
                </a>
                <div className="teacher-stars">
                  <div className="teacher">
                    <span>{item.khoahoc.tenGiangVien}</span>
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
                    <span> {item.baihoc.length} Lessons</span>
                  </div>
                  <div className="students">
                    <i className="fa-light fa-users" />
                    <span> {item.soluongmua.length} Lessons</span>
                  </div>
                </div>
                <button className="rts-btn btn-border" onClick={() => tieptuchoc()}>
                  Bắt đầu học
                </button>
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};