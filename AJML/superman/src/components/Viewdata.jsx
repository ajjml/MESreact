import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Table,TableCell,TableHead,TableContainer,TableBody,TableRow } from '@mui/material'

const Viewdata = () => {
    var[user,setUser]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((responce)=>{
            console.log(responce.data)
            setUser(responce.data)
    },[])
})
  return (
    <div style={{margin:'70px'}}>
          <TableContainer>
            <Table>
  
                <TableHead>
                    <TableCell><h2>Name</h2></TableCell>
                    <TableCell><h2>Username</h2></TableCell>
                    <TableCell><h2>City</h2></TableCell>
                </TableHead>
                <TableBody>
                {user.map((val,i)=>{
                    return(
                <TableRow>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.username}</TableCell>
                    <TableCell>{val.address.city}</TableCell>
                </TableRow>)
            })}
                
                </TableBody>
            </Table>
          </TableContainer>
    </div>
  )
}

export default Viewdata