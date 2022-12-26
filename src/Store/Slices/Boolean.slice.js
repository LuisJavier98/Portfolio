import { createSlice } from '@reduxjs/toolkit';


export const mySlice = createSlice({
    name: 'dark',
    initialState: true,
    reducers: {
        Change: state => {
            return !state
        }
    }
})

export const { Change } = mySlice.actions;
export default mySlice.reducer
