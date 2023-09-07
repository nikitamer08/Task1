import React from 'react';
import { Container, Grid } from '@mui/material';
import human from '../images/Human-touch 1.png';
import indeed from '../images/indeed 1.png';
import stan from '../images/The-Stanlee-foundation 1.png';
import dmarc from '../images/Dmarc 1.png';
import dani from '../images/Dani-Felt 1.png';
import salie from '../images/Sallie-Math-Tutor_ 1.png';

const Carts = () => {
  return (
    <Container sx={{marginBottom: '8rem'}}>
      
      <Grid container spacing={2} sx={{textAlign: 'center'}} >
        <Grid item xs={12} sm={2}>
         <img src={human} width={100} height={70}></img>
        </Grid>

        <Grid item xs={12} sm={2}>
         <img src={indeed} width={100} height={70}></img>
        </Grid>

        <Grid item xs={12} sm={2}>
         <img src={stan} width={100} height={70}></img>
        </Grid>

        <Grid item xs={12} sm={2}>
         <img src={dmarc} width={100} height={70}></img>
        </Grid>

        <Grid item xs={12} sm={2}>
        <img src={dani} width={100} height={70}></img>
        </Grid>


        <Grid item xs={12} sm={2}>
         <img src={salie} width={100} height={70}></img>
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default Carts;