import IState from "../rootTypes";

export const getUserLogin = (state: IState) => state.auth.login;

export const get = (state: IState) => state.auth.login;
