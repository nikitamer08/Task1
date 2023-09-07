import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import logo from '../images/XM (1).png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
// import vector from '../images/Vector 2.png';

 function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#00142D",
        color: "#fff",
        marginTop: 10,
        padding: "2rem",
       



      }}
    >
      <Box sx={{marginInline:"3rem", marginBottom:'4rem'  }}>
        <Grid container spacing={1} sx={{ marginInline: "0px" }}>
          <Grid item xs={12} sm={6} md={4}>
           
            <Typography variant="body2" sx={{marginBottom:'2rem'}} >
            <img src={logo} ></img> <br/> <br/>
             Our Technical intelligence can put you on the fast track to success. That's the promise from XM Technoligies.
            </Typography> 
            <Typography variant="body2"  sx={{marginBottom:'2rem'}}>Follow us on Social media!</Typography>
            <Typography variant="body2">
            <FacebookIcon sx={{marginRight:'1rem'}}/>
        <TwitterIcon sx={{marginRight:'1rem'}}/>
        <LinkedInIcon sx={{marginRight:'1rem'}} />
        <InstagramIcon sx={{marginRight:'1rem'}}/>
        <AttachEmailIcon sx={{marginRight:'1rem'}} />
            </Typography>
          </Grid>


        

          <Grid item xs={12} sm={6} md={3} >
         
            <Typography variant="h6" >Navigation </Typography>
            <Typography variant="body2">Home</Typography>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Services</Typography>
            <Typography variant="body2">Contact Us</Typography>
            <Typography variant="body2">Portfolio</Typography>
            <Typography variant="body2">Jobs</Typography>
           
          </Grid>




          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6">Services</Typography>
            <Typography variant="body2">Web Development</Typography>
            <Typography variant="body2">Digital Marketing</Typography>
            <Typography variant="body2">Application Development</Typography>
            <Typography variant="body2">E- commerce Solution</Typography>
            <Typography variant="body2">Backup and Security</Typography>
            <Typography variant="body2">Enterprises Software Services</Typography>
            <Typography variant="body2">IT Support</Typography>

          </Grid>

         
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6">Get in touch</Typography>
            <Typography variant="body2">
              <LocationOnIcon /> FF, Sector 23, Delhi NCR
              Uttar Pradesh, India.
            </Typography> <br/>
            <Typography variant="body2">
              <LocalPhoneIcon /> (123)652-2344
            </Typography> <br/>
            <Typography variant="body2">
              <EmailIcon /> info@education.com
            </Typography>
          </Grid>



        </Grid>
      </Box>
      {/* <img src={vector} position= 'absolute' ></img> */}
    </Box>
  );
}
export default Footer;
