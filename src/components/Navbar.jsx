import React from 'react'
import { useDispatch } from 'react-redux'
import {setSearch} from '../redux/slices/SearchSclice'

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <nav className='flex flex-col lg:flex-row justify-content-between mx-6 py-3 mb-10'>
            <div>
                <h3 className='fs-5 fw-bold text-grey-600'>{new Date().toUTCString().slice(0, 16)}</h3>
                <h1 className='fs-2 fw-bolder'>Foods Zone</h1>
            </div>
            <div>
                <input onChange={(e)=>dispatch(setSearch(e.target.value))} className='p-3 border-1 border-grey-400 rounded-lg outline-none w-full lg:w-[25vw]' type="search" name="search" id="" placeholder='Search here' autoComplete='off'/>
            </div>
        </nav>
    )
}

export default Navbar