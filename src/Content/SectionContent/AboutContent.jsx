import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid, Chip } from '@material-ui/core';
import MyAvatar from '../../Components/PageContent/Avatar';

import ProfilePic from '../Resources/ProfilePic.jpg';

const useStyles = makeStyles(theme => ({
  tabing: {
    textIndent: 50,
  },
  chip: {
    margin: theme.spacing(.5),
  },
  break: {
    marginTop: theme.spacing(2),
  }
}))

export default function AboutContent() {
  const classes = useStyles();
  const technologies = ['Java', 'C++', 'C', 'Python', 'HTML', 'JavaScript', 'CSS', 'React', 'SQL', 'Mongo', 'Node'];
  return (
    <>
      <MyAvatar image={ProfilePic} />
      <Typography className={classes.tabing}>
        I am a Software Engineer with experience in both front and back end development. Currently, I live in Newark, Delaware, and attend college at the University of Delaware. I will be graduating from the university in December with a Computer Science degree. At UD, I have studied topics such as multi-threading, computer graphics, software engineering, artificial intelligence, and web application development and security.
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} className={classes.break}>
          <Typography>
            <strong>{'Languages & Technologies:'}</strong>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {technologies.map((technology, index) => (
            <Chip 
              key={index}
              label={technology}
              color="secondary"
              className={classes.chip}
              variant="outlined"
            />
          ))}
        </Grid>
      </Grid>

    </>
  )
}