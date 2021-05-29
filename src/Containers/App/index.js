import React from 'react';
import "../../Style/App.css"
import Header from '../Header';
import { Route, Switch } from 'react-router';
import About from '../modules/about';
import Options from '../modules/options';
import Account from '../modules/accounts';
import Home from '../modules/home';
import Settings from '../modules/setting';
import Fouter from '../Footer';


function App() {
    return (
        <React.Fragment>
            <React.StrictMode>
                <Header />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/options">
                        <Options />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route path="/account">
                        <Account />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Fouter />
            </React.StrictMode>
        </React.Fragment>
    );
}

export default App;
