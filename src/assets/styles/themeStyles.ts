import { createTheme } from '@mui/system';

export const customTheme = createTheme({
    components: {
        TitleStyles: {
            styleOverrides: {
                root: {
                    color: '#2B3442',
                },
                primary: {
                    color: '#2B3442',
                },
                secondary: {
                    color: '#FFF',
                },
            },
        },
        NavbarStyles: {
            styleOverrides: {
                root: {
                    backgroundColor: '#141D2F',
                    color: '#FFF',
                },
                primary: {
                    backgroundColor: '#141D2F',
                    color: '#FFF',
                },
                secondary: {
                    backgroundColor: '#F6F8FF',
                    color: '#141D2F',
                },
            },
        },
        Span: {
            styleOverrides: {
                root: {
                    color: '#FFF',
                },
                primary: {
                    color: '#FFF',
                    transition: 'all 0.3s',
                },
                secondary: {
                    color: '#2B3442',
                    transition: 'all 0.3s',
                },
            },
        },
        Wrapper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFF',
                    color: '#141D2F',
                },
                primary: {
                    backgroundColor: '#FFF',
                    color: '#141D2F',
                },
                secondary: {
                    backgroundColor: '#2b3442ad',
                    color: '#FFF',
                },
            },
        },
        StopWatch: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFF',
                    color: '#141D2F',
                },
                primary: {
                    backgroundColor: '#FFF',
                    color: '#141D2F',
                },
                secondary: {
                    backgroundColor: '#141d2f',
                    color: '#FFF',
                },
            },
        },
    },
});
