import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducers from "./reducer";
import {BrowserRouter,Route, Redirect,Switch} from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashborad"
const store = createStore(reducers,applyMiddleware(thunk));
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Auth}></Route>
        <Route path="/dashborad" component={Dashboard}></Route>
        <Redirect to="/dashborad"></Redirect>
      </Switch>
      
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);
serviceWorker.unregister();
