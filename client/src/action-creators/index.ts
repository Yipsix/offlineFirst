import * as ActionTypes from '../action-types/index';
// import axios from 'axios';

export type fetchUserAction = {
    type: ActionTypes.FETCH_USER,
    user: String 
};

export type fetchUser = typeof fetchUser;

export async function fetchUser(): Promise<fetchUserAction> {
    
    try {
        // const res = await axios.get('/api/current_user');
        // console.log(res.data);

    } catch (err) {
        // console.error('Http error', err)
    }
    return {
        type: ActionTypes.FETCH_USER,
        user: 'jesper'
    };

} 