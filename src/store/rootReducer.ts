import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import countdownReducer from './countdownSlice';
import disabledReducer from './disabledSlice';

const rootReducer = combineReducers({
    theme: themeReducer,
    time: countdownReducer,
    disabled: disabledReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
