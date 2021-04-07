export enum ActionType {
  userRegistration = "USER_REGISTRATION",
}

export const userLoginAction = (data: any) => {
  return {
    type: ActionType.userRegistration,
    payload: data,
  };
};
