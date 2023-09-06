import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'

const cityList = [
    {
        id: 1,
        name: "TT Huế"
    },
    {
        id: 2,
        name: "Đà Nẵng"
    },
    {
        id: 3,
        name: "Nha Trang"
    },
    {
        id: 4,
        name: "Tam Kỳ"
    },
]

const schema = yup.object({
    email: yup.string().email("Please enter a valid email").required(),
    username: yup.string()
                .min(5, "username phải nhiều hơn 5 ký tự")
                .max(20, "username tối đa 20 ký tự")
                .required(),
    password: yup.string()
                .min(6, "password tối thiểu 6 ký tự")
                .required(),
    age: yup.number().integer().positive().min(18, "tuổi lớn hơn 18").max(50, "tuổi phải nhỏ hơn 50")
            .required().typeError('age is not valid') 
})
function Register() {
    const {register, formState: {errors}, handleSubmit, reset} = useForm({
        resolver: yupResolver(schema)
    })
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        city: ""
    })

    const handleInputValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const hanleSumitRegister = (e) => {
        e.preventDefault();
        console.log(state);
        e.target.reset()
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(hanleSumitRegister)} className="row col-sm-4">
                <div className="form-group mb-2">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name="username"
                    {...register('username')}
                    onInput={handleInputValue}
                    />
                    <span className="text-danger">{errors?.username?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" name="email"
                    {...register('email', {
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        }
                    })}
                    onInput={handleInputValue}/>
                    <span className="text-danger">{errors?.email?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password"
                    {...register('password')}
                    onInput={handleInputValue}/>
                    <span className="text-danger">{errors?.password?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Age</label>
                    <input type="text" className="form-control" name="age"
                    {...register('age')}
                    />
                    <span className="text-danger">{errors?.age?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">City</label>
                    <select name="city" className="form-select" defaultValue={cityList[1].name}
                    onChange={handleInputValue}
                    >
                        {
                            cityList.map((city) => (
                                <option value={city.name} key={city.id}>{city.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group mb-2">
                    <button type="submit" className="btn btn-sm btn-dark">Register</button>
                    <button type="submit" className="btn btn-sm btn-dark" onClick={() => reset()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Register