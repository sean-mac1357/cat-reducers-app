import { createStore } from 'redux';
import { cat } from './reducers';

const defaultState = {
    cats: {
        '1001': {
            name: 'Peaches',
            activity: "Terrorizing"
        },
        '1002': {
            name: 'Special-K',
            activity: "Terrorizing"
        },
    },
}

export const store = createStore(
    cat,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);