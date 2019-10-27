import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducers from "./reducer"
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Login from "./container/login/login";
import Register from "./container/register/register";
import BossInfo from "./container/bossinfo/bossinfo";
import AuthRoute from "./component/authroute/authroute";
import GeniusInfo from "./component/geniusinfo/geniusinfo";
import Dashborad from "./component/dashborad/dashborad";
import 'antd-mobile/dist/antd-mobile.css';
import "./static/css/main.css";
const store = createStore(reducers,applyMiddleware(thunk));
// function Dashborad() {
//   return <h2>Dashborad</h2>
// }
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path="/bossinfo" component={BossInfo}></Route>
          <Route path="/geniusinfo" component={GeniusInfo}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route component={Dashborad}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);

