import { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.',
    tech: ['React', 'Firebase', 'Material-UI'],
    link: '#',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'AI-powered tool for generating marketing content, blog posts, and social media content with advanced customization.',
    tech: ['Next.js', 'OpenAI API', 'Tailwind CSS'],
    link: '#',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness application with workout plans, nutrition tracking, and progress visualization.',
    tech: ['React Native', 'Redux', 'Express'],
    link: '#',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of my recent work</p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-card ${hoveredId === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="btn btn-primary">View Project</a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
