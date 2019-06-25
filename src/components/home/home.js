import React, {useState, useEffect} from "react";
import ArticlePage from "../article-page";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import {BrowserRouter as Route, withRouter} from 'react-router-dom';
import './home.scss';
import MainNav from "../main-nav/main-nav";

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
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className="api-key">
                        <InputBase
                            placeholder="News API Key"
                            inputProps={{ 'aria-label': 'News API Key' }}
                            onChange={onAPIChange}
                            onKeyDown={handleKeydown}
                            value={apiKeyTemp}
                            className="api-key__input"
                        />
                        <Divider className="api-key__divider"/>
                        <button disabled={!apiKeyTemp} onClick={getData}>
                            <i class="fas fa-2x fa-check-circle"></i>
                        </button>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <MainNav/>
                </Grid>
                <Grid item xs={10}>
                    {apiKey && <ArticlePage apiKey={apiKey} category={category}/>}
                </Grid>
            </Grid>
        </>
    );
};

export default withRouter(props => <Home {...props}/>);