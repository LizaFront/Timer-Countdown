import { createSlice } from '@reduxjs/toolkit';

export interface IDisabled {
    disabled: boolean;
}

const initialState: IDisabled = {
    disabled: false,
};

export const disabledSlice = createSlice({
    name: 'disabled',
    initialState,
    reducers: {
        disabledTrue(state) {
            state.disabled = true;
        },
        disabledFalse(state) {
            state.disabled = false;
        },
    },
});

export const { disabledTrue, disabledFalse } = disabledSlice.actions;
export default disabledSlice.reducer;
