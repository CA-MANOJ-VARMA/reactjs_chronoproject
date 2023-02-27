// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseCard} = props

  //   console.log(courseCard)
  return (
    <div className="css-coursetimelinecard-container">
      <div className="css-title-icon-container">
        <h1>{courseCard.courseTitle}</h1>
        <div className="css-icon-container">
          <AiFillClockCircle />
          <p>{courseCard.duration}</p>
        </div>
      </div>
      <p>{courseCard.description}</p>
      <ul className="css-tag-ul-container">
        {courseCard.tagsList.map(eachTag => (
          <li key={eachTag.id}>
            <div className="css-eachTag-container">
              <p>{eachTag.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
