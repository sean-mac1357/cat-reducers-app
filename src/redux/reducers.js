import { ACTION_NAPPING, ACTION_EATING, ACTION_PLAYING } from './actionTypes';

export const activity = (state, action) => {
    switch(action.type) {
        case ACTION_NAPPING:
            return {
                activity: 'napping'
            }
        case ACTION_EATING:
            return {
                activity: 'eating'
            }
        case ACTION_PLAYING:
            return {
                activity: 'playing'
            }
        default:
            return state;
    }
}