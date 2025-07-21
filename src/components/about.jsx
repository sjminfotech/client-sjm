import React from 'react';

const About = () => (
  <>
 
    <div className="container">
      <div className="about-section">
        <div className="about-text">
          <p style={{ textTransform: 'uppercase', color: '#ff00cc', fontWeight: 600, fontSize: '0.95rem' }}>About Us</p>
          <h1>
            Helping businesses <span className="highlighted-text">succeed</span> through the power of video.
          </h1>
          <p>
            Video is the future of business in this digital-focused world. Vidyard uses video to change the way companies
            connect and communicate. We help organizations of all sizes humanize their communications and personalize
            their customer experiences.
          </p>
          <button>Sign Up for Free</button>
        </div>
        <div className="about-image">
          <div className="image-shape-wrapper" aria-label="A young woman working on a laptop in a creative office with colorful wall art behind her">
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/066711cc-742d-47e7-9a5c-2eb3b2dd36c3.png" alt="Photo of a young woman sitting on a black chair at a desk working on a laptop with colorful machinery illustrations on a white wall behind her in a bright modern office space" onError={e => { e.target.style.display = 'none'; }} />
            <div className="blob-bg-1"></div>
            <svg className="blob-dots" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <circle cx="5" cy="5" r="2.5" fill="#254139"/>
              <circle cx="15" cy="10" r="2.5" fill="#254139"/>
              <circle cx="25" cy="20" r="2.5" fill="#254139"/>
              <circle cx="35" cy="15" r="2.5" fill="#254139"/>
              <circle cx="45" cy="20" r="2.5" fill="#254139"/>
              <circle cx="55" cy="30" r="2.5" fill="#254139"/>
              <circle cx="65" cy="25" r="2.5" fill="#254139"/>
              <circle cx="75" cy="30" r="2.5" fill="#254139"/>
              <circle cx="85" cy="40" r="2.5" fill="#254139"/>
              <circle cx="95" cy="35" r="2.5" fill="#254139"/>
            </svg>
          </div>
        </div>
      </div>
      <h1>Meeet the team!</h1>
      <p className="subtitle">Meet our diverse team of world-class creators, designers and problem solvers.</p>
      <div className="team-grid">
        {/* Team Member 1 */}
        <div className="team-card">
          <div className="photo-wrapper">
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7168ae0-e418-4c97-840d-ae1f8969d7f9.png" alt="Portrait of Lilly Hammond with folded arms, wearing orange shirt" onError={e => { e.target.onerror = null; e.target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9485b140-4110-4616-80ea-880a951eea34.png'; }} />
          </div>
          <div className="team-name">Lilly Hammond</div>
          <div className="role-badge">Junior Designer</div>
          <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
          <div className="social-links">
            <a href="#" title="Twitter"><svg className="social-icon" viewBox="0 0 24 24"><path d="M23.95 4.57a10 10 0 01-2.83.78 4.93 4.93 0 002.16-2.72 9.865 9.865 0 01-3.13 1.2 4.916 4.916 0 00-8.37 4.48A13.937 13.937 0 011.67 3.15a4.92 4.92 0 001.52 6.56 4.9 4.9 0 01-2.23-.62v.06a4.91 4.91 0 003.94 4.81 4.9 4.9 0 01-2.22.08 4.918 4.918 0 004.6 3.41A9.864 9.864 0 010 19.54a13.94 13.94 0 007.53 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63a9.94 9.94 0 002.44-2.54z"/></svg></a>
            <a href="#" title="LinkedIn"><svg className="social-icon" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .8 0 1.78v20.44C0 23.2.79 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.78V1.78C24 .8 23.21 0 22.23 0zM7.06 20.46H3.54V9h3.52v11.46zM5.3 7.53a2.03 2.03 0 010-4.07c1.12 0 2.03.9 2.03 2.03a2.02 2.02 0 01-2.03 2.04zm15.16 12.93h-3.52v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.54-2.26 3.13v5.98H9.46V9h3.38v1.57h.05c.47-.9 1.61-1.85 3.31-1.85 3.54 0 4.2 2.33 4.2 5.37v6.92z"/></svg></a>
            <a href="#" title="Behance"><svg className="social-icon" viewBox="0 0 24 24"><path d="M22 9.14a7.9 7.9 0 01-2.43.68 7.76 7.76 0 011.47 4.23 7.87 7.87 0 01-7.86 7.86A7.96 7.96 0 014 14.5v-1a7.9 7.9 0 012.33-5.9 7.76 7.76 0 012.57-1.76 7.85 7.85 0 0110.35 2.3zm-2.44 1.52h-1.7v4.47h1.7a4.72 4.72 0 000-4.47zm-5.38-1.34a2.42 2.42 0 00-2.44 2.44 2.4 2.4 0 001.68 2.31 2.43 2.43 0 01-1.22.32H6.37v-7h5.81a2.42 2.42 0 011.73.93 2.4 2.4 0 01.67 1.59 2.43 2.43 0 01-2.3 2.43zm-2.28-1.47v3.09h2.15a1.43 1.43 0 100-3.09z"/></svg></a>
          </div>
        </div>
        {/* Team Member 2 */}
        <div className="team-card">
          <div className="photo-wrapper">
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7b20e464-83d7-48c7-851c-74c0bd24b55e.png" alt="Portrait of William Hill" onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200?text=No+Image'; }} />
          </div>
          <div className="team-name">William Hill</div>
          <div className="role-badge">Project Manager</div>
          <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
          <div className="social-links">
            <a href="#" title="Twitter"><svg className="social-icon" viewBox="0 0 24 24"><path d="M23.95 4.57a10 10 0 01-2.83.78 4.93 4.93 0 002.16-2.72 9.865 9.865 0 01-3.13 1.2 4.916 4.916 0 00-8.37 4.48A13.937 13.937 0 011.67 3.15a4.92 4.92 0 001.52 6.56 4.9 4.9 0 01-2.23-.62v.06a4.91 4.91 0 003.94 4.81 4.9 4.9 0 01-2.22.08 4.918 4.918 0 004.6 3.41A9.864 9.864 0 010 19.54a13.94 13.94 0 007.53 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63a9.94 9.94 0 002.44-2.54z"/></svg></a>
            <a href="#" title="LinkedIn"><svg className="social-icon" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .8 0 1.78v20.44C0 23.2.79 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.78V1.78C24 .8 23.21 0 22.23 0zM7.06 20.46H3.54V9h3.52v11.46zM5.3 7.53a2.03 2.03 0 010-4.07c1.12 0 2.03.9 2.03 2.03a2.02 2.02 0 01-2.03 2.04zm15.16 12.93h-3.52v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.54-2.26 3.13v5.98H9.46V9h3.38v1.57h.05c.47-.9 1.61-1.85 3.31-1.85 3.54 0 4.2 2.33 4.2 5.37v6.92z"/></svg></a>
            <a href="#" title="Behance"><svg className="social-icon" viewBox="0 0 24 24"><path d="M22 9.14a7.9 7.9 0 01-2.43.68 7.76 7.76 0 011.47 4.23 7.87 7.87 0 01-7.86 7.86A7.96 7.96 0 014 14.5v-1a7.9 7.9 0 012.33-5.9 7.76 7.76 0 012.57-1.76 7.85 7.85 0 0110.35 2.3zm-2.44 1.52h-1.7v4.47h1.7a4.72 4.72 0 000-4.47zm-5.38-1.34a2.42 2.42 0 00-2.44 2.44 2.4 2.4 0 001.68 2.31 2.43 2.43 0 01-1.22.32H6.37v-7h5.81a2.42 2.42 0 011.73.93 2.4 2.4 0 01.67 1.59 2.43 2.43 0 01-2.3 2.43zm-2.28-1.47v3.09h2.15a1.43 1.43 0 100-3.09z"/></svg></a>
          </div>
        </div>
        {/* Team Member 3 */}
        <div className="team-card">
          <div className="photo-wrapper">
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/15045b36-039b-4685-a576-42dc7386c402.png" alt="Portrait of Joshua Woods" onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200?text=No+Image'; }} />
          </div>
          <div className="team-name">Joshua Woods</div>
          <div className="role-badge">Senior Designer</div>
          <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
          <div className="social-links">
            <a href="#" title="Twitter"><svg className="social-icon" viewBox="0 0 24 24"><path d="M23.95 4.57a10 10 0 01-2.83.78 4.93 4.93 0 002.16-2.72 9.865 9.865 0 01-3.13 1.2 4.916 4.916 0 00-8.37 4.48A13.937 13.937 0 011.67 3.15a4.92 4.92 0 001.52 6.56 4.9 4.9 0 01-2.23-.62v.06a4.91 4.91 0 003.94 4.81 4.9 4.9 0 01-2.22.08 4.918 4.918 0 004.6 3.41A9.864 9.864 0 010 19.54a13.94 13.94 0 007.53 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63a9.94 9.94 0 002.44-2.54z"/></svg></a>
            <a href="#" title="LinkedIn"><svg className="social-icon" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .8 0 1.78v20.44C0 23.2.79 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.78V1.78C24 .8 23.21 0 22.23 0zM7.06 20.46H3.54V9h3.52v11.46zM5.3 7.53a2.03 2.03 0 010-4.07c1.12 0 2.03.9 2.03 2.03a2.02 2.02 0 01-2.03 2.04zm15.16 12.93h-3.52v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.54-2.26 3.13v5.98H9.46V9h3.38v1.57h.05c.47-.9 1.61-1.85 3.31-1.85 3.54 0 4.2 2.33 4.2 5.37v6.92z"/></svg></a>
            <a href="#" title="Behance"><svg className="social-icon" viewBox="0 0 24 24"><path d="M22 9.14a7.9 7.9 0 01-2.43.68 7.76 7.76 0 011.47 4.23 7.87 7.87 0 01-7.86 7.86A7.96 7.96 0 014 14.5v-1a7.9 7.9 0 012.33-5.9 7.76 7.76 0 012.57-1.76 7.85 7.85 0 0110.35 2.3zm-2.44 1.52h-1.7v-4.47h1.7a4.72 4.72 0 000-4.47zm-5.38-1.34a2.42 2.42 0 00-2.44 2.44 2.4 2.4 0 001.68 2.31 2.43 2.43 0 01-1.22.32H6.37v-7h5.81a2.42 2.42 0 011.73.93 2.4 2.4 0 01.67 1.59 2.43 2.43 0 01-2.3 2.43zm-2.28-1.47v3.09h2.15a1.43 1.43 0 100-3.09z"/></svg></a>
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="features-image">
          <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53060b5e-d310-4826-b44b-79de3f49ef25.png" alt="Team collaborating" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 2px 8px rgba(47,64,102,0.07)' }} onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div className="features-content">
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why We’re The Best Match For Your Business!!</h1>
          <p style={{ color: '#fffafa', marginBottom: '2rem' }}>
            We offer you development, installation of complete software systems with excellent functionality, performance, and availability.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <div className="icon-wrapper">
                <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M11 3a1 1 0 012 0v1a1 1 0 11-2 0V3zM7.757 5.636a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 11h1a1 1 0 110 2H4a1 1 0 110-2zm7 7a4 4 0 100-8 4 4 0 000 8zm8.243-2.636a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM20 11h-1a1 1 0 100 2h1a1 1 0 100-2z" />
                </svg>
              </div>
              <p>Creative Work</p>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper">
                <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M12 8c-1.104 0-2 .896-2 2v3a1 1 0 11-2 0v-3a4 4 0 118 0v3a1 1 0 11-2 0v-3c0-1.104-.896-2-2-2z" />
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M6 18h12" />
                </svg>
              </div>
              <p>Best Price</p>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper">
                <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
                </svg>
              </div>
              <p>On Time Delivery</p>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper">
                <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M14 9l3 3m0 0l-3 3m3-3H9" />
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M7 18a8 8 0 1111-11" />
                </svg>
              </div>
              <p>Trusted by Many</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;