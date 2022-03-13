import createSagaMiddleware from "@redux-saga/core";
import {configureStore} from "@reduxjs/toolkit";
import {rootSaga} from "./rootSaga";
import postsReducer from "./features/posts/posts.slice";

import {createReduxHistoryContext} from "redux-first-history";
import {createBrowserHistory} from 'history';
import {Env} from "../constants/Env";
import logger from "redux-logger";

const {createReduxHistory, routerMiddleware, routerReducer} = createReduxHistoryContext({
    history: createBrowserHistory(),
    reduxTravelling: Env.isDev(),
    savePreviousLocations: 1
});

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            posts: postsReducer,
            router: routerReducer
        },
        devTools: Env.isDev(),
        middleware: (getDefaultMiddleware => {

            return getDefaultMiddleware({thunk: false,})
                .concat(sagaMiddleware)
                .concat(routerMiddleware)
                .concat(logger);
        }),
    })

    sagaMiddleware.run(rootSaga);

    return store;
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = makeStore();

export const history = createReduxHistory(store);