import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';

import ImageCard from '../PageComponents/ProjectCard';

import { openLink } from '../../HelperFunctions/URLHelper';
import CONSTANTS from '../../Content/Constants';

import PROJECTINFO from '../../Content/SectionInformation/ProjectsInformation';

export default function WorkContent() {
    const { projects } = PROJECTINFO;

    const projectDescription = (project) => {
        return (
            <Typography>
                {project.description}
            </Typography>
        );
    }
    const getActions = (project) => {
        return (project.codeLink || project.deployedLink) && (<>
            {project.codeLink && <Button onClick={() => openLink(project.codeLink)}>
                View the Code
            </Button>}
            {project.deployedLink && <Button onClick={() => openLink(project.deployedLink)} variant="contained" color="secondary">
                Visit the Website
            </Button>}
        </>);
    }

    return (
        <Grid container spacing={3}>
            {projects.map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                    <Grow in={true} timeout={CONSTANTS.ANIMATION_DURATION} style={{ transitionDelay: index * CONSTANTS.ANIMATION_OFFSET }}>
                        <div style={{ height: '100%' }}>
                            <ImageCard
                                title={project.name}
                                image={project.image}
                                content={projectDescription(project)}
                                actions={getActions(project)}
                                onClick={() => window.open(project.deployedLink)}
                            />
                        </div>
                    </Grow>
                </Grid>
            ))}
        </Grid>
    );
}