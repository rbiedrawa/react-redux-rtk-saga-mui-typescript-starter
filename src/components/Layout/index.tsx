import React from "react";
import {Outlet} from 'react-router-dom';
import Header from "../Headers/Header";
import Box from "@mui/material/Box";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {useTranslation} from "react-i18next";


const Layout = () => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');

    const {i18n} = useTranslation();

    // TODO: move state to redux
    const onChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () => {
            return createTheme({
                palette: {
                    mode,
                },
            });
        },
        [mode],
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header currentThemeMode={theme.palette.mode} onChangeThemeClick={colorMode.toggleColorMode} onChangeLanguage={onChangeLanguage}/>
                <main>
                    <Box sx={{
                            bgcolor: 'background.paper',
                            pt: 3,
                            pb: 3,
                        }}>
                        <Outlet/>
                    </Box>
                </main>
            </ThemeProvider>
        </>
    );
};

export default Layout;
