import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Cart = () => {
    const [activeCart, setActiveCart] = useState(false)
    const navigate = useNavigate()

    const cartItem = useSelector((state) => state.cart.cart)
    const totalQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0)
    const totalPrice = cartItem.reduce((totalPrice, item) => totalPrice + item.qty * item.price, 0)

    console.log(cartItem)
    return (
        <>
            <div className={`fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full p-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
                <div className='flex justify-between my-3'>
                    <span className='text-xl fw-bold text-gray-600'>My Order</span>
                    <IoClose onClick={() => setActiveCart(!activeCart)} className='border-2 cursor-pointer border-gray-600 text-gray-600 fw-bold fs-3 rounded hover:text-red-300 hover:border-red-300' />
                </div>

                {cartItem.length > 0 ? cartItem.map((food) => {
                    return <ItemCart key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
                })
                    : <h2 className='text-gray-800 text-center fs-5'>Your cart is empty</h2>
                }


                <div className='absolute bottom-0 mb-3'>
                    <h3 className='fs-4 text-gray-800 fw-bold'>Items : {totalQty} </h3>
                    <h3 className='fs-4 text-gray-800 fw-bold'>Total Amount : {totalPrice} </h3>
                    <hr />
                    <button onClick={() => navigate("/success") } className='bg-green-500 fw-bold p-2 w-[90vw] lg:w-[18vw] mb-2 rounded text-white'>Checkout </button>
                </div>
            </div>
            <FaShoppingCart onClick={() => setActiveCart(!activeCart)} className={` tada rounded-full bg-white shadow-md text-5xl p-2 fixed bottom-10 right-4 
            ${totalQty > 0 && "animate-bounce delay-500 transition-all"
                }
                `} 
                
                />
        </>
    )
}

export default Cart