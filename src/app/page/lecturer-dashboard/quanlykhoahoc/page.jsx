"use client"
import React, { useState, useEffect } from 'react';
import './quanlykhoahoc.css'
import { GiangvienTaoKhoaHoc } from "../../../../service/Dashboard-lecture/Add-course.jsx";
import { Categorydata } from "../../../../service/category/category.service.jsx";


export default function Quanlykhoahoc() {
  const [formaddkhoahoc, setFormaddkhoahoc] = useState(false);
  const [chude, setChude] = useState([]);
  const [taokhoahoc, setTaokhoahoc] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const taoKhoaHoc = await GiangvienTaoKhoaHoc("tieude", "chude");
        setTaokhoahoc(taoKhoaHoc);




        setIsDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  fetch("http://127.0.0.1:8000/api/theloai")
    .then((response) => response.json())
    .then((data) => {
      setChude(data.data);
    });
  console.log("ss", chude);
  useEffect(() => {
    if (isDataLoaded) {
      // console.log(taokhoahoc);

    }
  }, [isDataLoaded, taokhoahoc, chude]);

  const openformaddlesson = () => {
    setFormaddkhoahoc(true);
  }
  const closeformaddlesson = () => {
    setFormaddkhoahoc(false);
  }

  return (
    <div className="overflow-y-scroll col-lg-9 h-lvh">
      <div className="right-sidebar-dashboard">
        <div className="row ">
          <div className="col-lg-12">
            {!formaddkhoahoc && (
              <div className="hover:cursor-pointer">
                <div className="addkhoahoc" onClick={() => openformaddlesson()}>
                  <i className="bi bi-plus-square"></i>
                  Thêm khóa học
                </div>
              </div>
            )}
            {formaddkhoahoc && (
              <div className="hover:cursor-pointer">
                <div className="addkhoahoc" onClick={() => closeformaddlesson()}>
                  hủy
                </div>
              </div>
            )}

            {formaddkhoahoc && (
            
              <div className="div-add-khoahoc">
                <div className="">
                  <div className="p-4 border">
                    <p>Thêm khóa học</p>
                  </div>
                  <form>
                    <div className="p-4 border">
                      <p>Tên khóa học</p>
                      <input type="text" placeholder="Nhập tên khóa học" className="w-full p-2 border" />
                    </div>

                    <div className="p-4 border" >
                      <p>Chọn thể loại</p>
                      <div className='flex justify-between'>

                        <section>
                          <label>thể loại</label>
                          <select id="course-select">
                            {chude && chude.map((chudeItem) =>
                              chudeItem && chudeItem.theloaicons.map((theloaiItem) =>
                          
                                <option key={theloaiItem.id} value={theloaiItem.id}>{theloaiItem.ten}</option>
                          
                              )
                            )}
                          </select>
                      </section>
                      <section>
                        <label>chủ đề</label>
                          <select id="course-select">
                            <option value="">chọn chủ đề</option>
                            {chude && chude.map((chudeItem) =>
                              chudeItem && chudeItem.theloaicons.map((theloaiItem) =>
                                theloaiItem && theloaiItem.chudes.map((item) => (
                                  <option key={item.id} value={item.id}>{item.ten}</option>
                                ))
                              )
                            )}
                          </select>
                      </section>
                    </div>
                </div>
                <div className="flex m-2">
                  <button>Xác Nhận</button>
                </div>
              </form>
                </div>
        </div>
      )}


        <div className="flex justify-between mt-4">
          <section>
            <select id="course-select">
              <option value="">Tất cả khóa học</option>
              <option value="ongoing">Đang phát hành</option>
              <option value="paused">Tạm dừng</option>
            </select>
          </section>
          <form>
            <input type="text" placeholder="tìm kiếm khóa học" className="mb-4 border w-96" />
          </form>
        </div>

        <div className="single-progress-course">
          <a href="single-course.html" className="thumbnail">
            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="img" />
          </a>
          <div className="information-progress-course">
            <a href="single-course.html">
              <h5 className="title">
                User Experience The Ultimate Guide to Usability and UX
              </h5>
            </a>
            <span className="comp">
              Có 10 bài học
            </span>
            <div>
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash3"></i>
            </div>
          </div>
        </div>

        <div className="single-progress-course">
          <a href="single-course.html" className="thumbnail">
            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="img" />
          </a>
          <div className="information-progress-course">
            <a href="single-course.html">
              <h5 className="title">
                Front-End Course With Bootstrap 5
              </h5>
            </a>
            <span className="comp">
              có 8 bài học
            </span>
            <div>
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash3"></i>
            </div>
          </div>
        </div>

        <div className="single-progress-course">
          <a href="single-course.html" className="thumbnail">
            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="img" />
          </a>
          <div className="information-progress-course">
            <a href="single-course.html">
              <h5 className="title">
                PHP Basic to Advance Full Course In English
              </h5>
            </a>
            <span className="comp">
              có 9 bài học
            </span>
            <div>
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div >
    </div >
  )
}