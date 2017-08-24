import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route,IndexRoute, hashHistory,browserHistory } from 'react-router';
//import { Button } from 'antd-mobile';


import RootView from "./RootView/RootView"
import Login from "./User/Login"
import Buy from "./buy/buy"
import HoldBuy from "./holdBuy/holdBuy"
import HoldSell from "./holdSell/holdSell"
import Loss from "./loss/loss"
import './main.css'

require("babel-core/register");
require("babel-polyfill");
require ('es6-promise').polyfill();
require ('isomorphic-fetch');


class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={RootView}>
                    <IndexRoute component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/buy" component={Buy}/>
                    <Route path="/hold-buy" component={HoldBuy}/>
                    <Route path="/holdSell" component={HoldSell}/>
                    <Route path="/loss" component={Loss}/>
                </Route>
            </Router>
        )
    }
}


ReactDom.render(<App/>,document.getElementById("root"));
