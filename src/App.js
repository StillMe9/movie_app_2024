import React from "react";
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from "./components/Navigation";
import Detail from './components/Detail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return <Router>
    <Navigation />
    <Switch>
      
      <Route path="/" exact={true} component={Home}>
      </Route>
      <Route path="/about" exact={true} component={About}>
      </Route>
      <Route path="/movie-detail" exact={true} component={Detail}>
      </Route>
    </Switch>
  </Router>
}

export default App;
