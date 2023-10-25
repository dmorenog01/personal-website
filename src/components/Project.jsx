import LinkArrow from "../assets/LinkArrow"
import GitHubLink from "../assets/GithubLink"

const Project = ({ project }) => {
    return (
      <article className="project">
        <div className="td">
          <h3>0{project.id} { project.name }</h3>
          <div style={{display: 'inline-flex', justifyContent: 'end', gap: '10px', alignItems: 'baseline'}}>
            <a href="#" style={{height: '18px'}}><LinkArrow/></a><a href="#" style={{height: '20px'}}><GitHubLink/></a>
          </div>
        </div>
        <p>{ project.description }</p>
        <p><b>Tech Stack:</b> {project.stack.join(", ") }.</p>
      </article>
    )
}

export default Project