import React from 'react';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Programming Languages',
      details: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ]
    },
    {
      category: 'Web Development',
      details: [
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'React JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
      ]
    },
    {
      category: 'Software/Tools',
      details: [
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'AutoCAD', logo: 'https://cdn-icons-png.flaticon.com/512/873/873107.png' }
      ]
    },
    {
      category: 'CRM Tools',
      details: [
        { name: 'Salesforce', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968914.png' }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>
      <ul className="skills-list">
        {technicalSkills.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-header">
              <strong className="skill-category">{skill.category}</strong>
            </div>
            <ul className="skill-details">
              {skill.details.map((detail, i) => (
                <li key={i} className="skill-detail">
                  <img src={detail.logo} alt={detail.name} className="skill-logo" />
                  {detail.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
