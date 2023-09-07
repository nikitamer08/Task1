import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import img from '../images/2752392-removebg-preview 1.png';

 

const Client = () => {
 

  return (
    <>
     <Container sx={{marginBottom: '12rem'}}>
           <Typography variant="body1" sx={{color:'blue', textAlign:'center',marginBottom:'1rem'}}>
                 Our Services  
            </Typography>

            <Typography variant="h4" sx={{textAlign: 'center', marginBottom: '3rem'}}>
                 What we Offer
            </Typography>

            <Grid container spacing={2} sx={{textAlign: 'center'}}>
    
               <Grid item xs={12} sm={4}>
                    <Box sx={{marginBottom: '2rem'}} >
                        <Typography variant="h6">Awesome Ideas</Typography>
                              <p>Lorem ipsum is simply dummy text of the printing and typesetting Industry.</p>
                    </Box>

                    <Box >
                       <Typography variant="h6">Web Solutions</Typography>
                           <p>Lorem ipsum is simply dummy text of the printing and typesetting Industry.</p>
                    </Box>


                </Grid>

      {/* Middle Image */}



      <Grid item xs={12} sm={4}>
          <Box>
              <img src={img} width={250} height={250} ></img>
          </Box>
      </Grid>

      {/* Right Side Content */}




      <Grid item xs={12} sm={4}>
        <Box sx={{marginBottom: '2rem'}}>
          <Typography variant="h6">Planning Settings</Typography>
               <p>Lorem ipsum is simply dummy text of the printing and typesetting Industry.</p>
        </Box>


        <Box >
          <Typography variant="h6">Client Market</Typography>
              <p>Lorem ipsum is simply dummy text of the printing and typesetting Industry.</p>
        </Box>
      </Grid>

     
      
           </Grid>
    </Container>


    </>

    
  );
};

export default Client;















