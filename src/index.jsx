import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import Content from "components/Content"
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Content} />
    </Route>
  </Router>
), document.getElementById("app"))
