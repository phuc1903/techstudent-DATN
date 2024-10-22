import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
export default function Setting() {
    const [courses, setCourses] = useState([]);
    const [KhoaHocDaHoc, setKhoaHocDaHoc] = useState([]);
    const [KhoaHocMoi, setKhoaHocMoi] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/admin-api/khoahoctrangthai');
                const data = await response.json();
                setCourses(data.data);
                console.log(data.data);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/admin-api/khoahocdahoanthanh');
                const data = await response.json();
                setKhoaHocDaHoc(data.data);
                console.log(data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/admin-api/khoahocmoi');
                const data = await response.json();
                setKhoaHocMoi(data.data);
                console.log(data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {/* Task Section */}
            <section className="p-4">
                <h2 className="mb-4 text-xl font-semibold">Tasks to do</h2>
                <div className="grid grid-cols-3 gap-4">
                    <Link href="/admin/dashboard" className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                            <span>Pending Courses</span>
                            {courses.filter(course => course.trangthai === 'Pending').length > 0 ? (
                                <span className="px-3 py-1 text-white bg-red-600 rounded-full">
                                    {courses.filter(course => course.trangthai === 'Pending').length}
                                </span>
                            ) : (
                                <span className="px-3 py-1 text-white bg-red-600 rounded-full">0</span>
                            )}
                        </div>
                    </Link>
                    <Link href="/admin/hoanthanh" className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                            <span>Ongoing Courses</span>
                            {courses.filter(course => course.trangthai === 'active').length > 0 ? (
                                <span className="px-3 py-1 text-white bg-red-600 rounded-full">
                                    {courses.filter(course => course.trangthai === 'active').length}
                                </span>
                            ) : (
                                <span className="px-3 py-1 text-white bg-red-600 rounded-full">0</span>
                            )}
                        </div>
                    </Link>
                    <Link href="/admin/khoahodahoanhthanh" className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                        <span>Completed Courses</span>
                        {KhoaHocDaHoc.length > 0 ? (
                            <span className="px-3 py-1 text-white bg-red-600 rounded-full">
                                {KhoaHocDaHoc.length}
                            </span>
                        ) : (
                            <span className="px-3 py-1 text-white bg-red-600 rounded-full">0</span>
                        )}
                        </div>
                    </Link>
                    <Link href="/admin/khoahocdangkymoi" className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                        <span>New Enrollment</span>
                        {KhoaHocMoi.length > 0 ? (
                            <span className="px-3 py-1 text-white bg-red-600 rounded-full">
                                {KhoaHocMoi.length}
                            </span>
                        ) : (
                            <span className="px-3 py-1 text-white bg-red-600 rounded-full">0</span>
                        )}
                        </div>
                    </Link>
                    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                        <span>Courses to Review</span>
                        {courses.filter(course => course.trangthai === 'Decline').length > 0 ? (
                            <span className="px-3 py-1 text-white bg-red-600 rounded-full">
                                {courses.filter(course => course.trangthai === 'Decline').length}
                            </span>
                        ) : (
                            <span className="px-3 py-1 text-white bg-red-600 rounded-full">0</span>
                        )}
                    </div>
                </div>
            </section>

            {/* KPI Section */}
            <section className="p-4">
                <h2 className="mb-4 text-xl font-semibold">KPI</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 text-center bg-gray-800 rounded-lg">
                        <p>KPI Current</p>
                        <p className="text-2xl font-bold text-yellow-400">0</p>
                    </div>
                    <div className="p-4 text-center bg-gray-800 rounded-lg">
                        <p>KPI Minimum</p>
                        <p className="text-2xl font-bold text-yellow-400">0</p>
                    </div>
                    <div className="p-4 text-center bg-gray-800 rounded-lg">
                        <p>Income Exceed KPI</p>
                        <p className="text-2xl font-bold text-yellow-400">0 VND</p>
                    </div>
                    <div className="p-4 text-center bg-gray-800 rounded-lg">
                        <p>Other Income</p>
                        <p className="text-2xl font-bold text-yellow-400">0 VND</p>
                    </div>
                </div>
            </section>
        </div>
    );
}