import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './team'
import Users from './User'
import Friends from './Friends'


function App() {
  
  function handleClick()
  {
    alert('Button 1 clicked');
  }
  const handleClick2=()=>
  {
    alert('Button 2 clicked')
  }

  const addToFive=(num)=>
  {
     alert(num+5);
  }

  return (
    <>
     <Users></Users>
     
     <Friends></Friends>



      <Team></Team>

      <h1> React Core concepts 2</h1>
      
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button 
      onClick={()=>{alert('button 3 clicked')}}>
      Click me3</button>
      <button onClick={()=>{addToFive(3)}}>Click me 4</button>
      
    </>
  )
}

export default App
