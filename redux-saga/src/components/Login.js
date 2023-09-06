import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState( {username: '', password: ''} )

    const userlogined = useSelector(state => state.userlogined)
    const setValueForUser = (key, value) => {
        const userInput = {...user, [key]: value}
        setUser(userInput)
    }

    const login = () => {
        dispatch({ type: "LOGIN", payload: user})
    }
    useEffect(() => {
        if ( userlogined.username) {
            navigate("/users")
        }
    }, [userlogined, navigate])

  return (
    <form>
        <label>Username</label>
        <input 
            id='username'
            type='text'
            onChange={e => setValueForUser('username', e.target.value)}
        />
        <label>Password</label>
        <input 
            id='password'
            type='password'
            onChange={e => setValueForUser('password', e.target.value)}
        />
        <button
            type='button'
            onClick={() => login()}
        >
            Login
        </button>
    </form>
  )
}

export default Login