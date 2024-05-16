import React, { useState } from 'react'
import{ Typography, Button } from '@mui/material'


const Counter = () => {
var[count,setCount]=useState(0)
const add=()=>{
setCount(count+1)
}
const sub=()=>{
    setCount(count-1)
}
  return (
    <div>
        <br/><br/><br></br><br></br>
        <Typography variants="h2">count:{count}</Typography>
        <br/><br/>
        <Button variants="contained" color="error" onClick={add}>+</Button>
        &nbsp; &nbsp;
        <Button variants="contained" color="success" onClick={sub}>-</Button>
        
         </div>
  )
}

export default Counter