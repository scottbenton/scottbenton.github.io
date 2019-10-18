import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, IconButton, Tooltip, Button, SvgIcon } from '@material-ui/core';

import ArrowIcon from '@material-ui/icons/ArrowForwardIos';

import MyAvatar from '../../Components/PageContent/Avatar';
import Lists from '../../Components/PageContent/Lists';

import EmailIcon from '@material-ui/icons/Email';

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
    width: 40,
    height: 40,
  }
}))

export default function AboutContent() {
  const classes = useStyles();
  const technologies = [
    {
      title: 'Web Technologies',
      listItems: [
        'HTML',
        'JavaScript',
        'TypeScript',
        'CSS',
        'React',
        'SQL',
        'Mongo',
        'Node',
        'Express',
        'PHP'
      ]
    },
    {
      title: 'Additional Technologies',
      listItems: [
        'Java',
        'C++',
        'C',
        'Python',
        'OpenGL'
      ]
    },
  ];
  const listify = (arr) => arr.map((content) => { return { primaryText: content } });

  const contactMethods = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/scott-benton-484a69191/',
      icon: <SvgIcon className={classes.iconButton}>
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
      </SvgIcon>
    },
    {
      name: 'GitHub',
      link: 'https://github.com/scottbenton',
      icon: <SvgIcon className={classes.iconButton}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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

      {technologies.map(section => (
        <>
          <Typography variant='h6' className={classes.sectionTitle}>
            {section.title}
          </Typography>
          <Lists listContent={listify(section.listItems)} icon={<ArrowIcon />} />
        </>
      ))}

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