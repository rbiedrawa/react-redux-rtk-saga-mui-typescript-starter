import React from "react";
import {Provider} from "react-redux";

import './App.css';
import {history, store} from "./redux/store";
import {createTheme} from '@mui/material/styles';
import AppRoutes from "./routes";
import {ThemeProvider} from "@emotion/react";
import {CssBaseline} from "@mui/material";
import {HistoryRouter as Router} from "redux-first-history/rr6";


const theme = createTheme();

const App = () => (
    <>
        <Provider store={store}>
            <Router history={history}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <AppRoutes/>
                </ThemeProvider>
            </Router>
        </Provider>
    </>
);

export default App;
