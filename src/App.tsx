import React, {useEffect} from "react";
import {Provider} from "react-redux";
import {useForm} from 'react-hook-form';

import './App.css';
import {Button, Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from '@mui/material/AppBar';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FormTextField} from "./libs/ui/FormTextField";
import * as Yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {
    postsActions,
    selectPosts
} from "./redux/features/posts/posts.slice";
import {store} from "./redux/store";


const theme = createTheme();

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

function PostApp() {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectPosts);

    useEffect(() => {
        dispatch(postsActions.fetchAll());
    }, []);

    const methods = useForm<CreateFormInput>({defaultValues: createFormDefaultValues, resolver: yupResolver(newPostValidationSchema)});
    const {handleSubmit, reset, control} = methods;

    const onAdd = (data: CreateFormInput) => dispatch(postsActions.create({title: data!.title, body: data!.body}));

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
                            <FormTextField name="title" label="title" control={control}  />
                            <FormTextField name="body" label="body" control={control} />
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
                                        <Button size="small" onClick={() => dispatch(postsActions.delete(post))}>Delete</Button>
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
