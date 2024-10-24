import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
const Cart = ({ onAction }) => {
    const router = useRouter();
    const openCart = () => {
        router.push('/page/cart')
    }
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const userData = localStorage.getItem('data');

        if (userData) {
            try {
                const parsedData = JSON.parse(userData);
                console.log('parsedData', parsedData);

                axios.post('http://127.0.0.1:8000/api/showgiohang', { id_nguoidung: parsedData.id })
                    .then(response => {
                        setCartItems(response.data.data);
                        console.log('giohang', response.data.data);

                        const total = response.data.data.reduce((sum, item) => {
                            return sum + item.khoahocs.reduce((itemSum, khoahoc) => itemSum + khoahoc.giamgia, 0);
                        }, 0);
                        setTotalPrice(total);
                    })
                    .catch(error => {
                        console.error('There was an error fetching the cart items!', error);
                    });
            } catch (error) {
                console.error('Error parsing user data from localStorage', error);
            }
        } else {
            console.error('No user data found in localStorage');
        }
    }, []);

    const xoagiohang = async (id) => {
        try {
            const userData = localStorage.getItem('data');
            const parsedData = JSON.parse(userData);
            if (!parsedData) {
                alert('User not found. Please log in.');
                return;
            }

            const payload = {
                id_khoahoc: id,
                id_nguoidung: parsedData.id,
            };

            await axios.post('http://127.0.0.1:8000/api/xoasanphamadd', payload);
            alert('Course removed from cart successfully!');
            window.location.href = '/';
        } catch (err) {
            console.error('Error removing course from cart:', err.response ? err.response.data : err.message);
            alert('Failed to remove course from cart.');
        }
    };

    console.log('cartItems', cartItems);

    return (
        <div className='poputcart'>
            <div className='trong' onClick={onAction}></div>
            <div className='cart'>
                <div className='flex justify-between p-2 mt-4 border-b border-orange-300'>
                    <h6 className='ml-10'>Giỏ hàng của tôi</h6>
                    <i className='mr-10 text-4xl bi bi-x-circle hover:cursor-pointer' onClick={onAction}></i>
                </div>
                <div className='overflow-x-hidden overflow-y-scroll cart-detail' style={{ height: '90vh' }}>
                    <ul className='list-none'>
                        {cartItems.map((item, index) => (
                            item.khoahocs.map((khoahoc, subIndex) => (
                                <li key={`${index}-${subIndex}`} className='py-4 border-b'>
                                    <div className='flex justify-between cart-detail-item'>
                                        <div className='image-product'>
                                            <img src={khoahoc.hinh} alt='' className='w-40' />
                                        </div>
                                        <div className='ml-5 infor-product'>
                                            <h6>{khoahoc.ten}</h6>
                                            <p className='p-1 text-xl bg-orange-200 rounded-md hover:text-orange-600 hover:cursor-pointer'>{khoahoc.tenGiangVien}</p>
                                            <div className='flex p-2'>
                                                <p className='m-2 line-through text-slate-300'>{khoahoc.gia}đ</p>
                                                <p className='m-2 font-bold'>{khoahoc.giamgia}đ</p>
                                            </div>
                                        </div>
                                        <div className='mr-3'>
                                            <div className='relative flex gap-4'>
                                                <p className='left-2'>-</p>
                                                <input type='text' value='1' readOnly />
                                                <p className='left-24'>+</p>
                                            </div>
                                            <div className='flex justify-around gap-4 mt-3'>
                                                <i className='bi bi-pencil-square hover:cursor-pointer'></i>
                                                <i onClick={() => xoagiohang(khoahoc.id)} className='bi bi-trash3 hover:cursor-pointer'></i>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ))}
                    </ul>
                    <div className='mx-4'>
                        <div className='flex justify-between'>
                            <h6>tổng cộng</h6>
                            <p>{totalPrice} đ</p>
                        </div>
                        <div className='w-full'>
                            <button className='btn-thanhtoan'>tiến hành thanh toán</button>
                            <button className='btn-cart ' onClick={() => openCart()}> xem giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Cart };