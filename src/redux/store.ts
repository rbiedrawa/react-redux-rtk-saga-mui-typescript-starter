import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {createPost, deletePost, getPosts, Post, updatePost} from "../api/api";
import {all, fork, put, takeEvery} from "redux-saga/effects";

// Action Types
export const POSTS_FETCH_REQUESTED = "POSTS_FETCH_REQUESTED";
export const POSTS_FETCH_SUCCEEDED = "POSTS_FETCH_SUCCEEDED";

export const UPDATE_POST_REQUESTED = "UPDATE_POST_REQUESTED";
export const DELETE_POST_REQUESTED = "DELETE_POST_REQUESTED";
export const CREATE_POST_REQUESTED = "CREATE_POST_REQUESTED";


// Actions
export const fetchPosts = () => ({type: POSTS_FETCH_REQUESTED});

export const update = (post: Post) => ({
    type: UPDATE_POST_REQUESTED,
    payload: {
        ...post
    },
});

export const remove = (post: Post) => ({
    type: DELETE_POST_REQUESTED,
    payload: post,
});

export const add = (post: Post) => ({
    type: CREATE_POST_REQUESTED,
    payload: post,
});

// Reducers
const reducer = (
    state: Post[] = [],
    action: { type: typeof POSTS_FETCH_SUCCEEDED; payload: Post[] }
) => {
    switch (action.type) {
        case POSTS_FETCH_SUCCEEDED:
            return action.payload;
        default:
            return state;
    }
};

// Saga
function* onGetPosts() {
    const POSTS: Post[] = yield getPosts();
    yield put({type: POSTS_FETCH_SUCCEEDED, payload: POSTS});
}

function* onCreatePost({payload}: {
    type: typeof CREATE_POST_REQUESTED;
    payload: Post;
}) {
    yield createPost(payload);
    yield put({type: POSTS_FETCH_REQUESTED});
}

function* onUpdatePost({payload}: {
    type: typeof UPDATE_POST_REQUESTED;
    payload: Post;
}) {
    yield updatePost(payload);
    yield put({type: POSTS_FETCH_REQUESTED});
}

function* onDeletePost({payload}: {
    type: typeof DELETE_POST_REQUESTED;
    payload: Post;
}) {
    yield deletePost(payload);
    yield put({type: POSTS_FETCH_REQUESTED});
}


function* postsSaga() {
    yield takeEvery(POSTS_FETCH_REQUESTED, onGetPosts);
    yield takeEvery(UPDATE_POST_REQUESTED, onUpdatePost);
    yield takeEvery(DELETE_POST_REQUESTED, onDeletePost);
    yield takeEvery(CREATE_POST_REQUESTED, onCreatePost);
}

function* rootSaga() {
    yield all([fork(postsSaga)]);
}

export const selectPostsState = (state: Post[]) => state;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);