import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './app.scss'
import Home from "./components/home/home";

const App = () => {
  return (
      <Router>
        <CssBaseline />
          <Route path="/" component={Home} />
      </Router>
  )
};

export default App;
