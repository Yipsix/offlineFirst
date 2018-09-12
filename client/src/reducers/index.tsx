import { combineReducers } from 'redux';
import authReducer from './authReducer';
import IStoreState from '../store/IStoreState';
​
export default combineReducers<IStoreState>({
    authState: authReducer
});
