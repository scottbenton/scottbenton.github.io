import React from 'react';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

import ImageCard from '../PageComponents/WorkCard';
import Lists from '../PageComponents/Lists';

import CONSTANTS from '../../Content/Constants';
import WORKINFO from '../../Content/SectionInformation/WorkInformation';

export default function WorkContent() {

  const workplaceContent = (content) => (
    content.map(note => { return { primaryText: note } })
  );

  const { workplaces } = WORKINFO;

  return (
    <Grid container spacing={3}>
      {workplaces.map((workplace, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Grow in={true} timeout={CONSTANTS.ANIMATION_DURATION} style={{ transitionDelay: index * CONSTANTS.ANIMATION_OFFSET }}>
            <div style={{ height: '100%' }}>
              <ImageCard
                title={workplace.name}
                subTitle={workplace.jobTitle + ": " + workplace.dates}
                image={workplace.logo}
                content={<Lists single listContent={workplaceContent(workplace.notes)} />}
              />
            </div>
          </Grow>
        </Grid >
      ))
      }
    </Grid >
  );
}