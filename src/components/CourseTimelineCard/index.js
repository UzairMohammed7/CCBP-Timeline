import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <>
      <div className="course-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="icon-and-duration">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tagList">
        {tagsList.map(eachItem => (
          <li className="course-tagItem" key={eachItem.id}>
            <p className="tagName">{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
export default CourseTimelineCard
