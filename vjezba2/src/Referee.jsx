import RedCard from "./assets/redCard.png";
import YellowCard from "./assets/yellowCard.png";
import Goal from "./assets/scoreAGoal.png";
import Annulment from "./assets/Annulment.png";
import "./Referee.css";
import React, {useState} from "react";
import SoccerField from "./SoccerField";

const Referee = ({firstClub, secondClub, decisions, handleDecision}) => {

    const [club, setClub] = useState(null);

    const decisionImage = [
        {value: "RED CARD" , src: RedCard, alt: "Red Card"},
        {value: "YELLOW CARD" , src: YellowCard, alt: "Yellow Card"},
        {value: "GOAL", src: Goal, alt: "Goal"},
        {value: "ANNULMENT", src: Annulment, alt: "Annulment"}
    ];

    const decisionCounts = decisions.reduce((counts, decision) => {
        counts[decision.type] = (counts[decision.type] || 0) + 1;
        return counts;
    }, {});    


    return (
        <div className = "statistics">
            <div className = "referee">
                <h1>Referee Decisions</h1>
                <h3>Select the club:</h3>
                <div className = "select">
                    <div className = "referee-option"><img src = {firstClub.src} alt = {firstClub.alt} onClick={()=>setClub(firstClub)} style = {{filter: club === firstClub ? 'none' : 'grayscale(100%)'}}/></div>
                    <div className = "referee-option"><img src = {secondClub.src} alt = {secondClub.alt} onClick={()=>setClub(secondClub)} style = {{filter: club === secondClub ? 'none' : 'grayscale(100%)'}}/></div>
                </div>
                <button className ="decision" onClick={()=> handleDecision("RED CARD", club)} disabled = {!club}><img src={RedCard} alt = {"Red Card"}/></button>
                <button className ="decision" onClick={()=> handleDecision("YELLOW CARD", club)} disabled = {!club}><img src={YellowCard} alt = {"Yellow Card"}/></button>
            </div>
            <div className = "statistics-section">
                <h1 style = {{marginLeft: "-120px"}}>Game statistics</h1>
                <div className = "decisions">
                {decisions && decisions.slice(-8).map((decision, index) => (
                    <div className = "statement" key={index}>
                        <img src = {decisionImage.find((decisionImage) => decisionImage.value === decision.type)?.src}/>
                        <div style = {{paddingTop: "20px", marginLeft: "20px"}}>
                            {decision.timestamp.minutes}'{decision.timestamp.seconds} {decision.club.alt}
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className = "total">
                <h1>Total number of cards</h1>
                <div style = {{display: "flex", justifyContent: "space-between"}}>
                    <div style = {{display: "flex"}}><img src={RedCard} alt = {"Red Card"} style = {{width: "70px", height: "70px", borderRadius: "50%"}}/> <p style = {{fontSize: "50px", marginLeft: "30px", marginTop: "5px"}}>{decisionCounts["RED CARD"] || 0}</p></div>
                    <div style = {{display: "flex"}}><img src={YellowCard} alt = {"Yellow Card"} style = {{width: "70px", height: "70px", borderRadius: "50%"}}/> <p style = {{fontSize: "50px", marginLeft: "30px", marginTop: "5px"}}>{decisionCounts["YELLOW CARD"] || 0}</p></div>
                </div>
                {club && <h1>4-3-3 Formation</h1>}
                {club && <SoccerField firstPlayers={club.players}/>}
            </div>
        </div>
    )   
}

export default Referee;