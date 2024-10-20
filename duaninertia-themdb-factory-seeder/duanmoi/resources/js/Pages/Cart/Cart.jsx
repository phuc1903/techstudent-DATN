import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@inertiajs/react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const userData = localStorage.getItem('data');
        if (userData) {
            try {
                const parsedData = JSON.parse(userData);
                axios.post('/api/showgiohang', { id_nguoidung: parsedData.id })
                    .then(response => {
                        setCartItems(response.data.data);
                        const total = response.data.data.reduce((sum, item) => {
                            return sum + item.khoahocs.reduce((itemSum, khoahoc) => itemSum + khoahoc.gia, 0);
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

            await axios.post('/api/xoasanphamadd', payload);
            alert('Course removed from cart successfully!');
            window.location.href = '/giohang';
        } catch (err) {
            console.error('Error removing course from cart:', err.response ? err.response.data : err.message);
            alert('Failed to remove course from cart.');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Giỏ Hàng Của Bạn</h1>
                {cartItems.length === 0 ? (
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <p className="text-lg text-gray-700">Giỏ hàng của bạn đang trống.</p>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row -mx-4">
                        <div className="w-full lg:w-2/3 px-4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Các khóa học trong giỏ hàng</h2>
                                <div className="space-y-4">
                                    {cartItems.map(item => (
                                        item.khoahocs.map(khoahoc => (
                                            <div key={khoahoc.id} className="flex items-center border-b pb-4">
                                                <img src={khoahoc.hinh} alt={khoahoc.ten} className="w-24 h-24 object-cover rounded-md mr-4" />
                                                <div className="flex-grow">
                                                    <h3 className="text-xl font-medium text-gray-800">{khoahoc.ten}</h3>
                                                    <p className="text-gray-600">Giảng viên: {khoahoc.tenGiangVien}</p>
                                                    <p className="text-gray-600">Giá: <span className="text-red-500 font-semibold">${khoahoc.gia}</span></p>
                                                </div>
                                                <button onClick={() => xoagiohang(khoahoc.id)} className="text-red-500 hover:text-red-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tóm Tắt Đơn Hàng</h2>
                                <div className="border-b pb-4">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Tổng cộng:</span>
                                        <span className="text-gray-800 font-semibold">${totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Giảm giá:</span>
                                        <span className="text-gray-800 font-semibold">$0</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Thành tiền:</span>
                                        <span className="text-gray-800 font-semibold">${totalPrice}</span>
                                    </div>
                                </div>
                                <Link href="/thanhtoan">
                                    <button className="w-full bg-purple-600 text-white py-3 mt-6 rounded-md hover:bg-purple-700 transition duration-200">
                                        Tiến Hành Thanh Toán
                                    </button>
                                </Link>
                            </div>
                            <div className="mt-6 text-center">
                                <Link href="/" className="text-purple-600 hover:underline">Tiếp tục mua sắm</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
