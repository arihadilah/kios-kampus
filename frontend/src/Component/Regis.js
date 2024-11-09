import {React, useState, useEffect} from 'react'
import image from "../assets/image-masuk.jpg"
import { useNavigate } from 'react-router-dom';

const Regis = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [no_wa, setNoWa] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate(); 


    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            name: name,
            email: email,
            no_wa: no_wa,
            password: password,
        };
        fetch("http://localhost:5000/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(userData)
        })
        .then((data) =>{
            console.log('Success: ', data);
            navigate('/home')
        })
        .catch((error) => console.log(error))
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
                    <div className='md:w-1/2 lg:w-2/5 flex flex-col'>
                        <form>
                            <p>Full Name</p>
                            <input 
                                className='border border-slate-400'
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />

                            <p>Email</p>
                            <input 
                                className='border border-slate-400'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />

                            <p>WhatsApp Numbers</p>
                            <input 
                                className='border border-slate-400'
                                value={no_wa}
                                onChange={(event) => setNoWa(event.target.value)}
                            />

                            <p>Password</p>
                            <input 
                                className='border border-slate-400'
                                value={password}
                                onChange={(value) => setPassword(value.target.value)}
                            />

                            <button onClick={handleSubmit} className='bg-green-800 text-white rounded-full px-5'>Sign Up</button>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default Regis