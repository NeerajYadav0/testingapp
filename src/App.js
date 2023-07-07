import React from 'react';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
    <Router>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/certificate" component={Home} />
    </Routes>
  </Router>
}

export default App;
