import React from 'react'
import './review.css'

const Review = () => {
  return (
    <>
      {/* Customer Saying */}
      <section data-aos="fade-up">
        <div className="testimonial-section">
          <h2>
            What Our&nbsp;
            <span style={{ color: "#ff00cc" }}> customers</span>&nbsp; Say
          </h2>
          <p style={{ color: "#fff" }}>
            Hear from our incredible customers who are building at lightning speed.
          </p>

          <div className="slider-container">
            <div className="slider-track">
              {/* Repeat cards to enable smooth looping */}
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <div className="testimonial-text">
                  UI Blox has revolutionized my design process. Its intuitive interface and powerful features save me so much time!
                </div>
                <div className="author">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jillie Bernard" />
                  <div className="author-info">
                    <strong>Jillie Bernard</strong>
                    <span>Founder & CEO</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <div className="testimonial-text">
                  The best UI kit I’ve used for Framer. UI Blox is a game-changer for designers.
                </div>
                <div className="author">
                  <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="David Miller" />
                  <div className="author-info">
                    <strong>David Miller</strong>
                    <span>Lead Engineer</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <div className="testimonial-text">
                  Absolutely love UI Blox! The clean design and ease of use are unmatched.
                </div>
                <div className="author">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sarah Lee" />
                  <div className="author-info">
                    <strong>Sarah Lee</strong>
                    <span>Director of Sales</span>
                  </div>
                </div>
              </div>

              {/* Duplicate the cards for loop effect */}
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <div className="testimonial-text">
                  UI Blox has revolutionized my design process. Its intuitive interface and powerful features save me so much time!
                </div>
                <div className="author">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jillie Bernard" />
                  <div className="author-info">
                    <strong>Jillie Bernard</strong>
                    <span>Founder & CEO</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <div className="testimonial-text">
                  The best UI kit I’ve used for Framer. UI Blox is a game-changer for designers.
                </div>
                <div className="author">
                  <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="David Miller" />
                  <div className="author-info">
                    <strong>David Miller</strong>
                    <span>Lead Engineer</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <div className="testimonial-text">
                  Absolutely love UI Blox! The clean design and ease of use are unmatched.
                </div>
                <div className="author">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sarah Lee" />
                  <div className="author-info">
                    <strong>Sarah Lee</strong>
                    <span>Director of Sales</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Review