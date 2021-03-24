import React, { Component} from "react";
import { Button } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from './src/components/Header'
import Home from './src/components/Home'
import Block from './src/components/Block'
import New from './src/components/New'
import Loading from './src/components/Loading'
class App extends Component{
    render(){
        return (
                <Router>
                    <div>
                        <Header/>
                        <div className="page-container">
                            <Loading/>
                            <Switch>
                                <Route path="/" component={Home} exact />
                                <Route path="/block" component={Block} />
                                <Route path="/new" component={New} />
                            </Switch>
                        </div>
                    </div>
                </Router>
        );
    }
}
export default App;