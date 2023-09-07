import React from 'react'
import Box from '@mui/material/Box';
import { Button, Grid, TextField, Typography } from '@mui/material';
// import Country from './Country';


const Detail = () => {
  return (
    <div>
        <Box>
            <Box sx={{marginInline: '18%', textAlign: 'center', marginTop: '-3%', background: '#FFF'}}>
            <Typography variant='h5'>
                  Still have questions ?
            </Typography>
            <Typography sx={{marginBottom: '2rem'}}>
                We're ready to answer your questions and jump start your project
            </Typography>





          <form>

              <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={4}>
                  <TextField fullWidth label="Name" variant="outlined" />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                  <TextField fullWidth label="Country" variant="outlined" />
                  {/* <Country/> */}
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                  <TextField fullWidth label="Email" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={12}>
                    <TextField fullWidth  label="Message" variant="outlined"  multiline rows={8} />
                  </Grid>

                  <Button variant="contained" sx={{borderRadius: '2px', marginTop: '2rem', marginInline:'42%'}}>Send </Button>


              </Grid>
             </form>
          </Box>

       </Box>
       </div>
  );
}

export default Detail;







