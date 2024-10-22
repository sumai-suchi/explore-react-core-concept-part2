import { useState } from "react"

export default function Team(){
   
   const [team,setTeam]=useState(11)

   const handleTeam=()=>{
     const newTeam=team+1;
     setTeam(newTeam)
   }
   
   const handleReduce=()=>
   {
     setTeam(team-1)
   }
   const teamStyle=
   {
    border:'2px solid brown',
    padding:'20px',
    margin:'20px',
    borderRadius:'15px'

   }




    return (
        <div style={teamStyle}>
            <h1 >{team}</h1>
            <button onClick={handleTeam}>click me</button>
            <button onClick={handleReduce}>click me</button>
        </div>
    )

}