import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import "./Timeline.css"

const Timeline = ({title, data}) => {

    const iconMapping = {
        "WORK EXPERIENCE" : faBriefcase,
        "EDUCATION" : faGraduationCap
    };
    
    return (
        <div className = "section">
            <div className = "section-title"><div className = "timeline-icon"><FontAwesomeIcon icon={iconMapping[title]}/></div>{title}</div>
            <div className = "timeline">
            {Object.entries(data).map(([key,value]) => (
                <div>
                    <div className = "period" key={key}>
                        <div className = "time">{key}</div>
                        <div className = "information"> 
                            <h2><strong>{value[0]}</strong></h2>
                            <p>- {value[1]}</p>
                            <p>- {value[2]}</p>
                            <p>- {value[3]}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Timeline