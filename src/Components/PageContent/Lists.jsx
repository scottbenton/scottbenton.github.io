import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        margin: theme.spacing(1),
    },
    topLine: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    bottomLine: {
        display: 'inline-block',
    },
    secondaryText: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(1),
        fontWeight: 300,
    }
}));

export default function Lists(props) {
    const classes = useStyles();

    const { listContent } = props;

    return (
        <Grid container spacing={2} className={classes.container}>
            {listContent.map((content, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <div className={classes.topLine}>
                        <CheckCircleIcon color='secondary' className={classes.icon} />
                        <Typography>{content.primaryText}</Typography>
                    </div>
                    {content.secondaryText &&
                        <div className={classes.bottomLine}>
                            <Typography className={classes.secondaryText}>{content.secondaryText}</Typography>
                        </div>
                    }
                </Grid>
            ))}
        </Grid>
    )
}