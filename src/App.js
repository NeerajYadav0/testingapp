import React from 'react';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/certificate" component={Home} />
    </Switch>
  </Router>
}

export default App;
