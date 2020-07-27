import React from 'react';
import ROUTES from '../consts/routes';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import DetailFunctionalities from './pages/detail/DetailFunctionalities';

import { AnimateProvider, LanguageProvider, ToolboxProvider, DatabaseProvider } from './services';
import { StandardRoute } from './utils';
import { RouteLayout, PlainLayout } from './layouts';
import { HomeBrand, HomeInfluencer, PlainPage } from './pages';

import './_sass/index.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
    <DatabaseProvider>
      <ToolboxProvider>
        <LanguageProvider>
          <AnimateProvider>
              <Router basename="/">
                <Switch>
                  <Route path = {ROUTES.functionality}>
                      <DetailFunctionalities />
                  </Route>
                  <Redirect exact path="/" to='/home-content-creator'/>
                  <StandardRoute exact path="/home-content-creator" component={HomeInfluencer} layout={RouteLayout} />
                  <StandardRoute exact path="/home-brand" component={HomeBrand} layout={RouteLayout} />
                  <StandardRoute path="/:page" component={PlainPage} layout={PlainLayout} />
                </Switch>
              </Router>
          </AnimateProvider>
        </LanguageProvider>
      </ToolboxProvider>
    </DatabaseProvider>    
  );
}

export default App;
