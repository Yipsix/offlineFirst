import { ActionTypeKeys } from "../actions/types//authActionTypes";
import { ActionTypes } from "../actions/types/authActionTypes";
import { IAuthState } from '../store/IStoreState'

const defaultState: IAuthState = {
    isAuthenticated: false,
    user: ''
};

export default function authReducer<IAuthState>(
  state = defaultState,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.SIGNIN_SUCCESS:
      return {
         isAuthenticated: true, user: 'jesper'
      }
    case ActionTypeKeys.SIGNOUT_SUCCESS:
      return {
          isAuthenticated: false, user: ''
      }
    default:
      return defaultState;
  }
}


