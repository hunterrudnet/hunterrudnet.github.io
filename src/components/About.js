import React from "react";
import { Typography, Box } from "@mui/material";
import TypingEffect from "./TypingEffect";
import headshot from "../assets/headshot.jpeg";

function About() {
  return (
    <Box display="flex" alignItems="center">
      <Box marginRight={2}>
        <img src={headshot} alt="Headshot" style={{ borderRadius: "50%", width: "150px", height: "150px" }} />
      </Box>
      <Typography variant="body1">
        <TypingEffect text="Hi, I'm Hunter Rudnet! I am a passionate Software Engineer with experience in web & API development, interested in Security, Finance, and Distributed Systems." typingDelay={3}/>
      </Typography>
    </Box>
  );
}

export default About;
