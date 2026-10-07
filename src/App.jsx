import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <h2 className="logo">Harshitha</h2>

        <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
      </nav>

      <section id="home" className="home">
        <h1>Hi, I'm Harshitha 👋</h1>

        <h2>Computer Science Engineering Student</h2>

        <p>
          I am passionate about coding, web development, and learning new
          technologies.
        </p>

        <button>View My Projects</button>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>

        <p>
          I am a Computer Science Engineering student interested in software
          development, web technologies, and problem solving. I enjoy
          learning new technologies and building useful projects.
        </p>
      </section>
      <section id="skills" className="skills">
  <h2>My Skills</h2>

  <div className="skills-list">
    <span>Java</span>
    <span>Python</span>
    <span>C++</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>React</span>
    <span>SQL</span>
    <span>Git & GitHub</span>
  </div>
</section>
<section id="projects" className="projects">
  <h2>My Projects</h2>

  <div className="project-container">

    <div className="project-card">
      <h3>Online Voting System</h3>
      <p>
        A voting system developed using Java and MySQL to provide a simple
        and secure way to manage voting.
      </p>
      <span>Java • MySQL</span>
    </div>

    <div className="project-card">
      <h3>Personal Portfolio</h3>
      <p>
        A responsive personal portfolio website created to showcase my
        skills, projects, and learning journey.
      </p>
      <span>React • CSS</span>
    </div>

    <div className="project-card">
      <h3>AI Women's Health Assistant</h3>
      <p>
        An AI-based healthcare assistant concept designed to help users
        track symptoms and receive general health guidance.
      </p>
      <span>AI • React</span>
    </div>

  </div>
</section>
<section id="contact" className="contact">
  <h2>Contact Me</h2>

  <p>I'd love to connect with you!</p>

  <div className="contact-info">
    <p>📧 Email: harshithamd53@gmail.com</p>
    <p>💼 LinkedIn: linkedin.com/in/harshitha-m-d-59902832a</p>
    <p>🐙 GitHub: github.com/harshithamd-27</p>
  </div>
</section>
    </div>
  );
}

export default App;