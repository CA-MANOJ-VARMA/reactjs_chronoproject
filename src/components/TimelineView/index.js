// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  displayChronoFunction = () => {
    const {timelineItemsList} = this.props
    return (
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachItem =>
          eachItem.categoryId === 'COURSE' ? (
            <CourseTimelineCard courseCard={eachItem} key={eachItem.id} />
          ) : (
            <ProjectTimelineCard projectCard={eachItem} key={eachItem.id} />
          ),
        )}
      </Chrono>
    )
  }

  render() {
    return (
      <div className="css-bg-container">
        <div className="css-bg-container-title">
          <h1>MY JOURNEY OF CCBP 4.0</h1>
        </div>
        <div className="css-chrono-container">
          {this.displayChronoFunction()}
        </div>
      </div>
    )
  }
}

export default TimelineView
