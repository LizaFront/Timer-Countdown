import { styled } from '@mui/system';
import { ThemeComponentProps } from 'types/theme';

export const Switcher = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    cursor: 'pointer',
});

export const Span = styled('span', {
    shouldForwardProp: prop => prop !== 'theme',
    name: 'Span',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'light' && styles.primary,
        props.color === 'dark' && styles.secondary,
    ],
})<ThemeComponentProps>(() => ({
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
}));
