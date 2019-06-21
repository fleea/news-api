import React, {useState} from 'react';
import {useNewsApi} from "./hooks/use-news-api";
import ArticleContainer from "./components/article";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const App = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiKeyTemp, setApiKeyTemp] = useState('');
  const onAPIChange = ({target}) => {
    if(!target || !target.value) return;
    setApiKeyTemp(target.value);
  };
  const handleKeydown = (event) => {
    event && event.key === 'Enter' && setApiKey(apiKeyTemp);
  };
  return (
    <>
      <CssBaseline />
      <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h1" gutterBottom>
                News API example
              </Typography>
            <TextField
                label="News API Key"
                value={apiKeyTemp}
                fullWidth={true}
                onChange={onAPIChange}
                onKeyDown={handleKeydown}/>
            </Grid>
          </Grid>
        {apiKey && <ArticlePage apiKey={apiKey}/>}
      </Container>
    </>
  );
};

const ArticlePage = ({apiKey}) => {
  const [loading, articles] = useNewsApi(apiKey);
  return (
      <>
        {loading && <CircularProgress/>}
        {!loading && articles && !!articles.length && <ArticleContainer articles={articles}/> }
      </>
  )
};

export default App;
