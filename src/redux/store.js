import { createStore } from 'redux';
import { activity } from './reducers';

const defaultState = {
    activity: "terrorizing"
}

export const store = createStore(
    activity,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);