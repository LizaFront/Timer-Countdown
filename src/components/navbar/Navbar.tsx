import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';

import { TheameSwitcher } from 'components';

import { Menu, MenuItem, NavbarStyles } from './stylesComponents';
import { customTheme } from 'assets/styles/themeStyles';
import { Theme } from 'store/themeSlice';

const Navbar = ({ theme }: Theme) => {
    return (
        <ThemeProvider theme={customTheme}>
            <NavbarStyles color={theme}>
                <Menu>
                    <MenuItem>
                        <Link to='/'>Timer</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/countdown'>Coundown</Link>
                    </MenuItem>
                </Menu>
                <TheameSwitcher theme={theme} />
            </NavbarStyles>
        </ThemeProvider>
    );
};

export default Navbar;
