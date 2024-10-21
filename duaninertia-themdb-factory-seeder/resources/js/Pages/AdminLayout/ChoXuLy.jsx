import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
export default function Dashboard() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [actionLoading, setActionLoading] = useState(false);
    const [actionError, setActionError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/admin-api/dashboard', {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': getCsrfToken(),
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCourses(data.khoahoc); // Adjust according to your API response structure
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getCsrfToken = () => {
        const token = document.head.querySelector('meta[name="csrf-token"]');
        return token ? token.content : '';
    };

    const handleDecline = async (id) => {
        setActionLoading(true);
        setActionError(null);
        try {
            const response = await fetch('/admin-api/tuchoi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken(),
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            // Optionally, you can fetch the updated courses list instead of filtering
            setCourses(courses.filter(course => course.id !== id));
        } catch (error) {
            console.error('Error declining course:', error);
            setActionError(error.message);
        } finally {
            setActionLoading(false);
        }
    };

    const handleApprove = async (id) => {
        setActionLoading(true);
        setActionError(null);
        try {
            const response = await fetch('/admin-api/chapnhan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken(),
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            // Optionally, you can fetch the updated courses list instead of filtering
            setCourses(courses.filter(course => course.id !== id));
        } catch (error) {
            console.error('Error approving course:', error);
            setActionError(error.message);
        } finally {
            setActionLoading(false);
        }
    };

    return (
        <>
            {/* Tab Navigation */}
            <nav className="flex justify-center mt-4 space-x-4">
                <Link href='/admin/dashboard'>
                    <button className="text-yellow-400 border-b-4 border-yellow-400   px-4 py-2">Pending</button>
                </Link>
                <Link href='/admin/dangtienhanh'>
                    <button className="text-gray-400 px-4 py-2">In Progress</button>
                </Link>
                <Link href='/admin/hoanthanh'>
                    <button className="text-gray-400 px-4 py-2">Completed</button>
                </Link>
            </nav>

            <section className="p-4 space-y-4">
                {loading && <p>Loading courses...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {actionError && <p className="text-red-500">Action Error: {actionError}</p>}
                {!loading && !error && courses.length === 0 && <p>No courses found.</p>}
                {!loading &&
                    !error &&
                    courses.map((course) => (   
                        <div key={course.id} className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex justify-between">
                             
                                <div>
                                    <Link href={`/admin/khoahocdangtienhanh/${course.id}`}>
                                    <p className="text-lg font-semibold">Course ID: {course.id}</p>
                                    <p className="text-gray-400">Status: {course.trangthai}</p>
                                    <p className="text-gray-400">
                                        Created by: {course.giangvien.ho} {course.giangvien.ten}
                                    </p>

                                    {/* Display the topic (chude) */}
                                    {course.chude && (
                                        <p className="text-gray-400">Topic: {course.chude.ten}</p>
                                    )}

                                    {/* Display the subcategory (theloaicon) */}
                                    {course.theloaicon && (
                                        <p className="text-gray-400">
                                            Subcategory: {course.theloaicon.ten}
                                        </p>
                                    )}

                                    {/* Display the category (theloaicon.theloai) */}
                                    {course.theloaicon && course.theloaicon.theloai && (
                                        <p className="text-gray-400">
                                            Category: {course.theloaicon.theloai.ten}
                                        </p>
                                        )}
                                    </Link>
                                    </div>
                          
                                <div className="space-x-2">
                                    <button
                                        className={`bg-blue-500 text-black px-4 py-2 rounded-lg ${actionLoading ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                        onClick={() => handleDecline(course.id)}
                                        disabled={actionLoading}
                                    >
                                        Decline
                                    </button>
                                    <button
                                        className={`bg-green-500 text-black px-4 py-2 rounded-lg ${actionLoading ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                        onClick={() => handleApprove(course.id)}
                                        disabled={actionLoading}
                                    >
                                        Approve
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </section>
            <button className="fixed bottom-4 right-4 bg-yellow-400 text-gray-900 p-4 rounded-full shadow-lg">
                +
            </button>
        </>
    );
}
