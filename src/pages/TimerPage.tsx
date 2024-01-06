import { useEffect } from 'react';

import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';

import { themeAction } from 'store/actions';
import { changeTheme } from 'store/themeSlice';

import { Navbar, Timer } from 'components';

const TimerPage = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(themeAction);

    useEffect(() => {
        const initialTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (initialTheme) {
            document.body.setAttribute('data-theme', initialTheme);
            dispatch(changeTheme(initialTheme));
        }
    }, [dispatch]);

    return (
        <>
            <Navbar theme={theme} />
            <Timer theme={theme} />
        </>
    );
};

export default TimerPage;
