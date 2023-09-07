import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';

const Planning = () => {
  return (
    <>
    <Container sx={{marginBottom:'12rem'}}>
      <Typography variant="h4" sx={{textAlign:'center'}}>
           <strong>  How it is going?  </strong> <br/> <br/>
      </Typography>

      <Typography variant='body1' sx={{textAlign:'center', marginBottom:'4rem'}}>
            We offer professional web design services at affordable rates to help your <br/> business attract more visitors and keep them on your sites.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} sx={{margin: '3rem'}}>
          <Typography variant="body1">
              <strong>Info gathering</strong> <br/> <br/>
              need a good understanding of what are you business goals and dreams.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3} sx={{margin: '3rem'}}>
          <Typography variant="body1">
              <strong>Planning</strong> <br/> <br/>
              We will help you to decide what technoligies should be implemented.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3} sx={{margin: '3rem'}}>
          <Typography variant="body1">
                <strong>Design</strong> <br/> <br/>
                It's time to determine the look and feel of your site.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3} sx={{marginInline: '12%', marginBottom:'2rem'}}>
          <Typography variant="body1">
              <strong>Development</strong> <br/> <br/>
              Writing valid HTML/CSS code that compile to current web standards.
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3} sx={{marginInline: '7%'}} >
        {/* sx={{marginLeft: '14rem'}} */}
          <Typography variant="body1">
               <strong>Testing and Launch</strong> <br/> <br/>
               Testing of the Complete Functionality of Forms and Scripts etc.
          </Typography>
        </Grid>
        
      </Grid>
     
    </Container>
    </>
  );
};

export default Planning;