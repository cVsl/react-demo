import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/home';
import Detail from '../pages/detail';
import List from '../pages/list';
import Test from '../pages/test'
import MoreMsg from '../pages/moreMsg'
import Search from '../pages/search'
import Load from '../pages/load'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail/:id" component={Detail}/>
            <Route exact path="/list" component={List}/>
            <Route exact path="/test" component={Test}/>
            <Route exact path="/moreMsg/:id" component={MoreMsg}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/load" component={Load}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;