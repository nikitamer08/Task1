import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import code from '../images/code 1.png';
import cart from '../images/cart 1.png';
import content from '../images/content 1.png';


const Services = () => {
  return (
    <Box>
      <Container sx={{marginBottom:'10rem'}}>
        <Typography variant="h4" sx={{ textAlign: 'center' }} gutterBottom>
          Our Services
        </Typography>
        <Typography variant='body1' sx={{ textAlign: 'center', marginBottom: ' 2rem' }}>
          We offer Professional web design services  at  affordable rates to help your business attract more visitors and keep them on your sites!!
        </Typography>


        <Grid container spacing={2} sx={{ textAlign: 'center' }} >
          <Grid item xs={12} sm={3} sx={{ border: '1px solid black', margin: '3rem' }}>
            <img src={code}></img>
            <Typography variant='h6'>
              Web Development
            </Typography>
            <Typography variant='body1' >
              Online impression takes time it's exactly what's you need . we build your dream website using Node, Angular, PHP, and Laravel.
            </Typography>

        <Button sx={{color:"black", border:'1px solid black', marginBlock:'2rem'}}>Learn More</Button>
          </Grid>




          <Grid item xs={12} sm={3} sx={{ border: '1px solid black', margin: '3rem' }}>
            <img src={cart}></img>
            <Typography variant='h6'>
              Digital Marketing
            </Typography>
            <Typography variant='body2'>
              High-quality Word press theme and the team who is behind the project had helped me a lot 100%  recommended.
            </Typography>
            <Button sx={{color:"#FFF", border:'1px solid black', marginBlock:'2rem'}} variant='contained'>Learn More</Button>

          </Grid>




          <Grid item xs={12} sm={3} sx={{ border: '1px solid black', margin: '3rem' }}>
            <img src={content}></img>
            <Typography variant='h6'>
              Application Development
            </Typography>

            <Typography variant='body2'>
              React Native, Flutter, Native Android, Native iOS. Our Team Thrives on methodological and Technical Challanges.
            </Typography>
            <Button sx={{color:"black", border:'1px solid black', marginBlock:'2rem'}}>Learn More</Button>
          </Grid>




          <Grid item xs={12} sm={3} sx={{ border: '1px solid black', margin: '3rem' }}>
            <img src={content}></img>
            <Typography variant='h6'>
              E- Commerce Solution
            </Typography>


            <Typography variant='body2'>
              Provide E-commerce websites and Applications for Companies to see online. e- commerce websites with online Payment solutions are our speciality.
            </Typography>
            <Button sx={{color:"black", border:'1px solid black', marginBlock:'2rem'}}>Learn More</Button>
          </Grid>




          <Grid item xs={12} sm={3} sx={{ border: '1px solid black', margin: '3rem' }}>

            <img src={content}></img>
            <Typography variant='h6'>
              Backup & Security
            </Typography>
            <Typography variant='body2'>
              SMBs succeed online with us. Security and Backup are included. our daily backups give you 100% security.
            </Typography>
            <Button sx={{color:"black", border:'1px solid black', marginBlock:'2rem'}}>Learn More</Button>
          </Grid>






          <Grid item xs={12} sm={3} sx={{ border: '1px solid black', margin: '3rem' }}>

          <img src={content}></img>
              <Typography variant='h6'>
                Enterprise Software Services
              </Typography>

            <Typography variant='body2'>
             Our goal is to Launch enterprise or small business software worldwide. our goal is to provide the best software service.
            </Typography>
            <Button sx={{color:"black", border:'1px solid black', marginBottom: '2rem', marginTop: '1rem'}}>Learn More</Button>
          </Grid>



         
       


            <Grid container justifyContent= "center"  alignItems= " center"  >
           <Grid item xs={12} md={3}  sx={{ border: '1px solid black', marginBlock:'2rem', marginInline:  {xs:'17%'}}}>

           {/* marginLeft:  {xs:'0%', md:'70%'} }} */}

          <img src={content} ></img>
          <Typography variant='h6'>
          IT Support
          </Typography>


          <Typography variant='body2'>
          We maintain Websites for small, medium and large business your existing website is regurally updated.
          </Typography>
          <Button sx={{color:"black", border:'1px solid black', marginBlock:'2rem'}}>Learn More</Button>
          </Grid>
        </Grid>
     
                </Grid>
      </Container>
    </Box>
    
  );
};

export default Services;
















