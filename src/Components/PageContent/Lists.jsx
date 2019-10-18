import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1)
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

    const { listContent, icon = <CheckCircleOutlineIcon />, single = false } = props;

    return (
        <Grid container spacing={2} className={classes.container}>
            {listContent.map((content, index) => (
                <Grid item xs={12} sm={single ? 12 : 6} key={index}>
                    <div className={classes.topLine}>
                        {icon && React.cloneElement(icon, { color: 'secondary', className: classes.icon })}
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