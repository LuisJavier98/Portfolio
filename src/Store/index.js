import { configureStore } from '@reduxjs/toolkit';
import changeColor from './slices/Boolean.slice'; 

export default configureStore({
    reducer: {
        changeColor
    }
})