import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Bolt } from "@mui/icons-material";
import React from "react";
import './Login.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import { padding } from "@mui/system";

function Login() {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px' }}
        >
          •
        </Box>
      );

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'> 
            <Grid item xs={6}  alignItems='center'>
                <Box paddingX={20}>
                 <Card sx={{ minWidth: 275 }} className='cardbox'>
                   <CardContent> 
                     <form >
                       <Typography variant='h4' gutterBottom color ='textPrimary' component='h4' align='center' style={{fontWeight : 'bold', color : 'black'}}>Entrar</Typography>
                       <img src='https://img2.gratispng.com/20180714/ukj/kisspng-user-profile-computer-icons-avatar-profile-picture-icon-5b49de2f4d0404.3739895115315676633155.jpg' className='usuario' />
                      
                       <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                       <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                       <Box marginTop={2} textAlign='center'>

                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' className='botao'>
                                    Logar
                                </Button>
                            </Link>

                        </Box>   
                     </form>
                       <Box display='flex' justifyContent='center' marginTop={2}>
                           <Box marginRight={1}>
                              <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                           </Box>

                           <Box marginRight={1}>
                              <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
                           </Box> 
                        </Box>
                    </CardContent>
                  </Card>   
                </Box>
            </Grid>
            <Grid item xs={6} style={{
                backgroundImage: `url(https://i.pinimg.com/originals/e0/1e/c2/e01ec21429d30d652403148865915888.gif)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>

    );
}

export default Login;