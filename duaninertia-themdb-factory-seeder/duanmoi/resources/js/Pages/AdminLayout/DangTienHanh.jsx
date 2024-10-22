import React from 'react';
import { Link } from '@inertiajs/react';

export default function DangTienHanh() {
    return (
        <>
            <nav className="flex justify-center mt-4 space-x-4">
                <Link href='/admin/dashboard'>
                    <button className="text-gray-400 px-4 py-2">Pending</button>
                </Link>
                <Link href='/admin/dangtienhanh'>
                    <button className="text-yellow-400 border-b-4 border-yellow-400 px-4 py-2">In Progress</button>
                </Link>
                <Link href='/admin/hoanthanh'>
                    <button className="text-gray-400 px-4 py-2">Completed</button>
                </Link>
            </nav>

            <section className="p-4">
                <div className="bg-gray-800 p-4 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-lg font-semibold">Course Code: CR4247535</p>
                            <div className="flex space-x-2">
                                <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-lg">Category: Marketing</span>
                                <span className="bg-gray-700 px-2 py-1 rounded-lg">12 students</span>
                                <span className="bg-gray-700 px-2 py-1 rounded-lg">1 session</span>
                                <span className="bg-gray-700 px-2 py-1 rounded-lg">2 instructors</span>
                            </div>
                            <p className="text-gray-400 mt-2">Created by: John Doe | 1 hour ago</p>
                            <p className="text-green-400 mt-1">Remaining time: 63 minutes</p>
                        </div>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Start Course</button>
                    </div>
                </div>
            </section>

            <section className="fixed bottom-16 left-0 right-0 bg-gray-900 flex justify-center p-4">
                <button className="bg-gray-700 px-4 py-2 rounded-lg">Bundle</button>
                <button className="ml-4 bg-gray-700 px-4 py-2 rounded-lg">Sort</button>
            </section>
        </>
    );
}
