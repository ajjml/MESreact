import React from 'react'
import { TextField,Button } from '@mui/material'
const Register = () => {
  return (
    <div>
        <br/><br/><br/><br/><br/><br/>
      <TextField id="outlined-basic" label="firstname" variant="outlined" /> 
      <br/><br></br>
      <TextField id="outlined-basic" label="Lastname" variant="outlined" />
      <br/><br></br>
      <TextField id="outlined-basic" label="gmail" variant="outlined" />
      <br/><br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" /> 
      <br/><br></br>
      <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Register