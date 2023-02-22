import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'
import entireReducer from './modules/entire'

const store = configureStore({
    reducer: {
        // reduxjs/toolkit方式
        homeReducer,
        // 普通方式
        entireReducer
    }
})

export default store