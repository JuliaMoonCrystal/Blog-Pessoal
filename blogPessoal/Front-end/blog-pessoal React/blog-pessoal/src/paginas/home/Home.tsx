import React from "react";
import { Paper, Box,Button } from "@material-ui/core";
import './Home.css';

function Home() {
    return(
        <div>
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
        </div>*/