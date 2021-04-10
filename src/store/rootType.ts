import { IAuthPage } from "./AuthPage/types";
import { IMainPage } from "./MainPage/types";

type TState = {
  auth: IAuthPage;
  main: IMainPage;
};

export default TState;
