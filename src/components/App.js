import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import Loading from './Loading';

const AsyncDynamicPage = importedComponent(
    () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage')
    
);
const AsyncNoMatch = importedComponent(
    () => import(/* webpackChunkName:'NoMatch' */ './NoMatch')
    
);

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dynamic" component={AsyncDynamicPage} />
                    <Route component={AsyncNoMatch} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;