import { IAuthState } from "./AuthPage/types";
import { IRegistrationState } from "./RegistrationPage/types";

export default interface IState {
  auth: IAuthState;
  registration: IRegistrationState;
}
