import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AnimateProvider } from './services/animate.service';
import { StandardRoute } from './utils';
import { RouteLayout } from './layouts';
import { Home } from './pages';

import './_sass/index.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <AnimateProvider>
      <Router basename="/">
        <Switch>
          <StandardRoute exact path="/" component={Home} layout={RouteLayout} />
        </Switch>
      </Router>
    </AnimateProvider>
  );
}

export default App;
