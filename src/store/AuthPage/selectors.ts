import { IAuthState } from "./types";

export const getUserLogin = (state: IAuthState) => state.login;

export const get = (state: IAuthState) => state.login;
