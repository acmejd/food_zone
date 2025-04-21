import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/CardSlice'
import CategorySlice from './slices/CategorySlice'
import SearchSclice from './slices/SearchSclice'

export const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSclice,
  },
})