import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';

import MyAvatar from '../../Components/PageContent/Avatar';
import Lists from '../../Components/PageContent/Lists';

import ProfilePic from '../Resources/ProfilePic.jpg';

const useStyles = makeStyles(theme => ({
  paragraph: {
    textIndent: 50,
    lineHeight: 1.8
  },
  chip: {
    margin: theme.spacing(.5),
  },
  break: {
    marginTop: theme.spacing(2),
  },
  sectionTitle: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
}))

export default function AboutContent() {
  const classes = useStyles();
  const technologies = ['Java', 'C++', 'C', 'Python', 'HTML', 'JavaScript', 'CSS', 'React', 'SQL', 'Mongo', 'Node'];
  const listify = (arr) => arr.map((content) => { return { primaryText: content } });
  return (
    <>
      <MyAvatar image={ProfilePic} />

      <Typography variant='h5' className={classes.sectionTitle}>
        About Me
      </Typography>
      <Divider />

      
      <Typography className={classes.paragraph}>
        I am a Software Engineer with experience in both front and back end development. Currently, I live in Newark, Delaware, and attend college at the University of Delaware. I will be graduating from the university in December with a Computer Science degree. At UD, I have studied topics such as multi-threading, computer graphics, software engineering, artificial intelligence, and web application development and security.
      </Typography>
      
      <Typography variant='h5' className={classes.sectionTitle}>
        Languages & Technologies
      </Typography>
      <Divider />

      <Lists listContent={listify(technologies)} />
    </>
  )
}