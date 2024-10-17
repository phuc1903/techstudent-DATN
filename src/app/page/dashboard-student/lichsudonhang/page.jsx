import React from "react";

export default function Khoahocdanghoc(){
    return(
        <div className="col-lg-9 overflow-y-scroll  h-lvh">
  <div
    className="rts-reviewd-area-dashed table-responsive"
    style={{ whiteSpace: "nowrap" }}
  >
    <div className="calender-and-tab-btn-between">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Today
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Monthly
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Yearly
          </button>
        </li>
      </ul>
      <div className="date-picker-area">
        <input
          placeholder="Select your date"
          type="text"
          name="checkIn"
          id="datepicker"
          defaultValue="mm/dd/yyyy"
          className="calendar"
        />
        <i className="fa-light fa-calendar-lines-pen" />
      </div>
    </div>
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <h5 className="title">Order History</h5>
        <table className="table-reviews quiz mb--0">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Order ID</th>
              <th style={{ width: "35%" }}>Course Name</th>
              <th style={{ width: "20%" }}>Date</th>
              <th style={{ width: "10%" }}>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Character Illustration Guide</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#5644</p>
                </div>
              </td>
              <td>
                <span className="questions">Web Design test</span>
              </td>
              <td>
                <span className="marks">November 29, 2023</span>
              </td>
              <td>
                <span>$69.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4487</p>
                </div>
              </td>
              <td>
                <span className="questions">Become a Video Editing Pro</span>
              </td>
              <td>
                <span className="marks">November 30, 2023</span>
              </td>
              <td>
                <span>$49.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="processing">Processing</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#2159</p>
                </div>
              </td>
              <td>
                <span className="questions">Freelance Content Writing</span>
              </td>
              <td>
                <span className="marks">December 11, 2023</span>
              </td>
              <td>
                <span>$79.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#1473</p>
                </div>
              </td>
              <td>
                <span className="questions">Content Writing</span>
              </td>
              <td>
                <span className="marks">December 12, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#6548</p>
                </div>
              </td>
              <td>
                <span className="questions">New Course</span>
              </td>
              <td>
                <span className="marks">November 14, 2023</span>
              </td>
              <td>
                <span>$99.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="processing">Processing</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#6541</p>
                </div>
              </td>
              <td>
                <span className="questions">UI/UX Design</span>
              </td>
              <td>
                <span className="marks">December 15, 2023</span>
              </td>
              <td>
                <span>$29.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#2397</p>
                </div>
              </td>
              <td>
                <span className="questions">Web Development</span>
              </td>
              <td>
                <span className="marks">December 17, 2023</span>
              </td>
              <td>
                <span>$39.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#7845</p>
                </div>
              </td>
              <td>
                <span className="questions">Business &amp; Finance</span>
              </td>
              <td>
                <span className="marks">December 19, 2023</span>
              </td>
              <td>
                <span>$79.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="processing">Processing</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#9548</p>
                </div>
              </td>
              <td>
                <span className="questions">Marketing</span>
              </td>
              <td>
                <span className="marks">December 21, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Art &amp; Dancing</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Graphic Design</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Film &amp; Video Graphic</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="success">Success</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Accounting</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Personal Skill</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Language Skill</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Character Illustration Guide</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <h5 className="title">Order History</h5>
        <table className="table-reviews quiz">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Order ID</th>
              <th style={{ width: "35%" }}>Course Name</th>
              <th style={{ width: "20%" }}>Date</th>
              <th style={{ width: "10%" }}>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Character Illustration Guide</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#5644</p>
                </div>
              </td>
              <td>
                <span className="questions">Web Design test</span>
              </td>
              <td>
                <span className="marks">November 29, 2023</span>
              </td>
              <td>
                <span>$69.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4487</p>
                </div>
              </td>
              <td>
                <span className="questions">Become a Video Editing Pro</span>
              </td>
              <td>
                <span className="marks">November 30, 2023</span>
              </td>
              <td>
                <span>$49.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="processing">Processing</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#2159</p>
                </div>
              </td>
              <td>
                <span className="questions">Freelance Content Writing</span>
              </td>
              <td>
                <span className="marks">December 11, 2023</span>
              </td>
              <td>
                <span>$79.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#1473</p>
                </div>
              </td>
              <td>
                <span className="questions">Content Writing</span>
              </td>
              <td>
                <span className="marks">December 12, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#6548</p>
                </div>
              </td>
              <td>
                <span className="questions">New Course</span>
              </td>
              <td>
                <span className="marks">November 14, 2023</span>
              </td>
              <td>
                <span>$99.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="processing">Processing</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#6541</p>
                </div>
              </td>
              <td>
                <span className="questions">UI/UX Design</span>
              </td>
              <td>
                <span className="marks">December 15, 2023</span>
              </td>
              <td>
                <span>$29.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#2397</p>
                </div>
              </td>
              <td>
                <span className="questions">Web Development</span>
              </td>
              <td>
                <span className="marks">December 17, 2023</span>
              </td>
              <td>
                <span>$39.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#7845</p>
                </div>
              </td>
              <td>
                <span className="questions">Business &amp; Finance</span>
              </td>
              <td>
                <span className="marks">December 19, 2023</span>
              </td>
              <td>
                <span>$79.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="processing">Processing</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#9548</p>
                </div>
              </td>
              <td>
                <span className="questions">Marketing</span>
              </td>
              <td>
                <span className="marks">December 21, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Art &amp; Dancing</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Graphic Design</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Film &amp; Video Graphic</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="success">Success</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Accounting</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Personal Skill</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Language Skill</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Character Illustration Guide</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <h5 className="title">Order History</h5>
        <table className="table-reviews quiz">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Order ID</th>
              <th style={{ width: "35%" }}>Course Name</th>
              <th style={{ width: "20%" }}>Date</th>
              <th style={{ width: "10%" }}>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Character Illustration Guide</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#5644</p>
                </div>
              </td>
              <td>
                <span className="questions">Web Design test</span>
              </td>
              <td>
                <span className="marks">November 29, 2023</span>
              </td>
              <td>
                <span>$69.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4487</p>
                </div>
              </td>
              <td>
                <span className="questions">Become a Video Editing Pro</span>
              </td>
              <td>
                <span className="marks">November 30, 2023</span>
              </td>
              <td>
                <span>$49.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="processing">Processing</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#2159</p>
                </div>
              </td>
              <td>
                <span className="questions">Freelance Content Writing</span>
              </td>
              <td>
                <span className="marks">December 11, 2023</span>
              </td>
              <td>
                <span>$79.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#1473</p>
                </div>
              </td>
              <td>
                <span className="questions">Content Writing</span>
              </td>
              <td>
                <span className="marks">December 12, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#6548</p>
                </div>
              </td>
              <td>
                <span className="questions">New Course</span>
              </td>
              <td>
                <span className="marks">November 14, 2023</span>
              </td>
              <td>
                <span>$99.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="processing">Processing</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#6541</p>
                </div>
              </td>
              <td>
                <span className="questions">UI/UX Design</span>
              </td>
              <td>
                <span className="marks">December 15, 2023</span>
              </td>
              <td>
                <span>$29.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#2397</p>
                </div>
              </td>
              <td>
                <span className="questions">Web Development</span>
              </td>
              <td>
                <span className="marks">December 17, 2023</span>
              </td>
              <td>
                <span>$39.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#7845</p>
                </div>
              </td>
              <td>
                <span className="questions">Business &amp; Finance</span>
              </td>
              <td>
                <span className="marks">December 19, 2023</span>
              </td>
              <td>
                <span>$79.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="processing">Processing</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#9548</p>
                </div>
              </td>
              <td>
                <span className="questions">Marketing</span>
              </td>
              <td>
                <span className="marks">December 21, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Art &amp; Dancing</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Graphic Design</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Film &amp; Video Graphic</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="success">Success</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Accounting</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Personal Skill</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Language Skill</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="information-quiz">
                  <p className="quiz">#4601</p>
                </div>
              </td>
              <td>
                <span className="questions">Character Illustration Guide</span>
              </td>
              <td>
                <span className="marks">November 28, 2023</span>
              </td>
              <td>
                <span>$59.99</span>
              </td>
              <td>
                <div className="hold-area">
                  <span className="hold">On Hold</span>
                  <span className="hold-i">
                    <i className="fa-regular fa-clipboard-list" />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    )
}
