import React, { useState } from 'react'
export default function Signup() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [mobile,setMobile]=useState("")
    function handleRegister(){}
    return (
        <div>
            <div>
                <label htmlFor="">Enter Your Name</label>
                <input 
                    name="name" 
                    onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Enter Your Email</label>
                <input 
                    type="email" 
                    onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Enter Your Password</label>
                <input 
                    type="text" 
                    onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Enter Mobile Number</label>
                <input 
                    type="text" 
                    onChange={(e)=>setMobile(e.target.value)}/>
            </div>
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}
