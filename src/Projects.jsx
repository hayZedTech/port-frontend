import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Layout";
import { motion } from "framer-motion";
import { Modal } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/mystyle.css";

import cbt_image from "./Images/cbt_image.png";
import chat_img from "./Images/chat.jpg";
import ecommerce from "./Images/ecommerce.png";
import exam002 from "./Images/exam002.png";
import blog from "./Images/blog.png";

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProject, setActiveProject] = useState(1); // default project ID

  const projects = [
    {
      id: 1,
      title: "Exam App 1",
      desc: "Write your exams with ease.",
      img: cbt_image,
      link: "https://hayzed-exam.onrender.com",
      languages: ["HTML", "CSS", "JavaScript", "JQuery", "PHP", "Bootstrap", "PostgreSQL"],
    },

    {
      id: 2,
      title: "Exam App 2",
      desc: "Practice here.",
      img: exam002,
      link: "/Biology01",
      languages: ["HTML", "CSS", "React", "JavaScript", "Bootstrap"],
    },
    {
      id: 3,
      title: "Chat App",
      desc: "Chat with your friends in real-time.",
      img: chat_img,
      link: "https://chat-frontend-wslj.vercel.app/",
      languages: ["HTML", "CSS","React", "Node.js", "Express.js", "PostgreSQL", "Bootstrap"],
    },
    {
      id: 4,
      title: "Ecommerce Website",
      desc: "Shop with us anytime, anywhere.",
      img: ecommerce,
      link: "https://jimmarof.com",
      languages: ["HTML", "CSS", "PHP", "JavaScript", "Bootstrap", "JQuery", "MYSQL"],
    },

    {
      id: 5,
      title: "Blog Website",
      desc: "Visit Jimmarof Blog",
      img: blog,
      link: "https://jimmarof.com/jimmarof_blog/index.php",
      languages: ["HTML", "CSS", "PHP", "JavaScript", "Bootstrap", "JQuery", "MYSQL"],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const currentProject = projects.find((p) => p.id === activeProject);

  return (
    <>
      <section className="bg-light py-5">
        <h3 className="text-info text-center mb-4 fw-bold">MY PROJECTS</h3>

        <div className="container">
          <div className="row">
            {/* Sidebar for project names */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 h-100 p-3">
                <h5 className="fw-bold text-center text-primary mb-3">Projects</h5>
                <ul className="list-group">
                  {projects.map((project) => (
                    <li
                      key={project.id}
                      className={`list-group-item list-group-item-action ${
                        activeProject === project.id ? "active" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveProject(project.id)}
                    >
                      {project.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main project display */}
            <div className="col-md-8">
              {currentProject && (
                <motion.div
                  className="card shadow-lg border-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(currentProject)} // 🔹 open modal on click
                >
                  <motion.img
                    src={currentProject.img}
                    alt={currentProject.title}
                    className="card-img-top"
                    style={{ height: "180px", width:"100%", objectFit: "fill" }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="card-body text-center bg-primary rounded-bottom">
                    <h5 className="card-title fw-bold text-white">
                      {currentProject.title}
                    </h5>
                    <p className="card-text text-white">{currentProject.desc}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for project details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="img-fluid rounded mb-3"
              />
              <p>{selectedProject.desc}</p>
              <h6>Languages and Frameworks Used:</h6>
              <ul>
                {selectedProject.languages.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info"
              >
                Visit Project
              </a>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* <Footer /> */}
      <Outlet />
    </>
  );
};
