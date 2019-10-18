import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  description: {
    padding: theme.spacing(1),
    flexGrow: 1,
  },
  actions: {
    padding: theme.spacing(1),
    width: '100%',
  },
  actionArea: {
    width: '100%',
    flexGrow: 1,
    flexDirection: 'column',
  }
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  const { image, title, subTitle, content, key, actions, onClick } = props;
  return (
    <Card className={classes.card} key={key} elevation={5}>
      <CardActionArea onClick={onClick} className={classes.actionArea}>
        <CardMedia
          component="img"
          alt={title}
          image={image}
          width={'100%'}
        />
        <CardContent className={classes.description}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom>
            {subTitle}
          </Typography>
          {content}
        </CardContent>
      </CardActionArea>
      {actions && <CardActions className={classes.actions}>
        {actions}
      </CardActions>}
    </Card>
  );
}