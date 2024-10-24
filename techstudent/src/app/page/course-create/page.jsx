"use client";

import React, { useState, useEffect, Fragment } from "react";
import Mota from "./Mota/Mota.jsx";
import Page from "./course/Page.jsx";
import BaiHoc from "./BaiHoc/BaiHoc.jsx";
import TrangDich from "./trangdich/trangdich.jsx";
import TrangGiaKhoaHoc from "./giaca/TrangGiaKhoaHoc.jsx";

import Link from "next/link";

const CourseCreatePage = () => {
  const [view, setView] = useState("Mota");
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;
      const url = new URL(currentUrl);
      const idFromUrl = url.searchParams.get("id");
      setId(idFromUrl);
    }
  }, []);

  const handleSubmit = async () => {
    if (!id) {
      alert("ID khóa học không hợp lệ.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Yêu cầu đã được gửi thành công!");
    }, 2000);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/guixemxet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_khoahoc: id }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSuccessMessage(data.message);
      console.log("Response:", data);
    } catch (error) {
      setError("Lỗi khi gửi yêu cầu xem xét: " + error.message);
      console.error("Error submitting for review:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch (view) {
      case "Mota":
        return <Mota />;
      case "BaiHoc":
        return <BaiHoc />;
      case "TrangDich":
        return <TrangDich />;
      case "GiaCa":
        return <TrangGiaKhoaHoc />;
      default:
        return <p>Dashboard Content</p>;
    }
  };

  return (
    <Fragment>
      <Page id={id}>
        <div className="flex w-full overflow-hidden border border-gray-300 rounded-lg">
          <aside className="w-64 p-4 bg-white border-r">
            <h5 className="text-sm font-semibold text-left text-gray-700">
              1. Lên kế hoạch cho khóa học của bạn
            </h5>
            <button
              onClick={() => setView("Mota")}
              className="block text-gray-600 hover:text-[#32ADE6] mt-2 text-xs text-left"
            >
              Người học dự định
            </button>
            <h5 className="mt-4 text-sm font-semibold text-left text-gray-700">
              2. Tạo nội dung của bạn
            </h5>
            <button
              onClick={() => setView("BaiHoc")}
              className="block text-gray-600 hover:text-[#32ADE6] mt-2 text-xs text-left"
            >
              Chương trình giảng dạy
            </button>
            <h5 className="mt-4 text-sm font-semibold text-left text-gray-700">
              3. Xuất bản khóa học của bạn
            </h5>
            <button
              onClick={() => setView("TrangDich")}
              className="block text-gray-600 hover:text-[#32ADE6] mt-2 text-xs text-left"
            >
              Trang đích của khóa học
            </button>
            <button
              onClick={() => setView("GiaCa")}
              className="block text-gray-600 hover:text-[#32ADE6] mt-2 text-xs text-left"
            >
              Giá cả
            </button>
            <span className="block mt-2 text-xs text-left text-gray-600">Khuyến mãi</span>
            <span className="block mt-2 text-xs text-left text-gray-600">Tin nhắn khóa học</span>
            <button
              className="mt-4 btn bg-[#32ADE6] text-white w-full py-2 text-xs"
              onClick={handleSubmit}
            >
              Submit for Review
            </button>
            {loading && (
              <p className="mt-2 text-xs text-center text-primary">Đang gửi yêu cầu...</p>
            )}
            {error && <p className="mt-2 text-xs text-center text-red-600">{error}</p>}
            {successMessage && (
              <p className="mt-2 text-xs text-center text-green-600">{successMessage}</p>
            )}
          </aside>

          <div className="flex flex-grow min-h-screen pt-16 bg-gray-100">
            <main className="flex-grow p-4 bg-gray-50">
              {renderContent()}
            </main>
          </div>
        </div>
      </Page>
    </Fragment>
  );
};

export default CourseCreatePage;