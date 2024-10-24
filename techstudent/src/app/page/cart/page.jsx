"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../component/header/header';

export default function Cart() {
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

      await axios.post('http://127.0.0.1:8000//api/xoasanphamadd', payload);
      alert('Course removed from cart successfully!');
      window.location.href = '/giohang';
    } catch (err) {
      console.error('Error removing course from cart:', err.response ? err.response.data : err.message);
      alert('Failed to remove course from cart.');
    }
  };

  return (
    <div>
      <Header />
      <main className="ms-main mt-28">
        <div className="w-full text-center">
          <h1 className="text-6xl">gio hang cua toi</h1>
        </div>
        <div className="mt-8 ms-page-content">
          <article id="post-283" className="post-283 page type-page status-publish hentry">
            <div className="container ms-default-page">
              <div className="woocommerce">
                <div className="woocommerce-notices-wrapper" />
                <div className="ms-woocommerce-cart-form-wrapper">
                  <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                    <thead>
                      <tr>
                        <th className="text-sm product-remove">Action</th>
                        <th className="product-thumbnail">Images</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-subtotal">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        item.khoahocs.map((khoahoc, subIndex) => (
                          <tr key={`${index}-${subIndex}`} className="woocommerce-cart-form__cart-item cart_item">
                            <td className="product-remove">
                              <a
                                href="javascript:void(0);"
                                className="remove"
                                aria-label="Remove this item"
                                onClick={() => xoagiohang(khoahoc.id)}
                              >
                                <svg viewBox="0 0 200 200" width={18} xmlns="http://www.w3.org/2000/svg">
                                  <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"></path>
                                </svg>
                              </a>
                            </td>
                            <td className="product-thumbnail">
                              <a href="product-details.html">
                                <img src={khoahoc.hinh} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />
                              </a>
                            </td>
                            <td className="product-name" data-title="Product">
                              <a href="product-details.html">{khoahoc.ten}</a>
                            </td>
                            <td className="product-price" data-title="Price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">đ</span>
                                  {khoahoc.giamgia}
                                </bdi>
                              </span>
                            </td>
                            <td className="product-subtotal" data-title="Subtotal">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">đ</span>
                                  {khoahoc.giamgia}
                                </bdi>
                              </span>
                            </td>
                          </tr>
                        ))
                      ))}
                      <tr>
                        <td colSpan={6} className="actions">
                          <form className="woocommerce-cart-form" action="#" method="post">
                            <div className="ms-actions-inner">
                              <div className="coupon">
                                <input
                                  type="text"
                                  name="coupon_code"
                                  className="input-text"
                                  id="coupon_code"
                                  defaultValue=""
                                  placeholder="Coupon code"
                                  required=""
                                />
                                <button
                                  type="submit"
                                  className="button rts-btn btn-primary"
                                  name="apply_coupon"
                                  value="Apply coupon"
                                >
                                  Apply coupon
                                </button>
                              </div>
                            </div>
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-md-5 offset-md-7">
                      <div className="ms-cart-collaterals cart-collaterals">
                        <div className="ms-cart-totals cart_totals ">
                          <h3 className="animated fadeIn">Cart totals</h3>
                          <table className="shop_table shop_table_responsive">
                            <tbody>
                              <tr className="cart-subtotal">
                                <th>Subtotal</th>
                                <td data-title="Subtotal">
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">đ</span>
                                      {totalPrice}
                                    </bdi>
                                  </span>
                                </td>
                              </tr>
                              <tr className="order-total">
                                <th>Total</th>
                                <td data-title="Total">
                                  <strong>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span className="woocommerce-Price-currencySymbol">đ</span>
                                        {totalPrice}
                                      </bdi>
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="ms-proceed-to-checkout wc-proceed-to-checkout">
                            <a href="javascript:void(0);" className="rts-btn btn-primary">
                              Proceed to checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}