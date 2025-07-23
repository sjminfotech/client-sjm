import React from 'react'
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <>
      <div className="section-title" data-aos="fade-down">
        <h2>
          Our&nbsp;
          <span style={{ color: '#ff00cc' }}> Services</span>
        </h2>
        <p>Focused on results we seek to raise the level of our customers.</p>
      </div>

      <div className="services-grid">
        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <div className="icon">🌐</div>
          <h3>Marketing Agency</h3>
          <p>Your brand deserves more than likes — it deserves loyalty, recognition, and results. We craft data-backed strategies fused with bold creativity to grow your influence, spark conversations, and drive measurable impact across every channel.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <div className="icon">🎨</div>
          <h3>Graphic Design</h3>
          <p>Your brand deserves more than just good visuals — it deserves unforgettable design. We craft bold, impactful graphics that tell your story, capture attention, and build emotional connections across every medium.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <div className="icon">💻</div>
          <h3>Website Design</h3>
          <p>Your website is more than just a page — it's your brand’s first impression. We design visually stunning, mobile-friendly websites that blend creativity with strategy to engage your audience and drive results.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <div className="icon">🧩</div>
          <h3>Video Editing</h3>
          <p>We don’t just edit videos — we craft visual stories that evoke emotion, build connection, and inspire action. Whether it’s a 15-second reel or a full-scale brand film, we polish every second to perfection — so your message hits home and stays there.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="500">
          <div className="icon">📈</div>
          <h3>SEO Services</h3>
          <p>Great brands don’t hide — they lead. Our SEO strategies are engineered to put you in front of the right audience at the right time — consistently. From deep technical optimization to content that ranks and converts, we help you win the search game — and stay there.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="600">
          <div className="icon">📱</div>
          <h3>Mobile App Development</h3>
          <p>We don’t just build apps — we create powerful digital tools that solve problems, delight users, and drive growth. Whether it's Android, iOS, or cross-platform, our mobile solutions are tailored to your goals and built with the latest technology.</p>
        </div>
      </div>

      <div className="button-row" data-aos="zoom-in" data-aos-delay="800">
        <Link to="ourservices" className="btn pink">View More</Link>

      </div>
    </>
  )
}

export default Services