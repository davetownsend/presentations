import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/container/App';
import Home from './components/presentation/Home';
import Search from './components/container/Search';
import Login from './components/container/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './assets/styles/main.css';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <div>
      <Router history={browserHistory}>
        <Route path="/home" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/search" component={Search}/>
        </Route>
        <Route>
          <Route path="/" component={Login}/>
        </Route>
      </Router>
    </div>
  </MuiThemeProvider>,
  document.getElementById('container')
);