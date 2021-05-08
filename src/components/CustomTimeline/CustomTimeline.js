import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import DateRangeIcon from '@material-ui/icons/DateRange';
import './CustomTimeline.css';

const CustomTimeline = ({ data, target }) => {
  return (
    <div>
      <Timeline className="aboutMe__timeline">
        { data.map((obj, index) => 
          (
            <TimelineItem key={ index } className="aboutMe__timelineItem">
              <TimelineSeparator className="aboutMe__timelineSeparator">
                <TimelineDot className="aboutMe__timelineDot"/>
                <TimelineConnector className="aboutMe__timelineConnector"/>
              </TimelineSeparator>
              <TimelineContent className="aboutMe__timelineContent">
                { target === "education" && 
                (
                  <>
                    <div>
                      <DateRangeIcon></DateRangeIcon>
                      <span>{ obj.date }</span>
                    </div>
                    <p><b>{ obj.school } - { obj.location }</b></p>
                    <p>{ obj.degree }, { obj.major }</p>
                    { obj.gpa && (
                      <p><b>GPA:</b> { obj.gpa }</p>
                    )}
                  </>
                )}
                { target === "experience" && 
                (
                  <>
                    <div>
                      <DateRangeIcon></DateRangeIcon>
                      <span>{ obj.period }</span>
                    </div>
                    <p><b>{ obj.company } - { obj.location }</b></p>
                    <p><b>{ obj.position }</b></p>
                    <p>{ obj.description }</p>
                  </>
                )}
              </TimelineContent>
            </TimelineItem>
          )
        )}
      </Timeline>
    </div>  
  )
}

export default CustomTimeline;