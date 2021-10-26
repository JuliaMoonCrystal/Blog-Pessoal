import React from "react";
import { Paper, Box,Button, Grid, Typography } from "@material-ui/core";
import './Home.css';

function Home() {
    return(
        <div>

           <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "Gold", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img className='legoshi' src="https://64.media.tumblr.com/3e77c366b6ed84abca03afb136809324/6b35036a021a12f4-3a/s500x750/d12ab9e1bb53b3dcd448c341ea274ea6d21e38ef.jpg" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
         
        </div>
    );

}

export default Home;

/* <div>
Aula 10
           <Grid container spacing={2}> 
               <Grid item xs={12} sm={8} >
               <h1>Grid 1 --  parte do Grid principal</h1>
                  <Paper style={{height: '100vh', background: 'red'}}/>
            
                 
               </Grid >

               <Grid item container direction='column' xs={12} sm={4} spacing={3}>
                   <h1>Grid 2 --  parte do Grid principal</h1>
                   <Grid item>
                     <Paper style={{height: '49vh', background: 'blue'}}/>
                      
                   </Grid>
           
                   <Grid item>
                    <Paper style={{height: '49vh', background: 'gold'}}/>
                      
                     
                   </Grid>

               </Grid >    
           </Grid>
        </div>
        
         <Paper>
               <Box p={2}>
                   <Box display='flex' justifyContent='center'>
                       <h1>Fairy Tail</h1>
                   </Box>
                   <img src='https://ptanime.com/wp-content/uploads/2015/02/Fairy-Tail-411-Gray-e-Natsu-Sobrevivem.jpg' alt='fairy' height='100%' width='100%'></img>
                   <Box display='flex' justifyContent='center' p={2}>
                       <Button variant='contained' color='primary' >Fairy 1</Button>
                       
                       <Button variant='contained' color='secondary'>Fairy 2</Button>
                           </Box>
               </Box>
           </Paper>
        
        */