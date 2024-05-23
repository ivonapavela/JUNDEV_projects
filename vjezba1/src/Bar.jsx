import "./Bar.css"
import React from "react"

const Bar = ({skill, proficiency}) => {

    return (
        <div style = {{display : "flex"}}>
            <p style = {{fontSize: "20px", color: "#0B0B45"}}><strong>{skill}</strong></p>
            <div className="skill-bar">
                <div className="skill-proficiency" style={{backgroundColor: "#0B0B45", width: `${proficiency}%`}}></div>
            </div>
        </div>
    )
}

export default Bar