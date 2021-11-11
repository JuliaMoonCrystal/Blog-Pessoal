 import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import './Sobre.css';

 function Sobre() {
     
    return(
       <>
         <Grid container direction="row" justifyContent="center" alignItems="center" className='fundo'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={10} >
                        <Typography className='titulo'>Sobre o meu Blog-Pessoal</Typography>
                        <Typography className='texto'>Expresse aqui os seus pensamentos e opiniões!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium 
                        vero sapiente placeat eaque incidunt vitae cupiditate perspiciatis sed officiis modi optio
                        labore recusandae, provident temporibus pariatur in repellat minima?
                        

                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img className='sobre' src="http://photo.princesapop.com/br/1/190/moy/151957.jpg" alt="imagem do sobre" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

       </>

    );
 }

 export default Sobre;