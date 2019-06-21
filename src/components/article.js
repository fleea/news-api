import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Article = ({article}) => {
    if(!article) return null;
    return (
        <Card>
            <CardContent>
                {
                    article.source && article.source.name &&
                    <Typography color="textSecondary" gutterBottom>
                        Source {article.source.name}
                    </Typography>
                }
                {
                    article.title &&
                    <Typography variant="h5" component="h2">
                        {article.title}
                    </Typography>
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
                    article.publishedAt &&
                    <Typography color="textSecondary">
                        published at {article.publishedAt}
                    </Typography>
                }
                {
                    article.description &&
                    <Typography variant="body2" component="p">
                        {article.description}
                    </Typography>
                }
            </CardContent>
            {
                article.url &&
                <CardActions>
                    <Button size="small" target="_blank" href={article.url}>Learn More</Button>
                </CardActions>
            }
        </Card>
    )
};

export default Article;