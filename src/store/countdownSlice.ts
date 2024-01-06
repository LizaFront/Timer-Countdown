import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Time {
    min: number;
    sec: number;
}

const initialState: Time = {
    min: 0,
    sec: 0,
};

export const coundownSlice = createSlice({
    name: 'countdown',
    initialState,
    reducers: {
        updateMin(state, action: PayloadAction<number>) {
            state.min = action.payload;
        },
        updateSec(state, action: PayloadAction<number>) {
            state.sec = action.payload;
        },
    },
});

export const { updateMin, updateSec } = coundownSlice.actions;
export default coundownSlice.reducer;
