import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Switch, HashRouter, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Gridder from "./Gridder";

class MyRouter extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path={'/'} component={App}/>
                        <Route exact path={'/grid'} component={Gridder}/>
                        <Route component={class ErrorRoute extends React.Component {
                            render() {
                                return (
                                    <div>
                                        Error 404
                                    </div>
                                );
                            }
                        }}/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

ReactDOM.render(<MyRouter/>, document.getElementById('root'));
registerServiceWorker();
