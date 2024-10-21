"use client"
import React, { useState } from 'react';
import './quanlykhoahoc.css'

export default function Quanlykhoahoc(){
    const [lessons, setLessons] = useState([]);
    const [formaddkhoahoc,setFormaddkhoahoc] = useState(false);

    const handleAddLesson = () => {
        setLessons([...lessons, { name: '', description: '', videoLink: '' }]);
        console.log(lessons);
        
    };
    const deletelesson=(index)=>{
        setLessons(lessons.filter((_,i)=>i !==index));        
    }
    const openformaddlesson=()=>{
        setFormaddkhoahoc(true);
    }
    const closeformaddlesson=()=>{
        setFormaddkhoahoc(false);
    }
    return (
        <div className="col-lg-9 h-lvh overflow-y-scroll">
        <div className="right-sidebar-dashboard">

          <div className="row ">
            <div className="col-lg-12">
                {!formaddkhoahoc &&(
                    <div className="hover:cursor-pointer">
                    <div className="addkhoahoc" onClick={() =>openformaddlesson()}>
                    <i class="bi bi-plus-square"></i>
                    thêm khóa học
                    </div>
                </div>
                )}
                {formaddkhoahoc &&(
                    <div className="hover:cursor-pointer">
                        <div className="addkhoahoc" onClick={() =>closeformaddlesson()}>
                        hủy
                        </div>
                     </div>
                
                )}

                {formaddkhoahoc &&(
                                    <div className="div-add-khoahoc">
                                    <div className="">
                                        <div className="p-4 border">
                                            <p>thêm khóa học</p>
                                        </div>
                                        <form>
                                        <div className="p-4 border">
                                            <p>tên khóa học</p>
                                            <input type="text" placeholder="nhập tên khóa học" className="w-full border p-2"/>
                                        </div>
                                        <div className="p-4 border">
                                            <p>mô tả khóa học</p>
                                            <textarea type="text" placeholder="nhập mô tả" className="w-full h-52 border p-2"/>
                                        </div>
                                        <div className="p-4 border">
                                            <p>hình khóa học</p>
                                            <input type="file" />
                                        </div>
                                        <div className="p-4 border">
                                                <p>Thêm bài học</p>
                
                                                {lessons.map((lesson, index) => (
                                                    <div key={index} className="ml-4 mt-4">
                                                        <div className="border p-4">
                                                            <div>
                                                                <div className='flex justify-between'>
                                                                <p>tên bài học</p>
                                                                <p className='hover:cursor-pointer' onClick={() =>deletelesson(index)}>xóa</p>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    placeholder="tên bài học"
                                                                    className="w-full border p-2"
                                                                    value={lesson.name}
                                                                    onChange={(e) => {
                                                                        const newLessons = [...lessons];
                                                                        newLessons[index].name = e.target.value;
                                                                        setLessons(newLessons);
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <p>mô tả</p>
                                                                <textarea
                                                                    type="text"
                                                                    placeholder="mô tả"
                                                                    className="w-full border p-2 h-32"
                                                                    value={lesson.description}
                                                                    onChange={(e) => {
                                                                        const newLessons = [...lessons];
                                                                        newLessons[index].description = e.target.value;
                                                                        setLessons(newLessons);
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <p>link video</p>
                                                                <input
                                                                    type="text"
                                                                    placeholder="url video bài học"
                                                                    className="w-full border p-2"
                                                                    value={lesson.videoLink}
                                                                    onChange={(e) => {
                                                                        const newLessons = [...lessons];
                                                                        newLessons[index].videoLink = e.target.value;
                                                                        setLessons(newLessons);
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                
                                                <div onClick={handleAddLesson} className="cursor-pointer mt-4 flex justify-end">
                                                    <i className="bi bi-plus-square"></i>
                                                    thêm bài học
                                                </div>
                                        </div>
                
                                        <div className="p-4 border ">
                                            <p>chọn thể loại</p>
                                                <div className='flex justify-between'>
                                                <section>
                                                    <label>thể loại</label>
                                                    <select id="course-select">
                                                        <option value="">chọn thể loại</option>
                                                        <option value="">CNTT</option>
                                                        <option value="ongoing">Marketing</option>
                                                        <option value="paused">Kinh doanh</option>
                                                    </select>
                                                </section>
                
                                                <section>
                                                    <label> chủ đề</label>
                                                    <select id="course-select">
                                                        <option value="">chọn chủ đề</option>
                                                        <option value="">Java</option>
                                                        <option value="ongoing">HTML & CSS</option>
                                                        <option value="paused">Python</option>
                                                    </select>
                                                </section>
                                                </div>
                                        </div>
                                        <div className="p-4 border">
                                            <p>giá</p>
                                           <div className='flex gap-4'>
                                           <input type="text" placeholder="nhập giá" className="w-full border p-2"/>
                                           <input type="text" placeholder="nhập giảm giá (nếu có)" className="w-full border p-2"/>
                                           </div>
                
                                        </div>
                                            <div className='flex'>
                                            <button className='p-2'>thêm khóa học</button>
                                            <button className='p-2' onClick={() =>closeformaddlesson()}>hủy</button>
                                            </div>
                                        </form>
                
                                    </div>
                                </div>
                )}
              {/* in progress course area */}



              <div className="flex justify-between  mt-4">
              <section>
                    <select id="course-select">
                        <option value="">Tất cả khóa học</option>
                        <option value="ongoing">Đang phát hành</option>
                        <option value="paused">Tạm dừng</option>
                    </select>
                </section>
                <form >
                <input type="text" placeholder="tìm kiếm khóa học" className="w-96 border mb-4"/>
                </form>
              </div>



              {/* in progress course area end */}
              {/* single progress area start */}



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
                    <i class="bi bi-pencil-square"></i>
                    <i class="bi bi-trash3"></i>
                    </div>
                </div>
              </div>



              {/* single progress area end */}
              {/* single progress area start */}



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
                    <i class="bi bi-pencil-square"></i>
                    <i class="bi bi-trash3"></i>
                    </div>

                </div>
              </div>



              {/* single progress area end */}
              {/* single progress area start */}



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
                    <i class="bi bi-pencil-square"></i>
                    <i class="bi bi-trash3"></i>
                    </div>


                </div>
              </div>



              {/* single progress area end */}
            </div>
          </div>

        </div>
      </div>
    )
}