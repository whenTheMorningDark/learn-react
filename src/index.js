import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducers from "./reducer"
import {BrowserRouter,Route} from "react-router-dom";
import Login from "./container/login/login";
import Register from "./container/register/register";
import AuthRoute from "./component/authroute/authroute"
import 'antd-mobile/dist/antd-mobile.css';

const store = createStore(reducers,applyMiddleware(thunk));
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);

