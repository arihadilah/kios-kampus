import React, { useState } from 'react'
import image from "../assets/image-masuk.jpg"
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] =  useState("")
    const navigate = new useNavigate();
    const { setUser } = useUser();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: email,
            password: password
        }
        fetch("http://localhost:5000/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(userData)
        }).then((res) => res.json())
        .then((data) => {
            console.log(data.user)
            setUser(data.user)
            navigate('/home')
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className='flex w-screen'>
        <img src={image} className='w-1/2 h-screen object-cover'/>
        <div className='w-1/2 flex flex-col justify-center items-center'>
            <h1 className='text-4xl'>Get Started Now!</h1>
            <p>Welcome! Please enter your detail</p>
            <div className='flex bg-slate-400 w-fit gap-5'>
                <div className='p-2'>Sign In</div>
                <div className='p-2'>Sign Up</div>
            </div>
            <div className='md:w-1/2 lg:w-2/5'>
                <p>Email</p>
                <input 
                    className='w-full border border-slate-400'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <p>Password</p>
                <input 
                    className='w-full border border-slate-400'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <p className='w=full'>Forget Password?</p>
                
                <button onClick={handleSubmit} className='w-full bg-green-800 text-white rounded-full px-5'>Sign Up</button>
            </div>
        </div>
    </div>
    )
}

export default Login