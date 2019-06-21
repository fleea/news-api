import React from "react";
import Article from "./article";
import Grid from '@material-ui/core/Grid';

const ArticleContainer = ({articles}) => {
    return (
        <Grid container spacing={2}>
            {
                (articles || []).map(article =>
                    <Grid key={article.url} item xs={3}>
                        <Article article={article}/>
                    </Grid>
                )
            }
        </Grid>
    )
};

export default ArticleContainer;