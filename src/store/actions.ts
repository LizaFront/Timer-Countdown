import { Time } from './countdownSlice';
import { IDisabled } from './disabledSlice';
import { Theme } from './themeSlice';

export const themeAction = (state: { theme: Theme }) => state.theme.theme;
export const updateMinAction = (state: { time: Time }) => state.time.min;
export const updateSecAction = (state: { time: Time }) => state.time.sec;
export const disabledField = (state: { disabled: IDisabled }) => state.disabled.disabled;
