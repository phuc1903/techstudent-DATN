"use client"
import { useRouter } from "next/navigation";
import React from "react";





const Cart =({onAction}) =>{
    const router = useRouter();
    const openCart =() =>{
        router.push('/page/cart')
    }
    return(
        <div className='poputcart' >
            <div className="trong" onClick={onAction}>

            </div>
        <div className='cart'>
            <div className='flex justify-between mt-4 p-2 border-b border-orange-300'>
              <h6 className='ml-10'>Giỏ hàng của tôi</h6>
              
            <i className="bi bi-x-circle mr-10 text-4xl hover:cursor-pointer" onClick={onAction}></i>
            </div>
            <div className='cart-detail  overflow-y-scroll overflow-x-hidden'  style={{height:"90vh"}}>
                <ul className='list-none'>
                  <li className='py-4 border-b'>
                    <div className='flex cart-detail-item justify-between'>
                        <div className='image-product '>
                            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="" 
                            className='w-40'
                            />
                        </div>
                        <div className='infor-product ml-5'>
                            <h6>tên khóa học</h6>
                            <p className='p-1 bg-orange-200 text-xl hover:text-orange-600 hover:cursor-pointer rounded-md'>chủ đề khóa học</p>
                            <p>1.000.000 đ</p>


                        </div>
                        <div className='mr-3'>
                            <div className='flex gap-4 relative'>
                                <p className='left-2'>-</p>
                                <input type="text" value="1" />
                                <p className='left-24'>+</p>
                            </div>
                            <div className='flex gap-4 mt-3 justify-around'>
                            <i className="bi bi-pencil-square hover:cursor-pointer"></i>
                            <i className="bi bi-trash3 hover:cursor-pointer"></i>
                            
                            </div>
                        </div>
                    </div>
                  </li>
                  <li className='py-4 border-b'>
                    <div className='flex cart-detail-item justify-between'>
                        <div className='image-product '>
                            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="" 
                            className='w-40'
                            />
                        </div>
                        <div className='infor-product ml-5'>
                            <h6>tên khóa học</h6>
                            <p className='p-1 bg-orange-200 text-xl hover:text-orange-600 hover:cursor-pointer rounded-md'>chủ đề khóa học</p>
                            <p>1.000.000 đ</p>


                        </div>
                        <div className='mr-3'>
                            <div className='flex gap-4 relative'>
                                <p className='left-2'>-</p>
                                <input type="text" value="1" />
                                <p className='left-24'>+</p>
                            </div>
                            <div className='flex gap-4 mt-3 justify-around'>
                            <i className="bi bi-pencil-square hover:cursor-pointer"></i>
                            <i className="bi bi-trash3 hover:cursor-pointer"></i>
                            
                            </div>
                        </div>
                    </div>
                  </li>
                  <li className='py-4 border-b'>
                    <div className='flex cart-detail-item justify-between'>
                        <div className='image-product '>
                            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="" 
                            className='w-40'
                            />
                        </div>
                        <div className='infor-product ml-5'>
                            <h6>tên khóa học</h6>
                            <p className='p-1 bg-orange-200 text-xl hover:text-orange-600 hover:cursor-pointer rounded-md'>chủ đề khóa học</p>
                            <p>1.000.000 đ</p>


                        </div>
                        <div className='mr-3'>
                            <div className='flex gap-4 relative'>
                                <p className='left-2'>-</p>
                                <input type="text" value="1" />
                                <p className='left-24'>+</p>
                            </div>
                            <div className='flex gap-4 mt-3 justify-around'>
                            <i className="bi bi-pencil-square hover:cursor-pointer"></i>
                            <i className="bi bi-trash3 hover:cursor-pointer"></i>
                            
                            </div>
                        </div>
                    </div>
                  </li>
                  <li className='py-4 border-b'>
                    <div className='flex cart-detail-item justify-between'>
                        <div className='image-product '>
                            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="" 
                            className='w-40'
                            />
                        </div>
                        <div className='infor-product ml-5'>
                            <h6>tên khóa học</h6>
                            <p className='p-1 bg-orange-200 text-xl hover:text-orange-600 hover:cursor-pointer rounded-md'>chủ đề khóa học</p>
                            <p>1.000.000 đ</p>


                        </div>
                        <div className='mr-3'>
                            <div className='flex gap-4 relative'>
                                <p className='left-2'>-</p>
                                <input type="text" value="1" />
                                <p className='left-24'>+</p>
                            </div>
                            <div className='flex gap-4 mt-3 justify-around'>
                            <i className="bi bi-pencil-square hover:cursor-pointer"></i>
                            <i className="bi bi-trash3 hover:cursor-pointer"></i>
                            
                            </div>
                        </div>
                    </div>
                  </li>
                  <li className='py-4 border-b'>
                    <div className='flex cart-detail-item justify-between'>
                        <div className='image-product '>
                            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="" 
                            className='w-40'
                            />
                        </div>
                        <div className='infor-product ml-5'>
                            <h6>tên khóa học</h6>
                            <p className='p-1 bg-orange-200 text-xl hover:text-orange-600 hover:cursor-pointer rounded-md'>chủ đề khóa học</p>
                            <p>1.000.000 đ</p>


                        </div>
                        <div className='mr-3'>
                            <div className='flex gap-4 relative'>
                                <p className='left-2'>-</p>
                                <input type="text" value="1" />
                                <p className='left-24'>+</p>
                            </div>
                            <div className='flex gap-4 mt-3 justify-around'>
                            <i className="bi bi-pencil-square hover:cursor-pointer"></i>
                            <i className="bi bi-trash3 hover:cursor-pointer"></i>
                            
                            </div>
                        </div>
                    </div>
                  </li>
                  <li className='py-4 border-b'>
                    <div className='flex cart-detail-item justify-between'>
                        <div className='image-product '>
                            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="" 
                            className='w-40'
                            />
                        </div>
                        <div className='infor-product ml-5'>
                            <h6>tên khóa học</h6>
                            <p className='p-1 bg-orange-200 text-xl hover:text-orange-600 hover:cursor-pointer rounded-md'>chủ đề khóa học</p>
                            <p>1.000.000 đ</p>


                        </div>
                        <div className='mr-3'>
                            <div className='flex gap-4 relative'>
                                <p className='left-2'>-</p>
                                <input type="text" value="1" />
                                <p className='left-24'>+</p>
                            </div>
                            <div className='flex gap-4 mt-3 justify-around'>
                            <i className="bi bi-pencil-square hover:cursor-pointer"></i>
                            <i className="bi bi-trash3 hover:cursor-pointer"></i>
                            
                            </div>
                        </div>
                    </div>
                  </li>
                  <li className='py-4 border-b'>
                    <div className='flex cart-detail-item justify-between'>
                        <div className='image-product '>
                            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="" 
                            className='w-40'
                            />
                        </div>
                        <div className='infor-product ml-5'>
                            <h6>tên khóa học</h6>
                            <p className='p-1 bg-orange-200 text-xl hover:text-orange-600 hover:cursor-pointer rounded-md'>chủ đề khóa học</p>
                            <p>1.000.000 đ</p>


                        </div>
                        <div className='mr-3'>
                            <div className='flex gap-4 relative'>
                                <p className='left-2'>-</p>
                                <input type="text" value="1" />
                                <p className='left-24'>+</p>
                            </div>
                            <div className='flex gap-4 mt-3 justify-around'>
                            <i className="bi bi-pencil-square hover:cursor-pointer"></i>
                            <i className="bi bi-trash3 hover:cursor-pointer"></i>
                            
                            </div>
                        </div>
                    </div>
                  </li>
                  <li className='py-4 border-b'>
                    <div className='flex cart-detail-item justify-between'>
                        <div className='image-product '>
                            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="" 
                            className='w-40'
                            />
                        </div>
                        <div className='infor-product ml-5'>
                            <h6>tên khóa học</h6>
                            <p className='p-1 bg-orange-200 text-xl hover:text-orange-600 hover:cursor-pointer rounded-md'>chủ đề khóa học</p>
                            <p>1.000.000 đ</p>


                        </div>
                        <div className='mr-3'>
                            <div className='flex gap-4 relative'>
                                <p className='left-2'>-</p>
                                <input type="text" value="1" />
                                <p className='left-24'>+</p>
                            </div>
                            <div className='flex gap-4 mt-3 justify-around'>
                            <i className="bi bi-pencil-square hover:cursor-pointer"></i>
                            <i className="bi bi-trash3 hover:cursor-pointer"></i>
                            
                            </div>
                        </div>
                    </div>
                  </li>
                  <li className='py-4 border-b'>
                    <div className='flex cart-detail-item justify-between'>
                        <div className='image-product '>
                            <img src="https://res.cloudinary.com/dnjakwi6l/image/upload/v1727111263/test/eidtlp8jtafefmgr3byp.jpg" alt="" 
                            className='w-40'
                            />
                        </div>
                        <div className='infor-product ml-5'>
                            <h6>tên khóa học</h6>
                            <p className='p-1 bg-orange-200 text-xl hover:text-orange-600 hover:cursor-pointer rounded-md'>chủ đề khóa học</p>
                            <p>1.000.000 đ</p>


                        </div>
                        <div className='mr-3'>
                            <div className='flex gap-4 relative'>
                                <p className='left-2'>-</p>
                                <input type="text" value="1" />
                                <p className='left-24'>+</p>
                            </div>
                            <div className='flex gap-4 mt-3 justify-around'>
                            <i className="bi bi-pencil-square hover:cursor-pointer"></i>
                            <i className="bi bi-trash3 hover:cursor-pointer"></i>
                            
                            </div>
                        </div>
                    </div>
                  </li>
                </ul>
                <div className='mx-4'>
                  <div className='flex justify-between'>
                      <h6>tổng cộng</h6>
                      <p>900.000 đ</p>
                  </div>
                  <div className='w-full '>
                    <button className='btn-thanhtoan '>tiến hành thanh toán</button>
                    <button className='btn-cart ' onClick={() =>openCart()}> xem giỏ hàng</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export {Cart}