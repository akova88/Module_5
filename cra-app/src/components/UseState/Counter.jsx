import React, { useState } from "react";
import image from "../../assets/image/bgVideos.mp4"
// import '../../assets/css/style.css'

function Counter() {
    const [quantity, setQuantity] = useState(1)

    const handleDecreamentQuantity = () => {
        setQuantity(quantity - 1)
    }

    const handleCreamentQuantity = () => {
        setQuantity(prev => prev + 1)
        setQuantity(prev => prev + 1)
        setQuantity(prev => prev + 1)
    }

    return (
        <div className="ms-5 mt-5">
            <button className="btn btn-primary"
                onClick={handleCreamentQuantity}
            >+</button>
            <input className="mx-3" type="number" value={quantity} />
            <button className="btn btn-primary" disabled={quantity <= 1}
                onClick={handleDecreamentQuantity}
            >-</button>
        </div>
    )
}

function UseState() {
    const [username, setUsername] = useState(null)
    const [show, setShow] = useState(false)
    const handleInputValue = (event) => {
        setUsername(event.target.value)
    }

    const handleShowName = () => {
        setShow(show ? false : true)
    }
    return (
        <div>
            <input type="text" onChange={handleInputValue} />
            <button className="btn btn-outline-primary" onClick={handleShowName}
            >Show name</button>
            {show && <h1>{username}</h1>}
        </div>
    )
}

const memberList = ["Phước", "Hải", "Nhật", "Nguyên", "Huy", "Minh Anh", "Trường", "Duy"]
function DrinkBeer() {
    const [member, setMember] = useState(null)
    const handleGetRandomMember = () => {
        // let rdn = Math.floor(Math.random() * memberList.length)
        // setMember(memberList[rdn])

        setMember(() => memberList[Math.floor(Math.random() * memberList.length)])
    }

    return (
        <div className="ms-6">
            <h1 className="display-5 text-danger">{member || "Không có member"}</h1>
            <button className="btn btn-primary"
                onClick={handleGetRandomMember}
            >Get Member</button>
        </div>
    )
}

function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleLogin = async () => {
        let response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password
                // "username": "mor_2314",
                // "password": "83r5^_"
            })
        })

        let data = await response.json();
        console.log(data);
    
    }

    const handleCancel = () => {
        setUsername("")
        setPassword("")
    }
    return (
        <div className="box">
            <video id="bg-video" src={image} loop muted="false" autoPlay>
            </video>
            <div className="container">
                <div className="top">
                    <span>Have an account?</span>
                    <header>Login</header>
                </div>
                <div className="input-field">
                    <input type="text" className="input" placeholder="Username"
                        value={username}
                        onInput={(e) => setUsername(e.target.value)}
                    />
                    <i className="bx bx-user" />
                </div>
                <div className="input-field">
                    <input type="Password" className="input" placeholder="Password"
                        value={password}
                        onInput={(e) => setPassword(e.target.value)}
                    />
                    <i className="bx bx-lock-alt" />
                </div>
                <div className="input-field two-col">
                    <input type="submit" className="submit" value="Login"
                        onClick={handleLogin}
                    />
                    <input type="submit" className="submit" value="Cancel"
                        onClick={handleCancel}
                    />
                </div>
                <div className="two-col">
                    <div className="one">
                        <input type="checkbox" id="check" />
                        <label htmlFor="check"> Remember Me</label>
                    </div>
                    <div className="two">
                        <label><a href="#">Forgot password?</a></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Counter, UseState, DrinkBeer, Login }