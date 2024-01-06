import { styled } from '@mui/system';

import { ThemeComponentProps } from 'types/theme';

export const NavbarStyles = styled('h1', {
    shouldForwardProp: prop => prop !== 'theme',
    name: 'NavbarStyles',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'light' && styles.primary,
        props.color === 'dark' && styles.secondary,
    ],
})<ThemeComponentProps>(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '50px',
    padding: '0 8px',
}));

export const Menu = styled('ul')({
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    gap: '0.8rem',
});

export const MenuItem = styled('li')({
    fontSize: '1.25rem',
    lineHeight: 1.5,
    fontWeight: 300,
    textDecoration: 'none',
    listStyle: 'none',
});
