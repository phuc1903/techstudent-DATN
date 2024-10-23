import React from 'react'

export default function Main2() {
  return (
      <>
          <div className="becom-an-instructor-form-area rts-section-gapTop pl--120 pr--120 pl_sm--10 pr_sm--10">
              <div className="title-instructor-wrapper">
                  <h2 className="title">Become an Instructor Today</h2>
                  <p className="disc">
                      Join the world's largest online learning marketplace.
                      Start teaching today
                  </p>
              </div>
              <form action="#" className="instructor-form">
                  <h5 className="title">Instructor Registration</h5>
                  <p className="disc">Join a supportive network that empowers you on your journey to becoming an effective and successful online educator.</p>
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="User Name" />
                  <input type="email" placeholder="Your Email" required />
                  <input type="password" placeholder="Password" />
                  <input type="password" placeholder="Password Confirm" />
                  <div className="single-checkbox-filter">
                      <div className="check-box">
                          <input type="checkbox" id="category-1" />
                          <label htmlFor="category-1">Accept the Terms and Privacy Policy</label><br />
                      </div>
                  </div>
                  <button className="rts-btn btn-primary mb--30">Register as Instructor</button>
                  <span>Already have an account? <a href="#" style={{ color: 'var(--color-primary)' }}>Log in</a></span>
              </form>
          </div>
      </>
  )
}
