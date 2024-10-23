"use client";

import React, { useEffect, useState } from "react";
import { Categorydata } from "../../../../src/service/category/category.service";

const NextCategory = () => {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [buttonNext, setButtonNext] = useState(true);
  const [buttonPrev, setButtonPrev] = useState(false);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Categorydata();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchData();
  }, []);

  const img = categories.slice(prev, next);

  const nexts = () => {
    if (next < categories.length) {
      setPrev(prev + 6);
      setNext(next + 6);
      setPage(page + 1);
      setButtonPrev(true);
    }

    if (next + 6 >= categories.length) {
      setButtonNext(false);
    }
  };

  const prevs = () => {
    if (prev >= 6) {
      setPrev(prev - 6);
      setNext(next - 6);
      setPage(page - 1);
      setButtonNext(true);
    }

    if (prev - 6 <= 0) {
      setButtonPrev(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setPage(1);
      setNext(6);
      setPrev(0);
    } else if (window.innerWidth >= 900 && window.innerWidth < 1280) {
      setPage(1);
      setPrev(0);
      setNext(4);
    } else if (window.innerWidth >= 600 && window.innerWidth < 900) {
      setPage(1);
      setPrev(0);
      setNext(3);
    } else if (window.innerWidth >= 380 && window.innerWidth < 600) {
      setPage(1);
      setPrev(0);
      setNext(2);
    } else if (window.innerWidth < 380) {
      setPage(1);
      setPrev(0);
      setNext(1);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Kiểm tra kích thước khi component được mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [DanhMuc, setDanhMuc] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/theloai");
        const data = await response.json();
        // console.log(data.data);
        setDanhMuc(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-auto border category-area-style-one shape-move rts-section-gap bg_image">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-center-style">
              <div className="pre-title">
                <i
                  className="mr-2 bi bi-lightbulb"
                  style={{ color: "#32ADE6" }}></i>
                <span>Danh mục hàng đầu</span>
              </div>
              <h2 className="title">
                Khám phá hơn 2000 khóa học trực tuyến miễn phí
              </h2>
              <p className="post-title">
                Bạn sẽ tìm thấy thứ gì đó khơi dậy sự tò mò của bạn và nâng cao
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full mt-10 text-center h-30">
            <div
              className={`small:grid-cols-1 small:gap-0 mobile:grid-cols-2 mobile:gap-2  md-600:grid-cols-3 md-600:gap-4 lg-900:grid-cols-4 lg-900:gap-6 xl:grid-cols-6 xl:gap-8 grid grid-cols-4 gap-8 `}>
              {img.map((item, index) => (
                <div
                  className="flex flex-col items-center bg-white border"
                  key={index}>
                  <div className="m-8 text-center">
                    <img src={item.image} alt="" className="block mx-auto" />
                    <h6 className="mt-8">{item.name}</h6>
                    <p>130+ khóa học</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-8 mt-20">
              {buttonPrev ? (
                <button
                  style={{ backgroundColor: "#32ADE6" }}
                  className="w-10 h-10 rounded-full"
                  onClick={prevs}>
                  <i className="bi bi-arrow-left"></i>
                </button>
              ) : (
                <button
                  style={{ backgroundColor: "white" }}
                  className="w-10 h-10 border rounded-full">
                  <i className="bi bi-arrow-left"></i>
                </button>
              )}
              {page >= 2 ? (
                <div className="flex">
                  <div
                    style={{ backgroundColor: "#FFFAEE" }}
                    className="w-10 h-10 border rounded-full">
                    {page - 1}
                  </div>
                  <div
                    style={{ backgroundColor: "#32ADE6" }}
                    className="w-10 h-10 border rounded-full">
                    {page}
                  </div>
                  <div
                    style={{ backgroundColor: "#FFFAEE" }}
                    className="w-10 h-10 border rounded-full">
                    {page + 1}
                  </div>
                </div>
              ) : (
                <div className="flex">
                  <div
                    style={{ backgroundColor: "#32ADE6" }}
                    className="w-10 h-10 border rounded-full">
                    {page}
                  </div>
                  <div
                    style={{ backgroundColor: "#FFFAEE" }}
                    className="w-10 h-10 border rounded-full">
                    {page + 1}
                  </div>
                  <div
                    style={{ backgroundColor: "#FFFAEE" }}
                    className="w-10 h-10 border rounded-full">
                    {page + 2}
                  </div>
                </div>
              )}
              {buttonNext ? (
                <button
                  style={{ backgroundColor: "#32ADE6" }}
                  className="w-10 h-10 rounded-full"
                  onClick={nexts}>
                  <i className="bi bi-arrow-right"></i>
                </button>
              ) : (
                <button
                  style={{ backgroundColor: "white" }}
                  className="w-10 h-10 border rounded-full">
                  <i className="bi bi-arrow-right"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="shape-image">
        <div className="shape one" data-speed="0.04" data-revert="true">
          {/* <img src="assets/images/banner/15.png" alt="" /> */}
        </div>
        <div className="shape two" data-speed="0.04">
          {/* <img src="assets/images/banner/shape/banner-shape02.svg" alt="" /> */}
        </div>
        <div className="shape three" data-speed="0.04">
          {/* <img src="assets/images/banner/shape/banner-shape03.svg" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

const Category = ({ onCategoryChange }) => {
  const cate = Categorydata();
  const [KhoaHoc, setKhoaHoc] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/allkhoahoc")
      .then((response) => response.json())
      .then((data) => {
        setKhoaHoc(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const uniqueCategories = Array.from(
    new Set(KhoaHoc.map((item) => item.theloai))
  );

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="title-between-area">
          <div className="title-area-left-style">
            <div className="pre-title">
              <i
                className="mr-1 bi bi-lightbulb"
                style={{ color: "#32ADE6" }}></i>
              <span>Courses</span>
            </div>
            <h2 className="title">Khám phá các khóa học nổi bật</h2>
            <p className="post-title">
              Bạn sẽ tìm thấy thứ gì đó khơi dậy sự tò mò của bạn và nâng cao
            </p>
          </div>
          <div className="flex button-group filters-button-group max-w ">
            <button className="button is-checked" data-filter="*" onClick={() => onCategoryChange('')}>
              Tất cả thể loại
            </button>
            {uniqueCategories.map((theloai, index) => (
              <button className="button" data-filter=".creative" key={index} onClick={() => onCategoryChange(theloai)}>
                {theloai}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Categoryheader = () => {
  const [DanhMuc, setDanhMuc] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/theloai");
        const data = await response.json();
        console.log(data.data);
        setDanhMuc(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const midIndex = Math.ceil(DanhMuc.length / 2);
  const firstHalf = DanhMuc.slice(0, midIndex);
  const secondHalf = DanhMuc.slice(midIndex);

  return (
    <ul className="category-sub-menu">
      <li>
        <ul className="category-list">
          {firstHalf.map((item, index) => (
            <li key={index}>
              <a href="#" className="menu-item cv w-96">
                <div className="text">
                  <img src={item.hinh} alt="" />
                  <h4>{item.ten}</h4>
                  <p>130+ Khóa học</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {secondHalf.map((item, index) => (
            <li key={index}>
              <a href="#" className="menu-item cv w-96">
                <div className="text">
                  <img src={item.hinh} alt="" />
                  <h4>{item.ten}</h4>
                  <p>130+ Khóa học</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default Categoryheader;



export { NextCategory, Category, Categoryheader };