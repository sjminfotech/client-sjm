import React from 'react';
import heroVideo from "../assets/VIDEO/hero.mp4";


export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container hero-content" data-aos="fade-up">
        <div className="hero-text">
          <p className="tag">Website Development</p>
          <h1>Delivering <span>IT solutions</span> that enable you to work smarter.</h1>
          <p>We build high-performance, user-friendly websites tailored to your business goals.</p>
          <a href="#discover" className="btn pink">Discover More</a>
        </div>
      </div>
    </section>
  );
}