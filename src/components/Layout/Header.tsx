import React from "react";

import {Button, ButtonGroup, Link} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {NavLink as RouterLink} from 'react-router-dom';
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t, i18n} = useTranslation();

    // TODO: move state to redux
    const onChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <AppBar
                position="static"
                color="primary"
                elevation={0}
                sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
            >
                <Toolbar sx={{flexWrap: 'wrap'}}>
                    <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
                        {t("company.title")}
                    </Typography>
                    <nav>
                        <Link
                            component={RouterLink}
                            to={'/'}
                            variant="button"
                            color="text.primary"
                            sx={{my: 1, mx: 1.5}}
                        >
                            {t("navigation.links.home")}
                        </Link>
                        <Link
                            component={RouterLink}
                            to={'/about'}
                            variant="button"
                            color="text.primary"
                            sx={{my: 1, mx: 1.5}}
                        >
                            {t("navigation.links.about")}
                        </Link>
                        <ButtonGroup variant="text" color="inherit">
                            <Button onClick={() => onChangeLanguage('en')}>🇺🇸</Button>
                            <Button onClick={() => onChangeLanguage('pl')}>🇵🇱</Button>
                        </ButtonGroup>
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
