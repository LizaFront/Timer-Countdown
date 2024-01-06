import { styled } from '@mui/system';

import { ThemeComponentProps } from 'types/theme';

export const TitleStyles = styled('h1', {
    shouldForwardProp: prop => prop !== 'theme',
    name: 'TitleStyles',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'light' && styles.primary,
        props.color === 'dark' && styles.secondary,
    ],
})<ThemeComponentProps>(() => ({
    fontSize: '1.75rem',
    lineHeight: 1.5,
    fontWeight: 700,
    textAlign: 'center',
}));
