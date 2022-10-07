import React from 'react';
import ProjectsList from './ProjectsList.js';
import './Projects.css'


const Projects = () => {
	return (
		<div className="projects">
				{ProjectsList.projects.map((project)=>{
					return (<div className="project">
							<a href={project.projectUrl} target="_blank" rel="noreferrer" className="neonText">
								<h2>{project.projectName}</h2>
								<img src={process.env.PUBLIC_URL + project.imgUrl} alt="Project"/>
						   	</a>
						   		<div className="projectDesc">
						   			{project.desc}
						   		</div>
						   </div>);	
				})}       	   	
      	</div>
		);
}

export default Projects;