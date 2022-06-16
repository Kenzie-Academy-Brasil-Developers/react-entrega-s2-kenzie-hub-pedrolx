import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RegisterUser from "../Pages/RegisterUser";
import Dashboard from "../Pages/Dashboard";
import { AnimatePresence } from 'framer-motion';

function Routes() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();
  const history = useHistory();

  if (auth) {
    history.push("/dashboard");
  } else {
    history.push("/");
  }

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/RegisterUser">
          <RegisterUser />
        </Route>

        <Route path="/dashboard">
          <Dashboard setAuth={setAuth} user={user}/>
        </Route>

        <Route path="/login">
          <Login setAuth={setAuth} setUser={setUser}/>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default Routes;
