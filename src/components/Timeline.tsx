import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="06/2024 - 08/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Summer Software Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Nationwide IT Services | Fairfax, VA</h4>
            <ul>
              <li>Built the NIS website independently and collaboratively with mentors and an agile team leveraging DevSecOps and Drupal CMS, achieving a resilient and compliant platform that improved development efficiency and reduced operational risk.</li>
              <li>Styled and developed reusable software assets including forms, heroes, and galleries applying HTML, CSS, Sass, and responsive design techniques, resulting in a modern user experience optimized for engagement and 50A compliance.</li>
            </ul>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="06/2023 - 08/2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Summer Software Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Space Telescope Science Institute | Baltimore, MD</h4>
            <ul>
              <li>Collaborated with a team  and worked independently to develop and optimize the STScI MAST Moving Targets interface by building dynamic Vue.js front-end components and connecting them to large-scale astronomical datasets, enhancing data retrieval workflows for end users.</li>
              <li>Refactored monolithic codebase into reusable, modular Vue.js components, reducing  code redundancy, improving maintainability and consistency with guidance from mentors.</li>
              <li>Integrated JPL Horizons API to visualize and query space telescope data in real time, enabling researchers to extract actionable insights efficiently.</li>
              <li>Revamped the user interface by blending advanced front-end technologies with scientific data visualization with the guidance of a UI/UX designer to promote engagement and accessibility.</li>
            </ul>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement> */}
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;