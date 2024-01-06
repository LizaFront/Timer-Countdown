import { ThemeProvider } from '@mui/system';

import { ITitle } from './Title.interface';

import { customTheme } from 'assets/styles/themeStyles';
import { TitleStyles } from './stylesComponents';

const Title = ({ theme, children }: ITitle) => {
    return (
        <ThemeProvider theme={customTheme}>
            <TitleStyles color={theme}>{children}</TitleStyles>
        </ThemeProvider>
    );
};

export default Title;
