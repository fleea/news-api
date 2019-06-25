import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import './article.scss';

const Article = ({article}) => {
    if(!article) return null;
    return (
        <Card className="article">
                {
                    article.source && article.source.name &&
                    <h5 className="article__subheader">
                        Source {article.source.name}
                    </h5>
                }
                {
                    article.title &&
                    <h3 className="article__header">
                        {article.title}
                    </h3>
                }
                {
                    article.urlToImage &&
                    <CardMedia
                        style = {{ height: 0, paddingTop: '56%'}}
                        image={article.urlToImage}
                        title={article.title}
                    />
                }
                {
                    article.description &&
                    <p>
                        {article.description}
                    </p>
                }
                {
                    article.url &&
                    <a href={article.url} target="_blank">
                        Learn More<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                }
        </Card>
    )
};

export default Article;