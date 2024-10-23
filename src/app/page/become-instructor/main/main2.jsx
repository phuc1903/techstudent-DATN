import React from 'react';

export default function Main2() {
    return (
        <>
            <div className="px-10 py-10 bg-gray-100 rounded-lg shadow-md becom-an-instructor-form-area rts-section-gapTop">
                <div className="mb-8 text-center title-instructor-wrapper">
                    <h2 className="mb-4 text-3xl font-bold title">Become an Instructor Today</h2>
                    <p className="text-gray-700 disc">
                        Join the world's largest online learning marketplace. Start teaching today.
                    </p>
                </div>
                <form action="#" className="p-8 bg-white rounded-lg shadow-md instructor-form">
                    <h5 className="mb-4 text-2xl font-semibold title">Instructor Registration</h5>
                    <p className="mb-6 text-gray-700 disc">
                        Join a supportive network that empowers you on your journey to becoming an effective and successful online educator.
                    </p>
                    <div className="mb-4">
                        <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="User Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <input type="email" placeholder="Your Email" required className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder="Password Confirm" className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="mb-6 single-checkbox-filter">
                        <div className="flex items-center check-box">
                            <input type="checkbox" id="category-1" className="mr-2" />
                            <label htmlFor="category-1" className="text-gray-700">Accept the Terms and Privacy Policy</label>
                        </div>
                    </div>
                    <button className="w-full py-3 mb-4 text-white bg-blue-500 rounded-lg rts-btn btn-primary">Register as Instructor</button>
                    <span className="text-gray-700">Already have an account? <a href="#" className="text-blue-500">Log in</a></span>
                </form>
            </div>
        </>
    );
}