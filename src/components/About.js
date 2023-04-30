import React from "react";
import { Typography, Box } from "@mui/material";
import TypingEffect from "./TypingEffect";

function About() {
  return (
    <Box>
      <Typography variant="body1">
        <TypingEffect text="Hi, I'm Hunter Rudnet! I am a passionate Software Engineer with experience in web & API development, interested in Security, Finance, and Distributed Systems." typingDelay={3}/>
      </Typography>
    </Box>
  );
}

export default About;
