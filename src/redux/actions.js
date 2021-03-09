import { ACTION_SET_ADD_CAT, ACTION_SET_ACTIVITY } from './actionTypes';


export const setActivity = (id, activity) => {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            id,
            activity
            
        }
    }
}

export const setAddCat = (addCat) => {
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return {
        type: ACTION_SET_ADD_CAT,
        payload: {
            id,
            addCat
            
        } 
    }
}