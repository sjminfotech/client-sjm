import React from 'react';
import Footer from './Footer'; // Make sure Footer.jsx is in the same folder or update path
import './Team.css'; // Optional: move the <style> block into this CSS file if desired

const teamMembers = [
  {
    name: 'Shekhar Kushwaha',
    role: 'Marketing Strategist',
    img: 'https://i.ibb.co/ZRYvDXc9/Whats-App-Image-2025-07-26-at-16-22-58-c96ccff1.jpg',
    desc: `Shekhar Kushwaha plays a vital role in leading marketing initiatives with a strategic mindset and a strong focus on brand visibility. Known for his creative campaigns and communication skills, he ensures outreach efforts connect with the right audience and drive meaningful engagement for the company’s growth.`,
  },
  {
    name: 'William Hill',
    role: 'Project Manager',
    img: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/581d1c44-8d4a-4eeb-a55e-43e092e74b0f.png',
    desc: `A Project Manager plays a key role in ensuring timely delivery, team coordination, and smooth execution of projects. They oversee the full workflow, track progress, and communicate clearly to keep everyone aligned and focused.`,
  },
  {
    name: 'Samarth Vashishtha',
    role: 'Senior Designer',
    img: 'https://i.ibb.co/ycB88wZf/Screenshot-2025-07-26-161340.png',
    desc: `Samarth Vashishtha is a highly creative and detail-oriented Senior Designer known for crafting visually stunning user interfaces and brand visuals. With a sharp eye for aesthetics and modern design trends, he brings ideas to life through clean layouts, bold color theory, and seamless user experience strategies.`,
  },
  {
    name: 'Maya Collins',
    role: 'Video Editor',
    img: 'https://i.ibb.co/5xsPQ1fd/Screenshot-2025-07-22-142027.png',
    desc: `Maya Collins is a skilled Video Editor with a creative eye for visual storytelling. She specializes in crafting engaging content for marketing, social media, and brand storytelling through cinematic cuts, transitions, and motion graphics.`,
  },
  {
    name: 'Om Prakash',
    role: 'Web Developer & UI Designer',
    img: 'https://placehold.co/200x200?text=Om+Prakash',
    desc: `Om Prakash is a passionate web developer and UI designer with strong expertise in HTML, CSS, JavaScript, React, and Tailwind CSS. He builds responsive, user-friendly websites and enjoys crafting clean front-end layouts for businesses and portfolios.`,
  },
  {
    name: 'Sophia Li',
    role: 'Content Strategist',
    img: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7e9b927c-b6ab-4895-b360-d81dacea5105.png',
    desc: `Sophia Li is a dedicated Content Strategist with a sharp vision for crafting purposeful digital narratives. She leads content planning, marketing alignment, and audience engagement strategies to ensure each message delivers real impact.`,
  },
];

const SocialIcons = () => (
 <div className="social-links">
            <a href="#" title="Twitter">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M23.95 4.57a10 10 0 01-2.83.78 4.93 4.93 0 002.16-2.72 9.865 9.865 0 01-3.13 1.2 4.916 4.916 0 00-8.37 4.48A13.937 13.937 0 011.67 3.15a4.92 4.92 0 001.52 6.56 4.9 4.9 0 01-2.23-.62v.06a4.91 4.91 0 003.94 4.81 4.9 4.9 0 01-2.22.08 4.918 4.918 0 004.6 3.41A9.864 9.864 0 010 19.54a13.94 13.94 0 007.53 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63a9.94 9.94 0 002.44-2.54z" />
              </svg>
            </a>
            <a href="#" title="LinkedIn">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .8 0 1.78v20.44C0 23.2.79 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.78V1.78C24 .8 23.21 0 22.23 0zM7.06 20.46H3.54V9h3.52v11.46zM5.3 7.53a2.03 2.03 0 010-4.07c1.12 0 2.03.9 2.03 2.03a2.02 2.02 0 01-2.03 2.04zm15.16 12.93h-3.52v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.54-2.26 3.13v5.98H9.46V9h3.38v1.57h.05c.47-.9 1.61-1.85 3.31-1.85 3.54 0 4.2 2.33 4.2 5.37v6.92z" />
              </svg>
            </a>
            <a href="#" title="Behance">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M22 9.14a7.9 7.9 0 01-2.43.68 7.76 7.76 0 011.47 4.23 7.87 7.87 0 01-7.86 7.86A7.96 7.96 0 014 14.5v-1a7.9 7.9 0 012.33-5.9 7.76 7.76 0 012.57-1.76 7.85 7.85 0 0110.35 2.3zm-2.44 1.52h-1.7v4.47h1.7a4.72 4.72 0 000-4.47zm-5.38-1.34a2.42 2.42 0 00-2.44 2.44 2.4 2.4 0 001.68 2.31 2.43 2.43 0 01-1.22.32H6.37v-7h5.81a2.42 2.42 0 011.73.93 2.4 2.4 0 01.67 1.59 2.43 2.43 0 01-2.3 2.43zm-2.28-1.47v3.09h2.15a1.43 1.43 0 100-3.09z" />
              </svg>
            </a>
          </div>
);

const TeamMemberCard = ({ name, role, img, desc }) => (
  <article className="card-bg" role="listitem" tabIndex="0" aria-label={`${name}, ${role}`}>
    <img
      src={img}
      alt={`Portrait of ${name}`}
      className="profile-pic"
      loading="lazy"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/150x150?text=No+Image';
      }}
    />
    <h3 className="name">{name}</h3>
    <div className="role-badge">{role}</div>
    <p className="description">{desc}</p>
    <SocialIcons />
  </article>
);

const MeetTheTeam = () => {
  return (
    <section aria-labelledby="team-heading" role="region">
      <h2 id="team-heading" className="text-3xl font-semibold text-center">
        Meeet the team!
      </h2>
      <div className="underline-bar" aria-hidden="true"></div>
         <p className="subtitle">
        Meet our diverse team of world-class creators, designers and problem
        solvers.
      </p>


      <div className="team-grid" role="list">
        {teamMembers.map((member, idx) => (
          <TeamMemberCard key={idx} {...member} />
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
