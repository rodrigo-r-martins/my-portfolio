import React from 'react';
import './AboutMe.css';
import resumeData from '../../utils/resumeData';
import CustomTimeline from '../CustomTimeline/CustomTimeline';

const AboutMe = () => {
  return (
    <div id="aboutMe">
      <section className="aboutMe__title">
        <h1>About Me</h1>
        <h3>Hello There!</h3>
      </section>
      <section className="aboutMe__text">
        <p>
          { resumeData.aboutMe } 
        </p>
      </section>
      <section className="aboutMe__specs">
        <div>
          <label>Birthday: </label>
          <span>{ resumeData.birthday }</span>
        </div>
        <div>
          <label>Hometown: </label>
          <span>{ resumeData.hometown }</span>
        </div>
        <div>
          <label>Living In: </label>
          <span>{ resumeData.livingIn }</span>
        </div>
        <div>
          <label>Hobbies: </label>
          <span>
            { resumeData.hobbies.map((hobby) => hobby).join(', ') }
          </span>
        </div>
      </section>
      <section className="aboutMe__skills">
        <h1>Technical Skills</h1>
        <div className="aboutMe__skillsDetails">
          <div>
            <h3>Programming Languages</h3>
            { resumeData.technicalSkills.programmingLanguages.map((language, index) => 
              (
                <p key={ index }>{ language }</p>
              )
            )}
          </div>
          <div>
            <h3>Web / Mobile Applications</h3>
            { resumeData.technicalSkills.webMobileApplications.map((skill, index) => 
              (
                <p key={ index }>{ skill }</p>
              )
            )}
          </div>
          <div>
            <h3>Data Science / ML</h3>
            { resumeData.technicalSkills.dataScienceMl.map((skill, index) => 
              (
                <p key={ index }>{ skill }</p>
              )
            )}
          </div>
          <div>
            <h3>Database / Cloud</h3>
            { resumeData.technicalSkills.databaseCloud.map((skill, index) => 
              (
                <p key={ index }>{ skill }</p>
              )
            )}
          </div>
        </div>
      </section>
      <section className="aboutMe__eduWork">
        <div>
          <h1>Education</h1>
          <CustomTimeline 
            data={ resumeData.education } 
            target="education"
          />
        </div>
        <div>
          <h1>Experience</h1>
          <CustomTimeline 
            data={ resumeData.experience }
            target="experience"
          />
        </div>
      </section>
    </div>
  )
}

export default AboutMe;
