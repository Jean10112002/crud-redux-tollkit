import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/post'
import userReducer from './slices/users'

export const store = configureStore({
    reducer:{
        posts:postReducer,
        users:userReducer
    }
})