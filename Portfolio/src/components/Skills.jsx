const skillsData = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma', 'Agile']
  }
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          {skillsData.map((skillSet, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{skillSet.category}</h3>
              <div className="skill-items">
                {skillSet.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
