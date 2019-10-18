import UDLogo from '../../Content/Resources/UDLogo.jpg';

export default {
  avatar: UDLogo,
  schoolInfo: {
    school: 'University of Delaware',
    degree: 'BS in Computer Science',
    dates: 'August 2016 - December 2019',
  },
  coursework: {
    header: 'Relevant Coursework',
    content: [
      { primaryText: 'Artificial Intelligence' },
      { primaryText: 'Data Mining' },
      { primaryText: 'Computer Graphics' },
      { primaryText: 'Databases' },
      { primaryText: 'Parallel Computing' },
      { primaryText: 'Software Engineering' },
      { primaryText: 'Advanced Web Technologies' },
      { primaryText: 'Web Application Security' },
    ],
  },
  activities: {
    header: 'Clubs & Organizations',
    content: [
      {
        primaryText: 'CS+ Social Good',
        secondaryText: 'Founding member, helped teach CS in local middle schools, and taught club members basics of web development.'
      },
      {
        primaryText: 'UD Marching Band',
        secondaryText: 'On student leadership staff as a visual coordinator. Created and taught the visual program for all 250+ members.'
      }
    ]
  }
}