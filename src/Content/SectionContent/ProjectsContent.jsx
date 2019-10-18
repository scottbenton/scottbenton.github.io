import React from 'react';

import TextTwistLogo from '../Resources/TextTwistBackground.png';
import ASORTDLogo from '../Resources/ASORTD.png';

import Grid from '@material-ui/core/Grid';

import ImageCard from '../../Components/PageContent/ProjectCard';
import { Typography, Button } from '@material-ui/core';

import { openLink } from '../../HelperFunctions/URLHelper';

export default function WorkContent() {
    const projects = [
        {
            name: 'Text Twist',
            description: 'A clone of the game Text-Twist. Developed using React, Bootstrap, and PHP',
            codeLink: 'https://github.com/scottbenton/TextTwist-UI',
            deployedLink: 'https://scottbenton.github.io/TextTwist-UI/',
            image: TextTwistLogo,
        },
        {
            name: 'ASORTD',
            description: 'Algorithm SORTing Display. A website that animates sorting algorithms, and allows users to input their own sorting algorithms to animate.',
            codeLink: 'https://github.com/willswire/asortd',
            deployedLink: 'https://asortd.info',
            image: ASORTDLogo,
        },
    ];

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
                    <ImageCard
                        title={project.name}
                        image={project.image}
                        content={projectDescription(project)}
                        actions={getActions(project)}
                        onClick={() => window.open(project.deployedLink)}
                    />
                </Grid>
            ))}
        </Grid>
    );
}