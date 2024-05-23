import React, {useState, useEffect} from "react";
import "./Result.css";

const Result = ({firstClub, secondClub, start, reset, handleDecision}) => {
    const [scores, setScores] = useState({first: 0, second: 0});

    function handleScoreChange (value, club) {
        let newScore = {...scores}
        value === "first" ? newScore.first += 1 : newScore.second += 1
        setScores(newScore)
        handleDecision("GOAL", club)
    }

    function handleAnnulment (value, club) {
        let newScore = {...scores}
        if (value === "first" && newScore.first != 0) { newScore.first -= 1 ; handleDecision("ANNULMENT", club)}
        else if (value === "second" && newScore.second != 0)  { newScore.second -= 1 ; handleDecision("ANNULMENT", club)}
        setScores(newScore)
        
    }

    useEffect(()=> {
        if(reset) {
            let newScore = {...scores}
            newScore.first = 0
            newScore.second = 0
            setScores(newScore)
        }
    }, [reset])
   
    return (
        <div>
            <div className = "score">
                {scores.first} : {scores.second}
            </div>
            {start && 
            <div className = "goal">
                <button onClick = {() => {handleScoreChange("first", firstClub)}}>GOAL!</button>
                <button onClick = {() => {handleScoreChange("second", secondClub)}}>GOAL!</button>
            </div>}
            {start && 
            <div className = "annulment">
                <button onClick = {() => {handleAnnulment("first", firstClub)}}>Annulment</button>
                <button onClick = {() => {handleAnnulment("second", secondClub)}}>Annulment</button>
            </div>}
        </div>
    )
}

export default Result