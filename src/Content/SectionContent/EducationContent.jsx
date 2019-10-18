import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Avatar from '../../Components/PageContent/Avatar';
import Lists from '../../Components/PageContent/Lists';

import UDLogo from '../Resources/UDLogo.jpg';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade'

import CONSTANTS from '../Constants';


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

    const COURSEWORK = [
        { primaryText: 'Artificial Intelligence' },
        { primaryText: 'Data Mining' },
        { primaryText: 'Computer Graphics' },
        { primaryText: 'Databases' },
        { primaryText: 'Parallel Computing' },
        { primaryText: 'Software Engineering' },
        { primaryText: 'Advanced Web Technologies' },
        { primaryText: 'Web Application Security' },
    ]

    const ACTIVITIES = [
        {
            primaryText: 'CS+ Social Good',
            secondaryText: 'Founding member, helped teach CS in local middle schools, and taught club members basics of web development.'
        },
        {
            primaryText: 'UD Marching Band',
            secondaryText: 'On student leadership staff as a visual coordinator. Created and taught the visual program for all 250+ members.'
        }
    ];
    return (
        <>
            <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION} >
                <div>
                    <Avatar image={UDLogo} />
                </div>
            </Fade>

            <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION} style={{ transitionDelay: 1 * CONSTANTS.ANIMATION_OFFSET }}>
                <div>
                    <Typography variant='h4' className={classes.university}>
                        University of Delaware
                    </Typography>
                    <Typography variant='h4' className={classes.major} gutterBottom>
                        BS in Computer Science
                    </Typography>

                    <Typography variant='h5' className={classes.years} gutterBottom>
                        August 2016 - December 2019
                </Typography>
                </div>
            </Fade>

            <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION} style={{ transitionDelay: 2 * CONSTANTS.ANIMATION_OFFSET }}>
                <div>
                    <Typography variant='h5' className={classes.sectionTitle}>
                        Relevant Coursework
                    </Typography>
                    <Divider />

                    <Lists listContent={COURSEWORK} />
                </div>
            </Fade>

            <Fade in={true} timeout={CONSTANTS.ANIMATION_DURATION} style={{ transitionDelay: 3 * CONSTANTS.ANIMATION_OFFSET }}>
                <div>
                    <Typography variant='h5' className={classes.sectionTitle}>
                        Clubs & Organizations
                    </Typography>
                    <Divider />

                    <Lists listContent={ACTIVITIES} />
                </div>
            </Fade>
        </>
    )
}