import React from 'react';

import WSFSLogo from '../Resources/WSFSLogo.png';
import CSELogo from '../Resources/SportsEmporiumLogo.png';
import CVLogo from '../Resources/CVLogo.png';

import Grid from '@material-ui/core/Grid';

import ImageCard from '../../Components/PageContent/WorkCard';
import Lists from '../../Components/PageContent/Lists';

export default function WorkContent() {
  const workplaces = [
    {
      name: 'WSFS Bank',
      dates: 'June 2019-Present',
      jobTitle: 'Software Developer Intern',
      notes: [
        "Used Agile methodologies to bring a piece of internal bank software from start to finish",
        "Developed a user friendly Material Design website using React.",
        "Learned React"
      ],
      logo: WSFSLogo,
    },
    {
      name: 'Carlisle Sports Emporium',
      dates: 'December 2015 - April 2019',
      jobTitle: 'Roamer',
      notes: [
        "Ensured safety of customers and equipment on attractions",
        "Developed problem solving skills by performing maintenance on a variety of arcade machines and other equipment",
        "Adapted quickly to new roles and expectations in the job"
      ],
      logo: CSELogo,
    },
    {
      name: 'Cumberland Valley Marching Band',
      dates: 'June - August 2016, 2018',
      jobTitle: 'Volunteer Educator',
      notes: [
        "Taught high school and middle school students music and marching skills",
        "Guided student leaders towards effective leadership methods",
        "Developed educational skills by teaching new concepts to students"
      ],
      logo: CVLogo,
    },
  ]

  const workplaceContent = (content) => {
    let newContent = content.map(note => { return { primaryText: note } });
    console.log(newContent);
    return newContent;
  }

  return (
    <Grid container spacing={3}>
      {workplaces.map((workplace, index) => (
        <Grid item xs={12} md={6} key={index}>
          <ImageCard
            title={workplace.name}
            subTitle={workplace.jobTitle + ": " + workplace.dates}
            image={workplace.logo}
            content={<Lists single listContent={workplaceContent(workplace.notes)} />}
          />
        </Grid>
      ))}
    </Grid>
  );
}