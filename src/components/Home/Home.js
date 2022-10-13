import React from 'react';
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { motion } from "framer-motion";

const Home = () => {
	

	return (
      <div className="home">     
	      		<div className="topOfPage">
	      		<div className="leftSide">
	      			<h1 style={{color: "purple"}}>Most Recent eBook!</h1>
	      			<img src="./Better.SleepEbook.png" 
	      				style={{height: "400px",
	      				 		width: "200px",
	      				 		border: "black 1px solid",
	      				 		borderRadius: "20px",
	      				 		}}/>
    				<Link id="white" style={{color: "purple"}} className="navLink" to="/projects">Subscribe For Free Version!</Link>
	      		</div>
	      		<div className="rightSide clearBox">
	      			 <p> Hi. I am Web-Developer and Health and Wellness Coach from Killeen Tx.
	      		  I write eBooks in my spare time talking about my research and what I have learned
	      		  in my time about Health and Happiness. 
	      		  I use Javascript to create incrediably efficent websites that are
	      		  beautiful or ("whatever the client wants, beauty is a spectrum :)").
	      		  I invite you to take a look at some of my work and my journey.
	      		  If you would like to hire me for work. Hit the contact button to 
	      		  for my contact information!
	      		</p>
	      		</div>
	      		<div>
	      		</div>
	      		</div>
	   		<div className="spacer" style={{width: "100vw"}}></div>
	     	<div className="midOfPage">
	      		<h1 className="neonText">My Favorite Tools</h1>	      		
	      		<ul>
	      			<li>Javascript</li>
	      			<li>React (JS Library)</li>
	      			<li>Node (Runtime Enviroment)</li>
	      			<li>MYSQL (DBMS) </li>
	      			<li>Canva</li>
	      			<li>Google Docs</li>
	      			<h3 className="neonText">Firebase (Web Services)</h3>
	      			<ul>
	      				<li>Firestore</li>
	      				<li>Storage</li>
	      				<li>Authentication</li>
	      			</ul>	
	      		</ul>	 
      	</div>
      		   		<div className="spacer" style={{width: "100vw"}}></div>
      	<h1 className="neonText" style={{marginTop: "100px"}}>Rates and Gigs...</h1>
      	<div className="bottomOfPage">
      		<div>
      			<h2 className="neonText">100 to 250 Dollars per Order</h2>
      		</div>
      		<div className="">
      			<a href="https://www.fiverr.com/derrielcollins?public_mode=true" target="_blank" rel="noreferrer" className="neonText"><h2>Fiver Gigs</h2></a>
      				<ul>
      					<li><a href="https://www.fiverr.com/share/yxK69G" target="_blank" rel="noreferrer" className="neonText">Simple Website Gig</a></li>
      					<li><a href="https://www.fiverr.com/share/V0x2El" target="_blank" rel="noreferrer" className="neonText">Website Debugger</a></li>
      				</ul>
      		</div>
      	</div>
      </div>
	);
}

export default Home;