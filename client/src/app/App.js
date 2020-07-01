import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { AnimateProvider, LanguageProvider, ToolboxProvider } from './services';
import { StandardRoute } from './utils';
import { RouteLayout } from './layouts';
import { HomeBrand, HomeInfluencer } from './pages';

import './_sass/index.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <ToolboxProvider>
    <LanguageProvider>
    <AnimateProvider>
        <Router basename="/">
          <Switch>
            <Redirect exact path="/" to='/home-influencer'/>
            <StandardRoute exact path="/home-influencer" component={HomeInfluencer} layout={RouteLayout} />
            <StandardRoute exact path="/home-brand" component={HomeBrand} layout={RouteLayout} />
          </Switch>
        </Router>
    </AnimateProvider>
    </LanguageProvider>
    </ToolboxProvider>
    
  );
}

export default App;
