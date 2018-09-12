import { Dispatch } from "redux";
import {
  signIn as signInToApi,
  signOut as signOutFromApi
} from "../api/authenticationApi";

import { IAuthState } from '../store/IStoreState';
import { ActionTypeKeys as keys  } from "./types/authActionTypes";

import {
    ISignInFailAction,
    ISignInInProgressAction,
    ISignInSuccessAction,
    ISignOutFailAction,
    ISignOutInProgressAction,
    ISignOutSuccessAction
  } from "../action-types/authActionTypes";


export function signIn(): (dispatch: Dispatch<IAuthState>) => Promise<void> {
  return async (dispatch: Dispatch<IAuthState>) => {
    // Signal work in progress.
    dispatch(signInInProgress());

    try {
      await signInToApi();

      dispatch(signInSuccess());
    } catch (err) {
      dispatch(signInFail(err));
    }
  };
}

export function signOut(): (dispatch: Dispatch<IAuthState>) => Promise<void> {
  return async (dispatch: Dispatch<IAuthState>) => {
    // Signal work in progress.
    dispatch(signOutInProgress());

    try {
      await signOutFromApi();

      dispatch(signOutSuccess());
    } catch (err) {
      dispatch(signOutFail(err));
    }
  };
}

function signInInProgress(): ISignInInProgressAction {
  return {
    type: keys.SIGNIN_INPROGRESS
  };
}

function signInSuccess(): ISignInSuccessAction {
  return {
    type: keys.SIGNIN_SUCCESS
  };
}

function signInFail(error: Error): ISignInFailAction {
  return {
    payload: {
      error
    },
    type: keys.SIGNIN_FAIL
  };
}

function signOutInProgress(): ISignOutInProgressAction {
  return {
    type: keys.SIGNOUT_INPROGRESS
  };
}

function signOutSuccess(): ISignOutSuccessAction {
  return {
    type: keys.SIGNOUT_SUCCESS
  };
}

function signOutFail(error: Error): ISignOutFailAction {
  return {
    payload: {
      error
    },
    type: keys.SIGNOUT_FAIL
  };
}
