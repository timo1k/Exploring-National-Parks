import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Style/ContactPage.css'
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
/**
 * Renders the ParkInfo component page.
 * @component
 * @module NewsPage
 *
 * @returns {JSX.Element} The rendered ParkInfo component.
 */

const NewsPage = () => {
  return (
  
    <div className='contact'>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <div>
        <a href='mailto:naturalpark@yahoo.com' target='_blank' rel="noreferrer">
        <Fab color="primary" variant='extended' className="custom-fab" style={{ color: "white"}}>
          <MailIcon sx={{ mr: 1 }} /> Email Us
        </Fab>
        </a>
        </div>
        <br/>
        <br/>
        <div>
        <a href="https://www.instagram.com/_naturalpark_?igsh=N2h1emc2ZWE1Njln" target="_blank" rel="noreferrer">
        <Fab color="primary" variant='extended' className="custom-fab" style={{ color: "white"}}>
          <InstagramIcon sx={{ mr: 1 }} /> Instagram
        </Fab>
        </a>
        </div>
        <br/>
        <br/>
        <div>
        <a href="https://www.linkedin.com/company/nationalparkservice/" target="_blank" rel="noreferrer">
        <Fab color="primary" variant='extended' className="custom-fab" style={{ color: "white"}}>
          < LinkedInIcon sx={{ mr: 1 }} /> Linkedin
        </Fab>
        </a>
        </div>
        <br/>
        <br/>
        <div>
        <Fab disabled aria-label="like" variant='extended' className="custom-fab" style={{ color: "white"}}>
          <LocalFloristIcon  /> Coming Soon...
        </Fab>
        </div>
      </Box>
    </div>
  
  );
};

export default NewsPage;
