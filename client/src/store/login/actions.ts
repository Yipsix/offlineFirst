import { action } from 'typesafe-actions';
import { typeKeys } from './types';

export const signIn = () => action(typeKeys.SIGNIN);
export const signInSuccess = (message: string) => action(typeKeys.SIGNIN_SUCCESS);
export const signInFail = (message: string) => action(typeKeys.SIGNIN_FAIL);

export const signOut = () => action(typeKeys.SIGNOUT);
export const signOutSuccess = (message: string) => action(typeKeys.SIGNOUT_SUCCESS);
export const signOutFail = (message: string) => action(typeKeys.SIGNOUT_FAIL);