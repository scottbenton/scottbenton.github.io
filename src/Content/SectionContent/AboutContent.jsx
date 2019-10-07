import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, IconButton, Tooltip, Button, SvgIcon } from '@material-ui/core';

import MyAvatar from '../../Components/PageContent/Avatar';
import Lists from '../../Components/PageContent/Lists';

import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '../Resources/linkedinIcon.svg';

import ProfilePic from '../Resources/ProfilePic.jpg';
import CONSTANTS from '../Constants';

const useStyles = makeStyles(theme => ({
  paragraph: {
    textIndent: 50,
    lineHeight: 1.8,
    marginTop: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(.5),
  },
  break: {
    marginTop: theme.spacing(2),
  },
  firstTitle: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  sectionTitle: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  contactHolder: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  email: {
    marginRight: theme.spacing(1),
  },
  emailButton: {
    marginBottom: theme.spacing(2),
    float: 'right',
  },
  spaceEater: {
    flexGrow: 1,
  },
  iconButton: {
    width: 30,
    height: 30,
  }
}))

export default function AboutContent() {
  const classes = useStyles();
  const technologies = ['Java', 'C++', 'C', 'Python', 'HTML', 'JavaScript', 'CSS', 'React', 'SQL', 'Mongo', 'Node'];
  const listify = (arr) => arr.map((content) => { return { primaryText: content } });

  const contactMethods = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/scott-benton-484a69191/',
      icon: <SvgIcon className={classes.iconButton}>
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
      </SvgIcon>
    },
    {
      name: 'GitHub',
      link: 'https://github.com/scottbenton',
      icon: <SvgIcon className={classes.iconButton}>
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
      </SvgIcon>
    }
  ]

  return (
    <>
      <MyAvatar image={ProfilePic} />

      <Typography variant='h5' className={classes.firstTitle}>
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

      <Typography variant='h5' className={classes.sectionTitle}>
        Contact Me
      </Typography>
      <Divider />

      <Typography className={classes.paragraph}>Feel free to reach out to me with any questions or opportunities!</Typography>
      <div className={classes.contactHolder} >
        <Button
          onClick={() => window.locationhref = 'mailto:' + CONSTANTS.email}
          variant="contained"
          color="secondary"
          className={classes.emailButton}
        >
          <EmailIcon className={classes.email} />
          {CONSTANTS.email}
        </Button>

        <div className={classes.spaceEater} />

        {contactMethods.map(method => (
          <Tooltip title={method.name} key={method.link}>
            <IconButton color="secondary" onClick={() => window.open(method.link)}>
              {method.icon}
            </IconButton>
          </Tooltip>
        ))}
      </div>
    </>
  )
}