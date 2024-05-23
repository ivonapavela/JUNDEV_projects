import Bar from "./Bar";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';

const Skill = () => {

    const skills = {
        "Super strenght": 100,
        "Flight": 90,
        "Freeze breath": 90,
        "Super speed": 80,
        "Invulnerability": 70,
        "X-Ray Vision": 50,
        "Super Hearing": 60
    };

    return (
        <div style = {{borderTop: " 1px solid #0B0B45", paddingLeft: "40px"}}>
            <div className = "section-title" style = {{marginLeft: "-40px"}}><div className = "timeline-icon"><FontAwesomeIcon icon={faComputerMouse}/></div>SKILLS</div>
            {Object.entries(skills).map(([skill, proficiency]) => (
                <div key={skill}><Bar skill={skill} proficiency={proficiency}/></div>
            ))}
        </div>
    )
}

export default Skill;