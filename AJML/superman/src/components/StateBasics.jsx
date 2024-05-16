import{ Typography , Button , TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
 //var name="ajml"
 
 var[name,frame]=useState("ajml")
 var[val,setval]=useState()
 var[sub,setsub]=useState()
 const handleInput=(e)=>{
      setval(e.target.value);



 }
const SubmitHandler=()=>{
  console.log("clicked")
  setsub(val)

}
  return (
    <div style={{margin:'70px'}}>
  
    <Typography variant='h4'>welcome to {sub}</Typography>
    <br/>
    <TextField variant="outlined" onChange={handleInput}/>
    <Button variant="contained" onClick={SubmitHandler}>submit</Button>
    </div>
  )
}

export default StateBasics