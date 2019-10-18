import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Avatar from '../PageComponents/Avatar';
import Lists from '../PageComponents/Lists';

import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade'

import CONSTANTS from '../../Content/Constants';
import EDUCATIONINFO from '../../Content/SectionInformation/EducationInformation';

const useStyles = makeStyles(theme => ({
    university: {
        display: 'inline-block',
        marginRight: theme.spacing(3),
    },
    major: {
        display: 'inline-block',
        fontWeight: 300,
    },
    years: {
        fontWeight: 300,
        fontStyle: 'italic',
    },
    sectionTitle: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(4),
    },
}))

export default function EducationContent() {
    const classes = useStyles();

    const { avatar, schoolInfo, coursework, activities } = EDUCATIONINFO;

    return (
        <>
            <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION} >
                <div>
                    <Avatar image={avatar} />
                </div>
            </Fade>

            <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION} style={{ transitionDelay: 1 * CONSTANTS.ANIMATION_OFFSET }}>
                <div>
                    <Typography variant='h4' className={classes.university}>
                        {schoolInfo.school}
                    </Typography>
                    <Typography variant='h4' className={classes.major} gutterBottom>
                        {schoolInfo.degree}
                    </Typography>
                    <Typography variant='h5' className={classes.years} gutterBottom>
                        {schoolInfo.dates}
                    </Typography>
                </div>
            </Fade>

            <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION} style={{ transitionDelay: 2 * CONSTANTS.ANIMATION_OFFSET }}>
                <div>
                    <Typography variant='h5' className={classes.sectionTitle}>
                        {coursework.header}
                    </Typography>
                    <Divider />

                    <Lists listContent={coursework.content} />
                </div>
            </Fade>

            <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION} style={{ transitionDelay: 3 * CONSTANTS.ANIMATION_OFFSET }}>
                <div>
                    <Typography variant='h5' className={classes.sectionTitle}>
                        {activities.header}
                    </Typography>
                    <Divider />

                    <Lists listContent={activities.content} />
                </div>
            </Fade>
        </>
    )
}