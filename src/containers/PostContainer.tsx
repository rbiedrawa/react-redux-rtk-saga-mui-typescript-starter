import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {postsActions, selectPosts} from "../store/features/posts/posts.slice";
import PostList from "../components/Posts/PostList";
import PostForm, {PostFormInput} from "../components/Posts/PostForm";
import Container from "@mui/material/Container";
import {Post} from "../libs/models/post.model";

const PostContainer = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectPosts);

    useEffect(() => {
        dispatch(postsActions.fetchAll());
    }, []);

    const onAddPost = (data: PostFormInput) => dispatch(postsActions.create({title: data!.title, body: data!.body}));

    const onDeletePost = (post: Post) => dispatch(postsActions.delete(post));

    const onUpdatePost = (post: Post) => dispatch(postsActions.update({
        ...post,
        body: `Updated at ${new Date().toISOString()}`
    }));

    return (
        <>
            <Container maxWidth="xs">
                <PostForm onSubmitClick={onAddPost}/>
            </Container>
            <Container sx={{py: 4}} maxWidth="md">
                <PostList posts={posts} onDeletePost={onDeletePost} onUpdatePost={onUpdatePost}/>
            </Container>
        </>
    );
};

export default PostContainer;
