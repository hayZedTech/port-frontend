import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { About } from "./About";
import { Services } from "./Services";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contacts } from "./Contacts";
import { Nopage } from "./Nopage";

import ResetPasswordRedirect from "./ResetPasswordRedirect";

import { AuthProvider } from "./AuthContext";
import { Biology01 } from "./exam/Biology01";
import { Ecommerce } from "./ecommerce/Ecommerce";

import "./css/mystyle.css";

export const MyPortFolioRouting = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="biology01" element={<Biology01 />} />
            <Route path="/reset-password" element={<ResetPasswordRedirect />} />
            
            {/* Ecommerce Nested Routing */}
            <Route path="ecommerce/*" element={<Ecommerce />} />

            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};
