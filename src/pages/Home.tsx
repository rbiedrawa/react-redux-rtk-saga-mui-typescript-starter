import React, {useEffect, useState} from "react";
import {useForm} from 'react-hook-form';

import '../App.css';
import {
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    FormControl, FormHelperText,
    Grid,
    InputLabel,
    Link, MenuItem, Select
} from "@mui/material";
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
import {useTranslation} from "react-i18next";

interface CreateFormInput {
    title: string;
    body: string;
}

const createFormDefaultValues = {
    title: "",
    body: "",
};

function Home() {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectPosts);
    const { t, i18n } = useTranslation();

    const newPostValidationSchema = Yup.object().shape({
        title: Yup.string().required(t('home.form.validation.title-required')).max(10, t('home.form.validation.title-max', {num: 10})),
        body: Yup.string().required(t('home.form.validation.body-required')),
    });

    useEffect(() => {
        dispatch(postsActions.fetchAll());
    }, []);

    const methods = useForm<CreateFormInput>({
        defaultValues: createFormDefaultValues,
        resolver: yupResolver(newPostValidationSchema)
    });
    const {handleSubmit, reset, control} = methods;

    const onAdd = (data: CreateFormInput) => dispatch(postsActions.create({title: data!.title, body: data!.body}));

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
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        {t("company.title")}
                    </Typography>
                    <nav>
                        <Link
                            component={RouterLink}
                            to={'/'}
                            variant="button"
                            color="text.primary"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            {t("navigation.links.home")}
                        </Link>
                        <Link
                            component={RouterLink}
                            to={'/about'}
                            variant="button"
                            color="text.primary"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            {t("navigation.links.about")}
                        </Link>
                        <ButtonGroup  variant="text" color="inherit">
                            <Button onClick={() => onChangeLanguage('en')}>🇺🇸</Button>
                            <Button onClick={() => onChangeLanguage('pl')}>🇵🇱</Button>
                        </ButtonGroup>

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
                            {t("home.title")}
                        </Typography>
                        <Stack
                            sx={{pt: 4}}
                            direction="column"
                            spacing={1}
                            justifyContent="center"
                        >
                            <FormTextField name="title" label={t("home.form.title")} control={control}/>
                            <FormTextField name="body" label={t("home.form.body")} control={control}/>
                            <Button onClick={handleSubmit(onAdd)} variant={"contained"}>{t("home.buttons.submit")}</Button>
                            <Button onClick={() => reset()} variant={"outlined"}>{t("home.buttons.reset")}</Button>
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
                                                onClick={() => dispatch(postsActions.delete(post))}>{t("home.buttons.delete")}</Button>
                                        <Button size="small" onClick={() => dispatch(postsActions.update({
                                            ...post,
                                            body: `Updated at ${new Date().toISOString()}`
                                        }))}>{t("home.buttons.update")}</Button>
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
