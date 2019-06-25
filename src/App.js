import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './app.scss'
import MainNav from "./components/main-nav/main-nav";
import Home from "./components/home";
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
      <Router>
        <CssBaseline />
          <Grid container spacing={2}>
              <Grid item xs={2}>
                  <Route path="/*" component={MainNav} />
              </Grid>
              <Grid item xs={10}>
                <Route path="/" component={Home} />
              </Grid>
          </Grid>
      </Router>
  )
};

export default App;
