import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import { useUser } from '../../UserContext'
import { PiUserCircle } from "react-icons/pi";
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import CardProduct from '../CardProduct.mjs';


const Profile = () => {
    const [products, setProducts] = useState()
    const { user } = useUser();
    const user_id = user.user_id

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${user_id}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setProducts(data);
        })
        .catch(error => {
            console.log(error)
        });
    }, [])
    
    return (
        <div className=''>
            <Navbar/>

            <div className='px-16 py-8'>
                <div>Your Profile</div>
                <div className='flex w-full items-center justify-center gap-16 border border-spacing-1 border-slate-400 rounded-xl'>
                    <div>
                        <PiUserCircle className='scale-500 mb-10'/>
                        <button className='bg-green-400 rounded-full px-2 py-1'>Logout</button>
                    </div>

                    <div>
                        <div>
                            <div>Full Name</div>
                            <div>{user.name}</div>
                        </div>

                        <div>
                            <div>Email</div>
                            <div>{user.email}</div>
                        </div>

                        <div>
                            <div>WhatsApp Number</div>
                            <div>{user.no_wa}</div>
                        </div>
                        
                        <button className='bg-green-400 rounded-full px-2 py-1'>Edit Profile</button>

                    </div>
                </div>
            </div>

            <div className='px-16 py-8'>
                <div>My Product</div>
                <div>
                    {products ? (products.map((product) => (
                        <CardProduct key={product.id} data={product}/>
                    ))) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile