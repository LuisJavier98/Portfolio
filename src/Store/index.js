import { configureStore } from '@reduxjs/toolkit';
import changeColor from './slices/Boolean.slice.js'; 

export default configureStore({
    reducer: {
        changeColor
    }
})