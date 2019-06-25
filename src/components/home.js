import React, {useState, useEffect} from "react";
import Button from '@material-ui/core/Button';
import ArticlePage from "./article-page";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';

const Home = ({location}) => {
    const [apiKey, setApiKey] = useState('');
    const [apiKeyTemp, setApiKeyTemp] = useState('');
    const [category, setCategory] = useState('');
    const onAPIChange = ({target}) => {
        if(!target || !target.value) return;
        setApiKeyTemp(target.value);
    };
    const handleKeydown = (event) =>
        event && event.key === 'Enter' && getData();
    const getData = () => {
        setApiKey(apiKeyTemp);
    };

    useEffect(()=> {
        const urlArray = location.pathname.split('/').filter(item => item && item !== '');
        setCategory(urlArray[urlArray.length - 1])
    }, [location.pathname]);

    return (
        <Container>
            <Grid container spacing={2}>
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
            </Grid>
            {apiKey && <ArticlePage apiKey={apiKey} category={category}/>}
        </Container>
    );
};

export default withRouter(props => <Home {...props}/>);