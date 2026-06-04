import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend & Mobile Engine",
      icon: "💻",
      description: "Developing cross-platform applications and semantic, scalable web interfaces.",
      skills: [
        { name: "React / React.js", icon: "/icons/react1.png" },
        { name: "React Native & Expo", icon: "/icons/react1.png" },
        { name: "TypeScript / JavaScript", icon: "/icons/js1.png" },
        { name: "Next.js", icon: "/icons/next.png" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
        { name: "Material UI & Bootstrap", icon: "/icons/bootstrap1.png" },
        { name: "Zustand & Context API", icon: "/icons/state.png" }
      ]
    },
    {
      category: "Backend & Cloud Ecosystem",
      icon: "⚙️",
      description: "Architecting relational schemas, secure APIs, and server processing layers.",
      skills: [
        { name: "Python / Django", icon: "/icons/python.png" },
        { name: "Django REST Framework (DRF)", icon: "/icons/drf.png" },
        { name: "Node.js & Express.js", icon: "/icons/node.png" },
        { name: "PHP", icon: "/icons/php1.png" },
        { name: "PostgreSQL / MySQL", icon: "/icons/sql.png" },
        { name: "Supabase & Appwrite", icon: "/icons/supabase.png" },
        { name: "Render & Vercel Deployment", icon: "/icons/deploy.png" }
      ]
    },
    {
      category: "Engineering Workflows & Mentorship",
      icon: "👥",
      description: "Managing code distribution platforms and technical student tracks.",
      skills: [
        { name: "Git & GitHub Version Control", icon: "/icons/git.png" },
        { name: "RESTful API Architecture", icon: "/icons/api.png" },
        { name: "Real-time Sync & WebSockets", icon: "/icons/socketio.png" },
        { name: "Hardware Integration (Barcode/Camera)", icon: "/icons/hardware.png" },
        { name: "Technical Mentorship & Teaching", icon: "/icons/mentorship.png" },
        { name: "Defensive Programming", icon: "/icons/security.png" }
      ]
    }
  ];

  const softSkills = [
    { title: "Technical Leadership", icon: "/icons/softskills/communication.svg" },
    { title: "Architectural Problem Solving", icon: "/icons/softskills/problem_solving.svg" },
    { title: "Team Collaboration & Review", icon: "/icons/softskills/teamwork.svg" },
    { title: "Scalable Thinking", icon: "/icons/softskills/creativity.svg" }
  ];

  return (
    <section id="skills-portfolio" className="bg-light py-5 min-vh-100" style={{ fontFamily: "inherit" }}>
      <div className="container px-4 px-md-5">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="text-dark fw-bold position-relative d-inline-block pb-2">
            TECHNICAL CAPABILITIES
            <span 
              className="position-absolute bottom-0 start-50 translate-middle-x bg-info rounded" 
              style={{ height: "4px", width: "60px" }}
            ></span>
          </h2>
          <p className="text-muted mt-2">Verified stack proficiency across core development, system runtimes, and mobile architectures</p>
        </div>

        {/* Primary Technical Matrices Grid */}
        <div className="row g-4 justify-content-center">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="col-12 col-lg-4 d-flex" data-aos="fade-up">
              <div 
                className="card border-0 bg-white p-4 w-100 d-flex flex-column"
                style={{ 
                  borderRadius: "20px",
                  boxShadow: "0 10px 20px 5px rgba(0,0,0,0.4), 0 4px 16px -8px rgba(0,0,0,0.4)"
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <span className="fs-3 me-2">{cat.icon}</span>
                  <h4 className="text-dark fw-bold mb-0" style={{ fontSize: "1.25rem" }}>{cat.category}</h4>
                </div>
                <p className="text-secondary small mb-4">{cat.description}</p>
                
                {/* Tech Badges Container */}
                <div className="d-flex flex-wrap gap-2 mt-auto">
                  {cat.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="d-flex align-items-center bg-light border text-secondary px-3 py-2 rounded"
                      style={{ fontSize: "0.85rem", fontWeight: "500" }}
                      whileHover={{ 
                        scale: 1.03,
                        borderColor: "#0dcaf0",
                        backgroundColor: "#fff",
                        color: "#000",
                        transition: { duration: 0.15 }
                      }}
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        width="18" 
                        height="18"
                        className="me-2 object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }} // Fallback if icon isn't found
                      />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Core Values Section */}
        <div className="mt-5 pt-3">
          <h5 className="text-dark fw-bold text-center text-uppercase tracking-wider mb-4" style={{ fontSize: "0.9rem" }}>
            Operational Attributes
          </h5>
          <div className="row g-3 justify-content-center">
            {softSkills.map((sk, idx) => (
              <div key={idx} className="col-6 col-md-3" data-aos="fade-up" data-aos-delay={idx * 50}>
                <div 
                  className="card border-0 bg-white text-center p-3 h-100 d-flex flex-column align-items-center justify-content-center"
                  style={{ 
                    borderRadius: "14px",
                    boxShadow: "0 10px 20px 5px rgba(0,0,0,0.4), 0 4px 16px -8px rgba(0,0,0,0.4)"
                  }}
                >
                  <img src={sk.icon} alt={sk.title} width="26" className="mb-2 opacity-75" />
                  <h6 className="fw-semibold text-secondary mb-0 small">{sk.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};