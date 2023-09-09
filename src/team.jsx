import { useState } from "react"

export default function Team(){

const [teamCount, setTeam] = useState(11);

function handleClick() {
    const newTeam = teamCount +1;
    setTeam(newTeam);
}
function handleReduce(){
    const reduceItem = teamCount -1;
    setTeam(reduceItem);
}
    const teamStyle = {
        border: '4px solid gray',
        margin:'20px',
        padding:'10px', 
    }
    return (
        <div style={teamStyle}>
            <h4>Playears: {teamCount}</h4>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}