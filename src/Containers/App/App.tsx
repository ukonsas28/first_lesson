import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import RegistrationPageContainer from "../RegistrationPageContainer";
import AuthPageContainer from "../AuthPageContainer";
import MainPageContainer from "../MainPageContainer";

function App() {
  const history = useHistory();
  console.log(history);
  return (
    <>
      <Switch>
        <Route path="/auth" component={AuthPageContainer} />
        <Route path="/registration" component={RegistrationPageContainer} />
        <Route exact path="/" component={MainPageContainer} />
      </Switch>
    </>
  );
}

export default App;
