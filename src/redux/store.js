import { createStore } from 'redux';
import { cat } from './reducers';

const defaultState = {
    name: 'Guster',
    activity: "Terrorizing"
}

export const store = createStore(
    cat,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);