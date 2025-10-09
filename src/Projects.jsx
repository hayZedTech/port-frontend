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
import stripe_dashboard from "./Images/stripe_dashboard.png"; 
import vibestream from "./Images/vibestream.png";

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProject, setActiveProject] = useState(1); // default project ID

  const projects = [
    
    {
      id: 1,
      title: "Chat App",
      desc: "A lightweight and fully featured real-time chat application built with React for the frontend, Node.js + Express for the backend, and PostgreSQL for data storage. It includes features such as real-time messaging with Socket.IO (both public and private), optimistic UI updates for instant feedback, message delivery and read receipts, inline reply and message editing/deleting, emoji reactions, file and image uploads with previews and progress tracking, and voice note recording and playback. The app also supports browser notifications with sound alerts, typing indicators, online presence tracking, grouped messages by date, auto-resizing message input, media previews and downloads, and graceful socket reconnection. Styled with Bootstrap for a clean, responsive, and accessible interface.",
      img: chat_img,
      link: "https://chat-realtime-front.vercel.app/",
      languages: [
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Bootstrap",
        "Socket.IO",
        "Axios",
        "Web Audio API / MediaRecorder",
        "React Icons"
      ]
    },

    {
      id: 2,
      title: "Realtime Vibestream App",
      desc: "A real-time social media platform with private and group chat, instant notifications, and conversation management. Built with React for the frontend and Node.js + Express for backend APIs. Integrated Socket.io for real-time messaging and MongoDB for scalable data storage. Deployed seamlessly on Vercel (frontend) and Render (backend).",
      img: vibestream,
      link: "https://vibestream-frontend-beige.vercel.app/",
      languages: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB", "Bootstrap", "Socket.io"],
    },
    
    {
      id: 3,
      title: "Exam App 1",
      desc: "An interactive exam practice platform where students can take subject-based quizzes. Built with React for a smooth user experience, Bootstrap for design, and JavaScript for quiz logic. Focused on accessibility, fast performance, and reusability for different exam subjects.",
      img: exam002,
      link: "/Biology01",
      languages: ["HTML", "CSS", "React", "JavaScript", "Bootstrap"],
    },

    {
      id: 4,
      title: "Exam App 2",
      desc: "A computer-based testing (CBT) platform designed for conducting online exams. Built with PHP and PostgreSQL for backend management, JavaScript and jQuery for interactive features, and Bootstrap for layout. Supports secure question rendering and student submissions with responsive UI.",
      img: cbt_image,
      link: "https://hayzed-exam.onrender.com",
      languages: ["HTML", "CSS", "JavaScript", "JQuery", "PHP", "Bootstrap", "PostgreSQL"],
    },

    {
      id: 5,
      title: "Ecommerce Website",
      desc: "A fully functional ecommerce website where users can browse products, add to cart, and purchase online. Built with PHP and MySQL for backend, Bootstrap and jQuery for frontend interactivity, and responsive layouts for a smooth shopping experience. Deployed as a production website for real users.",
      img: ecommerce,
      link: "https://jimmarof.com",
      languages: ["HTML", "CSS", "PHP", "JavaScript", "Bootstrap", "JQuery", "MYSQL"],
    },

    {
      id: 6,
      title: "Blog Website",
      desc: "A dynamic blog platform allowing users to read and interact with published articles. Developed using PHP and MySQL for backend content management, Bootstrap for design, and jQuery + JavaScript for interactivity. Features include multiple blog categories, clean UI, and responsive design.",
      img: blog,
      link: "https://jimmarof.com/jimmarof_blog/index.php",
      languages: ["HTML", "CSS", "PHP", "JavaScript", "Bootstrap", "JQuery", "MYSQL"],
    },

    {
      id: 7,
      title: "Multi-Tenant SaaS Billing Dashboard",
      desc: "Developed a full-featured multi-tenant SaaS dashboard with subscription management and Stripe integration. Implements role-based access control, real-time project management, and secure API endpoints. Users can create projects, manage subscriptions, and perform payments via Stripe Checkout. Built with React, Node.js, Express, PostgreSQL, and Bootstrap, demonstrating full-stack expertise.",
      img: stripe_dashboard,
      link: "https://saas-billing-frontend.vercel.app",
      languages: ["HTML", "CSS", "React", "Node.js", "Express.js", "PostgreSQL", "Bootstrap", "Stripe API"],
    }
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
                    {/* 🔹 Truncate description here */}
                    <p className="card-text text-white">
                      {currentProject.desc.length > 100
                        ? currentProject.desc.slice(0, 100) + "..."
                        : currentProject.desc}
                    </p>
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
              {/* 🔹 Full description shown here */}
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
