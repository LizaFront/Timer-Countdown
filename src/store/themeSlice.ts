import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Theme {
    theme: 'light' | 'dark';
}

const initialState: Theme = {
    theme: 'light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<'light' | 'dark'>) {
            state.theme = action.payload;
        },
    },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
