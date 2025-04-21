import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CardSlice'

const FoodCard = ({ id, name, price, desc, rating, img, handleToast }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className='m-6 gap-2 mb-5'>
                <div className="card" style={{ width: "300px" }}>
                    <img src={img} className="card-img-top w-auto h-[250px] p-1" alt="..." />
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <h5 className="card-title fs-6 fw-bold">{name}</h5>
                            <span className='text-green-500'>₹{price}</span>
                        </div>
                        <p className="card-text">{desc.slice(0, 55)}...</p>
                        <div className='flex justify-between'>
                            <span className='flex justify-center items-center'>
                                <AiFillStar className='mr-1 text-yellow-400' /> {rating}
                            </span>
                            <button onClick={() => { dispatch(addToCart({ id, name, price, img, rating, qty: 1 })); handleToast(name) }}  className='p-1 bg-green-500 text-white hover:bg-green-600 rounded' >Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodCard