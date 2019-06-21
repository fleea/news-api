import {useNewsApi} from "../hooks/use-news-api";
import CircularProgress from '@material-ui/core/CircularProgress';
import React from "react";
import ArticleContainer from "./article-container";

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

export default ArticlePage;