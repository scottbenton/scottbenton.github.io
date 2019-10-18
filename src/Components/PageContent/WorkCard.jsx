import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardContent: {
    padding: 0
  },
  cardMedia: {
    padding: theme.spacing(2),
  },
  cardHeaders: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  title: {
    marginLeft: theme.spacing(1),
  }
}));

export default function WorkCard(props) {
  const classes = useStyles();

  const { image, title, subTitle, content, key, } = props;
  return (
    <Card className={classes.card} key={key} elevation={5}>
      <CardHeader
        disableTypography
        title={<Typography className={classes.title} variant='h5'>{title}</Typography>}
        subheader={<Typography>{subTitle}</Typography>}
        className={classes.cardHeaders}
      />
      <CardMedia
        component="img"
        alt={title}
        image={image}
        width={'100%'}
        className={classes.cardMedia}
      />
      <CardContent className={classes.cardContent}>
        {content}
      </CardContent>
    </Card>
  );
}