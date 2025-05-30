import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  User,
  Briefcase,
  MessageSquare,
} from "lucide-react"; // Importing icons from lucide-react

// Main App component
function App() {
  const [currentPage, setCurrentPage] = useState("home"); // State to manage current active page

  // Function to render the active section based on currentPage state
  const renderSection = () => {
    switch (currentPage) {
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-inter antialiased">
      {/* Navigation Bar */}
      <nav className="bg-gray-950 p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Brand/Logo */}
          <div className="text-2xl font-bold text-indigo-400 mb-4 md:mb-0">
            YourName.dev
          </div>
          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <button
                onClick={() => setCurrentPage("home")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                  ${
                    currentPage === "home"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
              >
                <Code size={18} />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("about")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                  ${
                    currentPage === "about"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
              >
                <User size={18} />
                <span>About</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("projects")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                  ${
                    currentPage === "projects"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
              >
                <Briefcase size={18} />
                <span>Projects</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("contact")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                  ${
                    currentPage === "contact"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
              >
                <MessageSquare size={18} />
                <span>Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Render the current section */}
      <main className="container mx-auto p-8 py-12 md:py-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 p-6 text-center text-gray-400 mt-12 shadow-inner">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}

// Home Section Component (Hero)
const HomeSection = () => (
  <section
    id="home"
    className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] text-center p-6 bg-gray-800 rounded-xl shadow-2xl animate-fade-in"
  >
    <img
      src="https://placehold.co/150x150/6366f1/ffffff?text=Avatar" // Placeholder for your avatar
      alt="Your Avatar"
      className="w-36 h-36 rounded-full border-4 border-indigo-500 mb-6 object-cover shadow-lg"
    />
    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
      Hi, I'm <span className="text-indigo-400">Your Name</span>
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
      A passionate{" "}
      <span className="font-semibold text-indigo-300">
        [Your Profession/Specialty]
      </span>
      building engaging and user-friendly experiences.
    </p>
    <div className="flex space-x-4">
      <button
        onClick={() =>
          document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        View My Work
      </button>
      <button
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        Get In Touch
      </button>
    </div>
  </section>
);

// About Section Component
const AboutSection = () => (
  <section
    id="about"
    className="p-8 bg-gray-800 rounded-xl shadow-2xl animate-fade-in"
  >
    <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">
      About Me
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="text-lg text-gray-300 leading-relaxed">
        <p className="mb-4">
          Hello! I'm{" "}
          <span className="font-semibold text-indigo-300">Your Name</span>, a
          [Your Profession/Specialty] with X years of experience in [Your
          Field]. My journey in [Your Field] began with a fascination for
          [something that sparked your interest].
        </p>
        <p className="mb-4">
          I specialize in [list your key skills, e.g., front-end development,
          UI/UX design, data analysis, content creation], and I'm passionate
          about creating [what you love to create, e.g., intuitive user
          interfaces, impactful data visualizations, compelling narratives].
        </p>
        <p>
          When I'm not [working on your profession], you can find me [your
          hobbies/interests, e.g., hiking, reading sci-fi, experimenting with
          new recipes]. I'm always eager to learn new things and take on
          exciting challenges.
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <h3 className="text-2xl font-semibold text-white mb-2">My Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Python",
            "Figma",
            "SQL",
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-semibold text-white mt-6 mb-2">
          My Values
        </h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Continuous Learning</li>
          <li>Problem Solving</li>
          <li>User-Centric Design</li>
          <li>Collaboration</li>
        </ul>
      </div>
    </div>
  </section>
);

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description:
        "A web application built to streamline [specific process] for [target users]. Features include [key features].",
      imageUrl: "https://placehold.co/400x250/6366f1/ffffff?text=Project+Alpha", // Placeholder image
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Design Case Study: E-commerce Redesign",
      description:
        "Led the UI/UX redesign of an existing e-commerce platform, focusing on improving user flow and conversion rates.",
      imageUrl: "https://placehold.co/400x250/6366f1/ffffff?text=Project+Beta", // Placeholder image
      technologies: ["Figma", "User Research", "Prototyping"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Data Analysis Dashboard",
      description:
        "Developed an interactive dashboard to visualize sales data, providing key insights for business decision-makers.",
      imageUrl: "https://placehold.co/400x250/6366f1/ffffff?text=Project+Gamma", // Placeholder image
      technologies: ["Python", "Pandas", "Matplotlib", "Streamlit"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Mobile App Concept: Task Manager",
      description:
        "Designed and prototyped a mobile task management application with intuitive gestures and a clean interface.",
      imageUrl: "https://placehold.co/400x250/6366f1/ffffff?text=Project+Delta", // Placeholder image
      technologies: ["Figma", "Sketch", "Mobile UI/UX"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="p-8 bg-gray-800 rounded-xl shadow-2xl animate-fade-in"
    >
      <h2 className="text-4xl font-bold text-indigo-400 mb-10 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/400x250/6366f1/ffffff?text=Image+Error";
              }} // Fallback for broken images
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-colors duration-300"
                >
                  <Code size={16} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-colors duration-300"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => (
  <section
    id="contact"
    className="p-8 bg-gray-800 rounded-xl shadow-2xl animate-fade-in max-w-2xl mx-auto"
  >
    <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">
      Get In Touch
    </h2>
    <p className="text-lg text-gray-300 mb-8 text-center">
      Have a question or want to work together? Feel free to reach out!
    </p>
    <form className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-gray-300 text-sm font-bold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 transition-all duration-300"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-gray-300 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 transition-all duration-300"
          placeholder="youremail@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-gray-300 text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 transition-all duration-300 resize-y"
          placeholder="Your message..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
    <div className="mt-8 text-center">
      <p className="text-gray-300 text-lg mb-2">You can also find me on:</p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Github size={32} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Mail size={32} />
        </a>
      </div>
    </div>
  </section>
);

export default App;
