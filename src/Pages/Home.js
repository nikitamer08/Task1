import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import mockup from '../images/Nanums-Mockup 1.png';
import ellipse from '../images/Ellipse 18.png';
import ellipse1 from '../images/Ellipse 19.png';



const Home=()=>{
  return(

    <Box
sx={{
  width: "100%",
  paddingY: 2,
  marginBlock: 10, 

}}
>
{/* Left Content */}


<Box sx={{marginInline: '10%'}}>
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
<Typography>
  <img src={ellipse} height={70} width={70}></img>
</Typography>
      <Typography variant="h4" sx={{marginBottom: '2rem'}}>
     
        <b>Web Design And <br/> Development Company</b>
      </Typography>
      <Typography variant="paragraph">
        We create clean and creative websites that are professional and
        help you generate more visitors and revenue.
      </Typography> <br/> <br/>
      <Button variant="contained" sx={{borderRadius: '20px', marginBottom: '1rem'}}>
        Get Started
      </Button>

      <Typography sx={{marginInline: '25%'}} >
  <img src={ellipse1} height={50} width={50}></img>
</Typography>
    </Grid>



    {/* Right Content */}

    
    <Grid item xs={12} md={6}  >
    <img src={mockup} width="100%" height="auto" ></img>
     
    </Grid>
  </Grid>
</Box>
</Box>

)
}
export default Home;


