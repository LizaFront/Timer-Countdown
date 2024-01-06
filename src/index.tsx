import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from 'store/store';

import App from './app';

import GlobalStyles from 'assets/styles/global.styles';
import { StyledEngineProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <StyledEngineProvider injectFirst>
                    <App />
                    <GlobalStyles />
                </StyledEngineProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
