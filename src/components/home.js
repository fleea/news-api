import React, {useState} from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import ArticlePage from "./article-page";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
    );
};

export default Home;