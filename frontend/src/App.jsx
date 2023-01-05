import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import QuestionIndex from "./components/QuestionIndex";
import Sidebar from "./components/Sidebar";

const App = props => {
  return (
    <>
      <Navigation />
      <div id="page-content">
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/questions">
            <Sidebar />
            <QuestionIndex />
          </Route>
          <Route path="/404">
            <Sidebar />
            <NotFound />
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
