import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AnimateProvider, LanguageProvider } from './services';
import { StandardRoute } from './utils';
import { RouteLayout } from './layouts';
import { Home } from './pages';

import './_sass/index.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <LanguageProvider>
    <AnimateProvider>
      
      <Router basename="/">
        <Switch>
          <StandardRoute exact path="/" component={Home} layout={RouteLayout} />
        </Switch>
      </Router>

    </AnimateProvider>
    </LanguageProvider>
  );
}

export default App;
