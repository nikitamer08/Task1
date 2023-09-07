import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Detail from './Detail';

const Contact = () => {
  return (
    <>
    <Box sx={{background:"#0669F7", color:"#FFF" ,padding:'5%'}}>
     
      <Grid container spacing={3} sx={{textAlign:'center'}}>


           <Grid item xs={12}  sm={6} md={3}>
              <Box>
                <Typography variant="h4" >
                     Contact Us
                </Typography>
              </Box>
            </Grid>


            <Grid item xs={12} sm={6} md={3}>
               <Box>
                 <Typography variant="body1">
                     <PhoneIcon/> + 91  4737  4839  4845  <br/>
                     <AttachEmailIcon/> info@XMTechnoligies.com
                 </Typography>
               </Box>
             </Grid>


             <Grid item xs={12}  sm={6} md={3}>
               <Box>
                  <Typography variant="body1">
                        <LocationOnIcon/>  207, Dhara Trade Center,  <br/>
                             Mahadev Chowk, <br/>
                              Mota Varachha, Surat <br/>
                              394101
                  </Typography>
                </Box>
              </Grid>


        <Grid item xs={12} sm={3} >
            <FacebookIcon sx={{marginRight:'1rem'}}/>
            <TwitterIcon sx={{marginRight:'1rem'}} />
            <LinkedInIcon sx={{marginRight:'1rem'}} />
            <InstagramIcon sx={{marginRight:'1rem'}} />
            <AttachEmailIcon sx={{marginRight:'1rem'}}/>
         </Grid>
      
      
        </Grid>
      </Box>
    
    <Detail/>

    
    </>
  );
};

export default Contact;
 

