import { motion } from "framer-motion";

export const About = () => {
  const engineeringPillars = [
    {
      title: "Frontend Architecture 🌐",
      desc: "Crafting highly responsive, semantic web interfaces utilizing React, TypeScript, and modern styling utilities like Tailwind CSS and Material UI. Focused on state management scalability (Zustand), fluid user interactions via Framer Motion, and absolute mobile responsiveness.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Bootstrap", "Framer Motion"]
    },
    {
      title: "Backend & Systems ⚙️",
      desc: "Architecting high-performance, secure server-side infrastructures. Experienced in designing production-grade APIs using Django REST Framework (DRF) with stateless JWT security layers and OpenAPI documentation, as well as scalable solutions with Node.js, PHP, PostgreSQL, and Supabase.",
      tech: ["Python", "Django / DRF", "Node.js", "PHP", "PostgreSQL", "Supabase", "JWT Auth"]
    },
    {
      title: "Mobile Engineering 📱",
      desc: "Building native-performance cross-platform mobile applications using React Native and Expo. Proficient in integrating hardware capabilities like high-speed barcode scanners, managing background device synchronization, and implementing real-time WebSockets via Appwrite.",
      tech: ["React Native", "Expo", "Appwrite", "Context API", "Native Performance"]
    }
  ];

  return (
    <section id="about-portfolio" className="bg-light py-5 min-vh-100" style={{ fontFamily: "inherit" }}>
      <div className="container px-4 px-md-5">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-dark fw-bold position-relative d-inline-block pb-2">
            ENGINEERING PROFILE
            <span 
              className="position-absolute bottom-0 start-50 translate-middle-x bg-info rounded" 
              style={{ height: "4px", width: "60px" }}
            ></span>
          </h2>
          <p className="text-muted mt-2">Bridging high-performance backend architecture with fluid client experiences</p>
        </div>

        {/* Core Professional Manifesto Box */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card border-0 bg-white p-4 p-md-5 mb-5"
          style={{ 
            borderRadius: "20px",
            boxShadow: "0 10px 20px 5px rgba(0,0,0,0.4), 0 4px 16px -8px rgba(0,0,0,0.4)"
          }}
        >
          <div className="row align-items-center">
            <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
              <span className="badge bg-info text-dark px-3 py-2 rounded-pill fw-bold mb-2">FULL STACK DEVELOPER & MENTOR</span>
              <h3 className="text-dark fw-bold display-6">Azeez Ololade</h3>
              <p className="text-muted mb-0">Specialized in robust, real-time architectures</p>
            </div>
            <div className="col-lg-8 border-start-lg">
              <p className="text-secondary fs-5 lh-base mb-0 ps-lg-4">
                I architect software systems across the entire technology layer, from designing modern user interfaces 
                to optimizing relational database management systems and server-side processing chains. By balancing defensive 
                programming with rapid execution, I build scalable web platforms, secure API documentation hubs, 
                and high-speed mobile solutions tailored for flawless production deployment.
              </p>
            </div>
          </div>
        </motion.div>
       
      </div>
    </section>
  );
};