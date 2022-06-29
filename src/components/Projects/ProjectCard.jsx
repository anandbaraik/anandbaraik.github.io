import "./Projects.css";
function ProjectCard(
    {projectName,
    projectDescription,
    imageUrl,
    projectUrl}) {
  return (
    <div className="project-card">
        <div className="image-container">
            <a href={projectUrl}
                className="project-external-link"
                target="_blank"
                >
                <img src={imageUrl} 
                    alt={projectName}
                    className="project-image"
                    loading="lazy"
                    />
            </a>
        </div>
        <div className="project-details-container">
        <h2 className="project-heading">
            {projectName}
        </h2>
        <p className="project-details">
            {projectDescription}
        </p>
        <a href={projectUrl}
            className="project-live-link"
            target="_blank">
            View live
        </a>
        </div>
    </div>
  )
}

export default ProjectCard