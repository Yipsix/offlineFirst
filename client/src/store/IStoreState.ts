export interface IAuthState {
    readonly isAuthenticated: boolean;
    readonly user: string
  };


export default interface IStoreState {
    readonly authState: IAuthState;
  };

  
