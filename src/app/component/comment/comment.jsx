
import React, { useEffect, useState } from "react";
import './comment.css'


const Commenthome = () => {
    const [DanhGia, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/danhgia');
                const data = await response.json();
                setData(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log("danhgia",DanhGia);
    
    


    return(
        <div className="mb-10">
            <div className="grid gap-8 mx-6 small:grid-cols-1 md:grid-cols-3">
                {DanhGia.map((item) => (
                <div className="p-4 border">
                    <div className="flex items-center">
                        <div>
                                <img src={item.nguoi_danh_gia.hinh} alt="" 
                            className="rounded-full w-14 h-14"
                            />
                        </div>
                        <div className="ml-3">
                                <h6 className="p-0 m-0">{item.nguoi_danh_gia.ten}</h6>
                            <div className="px-4 text-center bg-teal-100 rounded-md chucvu">
                                <p className="p-0 m-0">học viên</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <p className="self-start">
                                
                                    {item.noi_dung}
                            . . . .
                            </p>
                            <a href="" className="self-end">xem tiếp</a>
                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <p>{item.so_sao}</p>
                                {item.so_sao > 0 && item.so_sao <= 5 && (
                                    <div className="startcomment">
                                        <ul className="flex list-none">
                                            {Array.from({ length: item.so_sao }).map((_, index) => (
                                                <li key={index}>
                                                    <i className="fa-sharp fa-solid fa-star" />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        <div>
                            <p>20/20/2020</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <div className=" prev-next-comment">
                <div>
                <i className="bi bi-caret-left-fill"></i>
                </div>
                <div className=" next-comment">
                    <ul className="flex items-center gap-1 list-none">
                        <li><i className="bi bi-circle-fill"></i></li>
                        <li><i className="bi bi-circle"></i></li>
                        <li><i className="bi bi-circle"></i></li>
                        <li><i className="bi bi-circle"></i></li>
                        <li><i className="bi bi-circle"></i></li>

                    </ul>
                </div>
                <div>
                <i className="bi bi-caret-right-fill"></i>
                </div>
            </div>
            <div className="xemtiep">
                <a href="" >xem tiếp</a>
            </div>
        </div>
    )
}

export {Commenthome}