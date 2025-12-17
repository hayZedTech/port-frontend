import { useState } from "react";
import { Outlet } from "react-router-dom";
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
import expenses from "./Images/expenses.png"; 
import award from "./Images/award.png"; 

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProject, setActiveProject] = useState(1); // default project ID

  const projects = [
    {
      id: 1,
      title: "Chat App",
      desc: "A lightweight and fully featured real-time chat application built with React for the frontend, Node.js + Express for the backend, and PostgreSQL for data storage. It includes features such as real-time messaging with Socket.IO (both public and private), optimistic UI updates for instant feedback, message delivery and read receipts, inline reply and message editing/deleting, emoji reactions, file and image uploads with previews and progress tracking, and voice note recording and playback.",
      img: chat_img,
      link: "https://chat-realtime-front.vercel.app/",
      languages: ["HTML", "CSS", "React", "Node.js", "Express.js", "PostgreSQL", "Bootstrap", "Socket.IO", "Axios"]
    },
    {
      id: 2,
      title: "Expense Management Dashboard",
      desc: "A responsive expense tracking dashboard built with React, TypeScript, and Supabase. Features include CRUD operations for budgets and expenses, category-based charts using Recharts, and smooth UI interactions with Framer Motion and SweetAlert2.",
      img: expenses,
      link: "https://expenses-tracker-swart-eight.vercel.app/",
      languages: ["React", "TypeScript", "Supabase", "Recharts", "Framer Motion", "SweetAlert2", "Tailwind", "Vite", "Zustand"]
    },
    {
      id: 3,
      title: "Exam App 1",
      desc: "An interactive exam practice platform where students can take subject-based quizzes. Built with React for a smooth user experience, Bootstrap for design, and JavaScript for quiz logic.",
      img: exam002,
      link: "/Biology01",
      languages: ["HTML", "CSS", "React", "JavaScript", "Bootstrap"],
    },
    {
      id: 4,
      title: "Exam App 2",
      desc: "A computer-based testing (CBT) platform designed for conducting online exams. Built with PHP and PostgreSQL for backend management, JavaScript and jQuery for interactive features, and Bootstrap for layout.",
      img: cbt_image,
      link: "https://hayzed-exam.onrender.com",
      languages: ["HTML", "CSS", "JavaScript", "JQuery", "PHP", "Bootstrap", "PostgreSQL"],
    },
    {
      id: 5,
      title: "Ecommerce Website",
      desc: "A fully functional ecommerce website where users can browse products, add to cart, and purchase online. Built with PHP and MySQL for backend, Bootstrap and jQuery for frontend interactivity.",
      img: ecommerce,
      link: "https://jimmarof.com",
      languages: ["HTML", "CSS", "PHP", "JavaScript", "Bootstrap", "JQuery", "MYSQL"],
    },
    {
      id: 6,
      title: "Blog Website",
      desc: "A dynamic blog platform allowing users to read and interact with published articles. Developed using PHP and MySQL for backend content management, Bootstrap for design, and jQuery + JavaScript for interactivity.",
      img: blog,
      link: "https://jimmarof.com/jimmarof_blog/index.php",
      languages: ["HTML", "CSS", "PHP", "JavaScript", "Bootstrap", "JQuery", "MYSQL"],
    },
    {
      id: 7,
      title: "Multi-Tenant SaaS Billing Dashboard",
      desc: "Developed a full-featured multi-tenant SaaS dashboard with subscription management and Stripe integration. Implements role-based access control, real-time project management, and secure API endpoints.",
      img: stripe_dashboard,
      link: "https://saas-billing-frontend.vercel.app",
      languages: ["HTML", "CSS", "React", "Node.js", "Express.js", "PostgreSQL", "Bootstrap", "Stripe API"],
    },
    {
      id: 8,
      title: "Realtime Vibestream App",
      desc: "A real-time social media platform with private and group chat, instant notifications, and conversation management. Integrated Socket.io for real-time messaging and MongoDB for scalable data storage.",
      img: vibestream,
      link: "https://vibestream-frontend-beige.vercel.app/",
      languages: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB", "Bootstrap", "Socket.io"],
    },
    {
      id: 9,
      title: "Elite Award Nomination System",
      desc: "A sophisticated real-time voting platform featuring a secure administrative dashboard, live result tallying with automated tie-detection, and a high-fidelity 'glowing' light UI designed for prestigious ceremonies.",
      img: award,
      link: "https://awards-theta-eight.vercel.app/",
      languages: ["React", "Supabase", "Tailwind CSS", "Lucide React", "SweetAlert2"],
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // 🔹 Logic: Update active project on all screens, but trigger modal only on mobile (< 768px)
  const handleProjectClick = (project) => {
    setActiveProject(project.id);
    if (window.innerWidth < 768) {
      openModal(project);
    }
  };

  const currentProject = projects.find((p) => p.id === activeProject);

  return (
    <>
      <section className="bg-light py-4">
        <h3 className="text-info text-center mb-3 fw-bold">MY PROJECTS</h3>

        <div className="container">
          <div className="row">
            {/* Sidebar for project names */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 h-100 p-3">
                <ul className="list-group">
                  {projects.map((project) => (
                    <li
                      key={project.id}
                      className={`list-group-item list-group-item-action py-2 h6 ${
                        activeProject === project.id ? "active" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleProjectClick(project)} // 🔹 Updated handler
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
                  key={currentProject.id} // Added key to trigger animation on project change
                  className="card shadow-lg border-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(currentProject)}
                >
                  <motion.img
                    src={currentProject.img}
                    alt={currentProject.title}
                    className="card-img-top"
                    style={{ height: "250px", width: "100%", objectFit: "cover" }}
                    whileHover={{ scale: 1.02 }}
                  />
                  <div className="card-body text-center bg-primary rounded-bottom">
                    <h5 className="card-title fw-bold text-white">
                      {currentProject.title}
                    </h5>
                    <p className="card-text text-white">
                      {currentProject.desc.length > 120
                        ? currentProject.desc.slice(0, 120) + "..."
                        : currentProject.desc}
                    </p>
                    <span className="badge bg-light text-primary">Click to Expand Details</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for project details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="fw-bold text-primary">{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="img-fluid rounded shadow mb-3 w-100"
              />
              <p className="lead">{selectedProject.desc}</p>
              <hr />
              <h6 className="fw-bold">Technologies Used:</h6>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {selectedProject.languages.map((lang, i) => (
                  <span key={i} className="badge bg-info text-dark">
                    {lang}
                  </span>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-100"
              >
                Launch Project Website
              </a>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <Outlet />
    </>
  );
};