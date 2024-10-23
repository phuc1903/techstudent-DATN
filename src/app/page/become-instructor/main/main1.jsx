"use client";
import React, { useState } from 'react';

const BecomeInstructor = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="mb-4 text-gray-700">
                Becoming an instructor involves a series of steps that may vary depending on the type of instruction you're interested in (e.g., academic teaching, corporate training, online courses). Here's a general guide to help you become an instructor:
            </p>
            <h6 className="mb-2 text-lg font-semibold">Identify Your Area of Expertise:</h6>
            <p className="mb-4 text-gray-700">
                Determine the subject or skill in which you have expertise and are passionate about teaching.
            </p>
            <h6 className="mb-2 text-lg font-semibold">Educational Qualifications:</h6>
            <p className="mb-4 text-gray-700">
                Obtain the necessary educational qualifications for the level and type of instruction you are aiming for. This may include a bachelor's degree.
            </p>
            <div className="mt-6">
                <img src="assets/images/instructor/15.jpg" alt="instructor" className="w-full rounded-lg shadow-md" />
            </div>
        </div>
    );
};

const InstructorRules = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="mb-4 text-gray-700">
                Becoming an instructor involves a series of steps that may vary depending on the type of instruction you're interested in (e.g., academic teaching, corporate training, online courses). Here's a general guide to help you become an instructor:
            </p>
            <h6 className="mb-2 text-lg font-semibold">Identify Your Area of Expertise:</h6>
            <p className="mb-4 text-gray-700">
                Determine the subject or skill in which you have expertise and are passionate about teaching.
            </p>
            <h6 className="mb-2 text-lg font-semibold">Educational Qualifications:</h6>
            <p className="mb-4 text-gray-700">
                Obtain the necessary educational qualifications for the level and type of instruction you are aiming for. This may include a bachelor's degree.
            </p>
            <div className="mt-6">
                <img src="assets/images/instructor/15.jpg" alt="instructor" className="w-full rounded-lg shadow-md" />
            </div>
        </div>
    );
};

const StartWithCourses = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="mb-4 text-gray-700">
                Becoming an instructor involves a series of steps that may vary depending on the type of instruction you're interested in (e.g., academic teaching, corporate training, online courses). Here's a general guide to help you become an instructor:
            </p>
            <h6 className="mb-2 text-lg font-semibold">Identify Your Area of Expertise:</h6>
            <p className="mb-4 text-gray-700">
                Determine the subject or skill in which you have expertise and are passionate about teaching.
            </p>
            <h6 className="mb-2 text-lg font-semibold">Educational Qualifications:</h6>
            <p className="mb-4 text-gray-700">
                Obtain the necessary educational qualifications for the level and type of instruction you are aiming for. This may include a bachelor's degree.
            </p>
            <div className="mt-6">
                <img src="assets/images/instructor/15.jpg" alt="instructor" className="w-full rounded-lg shadow-md" />
            </div>
        </div>
    );
};

export default function Main1() {
    const [activeTab, setActiveTab] = useState('home');
    return (
        <>
            {/* becoming instructor area start */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <div className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold">How to Become an Instructor</h2>
                    <p className="text-gray-700">
                        Becoming an instructor involves a series of steps that may vary depending on the type of instruction you're interested
                    </p>
                </div>
                <div className="mb-12">
                    <img src="assets/images/instructor/14.jpg" alt="instructor" className="w-full rounded-lg shadow-md" />
                </div>
            </div>
            {/* becoming instructor area end */}

            {/* become a instructor tabs */}
            <div className="mt-12">
                <ul className="flex border-b">
                    <li className="mr-1">
                        <button
                            className={`inline-block px-4 py-2  ${activeTab === 'home' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('home')}
                        >
                            <i className="mr-2 fa-regular fa-user"></i>
                            Become an Instructor
                        </button>
                    </li>
                    <li className="mr-1">
                        <button
                            className={`inline-block px-4 py-2 ${activeTab === 'profile' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <i className="mr-2 fa-light fa-list"></i>
                            Instructor Rules
                        </button>
                    </li>
                    <li className="mr-1">
                        <button
                            className={`inline-block px-4 py-2 ${activeTab === 'contact' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('contact')}
                        >
                            <i className="mr-2 fa-regular fa-box"></i>
                            Start with Courses
                        </button>
                    </li>
                </ul>
                <div className="mt-6 tab-content">
                    {activeTab === 'home' && <BecomeInstructor />}
                    {activeTab === 'profile' && <InstructorRules />}
                    {activeTab === 'contact' && <StartWithCourses />}
                </div>
            </div>
            {/* become a instructor tabs end */}
        </>
    );
}