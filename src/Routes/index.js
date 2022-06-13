import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

function Routes() {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/register">
                <Register/>
            </Route>

        </Switch>
    )
}

export default Routes;