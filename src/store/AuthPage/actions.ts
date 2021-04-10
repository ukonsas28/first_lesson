export enum AuthPageActionType {
  userLogin = "USER_LOGIN",
}

export const userLoginAction = (login: string) => {
  return {
    type: AuthPageActionType.userLogin,
    payload: login,
  };
};
