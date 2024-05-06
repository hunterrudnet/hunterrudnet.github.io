import React, { useState } from "react";
import Experience from "./components/Experience";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Box, Typography } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollTrigger  from "react-scroll-trigger";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Internship Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "12px",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <nav>
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                activeClass="active"
                to={section.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Container maxWidth="md">
        {sections.map((section) => (
          <Box key={section.id} id={section.id} sx={{ my: 8 }}>
            <Typography className="section-title" variant="h4">
              {section.label}
            </Typography>
            <Content id={section.id} />
          </Box>
        ))}
      </Container>
    </div>
    </ThemeProvider>
  );
}

function Content({ id }) {
  const [visible, setVisible] = useState(false);

  const onEnter = () => {
    setVisible(true);
  };

  const onExit = () => {
    setVisible(false);
  };

  return (
    <ScrollTrigger onEnter={onEnter} onExit={onExit}>
      <div className={`section-content${visible ? " visible" : ""}`}>
        {getContent(id)}
      </div>
    </ScrollTrigger>
  );
}

function getContent(id) {
  switch (id) {
    case "about":
      return <About/>;
    case "experience":
      return <Experience/>
    case "education":
      return <Education/>;
    case "skills":
      return <Skills/>
    case "contact":
      return <Contact/>;
    default:
      return null;
  }
}

export default App;