import React from "react";
import {Provider} from "react-redux";

import './App.css';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store";
import {createTheme} from '@mui/material/styles';
import AppRoutes from "./routes";
import {ThemeProvider} from "@emotion/react";
import {CssBaseline} from "@mui/material";

const theme = createTheme();

const App = () => (
    <>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <CssBaseline/>
                    <AppRoutes/>
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    </>
);

export default App;
