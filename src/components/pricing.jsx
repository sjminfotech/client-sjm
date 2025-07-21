import React from 'react'

const Pricing = () => {
  return (
    <>
      <section className="pricing-section" data-aos="fade-up">
        <h2>Pricing Plan</h2>
        <p>This pricing plan will be changeable by discussion</p>
        <div className="pricing-cards">
          <div className="card" data-aos="zoom-in">
            <div className="badge">Basic</div>
            <div className="price">$30.00</div>
            <ul className="features">
              <li>One Landing Page</li>
              <li>With Responsive</li>
              <li>Modern Design</li>
              <li>Three Revision</li>
              <li>Four Section</li>
            </ul>
            <button className="btn">Purchase Plan</button>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <div className="badge">Standerd</div>
            <div className="price">$99.00</div>
            <ul className="features">
              <li>One Landing Page</li>
              <li>With Responsive</li>
              <li>Modern Design</li>
              <li>Eight Revision</li>
              <li>Nine Section</li>
            </ul>
            <button className="btn">Purchase Plan</button>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <div className="badge">Premium</div>
            <div className="price">$99.00</div>
            <ul className="features">
              <li>One Landing Page</li>
              <li>With Responsive</li>
              <li>Modern Design</li>
              <li>Eight Revision</li>
              <li>Nine Section</li>
            </ul>
            <button className="btn">Purchase Plan</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing