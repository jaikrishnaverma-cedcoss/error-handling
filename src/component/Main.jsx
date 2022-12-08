import React from 'react'

const Main = ({luck,setLuck}) => {
  if(luck<5)
  throw new Error("less than 5")
  return (
    <>
    <h2>Current no: {luck}</h2>
    <button onClick={()=>setLuck(parseInt(Math.random() * (20 - 1) + 1))}>Main</button>
    </>
    
  )
}

export default Main

// Create a app that generates a random number between 1 to 20.
//  Display fallback UI whenever this number is less than 5

