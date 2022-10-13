import React from 'react';
import ProjectsList from './ProjectsList.js';
import './Projects.css'


const Projects = () => {
	return (
		<div className="projects">
				{ProjectsList.projects.map(({ project, id, projectUrl, projectName, desc, imgUrl } )=>{
					return (<div className="project" key={id}>
							<a href={projectUrl} target="_blank" rel="noreferrer" className="neonText">
								<h2 style={{color: "purple"}}>{projectName}</h2>
								<img src={process.env.PUBLIC_URL + imgUrl} alt="Project"/>
						   	</a>
						   		<div className="projectDesc" style={{color: "purple"}}>
						   			{desc}
						   		</div>
						   </div>);	
				})}       	   	
      	</div>
		);
}

export default Projects;