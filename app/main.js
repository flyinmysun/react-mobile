import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route,IndexRoute, hashHistory,browserHistory } from 'react-router';
//import { Button } from 'antd-mobile';


import RootView from "./RootView/RootView"
import Buy from "./buy/buy"
import './main.css'



class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={RootView}>
                    <IndexRoute component={Buy}/>
                    <Route path="/buy" component={Buy}/>

                </Route>
            </Router>
        )
    }
}


ReactDom.render(<App/>,document.getElementById("root"));
