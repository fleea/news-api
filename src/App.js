import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './app.scss'
import MainNav from "./components/main-nav";
import Home from "./components/home";

const App = () => {
  return (
      <Router>
        <CssBaseline />
        <Route path="/*" component={MainNav} />
        <Route exact path="/" component={Home} />
      </Router>
  )
};

export default App;
