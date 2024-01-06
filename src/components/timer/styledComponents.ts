import { styled } from '@mui/system';
import { ThemeComponentProps } from 'types/theme';

export const ClockHolder = styled('div', {
    shouldForwardProp: prop => prop !== 'theme',
    name: 'ClockHolder',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'light' && styles.primary,
        props.color === 'dark' && styles.secondary,
    ],
})<ThemeComponentProps>(() => ({
    width: '100%',
    background: '#FFF',
    margin: '30px auto',
    position: 'relative',
}));

export const StopWatch = styled('div', {
    shouldForwardProp: prop => prop !== 'theme',
    name: 'StopWatch',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'light' && styles.primary,
        props.color === 'dark' && styles.secondary,
    ],
})<ThemeComponentProps>(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px 0',
}));

export const StartButton = styled('button', {
    shouldForwardProp: prop => prop !== 'theme',
    name: 'TitleStyles',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'light' && styles.primary,
        props.color === 'dark' && styles.secondary,
    ],
})<ThemeComponentProps>(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    backgroundColor: 'transparent',
    border: '2px solid #00ABA9',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: '8px 0',
    marginTop: '2rem',
    transition: 'all 0.3s',
    '&:hover': {
        backgroundColor: '#00ABA9',
    },
}));
export const StopButton = styled('button', {
    shouldForwardProp: prop => prop !== 'theme',
    name: 'TitleStyles',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'light' && styles.primary,
        props.color === 'dark' && styles.secondary,
    ],
})<ThemeComponentProps>(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    backgroundColor: 'transparent',
    border: '2px solid red',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: '8px 0',
    marginTop: '2rem',
    transition: 'all 0.3s',
    '&:hover': {
        backgroundColor: 'red',
    },
}));

export const ResetButton = styled('button', {
    shouldForwardProp: prop => prop !== 'theme',
    name: 'TitleStyles',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'light' && styles.primary,
        props.color === 'dark' && styles.secondary,
    ],
})<ThemeComponentProps>(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: '2px solid green',
    width: '150px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: '8px 0',
    marginTop: '2rem',
    transition: 'all 0.3s',
    '&:hover': {
        backgroundColor: 'green',
    },
}));

export const DisplayWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
});

export const TimerBlock = styled('span')({
    width: '70px',
    display: 'flex',
    color: '#FFF',
    justifyContent: 'center',
    background: '#00ABA9',
    alignItems: 'center',
    borderRadius: '5px',
    padding: '8px 0',
    fontSize: '2rem',
});

export const BtnsWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
});
