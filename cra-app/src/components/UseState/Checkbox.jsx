import React, { useState } from "react";

const courses = [
    {id: 1, name: "Html, Css"}, 
    {id: 2, name: "JavaScript"}, 
    {id: 3, name: "ReactJs"}
]

function Checkbox() {
    const [checked, setChecked] = useState()
    const handleSubmit = () => {
        console.log({name: courses[checked-1]});
    }
    return (
        <div className="form-check ms-5 my-5">
            {courses.map(course =>(
                <div key={course.id}>
                    <input className="form-check-input" 
                    type="radio"
                    checked={course.id === checked}
                    onChange={() => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button className="btn btn-warning" onClick={handleSubmit}>Register</button>
        </div>
    )
}

function Checkbox1() {
    const [checked, setChecked] = useState([])

    const handleCheck = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);
            if(isChecked) {
                return checked.filter(item => item != id)
            }
            else {
                return [...prev, id];
            }     
        })
    }
    const handleSubmit = () => {
        console.log({id: checked});
    }
    return (
        <div className="form-check ms-5 my-5">
            {courses.map(course => (
                <div key={course.id}>
                    <input className="form-check-input" 
                    type="checkbox"
                    checked={checked.includes(course.id)}
                    onChange={() => handleCheck(course.id)} 
                    />
                    {course.name}
                </div>
            ))}
            <button className="btn btn-warning" onClick={handleSubmit}>Register</button>
        </div>
    )
}

export {Checkbox, Checkbox1}