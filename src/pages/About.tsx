import {Link} from "@mui/material";
import {NavLink as RouterNavLink} from "react-router-dom";
import React from "react";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                {t('about.title')}
            </Typography>
            <Link
                component={RouterNavLink}
                to={'/'}
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
            >{t('about.back')}</Link>
        </>
    );
}
export default About;
