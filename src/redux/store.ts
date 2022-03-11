import createSagaMiddleware from "@redux-saga/core";
import {configureStore} from "@reduxjs/toolkit";
import {rootSaga} from "./rootSaga";
import postsReducer from "./features/posts/posts.slice";

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            'posts': postsReducer,
        },
        middleware: (getDefaultMiddleware => {
            return getDefaultMiddleware({
                thunk: false,
            }).concat(sagaMiddleware);
        })
    })

    sagaMiddleware.run(rootSaga);

    return store;
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = makeStore();