import React, { useState } from 'react';
import axios from 'axios';
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    referral: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log(formData);
    try {
      const res = await axios.post('https://sjm-backend-b0gn.onrender.com/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        service: '',
        referral: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <>
      <section data-aos="fade-up">
        <h2>Let’s <span style={{ color: '#ff00cc' }}>talk business</span>. But you first.</h2>
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Tell us about your project</option>
              <option>Website Development</option>
              <option>Mobile App</option>
              <option>Branding</option>
              <option>Marketing</option>
            </select>

            <select
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              required
            >
              <option value="" disabled>How did you hear about us?</option>
              <option>Google</option>
              <option>Instagram</option>
              <option>Referral</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Your project description"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">Send</button>
          </form>

          <div className="contact-info">
            <div>
              <strong>Connect with us</strong><br />
              📧 enquirysjm@gmail.com<br />
              📞 +91 9528285735
            </div>
            <div>
              <strong>Address</strong><br />
              📍 Meerut Near by Shoprix Mall<br />
            
              ⏰ Monday – Friday 9am to 5pm
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
