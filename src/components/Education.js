import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Northeastern University, Boston",
    period: "2020 - 2024",
  },
  {
    title: "Advanced Regents Diploma",
    institution: "Syosset High School, New York",
    period: "2016 - 2020",
  },
];

function Education() {
  return (
    <Box>
      <Timeline position="alternate">
        {educationData.map((education, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              {index < educationData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{education.title}</Typography>
              <Typography variant="subtitle1">{education.institution}</Typography>
              <Typography variant="subtitle2">{education.period}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default Education;
