import React from 'react';
// import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListHomePage from './pages/ListHomePage'
import ActiveListPage from './pages/ActiveListPage'
import LaunchListPage from './pages/LaunchListPage'


function App() {
  return (      
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ListHomePage} />
          <Route exact path="/listlaunch" component={LaunchListPage} />
          <Route exact path="/list" component={ActiveListPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
