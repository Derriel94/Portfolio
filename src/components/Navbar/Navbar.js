import React from 'react';
import { Link } from "react-router-dom";


const Navbar = ( ) => {
	
	return (
		<div className="nav-bar">
			<div id="white" className="neonText">
				<Link id="white" className="navLink" to="/">Full-Stack Developer</Link>
			</div>
			<div>
				<Link id="white" className="navLink" to="/projects">Projects</Link>
			</div>
			<div>
				<Link id="white" className="navLink" to="/aboutme">My Journey</Link>
			</div>
				<div>
	      		  <Link id="white" to="/contact"className="navLink">Contact Me!</Link>
	      		</div>
		</div>
		);

}

export default Navbar;