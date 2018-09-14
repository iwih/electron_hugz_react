import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Other from "./Other";

class MyRouter extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route component={App}/>
                        <Route exact path={'/other'} component={Other}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<MyRouter/>, document.getElementById('root'));
registerServiceWorker();
