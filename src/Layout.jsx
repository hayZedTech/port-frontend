import { Outlet, Link } from "react-router-dom";

// import "./dist/aos.css";
// import "./dist/aos.css";


export const Layout = () => {
  return (
    <>
    {/* <h1>Layout</h1> */}

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top " id="my_nav">
    <div className="container-fluid">
        <div className="navbar-brand" href="#">Azeez</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ul_link">
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/skills">Skills</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/contacts">Contacts</Link>
            </li>

        </ul>
        </div>
    </div>
    </nav>
    

    <Outlet />
   {/* {AOS.init()}; */}
    </>
  )
}


export const Footer=()=>{
  return(
    <>
     <footer className="bg-black mt-5 mb-0">
      <p className="text-white text-center py-3  h6">Developed by Azeez Ololade &copy;2025</p>
      </footer>
    </>
  )
}
