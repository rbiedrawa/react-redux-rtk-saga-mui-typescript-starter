// DUCKS pattern
import {createAction, createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {Post} from "../../../api/api";
import {RootState} from "../../store";

interface PostsState {
    posts: Post[];
}

const initialState: PostsState = {
    posts: [],
};

// slice
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchAllSucceeded(state, action: PayloadAction<Post[]>) {
            // it's okay to do this here, because immer makes it immutable under the hood😊
            state.posts = action.payload;
        }
    }
})

// Actions
export const postsActions = {
    create: createAction(`${postsSlice.name}/create`, (post: Post) => ({
        payload: {id: nanoid(), title: post!.title, body: post!.body},
    })),
    fetchAll:  createAction(`${postsSlice.name}/fetchAll`),
    fetchAllSucceeded: postsSlice.actions.fetchAllSucceeded,
    update: createAction<Post>(`${postsSlice.name}/update`),
    delete: createAction<Post>(`${postsSlice.name}/delete`),
}

// Selectors
export const selectPosts = (state: RootState) => state.posts.posts;

// Reducer
export default postsSlice.reducer;