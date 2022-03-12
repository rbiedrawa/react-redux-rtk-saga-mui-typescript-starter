import {Link} from "@mui/material";
import {NavLink as RouterNavLink} from "react-router-dom";
import React from "react";
import Typography from "@mui/material/Typography";

const About = () => {
    return (
        <>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                About Page
            </Typography>
            <Link
                component={RouterNavLink}
                to={'/'}
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
            >Back to Home</Link>
        </>
    );
}
export default About;
