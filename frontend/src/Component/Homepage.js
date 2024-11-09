import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import landingImage from '../assets/homepage.jpg';
import CardProduct from './CardProduct.mjs';
import { useUser } from '../UserContext';

const Homepage = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const { user } = useUser(); 

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error);
            });
    }, []); 


    

    return (
        <div>
            <Navbar />
            <div className='bg-green-100 h-screen overflow-y-auto'>
                <img src={landingImage} className='h-36 w-full object-cover' />
                <div>Welcome {user.name}</div>
                <div className='flex flex-wrap gap-4 w-full px-16 py-8 justify-center space-x-4'>
                    {error && <div>Error: {error.message}</div>}
                    {data ? (
                        data.map((product) => (
                            <CardProduct key={product.id} data={product} />
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
