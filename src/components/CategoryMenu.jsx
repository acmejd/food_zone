import React, { useEffect, useState } from 'react'
import FoodData from './FoodData'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/slices/CategorySlice'

const CategoryMenu = () => {
    const [categories, setCategories] = useState([])

    const listUniqueCategories = () => {
        const uniqueCategories = [
            ... new Set(FoodData.map((food) => food.category))]
        setCategories(uniqueCategories);
        console.log(uniqueCategories);
    }

    useEffect(() => {
        listUniqueCategories();

    }, [])

    const dispatch = useDispatch()
    const selectedCategory = useSelector((state) => state.category.category);


    return (
        <>
            <div className='mx-6'>
                <div>
                    <h3 className='fw-bold fs-3 text-grey-600' style={{ font: 'bold' }}>Find the best food</h3>
                </div>
                <div className='my-3 flex gap-3 overflow-auto'>
                    <button onClick={() => { dispatch(setCategory("All")) }} className={`px-3 py-2 fw-bold border-1 rounded hover:bg-green-500 hover:text-white  ${selectedCategory === "All" && "bg-green-500 text-white"}` }>
                        All
                    </button>
                    {
                        categories.map((category, index) => {
                            return (
                                <button onClick={() => { dispatch(setCategory(category)) }} key={index} className={`px-3 py-2 fw-bold border-1 rounded hover:bg-green-500 hover:text-white  ${selectedCategory === category && "bg-green-500 text-white"} `}>
                                    {category}
                                </button>

                            )
                        })
                    }


                    {/* <button onClick={() => setCategory("Lunch")} className='px-3 py-2 fw-bold border-1 rounded hover:bg-green-500 hover:text-white'>Lunch</button>
                    <button onClick={() => setCategory("Breakfast")} className='px-3 py-2 fw-bold border-1 rounded hover:bg-green-500 hover:text-white'>Breakfast</button>
                    <button onClick={() => setCategory("Dinner")} className='px-3 py-2 fw-bold border-1 rounded hover:bg-green-500 hover:text-white'>Dinner</button>
                    <button onClick={() => setCategory("Snacks")} className='px-3 py-2 fw-bold border-1 rounded hover:bg-green-500 hover:text-white'>Snacks</button> */}
                </div>
            </div>
        </>
    )
}

export default CategoryMenu