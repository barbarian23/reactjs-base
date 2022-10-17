import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./screen/home/home.page";
import Login from "./screen/login/login.page";
import { BrowserRouter, Switch } from "react-router-dom";

import { CLIENT_LOGIN, CLIENT_HOME, CLIENT_OTP } from "../common/constants/common.constants";

class MainRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={CLIENT_LOGIN} component={Login} />
                    <Route path={CLIENT_HOME} component={Home} />
                    <Route path={CLIENT_OTP} component={Otp} />
                    {/* <Route path="*" component ={404Page}/> */}
                </Switch>
            </BrowserRouter>
        );
    }
}
export default MainRouter;