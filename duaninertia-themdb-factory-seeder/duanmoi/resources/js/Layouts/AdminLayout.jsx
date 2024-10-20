import React from 'react';
import { Link, usePage } from '@inertiajs/react';
export default function AdminLayout({ children }) {
    return (
        
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            
            {/* Header Section */}
            <header className="bg-gray-800 p-4 flex justify-between items-center fixed top-0 left-0 right-0">
                <h1 className="text-xl font-bold">Course Admin</h1>
            </header>

                        <main className="flex-grow pt-16 pb-16">
                {children}
            </main>

                <nav className="bg-gray-800 p-4 flex justify-around text-center fixed bottom-0 left-0 right-0">
               <Link href="/admin/dashboard" className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <span className="text-lg">📚</span>
                    <span>Courses</span>
                </div>
                </Link>
                <Link href="/admin/sinhvien" className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <span className="text-lg">👥</span>
                    <span>Students</span>
                    </div>
                </Link>
                <Link href="/admin/thongke" className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <span className="text-lg">📊</span>
                    <span>Analytics</span>
                    </div>
                </Link>
                <Link href="/admin/dashboard" className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <span className="text-lg">⚙️</span>
                    <span>Settings</span>
                    </div>
                </Link>
            </nav>
        </div>
    );
}