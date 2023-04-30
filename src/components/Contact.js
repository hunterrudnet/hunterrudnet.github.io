import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <Box>
      <Box mt={2} display="flex" alignItems="center">
        <EmailIcon />
        <Box ml={1}>
          <Link href="mailto:hunter.rudnet@gmail.com">hunter.rudnet@gmail.com</Link>
        </Box>
      </Box>
      <Box mt={2} display="flex" alignItems="center">
        <LinkedInIcon />
        <Box ml={1}>
          <Link href="https://www.linkedin.com/in/hunterrudnet" target="_blank" rel="noopener noreferrer">
            hunterrudnet
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
