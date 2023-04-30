import React from "react";
import { Box, Typography, Tooltip, Link } from "@mui/material";
import "./Experience.css";

const experiences = [
  {
    companyName: "Datadog",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Datadog_logo.svg/1200px-Datadog_logo.svg.png", 
    description: "Software Engineer Intern in the Boston office.",
    url: "https://www.datadoghq.com/"
  },
  {
    companyName: "Stripe",
    logo: "data:image/png;base64,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",
    description: "Software Engineer Intern in the New York City office.",
    url: "https://stripe.com/"
  },
  {
    companyName: "BCG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/BCG_Corporate_Logo.svg/1200px-BCG_Corporate_Logo.svg.png",
    description: "Security Engineer Intern in the Boston office.",
    url: "https://www.bcg.com/"
  },
  {
    companyName: "Disney",
    logo: "https://i.pinimg.com/originals/1a/51/a8/1a51a83a7bcdd42e2a49758a11234caa.jpg",
    description: "Software Engineer Intern in the Seattle office.",
    url: "https://www.thewaltdisneycompany.com/"
  }
];

function Experience() {
    return (
      <Box className="experience-container">
        {experiences.map((experience, index) => (
          <Tooltip key={index} title={experience.description} placement="top">
            <Link href={experience.url} target="_blank" rel="noopener noreferrer">
              <Box className="experience-logo">
                <img src={experience.logo} alt={experience.companyName} />
                <Typography className="experience-title" variant="subtitle1">
                  {experience.companyName}
                </Typography>
              </Box>
            </Link>
          </Tooltip>
        ))}
      </Box>
    );
  }

export default Experience;
