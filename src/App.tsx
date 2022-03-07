import React, {useCallback, useEffect, useRef} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {add, fetchPosts, remove, selectPostsState, store, update,} from "./redux/store";

import './App.css';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, TextField} from "@mui/material";
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

function PostApp() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPostsState);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const titleRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLInputElement>(null);

    const onAdd = useCallback(() => {
        dispatch(add({id: Date.now(), title: titleRef.current!.value, body: bodyRef.current!.value}));
        titleRef.current!.value = "";
        bodyRef.current!.value = "";
    }, [dispatch]);


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <LocalPostOfficeIcon sx={{mr: 2}}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        App
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 6,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="xs">
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
                            sx={{pt: 4}}
                            direction="column"
                            spacing={1}
                            justifyContent="center"
                        >
                            <TextField id="outlined-basic" label="title" inputRef={titleRef} variant="outlined"/>
                            <TextField id="standard-basic" label="body" inputRef={bodyRef} variant="outlined"/>
                            <Button variant="contained" onClick={onAdd}>Add new Post</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{py: 8}} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {posts.map((post) => (
                            <Grid item key={post.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                                >
                                    <CardMedia
                                        component="img"
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {post.title}
                                        </Typography>
                                        <Typography>
                                            {post.body}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => dispatch(remove(post))}>Delete</Button>
                                        <Button size="small" onClick={() => dispatch(update({
                                            ...post,
                                            body: `Updated at ${new Date().toISOString()}`
                                        }))}>Update</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}

function App() {
    return (
        <Provider store={store}>
            <PostApp/>
        </Provider>
    );
}

export default App;
