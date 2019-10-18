import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';

import { downloadFile } from '../HelperFunctions/URLHelper';
import Resume from '../Content/Resources/Resume-ScottBenton.pdf';

import SECTIONS from '../Content/Sections';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SwipeableTemporaryDrawer(props) {
    const classes = useStyles();

    const { open, setOpen, selectedSection, setSelectedSection } = props

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(false);
    };


    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {Object.keys(SECTIONS).map((key, index) => (
                    <ListItem
                        button
                        key={SECTIONS[key].name}
                        selected={selectedSection.name === SECTIONS[key].name}
                        onClick={() => setSelectedSection(SECTIONS[key])}
                    >
                        <ListItemIcon>{SECTIONS[key].icon}</ListItemIcon>
                        <ListItemText primary={SECTIONS[key].name} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem
                    button
                    onClick={() => downloadFile(Resume, 'ScottBenton-Resume.pdf')}
                >
                    <ListItemIcon>
                        <DescriptionSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary='Resume' />
                </ListItem>
            </List>
        </div>
    );
    return (
        <SwipeableDrawer
            open={open}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
        >
            {sideList('left')}
        </SwipeableDrawer>
    );
}