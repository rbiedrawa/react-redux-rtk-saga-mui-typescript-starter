import React from "react";
import {Outlet} from 'react-router-dom';
import Header from "./Header";
import Box from "@mui/material/Box";

const Layout = () => (
    <>
        <Header/>
        <main>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 3,
                    pb: 3,
                }}
            >
                <Outlet/>
            </Box>
        </main>
    </>
);

export default Layout;
