import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const skillsData = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'TypeScript', 'Go', 'C', 'HTML', 'CSS', 'SQL', 'x86-64 Assembly'],
  },
  {
    category: 'Software',
    skills: ['Github', 'Linux', 'Postman', 'BurpSuite', 'WireShark', 'Charles', 'Visual Studio Code', 'IntelliJ', 'Eclipse'],
  },
  {
    category: 'Technologies',
    skills: ['Git', 'AWS', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'OAuth', 'JUnit', 'SpringBoot', 'Docker'],
  },
];

function Skills() {
  return (
    <Box>
      {skillsData.map((skillGroup, index) => (
        <StyledBox key={index}>
          <Typography variant="h6">{skillGroup.category}</Typography>
          {skillGroup.skills.map((skill, i) => (
            <StyledChip key={i} label={skill} />
          ))}
        </StyledBox>
      ))}
    </Box>
  );
}

export default Skills;
