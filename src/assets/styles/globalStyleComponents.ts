import { styled } from '@mui/system';
import { ThemeComponentProps } from 'types/theme';

export const Wrapper = styled('div', {
    shouldForwardProp: prop => prop !== 'theme',
    name: 'Wrapper',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'light' && styles.primary,
        props.color === 'dark' && styles.secondary,
    ],
})<ThemeComponentProps>(() => ({
    maxWidth: '60%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    margin: '0 auto',
    borderRadius: '10px',
    boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
    marginTop: '50px',
    backgroundColor: '#8fb3b3',
}));
