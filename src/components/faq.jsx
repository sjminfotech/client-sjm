import React from 'react'
import './faq.css'
const Faq = () => {
  return (
    <>
      <section className="faq-section" data-aos="fade-up">
        <h3>
          &nbsp; <span style={{ color: '#ff00cc' }}> FAQ</span> QUESTION
        </h3>
        <p>You have to find your question before we work together</p>
        <div className="faq-grid">
          <div className="faq-box">What services does your IT company provide?</div>
          <div className="faq-box">How long will it take to handover your project?</div>
          <div className="faq-box">Do you provide maintenance and support after development?</div>
          <div className="faq-box">What are your payment terms?</div>
          <div className="faq-box">Are your websites SEO-friendly?</div>
          <div className="faq-box">How can I contact you for more queries?</div>
        </div>
      </section>
    </>
  )
}

export default Faq