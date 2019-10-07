import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';

import CONSTANTS from '../Content/Constants';
import SECTIONS from '../Content/Sections';
import { useMediaQuery, useTheme, Grid, Tooltip } from '@material-ui/core';

import Drawer from './Drawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    borderTop: '4px solid' + theme.palette.secondary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'inline-block',
    flexGrow: 1,
  },
  resumeIcon: {
    marginRight: theme.spacing(1),
  },
  rightAlign: {
    textAlign: 'right',
    margin: 'auto',
  },
  verticalAlign: {
    margin: 'auto',
  },
  centerAlign: {
    textAlign: 'center',
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();

  const { selectedSection, setSelectedSection } = props;

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const onButtonClick = (section) => {
    setSelectedSection(section);
  }

  const isMobile = useMediaQuery(theme.breakpoints.down(CONSTANTS.mobileBreakpoint));

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} color='default'>
        <Toolbar>
          <Grid container>
            {isMobile ?
              <>
                <Drawer
                  open={drawerOpen}
                  setOpen={setDrawerOpen}
                  selectedSection = {selectedSection}
                  setSelectedSection={setSelectedSection}
                />
                <Grid item xs={4}>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>setDrawerOpen(true)}>
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={8} className={classes.rightAlign}>
                  <Typography variant="h6" className={classes.title}>
                    {'<' + CONSTANTS.fullName + ' />'}
                  </Typography>
                </Grid>
              </>
              :
              <>
                <Grid item md={3} className={classes.verticalAlign}>
                  <Typography variant="h6" className={classes.title}>
                    {'<' + CONSTANTS.fullName + ' />'}
                  </Typography>
                </Grid>
                <Grid item md={6} className={classes.centerAlign}>
                  {Object.keys(SECTIONS).map((key) =>
                    <Tooltip key={key} title={SECTIONS[key].name}>
                      <IconButton
                        onClick={() => onButtonClick(SECTIONS[key])}
                        color={selectedSection.name === SECTIONS[key].name ? "secondary" : "primary"}
                      >
                        {SECTIONS[key].icon}
                      </IconButton>
                    </Tooltip>
                  )}
                </Grid>
                <Grid item md={3} className={classes.rightAlign}>
                  <Button color="secondary" variant='outlined'>
                    <DescriptionSharpIcon className={classes.resumeIcon} />
                    Resume 
                </Button>
                </Grid>
              </>
            }
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}