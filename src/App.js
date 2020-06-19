import React from 'react';
import Home from './views/Home'
import About from './views/About'
import {BrowserRouter, HashRouter as Router, Switch, Route,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Home} path="/" exact></Route>
          <Route component={Home} path="/home"></Route>
          <Route component={About} path="/about"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
