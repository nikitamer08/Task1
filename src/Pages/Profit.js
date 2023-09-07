import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

const Profit = () => {
  return (
    <>

    <Typography variant="h4" sx={{textAlign: 'center', marginBottom:'8rem'}} >
             Intelligent Websites that works overtime <br/> for  Marketing Results
    </Typography>

    <Box sx={{background:'#00142D', color:'#FFF', marginBottom: '6rem'}}>

     <Box sx={{ textAlign: 'center'}}>
      <Grid container spacing={12}>

        <Grid item xs={12} sm={3}>
          <Typography variant="h4">
                   25+  <br/> 

                <Typography > 
                      Years of Experience
                </Typography>
                    
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3}>
          <Typography variant="h4">
               38+ <br/>
              <Typography>
                Expert Team member
              </Typography>
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3}>
          <Typography variant="h4">
                 3K+ <br/>
                 <Typography > 
                    project complete
                 </Typography>
         </Typography>
        </Grid>


        <Grid item xs={12} sm={3}>
          <Typography variant="h4">
                99% <br/>
                <Typography>
                   Client Satisfied
                </Typography>
          </Typography>
        </Grid>

        </Grid>
      </Box>
      
    </Box>
    </>
  );
};

export default Profit;















