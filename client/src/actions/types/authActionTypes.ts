export interface ISignInSuccessAction {
    readonly type: ActionTypeKeys.SIGNIN_SUCCESS;
}

export interface ISignInInProgressAction {
    readonly type: ActionTypeKeys.SIGNIN_INPROGRESS;
}

export interface ISignInFailAction {
    readonly type: ActionTypeKeys.SIGNIN_FAIL;
    readonly payload: {
        readonly error: Error;
    };
}

export interface ISignOutSuccessAction {
    readonly type: ActionTypeKeys.SIGNOUT_SUCCESS;
}

export interface ISignOutInProgressAction {
    readonly type: ActionTypeKeys.SIGNOUT_INPROGRESS;
}

export interface ISignOutFailAction {
    readonly type: ActionTypeKeys.SIGNOUT_FAIL;
    readonly payload: {
        readonly error: Error;
    };
}

export type ActionTypes =
    | ISignInFailAction
    | ISignInInProgressAction
    | ISignInSuccessAction
    | ISignOutFailAction
    | ISignOutInProgressAction
    | ISignOutSuccessAction;


export enum ActionTypeStates {
    INPROGRESS = "_INPROGRESS",
    SUCCESS = "_SUCCESS",
    FAIL = "_FAIL"
}

export enum ActionTypeKeys {
    SIGNIN_INPROGRESS = "SIGNIN_INPROGRESS",
    SIGNIN_SUCCESS = "SIGNIN_SUCCESS",
    SIGNIN_FAIL = "SIGNIN_FAIL",
    SIGNOUT_INPROGRESS = "SIGNOUT_INPROGRESS",
    SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS",
    SIGNOUT_FAIL = "SIGNOUT_FAIL"
}