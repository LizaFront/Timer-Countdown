import { useEffect, useState } from 'react';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { Theme, changeTheme } from 'store/themeSlice';

import { Span, Switcher } from './stylesComponents';

import { ReactComponent as MoonIcon } from 'assets/icons/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icons/icon-sun.svg';

export const TheameSwitcher = ({ theme }: Theme) => {
    const dispatch = useAppDispatch();

    const [isDark, setDark] = useState(false);
    const changedTheme = isDark ? 'light' : 'dark';

    const ThemeIcon = theme === 'dark' ? SunIcon : MoonIcon;
    const ThemeText = theme === 'light' ? 'Dark' : 'Light';

    const switchTheme = (theme: typeof changeTheme): void => {
        setDark(!isDark);
        localStorage.setItem('theme', changedTheme);
        dispatch(changeTheme(changedTheme));
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <Switcher onClick={() => switchTheme(changeTheme)}>
            <Span color={theme}>{ThemeText}</Span>
            <ThemeIcon />
        </Switcher>
    );
};

export default TheameSwitcher;
