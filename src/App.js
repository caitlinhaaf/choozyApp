import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListHomePage from './pages/ListHomePage'
import ActiveListPage from './pages/ActiveListPage'
// import Tablist from './components/tablist/Tablist';
// import Layout from './components/layout/Layout';
// import ButtonLink from './components/buttonLink/ButtonLink';

// import componentStyles from  './App.module.scss';

function App() {
  return (      
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ListHomePage} />
          <Route exact path="/list" component={ActiveListPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
