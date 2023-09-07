import React from 'react';
import { Container, Typography, Grid, Box, Rating } from '@mui/material';
import group from '../images/Mask Group.png';
import group1 from '../images/Mask Group (1).png';
import group2 from '../images/Mask Group (2).png'

const Customer = () => {
  return (
    <>
       <Box sx={{marginBottom: '6rem'}}>
          <Container>
              <Typography variant="h4" sx={{textAlign:'center'}}>
                    Testimonials
              </Typography>

             <Typography variant='body1' sx={{textAlign:'center', marginBottom: ' 2rem'}}>
                 what our Customers are Saying
             </Typography>


         <Grid container spacing={2} sx={{textAlign:'center'}} >
             <Grid item xs={12} sm={3} sx={{border:'1px solid black', margin: '3rem'}}>
                 <img src={group} ></img>
               <Typography variant="h6">
                  <strong>  Tim Brown  </strong> <br/>
                  Aora Company <br/> <br/>
               </Typography>

               <Typography variant='body2'> 
                 can you say about these guys only good words. after we build a website the customer's flow is quite stable and our SEO result Growing.
                 <br/> <br/>
               <Rating name="half-rating" defaultValue={2.5} precision={5} />
               </Typography>

             </Grid>






        <Grid item xs={12} sm={3} sx={{border:'1px solid black', margin: '3rem'}}>
             <img src={group1}></img>
               <Typography variant="h6">
                    <strong> Michael Vice </strong> <br/>
                        Bowl Room <br/> <br/>

               <Typography variant='body2'>
                     High-quality Word press theme and the team who is behind the project had helped me a lot 100%  recommended.
                    <br/> <br/>
               <Rating name="half-rating" defaultValue={2.5} precision={5} />
              </Typography>

               </Typography>
         </Grid>



        <Grid item xs={12} sm={3} sx={{border:'1px solid black', margin: '3rem'}}>
              <img src={group2}></img>
               <Typography variant="h6">
                    <strong> Lucy Raymond </strong> <br/>
                    lve Logistic <br/> <br/> 
                </Typography>
        
                <Typography variant='body2'>
                       Worked with the company last 5 years and can rate the support on 5 stars as well as documentations.
                        <br/> <br/>
                 <Rating name="half-rating" defaultValue={2.5} precision={5} />
                </Typography>
         </Grid>
       
      </Grid>

    </Container>
    </Box>
</>
);
};
          
export default Customer;

        

     
