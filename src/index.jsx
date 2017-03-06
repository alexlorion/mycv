import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import Content from "components/Content"
import { IndexRedirect, Router, Route, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="mycv" />
      <Route path="mycv" component={Content} />
    </Route>
  </Router>
), document.getElementById("app"))
