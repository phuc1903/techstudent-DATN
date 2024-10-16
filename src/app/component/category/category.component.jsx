"use client"

import React, { useEffect, useState }  from 'react';
import { Categorydata } from '../../../../src/service/category/category.service';

const NextCategory =() =>{
  

    const image =Categorydata()
    // const [currentIndex, setCurrentIndex] = useState(0);
    const [page,setPage] = useState(1);
    const [buttonnext,setButtonnext] = useState(true)
    const [buttonprev,setButtonprev] = useState(false)

    const [prev,setPrev] = useState(0);
    const [next,setNext] = useState(6);
    const img = image.slice(prev,next);
    const log = () =>{
      console.log(prev);
      
    }

    const nexts = () => {
        // Cập nhật chỉ số prev và next
        if (next < image.length) {
            setPrev(prev + 1);
            setNext(next + 1);
            setPage(page +1)
            setButtonprev(true);
        }


        // Kiểm tra nếu đã đến hình cuối
        if (next + 1 >= image.length) {
            setButtonnext(false);
        }
        console.log(prev);
        
    };
    const prevs =( ) =>{
        if (prev >= 1) {
            setPrev(prev - 1);
            setNext(next - 1);
            setPage(page -1)

            setButtonnext(true)
        }

        // Kiểm tra nếu đã đến hình cuối
        if (prev <=1) {
            setButtonprev(false);
        }
        log();
        
    }
    const handleResize = () => {
      // console.log(prev);
      
      if (window.innerWidth >= 1280) {
        // console.log(prev);
          setPage(1)
          setNext(6);
          setPrev(0)

          // console.log(columns);
          
          // setGap(4);
      } else if(window.innerWidth >= 900 && window.innerWidth < 1280){
        // console.log(prev);
        // console.log(next);
          setPage(1)
          setPrev(0)
          setNext(4)
      }else if(window.innerWidth >= 600 && window.innerWidth < 900){
        setPage(1)
          setPrev(0)
          setNext(3)
      }else if(window.innerWidth >= 380 && window.innerWidth < 600){
        setPage(1)
        setPrev(0)
        setNext(2)
      }else if(window.innerWidth<380){
        setPage(1)
        setPrev(0)
        setNext(1)

      }
      
  };

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      handleResize(); // Kiểm tra kích thước khi component được mount

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

     

    return (
      <div className="category-area-style-one shape-move rts-section-gap bg_image h-auto border">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-center-style">
              <div className="pre-title">
              <i className="bi bi-lightbulb mr-2" style={{color:'#32ADE6'}}></i>
              <span>Danh mục hàng đầu</span>
              </div>
              <h2 className="title">Khám phá hơn 2000 khóa học trực tuyến miễn phí</h2>
              <p className="post-title">
              Bạn sẽ tìm thấy thứ gì đó khơi dậy sự tò mò của bạn và nâng cao
              </p>
            </div>
          </div>
        </div>
  
  
        <div>
              <div className="w-full h-80 text-center mt-10">
              <div className={`small:grid-cols-1 small:gap-0 mobile:grid-cols-2 mobile:gap-2  md-600:grid-cols-3 md-600:gap-4 lg-900:grid-cols-4 lg-900:gap-6 xl:grid-cols-6 xl:gap-8 grid grid-cols-4 gap-8 ` } >

          {/* <div className={` grid grid-cols-${columns} gap-${gap} ` } > */}
              {img.map((item,index) =>(
                  <div className="border bg-white flex flex-col items-center" key={index}>
                  <div className="m-8 text-center ">
                  <img src={item.image} alt="" 
                  className="block mx-auto"
                  />
                   <h6 className="mt-8">{item.name}</h6>
                   <p>130+ khóa học</p>
                  </div>
                 </div>
              ))}
            
  
          </div>
          <div className='flex justify-center mt-20 gap-8'>
              {buttonprev && (
              <button style={{backgroundColor:'#32ADE6'}} className='w-10 h-10 rounded-full' onClick={prevs}><i className="bi bi-arrow-left"></i></button>
  
              )}
              {!buttonprev && (
                  <button style={{backgroundColor:'white'}} className='w-10 h-10 rounded-full border' ><i className="bi bi-arrow-left"></i></button>
  
              )}
              {page>=2 && (
              <div className='flex'>
                  <div style={{backgroundColor:'#FFFAEE'}} className='w-10 h-10 rounded-full border'>{page-1}</div>
                  <div style={{backgroundColor:'#32ADE6'}} className='w-10 h-10 rounded-full border'>{page}</div>
                  <div style={{backgroundColor:'#FFFAEE'}} className='w-10 h-10 rounded-full border'>{page +1}</div>
              </div>
  
              )}
               {page===1 && (
              <div className='flex'>
                  <div style={{backgroundColor:'#32ADE6'}} className='w-10 h-10 rounded-full border'>{page}</div>
                  <div style={{backgroundColor:'#FFFAEE'}} className='w-10 h-10 rounded-full border'>{page+1}</div>
                  <div style={{backgroundColor:'#FFFAEE'}} className='w-10 h-10 rounded-full border'>{page +2}</div>
              </div>
  
              )}
              
  
              {buttonnext && (
              <button style={{backgroundColor:'#32ADE6'}} className='w-10 h-10 rounded-full' onClick={nexts}><i className="bi bi-arrow-right"></i></button>
  
              )}
              {!buttonnext && (
              <button style={{backgroundColor:'white'}} className='w-10 h-10 rounded-full border' ><i className="bi bi-arrow-right"></i></button>
  
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


  const Category =() =>{
    const cate =Categorydata()

    const category = cate;
        return (
            <div className="row">
            <div className="col-lg-12">
              <div className="title-between-area">
                <div className="title-area-left-style">
                  <div className="pre-title">
                  <i className="bi bi-lightbulb mr-1" style={{color:'#32ADE6'}}></i>
                    <span>Courses</span>
                  </div>
                  <h2 className="title">Khám phá các khóa học nổi bật</h2>
                  <p className="post-title">
                  Bạn sẽ tìm thấy thứ gì đó khơi dậy sự tò mò của bạn và nâng cao
                  </p>
                </div>
                <div className="button-group filters-button-group flex max-w ">
                <button className="button is-checked" data-filter="*">
                    Tất cả thể loại
                  </button>
                    {category.map((item,index) =>(
                        <button className="button" data-filter=".creative" key={index}>{item.name}</button>

                    ))}
                </div>
              </div>
            </div>

          </div>
        )
  }
//   const data:React.FC = () => {
//     const datas = Categorydata()
//     return([datas]
        
//     )
// };
  const Categoryheader =( ) =>{
    const cate =Categorydata()

    const midIndex = Math.ceil(cate.length / 2);
    const cate1 = cate.slice(0, midIndex); // Mảng đầu tiên
    const cate2 = cate.slice(midIndex);  
    return (
        <ul className="category-sub-menu">
        <li>
          <ul>
            {cate1.map((item,index) =>(
                <li key={index}>
                <a href="#" className="menu-item cv w-96">
                  <img src={item.image} alt="" />
                  <div className="text">
                    <h4>{item.name}</h4>
                    <p>130+ Khóa học</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {cate2.map((item,index) =>(
                 <li key={index}>
                 <a href="#" className="menu-item cv w-96">
                   <img src={item.image} alt="" />
                   <div className="text">
                     <h4>{item.name}</h4>
                     <p>130+ Khóa học</p>
                   </div>
                 </a>
               </li>
            ))}
          </ul>
        </li>
      </ul>
    )
  }

  const Subcategory=()=>{
    return(
        <div className='flex w-auto mt-6 subcategory'>
            <button className='buttonsubcategory' >java</button>
            <button className='isbuttonsubcategory' >java</button>
            <button className='isbuttonsubcategory' >java</button>
            <button className='isbuttonsubcategory' >java</button>
            <button className='isbuttonsubcategory' >java</button>

        </div>
    )
  }

  export {NextCategory,Category,Categoryheader,Subcategory}
  
    