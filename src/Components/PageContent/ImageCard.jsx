import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    padding: theme.spacing(1)
  },
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();

  const { image, title, subTitle, content, key} = props;
  return (
    <Card className={classes.card} key={key} elevation={5}>
      <CardMedia
        component="img"
        alt={title}
        image={image}
        width={'100%'}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography gutterBottom>
          {subTitle}  
        </Typography>
        {content}
      </CardContent>
    </Card>
  );
}