import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, IconButton, Tooltip, Button, Fade } from '@material-ui/core';

import ArrowIcon from '@material-ui/icons/ArrowForwardIos';

import MyAvatar from '../PageComponents/Avatar';
import Lists from '../PageComponents/Lists';

import EmailIcon from '@material-ui/icons/Email';

import CONSTANTS from '../../Content/Constants';

import ABOUTINFO from '../../Content/SectionInformation/AboutInformation';


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
}))

export default function AboutContent() {
  const classes = useStyles();

  const listify = (arr) => arr.map((content) => { return { primaryText: content } });

  const { profilePic, aboutSection, technologySection, contactSection } = ABOUTINFO;

  return (
    <>
      <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION}>
        <div>
          <MyAvatar image={profilePic} />
        </div>
      </Fade>
      <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION} style={{ transitionDelay: CONSTANTS.ANIMATION_OFFSET }}>
        <div>
          <Typography variant='h5' className={classes.firstTitle}>
            {aboutSection.header}
          </Typography>
          <Divider />
          <Typography className={classes.paragraph}>
            {aboutSection.content}
          </Typography>
        </div>
      </Fade >

      <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION} style={{ transitionDelay: 2 * CONSTANTS.ANIMATION_OFFSET }}>
        <div>
          <Typography variant='h5' className={classes.sectionTitle}>
            {technologySection.header}
          </Typography>

          <Divider />
          {
            technologySection.content.map((section, index) => (
              <div key={section.title}>
                <Typography variant='h6' className={classes.sectionTitle}>
                  {section.title}
                </Typography>
                <Lists listContent={listify(section.listItems)} icon={<ArrowIcon />} />
              </div>
            ))
          }
        </div>
      </Fade>

      <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION} style={{ transitionDelay: 3 * CONSTANTS.ANIMATION_OFFSET }}>
        <div>
          <Typography variant='h5' className={classes.sectionTitle}>
            {contactSection.header}
          </Typography>
          <Divider />

          <Typography className={classes.paragraph}>
            {contactSection.subHeader}
          </Typography>
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

            {contactSection.content.map(method => (
              <Tooltip title={method.name} key={method.link}>
                <IconButton color="secondary" onClick={() => window.open(method.link)}>
                  {method.icon}
                </IconButton>
              </Tooltip>
            ))}
          </div>
        </div>
      </Fade>
    </>
  )
}