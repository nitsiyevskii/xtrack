import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App/App';
import SignIn from './Authorization/Signin';
import SignUp from './Authorization/Signup';
import Albums from './Albums/Albums';
import Album from './Albums/Album';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { reducers } from './_reducers';

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <App>
                    <Switch>
                        <Route exact path="/" component={Albums} />
                        <Route path="/album/:id" component={Album} />
                    </Switch>
                </App>

            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
)