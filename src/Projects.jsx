import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Footer } from "./Layout";
import { motion } from "framer-motion";
import { Modal } from "react-bootstrap"; // using Bootstrap modal
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/mystyle.css";

import cbt_image from "./Images/cbt_image.png";
import chat_img from "./Images/chat_img.jpg";
import ecommerce from "./Images/ecommerce.png";

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Exam Page",
      desc: "Write your exams with ease.",
      img: cbt_image,
      link: "/biology01",
      languages: ["HTML", "CSS", "React", "JavaScript", "Bootstrap"],
    },
    {
      id: 2,
      title: "Chat App",
      desc: "Chat with your friends in real-time.",
      img: chat_img,
      link: "https://chat-frontend-wslj.vercel.app/",
      languages: ["HTML", "CSS","React", "Node.js", "Express.js", "PostgreSQL", "Bootstrap"],
    },
    {
      id: 3,
      title: "Ecommerce Website",
      desc: "Shop with us anytime, anywhere.",
      img: ecommerce,
      link: "https://jimmarof.com",
      languages: ["HTML", "CSS", "PHP", "JavaScript", "Bootstrap", "JQuery", "MYSQL"],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <>
      <section className=" bg-light py-5">
        <h3 className="text-info text-center mb-5 fw-bold">
          MY PROJECTS
        </h3>

        <div className="container">
          {/* Added gy-5 for vertical spacing between rows */}
          <div className="row gy-5 gx-4 proj_cards">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="col-12 col-sm-6 col-md-4 mb-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05, zIndex:50 }}
              >
                <motion.div
                  className="card shadow-lg border-0 h-100"
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(project)}
                >
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="card-img-top"
                    whileInView={{boxShadow:"0 0 20px 3px grey"}}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <motion.div className="card-body text-center bg-primary rounded"
                     whileInView={{boxShadow:"0 0 20px 3px grey"}}
                  >
                    <h5 className="card-title fw-bold text-white">
                      {project.title}
                    </h5>
                    <p className="card-text text-white">{project.desc}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
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

      <Footer />
      <Outlet />
    </>
  );
};
