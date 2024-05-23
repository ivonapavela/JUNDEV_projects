import Club from "./Club";
import Result from "./Result";
import Referee from "./Referee";
import GameTime from "./GameTime";
import React, {useState} from "react";
import "./App.css";

const initialClubState = {
  value: null,
  src: null,
  alt: null,
  players: [],
};

function App() {

  const [firstClub, setFirstClub] = useState({...initialClubState});
  const [secondClub, setSecondClub] = useState({...initialClubState});
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [decisions, setDecisions] = useState([]);

  const {minutes, seconds} = GameTime({startTime: start, resetTime: reset});
    
  const handleDecision = (value, club) => {

        const newDecision = {
            type: value,
            timestamp: {minutes, seconds},
            club: {
              value: club.value,
              src: club.src,
              alt: club.alt,
              players: club.players
          },
        }
        setDecisions([...decisions, newDecision]);
    }
    

  const handleStart = () => {
    setStart((prev) => !prev);
    setReset(false);
  }

  const handleReset = () => {
    setReset((prev) => !prev);
    setStart(false);
    setDecisions([]);
  }


  return (
    <div className = "game">
      <div className = "time">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <div className = "display">
        <Club club = {firstClub} setClub = {setFirstClub} reset = {handleReset} />       
        <Result firstClub= {firstClub} secondClub = {secondClub} start = {start} reset= {reset} handleDecision = {handleDecision}/>
        <Club club = {secondClub} setClub = {setSecondClub} reset = {handleReset}/>
      </div>
      <div className = "start"><button style = {{backgroundColor: firstClub.value && secondClub.value ? '#167532' : 'lightgreen'}} onClick = {handleStart} disabled={!firstClub.value || !secondClub.value}>{start ? "Pause" : "Start"}</button></div>
      {start && <Referee firstClub = {firstClub} secondClub = {secondClub} decisions = {decisions} handleDecision = {handleDecision}/>}
    </div>
  )
}

export default App
