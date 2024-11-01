import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    function handleLogin(){}
    return (
        <div className='login-container'>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input 
                    type="email" 
                    onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input 
                    type="text" 
                    onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button>Submit</button>
        </div>
    )
}
