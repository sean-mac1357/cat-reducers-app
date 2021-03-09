import { ACTION_SET_ACTIVITY, ACTION_SET_ADD_CAT } from './actionTypes';

export const cat = (state, action) => {
    const { id, activity, addCat } = action.payload || {};
    switch(action.type) {
        case ACTION_SET_ADD_CAT:
            return {
                ...state,
                cats: {
                    ...state.cats,
                    [id]: addCat
                }
            }
        case ACTION_SET_ACTIVITY:
            return {
                ...state,
                cats: {
                    ...state.cats,
                    [id]:{
                        ...state.cats[id],
                        activity
                    }
                }
            }
        default:
            return state;
    }
}