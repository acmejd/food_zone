import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { decrementQty, incrementQty, removeFromCart } from '../redux/slices/CardSlice'
import toast from 'react-hot-toast'

const ItemCart = ({ id, name, price, img, qty }) => {
    const dispatch = useDispatch()

    return (
        <>
            <div className='flex gap-2 shadow-md p-3 rounded'>
                < MdDelete onClick={() => { dispatch(removeFromCart({ id, name, price, img, qty })); toast.error(`${name} Removed`) }} className=' absolute right-7 border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded p-1 text-2xl transition-all ease-linear cursor-pointer' />
                <img src={img} alt=""
                    className='w-[50px] h-[50px]'
                />
                <div>
                    <h4 className='fw-bold fs-6 text-gray-500'>{name}</h4>
                    <div className='flex justify-between items-center'>
                        <span className='text-green-500 fw-bold'>₹{price}</span>
                        <div className='flex justify-center items-center gap-2 absolute right-7'>
                            <AiOutlineMinus onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)} className='border-2 rounded border-gray-500 text-gray-600 hover:text-white hover:bg-green-500 p-1 text-xl transition-all ease-linear cursor-pointer hover:border-none' />
                            <span> {qty} </span>
                            <AiOutlinePlus onClick={() => qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)} className='border-2 rounded border-gray-500 text-gray-600 hover:text-white hover:bg-green-500 p-1 text-xl transition-all ease-linear cursor-pointer hover:border-none' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCart