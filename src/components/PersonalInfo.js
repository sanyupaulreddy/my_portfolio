import React from 'react';

const PersonalInfo = () => (
  <div className="personal-info-card">
    <div className="info-content">
      {/* 🔥 Animated masked text for name */}
      <h1 className="neon-text">SANYU PAUL REDDY SINGAREDDY</h1>


      <div className="contact-item">
        <img src={`${process.env.PUBLIC_URL}/assets/gmail_logo.png`} alt="Gmail" />
        <a href="mailto:sanyu.p.singareddy@gmail.com">sanyu.p.singareddy@gmail.com</a>
      </div>
      <div className="contact-item">
        <img src={`${process.env.PUBLIC_URL}/assets/linkedin_logo.png`} alt="LinkedIn" />
        <a
          href="https://www.linkedin.com/in/sanyu-paul-reddy-singareddy-4a5aab2b7/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn Profile
        </a>
      </div>
      <div className="contact-item">
        <img src={`${process.env.PUBLIC_URL}/assets/git_logo.png`} alt="GitHub" />
        <a href="https://github.com/sanyupaulreddy" target="_blank" rel="noreferrer">
          GitHub Profile
        </a>
      </div>
      <p className="objective">
        Motivated computer science student with strong skills in programming, Database management,
        and Salesforce development, seeking a software development role to apply technical knowledge
        and problem-solving abilities. Known for being hardworking and eager to learn in a dynamic work
        environment.
      </p>
    </div>
    <div className="profile-image">
      <img src={`${process.env.PUBLIC_URL}/assets/Profile.png`} alt="Profile" />
    </div>
  </div>
);

export default PersonalInfo;
