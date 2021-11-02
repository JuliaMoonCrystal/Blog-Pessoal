 import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import './Sobre.css';

 function Sobre() {
     
    return(
       <>
         <Grid container direction="row" justifyContent="center" alignItems="center" className='fundo'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography className='titulo'>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Fazer Postagem</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img className='legoshi' src="https://i.pinimg.com/originals/cc/8d/21/cc8d2169bb5f02d12e749ef08d4868d9.gif" alt="imagem da home" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

       </>

    );
 }

 export default Sobre;