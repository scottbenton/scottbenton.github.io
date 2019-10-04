import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';

import CONSTANTS from '../../Content/Constants';
import NoImageIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(theme => ({
  avatarBlocker: {
    position: 'relative',
    width: 160,
    height: 160,
    float: 'right',
    marginRight: theme.spacing(2),
  },
  avatar: {
    position: 'relative',
    width: 160,
    height: 160,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,

    float: 'right',
    marginRight: theme.spacing(2),
    marginTop: '-96px',

    border: '4px solid ' + theme.palette.primary.main,
    borderRadius: '80px 80px 80px 80px ',

    boxShadow: '0px 5px 5px -4px rgba(0,0,0,0.75)',
  }
}));

export default function MyAvatar(props) {
  const classes = useStyles();
  const { image } = props;

  return (
    <Avatar alt={CONSTANTS.initials} src={image} className={classes.avatar}>
      {!image && <NoImageIcon className={classes.avatar} />}
    </Avatar>
  );
}