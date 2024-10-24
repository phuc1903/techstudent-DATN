"use client";
"use strict";
import React, { useState, useEffect } from "react";
import { user } from "../../../../service/User/user";

export default function Myprofilestudent() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    user().then((data) => {
      setUserData(data.data);
    });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }
  console.log(userData);

  return (
    <div className="overflow-y-scroll col-lg-9 rts-sticky-column-item h-lvh">
      <div className="right-sidebar-my-profile-dash theiaStickySidebar pt--30">
        <h5 className="title">My Profile</h5>
        <div className="my-single-portfolio-dashed">
          <div className="name">ID</div>
          <div className="value">{userData.id}</div>
        </div>
        <div className="my-single-portfolio-dashed">
          <div className="name">Name</div>
          <div className="value">{userData.ten}</div>
        </div>
        <div className="my-single-portfolio-dashed">
          <div className="name">Email</div>
          <div className="value">{userData.email}</div>
        </div>
        <div className="my-single-portfolio-dashed">
          <div className="name">Phone Number</div>
          <div className="value">{userData.dienthoai}</div>
        </div>
        <div className="my-single-portfolio-dashed">
          <div className="name">Profile Picture</div>
          <div className="value">{userData.hinh}</div>
        </div>
        <div className="my-single-portfolio-dashed">
          <div className="name">Role</div>
          <div className="value">{userData.vaitro}</div>
        </div>
        <div className="my-single-portfolio-dashed">
          <div className="name">Created At</div>
          <div className="value">{userData.created_at}</div>
        </div>
        <div className="my-single-portfolio-dashed">
          <div className="name">Updated At</div>
          <div className="value">{userData.updated_at}</div>
        </div>
      </div>
    </div>
  );
}