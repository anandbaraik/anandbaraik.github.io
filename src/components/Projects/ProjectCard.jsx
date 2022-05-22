import "./Projects.css";
function ProjectCard(
    {projectName,
    projectDescription,
    imageUrl,
    videoUrl,
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
        <a href={videoUrl}
            className="project-yt-link"
            target="_blank">
            Watch more!
        </a>
        </div>
    </div>
  )
}

export default ProjectCard