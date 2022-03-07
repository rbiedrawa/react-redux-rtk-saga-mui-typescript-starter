import React from 'react';
import './App.css';
import {Button} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from '@mui/material/AppBar';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <LocalPostOfficeIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        App
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 2,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="md">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Posts
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Submit</Button>
                            <Button variant="outlined">Back</Button>
                        </Stack>
                    </Container>
                </Box>
            </main>
        </ThemeProvider>
    );
}

export default App;
