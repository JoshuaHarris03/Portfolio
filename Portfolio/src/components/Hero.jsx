function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Your Name</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer & Designer</p>
          <p className="hero-description">
            I craft beautiful, functional web experiences with a focus on clean code and intuitive design.
            Passionate about building products that make a difference.
          </p>
          <div className="hero-actions">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
