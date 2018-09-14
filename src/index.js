import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Switch, HashRouter, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Other from "./Other";

class MyRouter extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path={'/'} component={App}/>
                        <Route exact path={'/other'} component={Other}/>
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
