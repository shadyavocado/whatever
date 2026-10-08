import React, { useState } from 'react'

function USComponent() {
  const [name,setName] = useState("Ali")
let changestate =()=>{
    setName("huma")
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changestate}>Update</button>
    </div>
  )
}

export default USComponent
