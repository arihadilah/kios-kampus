import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardProduct = ({ data }) => {
    const seller_id = data.users_id;
    const [seller, setSeller] = useState();

    useEffect(() => {
        const fetchSellerData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/user/${seller_id}`);
                if (!response.ok) {
                    throw new Error("Gagal mengambil data user");
                }
                const sellerData = await response.json();
                setSeller(sellerData);
            } catch (error) {
                console.log('Terjadi kesalahan:', error);
            }
        };

        if (seller_id) {
            fetchSellerData();
        }
    }, [seller_id]); // Tambahkan seller_id sebagai dependensi

    return (
        <Link to={`/product-detail?id=${data.product_id}`}>
            <div className='flex flex-col bg-white w-48 h-84 my-4 rounded-lg'>
                <img src={`http://localhost:5000/${data.image}`} className="h-48 w-48 p-1 rounded-lg object-cover" alt="Product" />
                <div className="text-left font-bold px-2 py-1 text-xs">{data.product_name}</div>
                <div className="">
                    <div className='px-2 text-xs'>{data.category}</div>
                    <div className='px-2 text-xs'>{data.stock}</div>
                    <div className='px-2 text-xs'>Rp.{data.price}</div>
                </div>
                
                <button className='text-xs bg-green-400'>Chat the Seller</button>
            </div>
        </Link>
    );
};

export default CardProduct;
