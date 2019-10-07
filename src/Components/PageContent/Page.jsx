import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  headerPaper: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  contentPaper: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  content: {
    margin: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontWeight: 300,
  }
}));

export default function Page(props) {
  const classes = useStyles();

  const TIMEOUT_START = 800;
  const TIMEOUT_OFFSET = 1000;

  const { pageOptions } = props;

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} lg={2} />
      <Fade in={true} timeout={TIMEOUT_START}>
        <Grid item xs={12} lg={8}>
          <Paper className={classes.contentPaper} elevation={5}>
            <Paper className={classes.headerPaper} elevation={8}>
              <Fade in={true} timeout={TIMEOUT_START + TIMEOUT_OFFSET}>
                <Typography variant="h3" className={classes.title}>
                  {pageOptions.title}
                </Typography>
              </Fade>
            </Paper>
            <Fade in={true} timeout={TIMEOUT_START}>
              <div className={classes.content}>
                {pageOptions.content}
              </div>
            </Fade>
          </Paper>
          <Fade in={true} timeout={TIMEOUT_START}>
            <div className={classes.content}>
              {pageOptions.cards}
            </div>
          </Fade>
        </Grid>
      </Fade>
    </Grid>
  )
}