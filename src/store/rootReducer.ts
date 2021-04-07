import { combineReducers } from "redux";
import authReducer from "./AuthPage/reducer";
import registrationReducer from "./RegistrationPage/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
});

export default rootReducer;
