import React, {useEffect} from "react";
import {useForm} from 'react-hook-form';

import '../App.css';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Link} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {FormTextField} from "../libs/ui/FormTextField";
import * as Yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {postsActions, selectPosts} from "../redux/features/posts/posts.slice";
import { NavLink as RouterLink } from 'react-router-dom';



interface CreateFormInput {
    title: string;
    body: string;
}

const createFormDefaultValues = {
    title: "",
    body: "",
};

const newPostValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title can\'t be empty').max(10, 'Title must not exceed 10 characters'),
    body: Yup.string().required('Body is required'),
});

function Home() {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectPosts);

    useEffect(() => {
        dispatch(postsActions.fetchAll());
    }, []);

    const methods = useForm<CreateFormInput>({
        defaultValues: createFormDefaultValues,
        resolver: yupResolver(newPostValidationSchema)
    });
    const {handleSubmit, reset, control} = methods;

    const onAdd = (data: CreateFormInput) => dispatch(postsActions.create({title: data!.title, body: data!.body}));

    return (
        <>
            <AppBar
                position="static"
                color="primary"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Company name
                    </Typography>
                    <nav>
                        <Link
                            component={RouterLink}
                            to={'/'}
                            variant="button"
                            color="text.primary"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Home
                        </Link>
                        <Link
                            component={RouterLink}
                            to={'/about'}
                            variant="button"
                            color="text.primary"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            About
                        </Link>
                    </nav>
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
                            <FormTextField name="title" label="title" control={control}/>
                            <FormTextField name="body" label="body" control={control}/>
                            <Button onClick={handleSubmit(onAdd)} variant={"contained"}>Add new Post</Button>
                            <Button onClick={() => reset()} variant={"outlined"}>Reset</Button>
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
                                        <Button size="small"
                                                onClick={() => dispatch(postsActions.delete(post))}>Delete</Button>
                                        <Button size="small" onClick={() => dispatch(postsActions.update({
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
        </>
    );
}

export default Home;
