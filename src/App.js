import React, {useState} from 'react';
import {useNewsApi} from "./hooks/use-news-api";
import ArticleContainer from "./components/article";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './app.scss'

const App = () => {
  return (
      <Router>
        <CssBaseline />
        <Route path="/*" component={mainNav} />
        <Route exact path="/" component={Home} />
      </Router>
  )
};

const Home = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiKeyTemp, setApiKeyTemp] = useState('');
  const [category, setCategory] = useState('');
  const onAPIChange = ({target}) => {
    if(!target || !target.value) return;
    setApiKeyTemp(target.value);
  };
  const handleKeydown = (event) => {
    event && event.key === 'Enter' && setApiKey(apiKeyTemp);
  };
  const categoryChange = ({target}) => {
    if(!target || !target.value) return;
    setCategory(target.value);
  };
  const getData = () => setApiKey(apiKeyTemp);

  return (
      <Router>
        <CssBaseline />
        <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Typography variant="h4" component="h1" gutterBottom className="news__header">
                News API example
              </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField
                    label="News API Key"
                    value={apiKeyTemp}
                    fullWidth={true}
                    onChange={onAPIChange}
                    onKeyDown={handleKeydown}/>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="primary" onClick={getData} disabled={!apiKeyTemp}>
                  Fetch API
                </Button>
              </Grid>
               <Grid item xs={6}>
                <FormControl className="news--full-width">
                  <InputLabel htmlFor="category">Category</InputLabel>
                  <Select
                      autoWidth={true}
                      value={category}
                      onChange={categoryChange}
                      inputProps={{
                        name: 'category',
                        id: 'category',
                      }}
                  >
                    <MenuItem value="">
                      <em>All</em>
                    </MenuItem>
                    <MenuItem value='business'>Business</MenuItem>
                    <MenuItem value='entertainment'>Entertainment</MenuItem>
                    <MenuItem value='general'>General</MenuItem>
                    <MenuItem value='health'>Health</MenuItem>
                    <MenuItem value='science'>Science</MenuItem>
                    <MenuItem value='sports'>Sports</MenuItem>
                    <MenuItem value='technology'>Technology</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          {apiKey && <ArticlePage apiKey={apiKey} category={category}/>}
        </Container>
      </Router>
  );
};

const mainNav = () => {
  return (<AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
  )
};

const ArticlePage = ({apiKey, category}) => {
  const [loading, articles] = useNewsApi({
    apiKey,
    category
  });
  return (
      <div className="news--padding">
        {loading && <CircularProgress/>}
        {!loading && articles && !!articles.length && <ArticleContainer articles={articles}/> }
      </div>
  )
};

export default App;
