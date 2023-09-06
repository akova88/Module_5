import { Button, styled } from '@mui/material'
import React from 'react'

export default function CustomComp() {
    const MyButton = styled(Button)({
        backgroundColor: '#009900',
        margin: 5,
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#3399'
        }
    })
  return (
    <div className='App'>
        <h1>Custom Component</h1>
        <MyButton>Submit</MyButton>
        <MyButton>Register</MyButton>
        <MyButton>Login</MyButton>
    </div>
  )
}
