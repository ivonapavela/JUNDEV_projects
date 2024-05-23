import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./PersonalData.css";
import myImage from "./myImage.jpg"

const PersonalData = () => {

    const data = {
        faUser: ["Name", "Superman (Kal-El)"],
        faHouse: ["Address", "Fortress of Solitude, Arctic"],
        faPhone: ["Phone number", "Not Applicable (Super-hearing activated)"],
        faEnvelope: ["Email address", "superman@justiceleague.com"]

    };

    const iconMapping = {
        "faUser": faUser,
        "faHouse": faHouse,
        "faPhone": faPhone,
        "faEnvelope": faEnvelope
    };

    return (
        <div className = "personal-data">
        <img src={myImage} alt="My Image" />
         <h1><strong>PERSONAL DETAILS</strong></h1> 
         <div>
            {Object.entries(data).map(([key,value]) => (
                <div key={key}>
                    <div className = "title">
                        <div className = "icon"><FontAwesomeIcon icon={iconMapping[key]} /></div>
                        <div>
                            <p key={key}><strong>{value[0]}</strong></p>
                            <p key={key}> {value[1]}</p>
                        </div>
                    </div>
                </div>    
            ))}
         </div>
         <footer className="footer-container">
      <p>A fun fact about Superman is that he was not initially able to fly in the early comic book stories. In his debut in "Action Comics" #1 in 1938, Superman could leap tall buildings in a single bound but did not possess the ability to fly. It wasn't until later adaptations and comic book issues that the iconic power of flight was added to Superman's repertoire. The ability to fly became one of his signature powers, contributing to the superhero's enduring popularity and symbolizing his unmatched prowess.</p>
    </footer>
            
        </div>

    )
}

export default PersonalData