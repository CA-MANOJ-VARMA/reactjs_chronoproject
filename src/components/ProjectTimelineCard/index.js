// Write your code here
import './index.css'
// import {Link} from 'react-router-dom'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectCard} = props

  console.log(projectCard)
  return (
    <div className="css-coursetimelinecard-container">
      <img
        src={projectCard.imageUrl}
        alt="project"
        className="css-projectCard-image-itself"
      />
      <div className="css-title-icon-container">
        <h1>{projectCard.projectTitle}</h1>
        <div className="css-icon-container">
          <AiFillCalendar />
          <p>{projectCard.duration}</p>
        </div>
      </div>
      <p>{projectCard.description}</p>
      {/* <Link to={projectCard.projectUrl}> */}
      <a href={projectCard.projectUrl}>Visit</a>
      {/* </Link> */}
    </div>
  )
}

export default ProjectTimelineCard
