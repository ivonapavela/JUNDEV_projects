import Skill from "./Skill"
import PersonalData from "./PersonalData"
import Timeline from "./Timeline"

const CV = () => {

    const WorkData = {
        "October 2004 - now" : ["Justice League", "Metropolis", "Superhero", "Crime fighting and saving the world. Utilizing super strength, flight, heat vision, and freezing breath"],
        "June 1994 - now" : ["Daily Planet", "Metropolis", "Journalist", "Reporting on breaking news. Maintaining secret identity as Clark Kent"],
        "June 1986 - October 2004" : ["Self-Employed Hero", "Various Locations", "Freelance Superhero", "Saving the day wherever needed. Assisting in disaster relief efforts"]    
    };

    const EducationData = {
        "September 1980 - May 1994" : ["Fortress of Solitude Academy", "Arctic", "Bachelor of Superhero Studies", "Crisis Management and Flying and Heat Vision"],
        "September 1976 - June 1980" : ["Smallville High School", "Smallville", "High School Graduate", "Participated in extracurricular activities, including football"]
    }

    return (
        <div className = "CV" style= {{display: "flex"}}>
            <div className = "personal-data">
                <PersonalData />
            </div>
           <div className = "other-data">
                <div>
                    <h1 style = {{fontSize: "60px", color: "#0B0B45"}}>SUPERMAN</h1>
                    <div style = {{fontSize: "20px", color: "#1d1717", maxWidth: "1000px", marginLeft: "40px"}}>Superman, the iconic DC Comics superhero, possesses superhuman abilities like strength, flight, and heat vision. Disguised as Clark Kent, he fights for justice in Metropolis while working as a reporter for the Daily Planet. Symbolizing hope and heroism, Superman is a beloved character with a timeless legacy.</div>
                </div>
                <Timeline title = "WORK EXPERIENCE" data = {EducationData}/>
                <Timeline title = "EDUCATION" data = {WorkData}/>
                <Skill />
           </div>
        </div>
    )
}

export default CV