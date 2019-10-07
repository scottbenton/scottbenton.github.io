import React from 'react';

import AboutIcon from '@material-ui/icons/PersonSharp';
import WorkIcon from '@material-ui/icons/WorkSharp';
import EducationIcon from '@material-ui/icons/SchoolSharp';
import ProjectsIcon from '@material-ui/icons/CollectionsBookmarkSharp';
import ContactIcon from '@material-ui/icons/EmailSharp';

import AboutContent from './SectionContent/AboutContent';
import WorkContent from './SectionContent/WorkContent';
import EducationContent from './SectionContent/EducationContent';
import ProjectsContent from './SectionContent/ProjectsContent';

export default {
  ABOUT: {
    "icon": <AboutIcon />,
    "name": "About Me",
    "title": "Hello! My name is Scott Benton.",
    "content": <AboutContent />,
  },
  WORK: {
    "icon": <WorkIcon />,
    "name": "Work Experience",
    "title": "Work Experience",
    "cards": <WorkContent />,
  },
  EDUCATION: {
    "icon": <EducationIcon />,
    "name": "Education",
    "title": "Education",
    "content": <EducationContent />,
  },
  PROJECTS: {
    "icon": <ProjectsIcon />,
    "name": "My Projects",
    "title": "Projects",
    "cards": <ProjectsContent />,
  },
}