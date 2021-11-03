import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { padding } from "@mui/system";
import { Link } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px' }}
        >
            •
        </Box>
    );
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} style={{
                    backgroundImage: `url(https://i.pinimg.com/originals/e0/1e/c2/e01ec21429d30d652403148865915888.gif)`,
                    backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
                }}>

                </Grid>
               
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={20}>
                        <Card sx={{ minWidth: 275 }} className='cardbox'>
                            <CardContent>
                                <form >
                                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                                    <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth/>
                                    <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth className='text' />
                                    <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='text' />
                                    <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth className='text' />
                                    <Box marginTop={2} textAlign='center'>

                                        <Link to='/login' className='text-decorator-none'>
                                            <Button variant='contained' color='secondary' className='btnCancelar'>
                                                Cancelar
                                            </Button>
                                        </Link>

                                        <Button type='submit' variant='contained' color='primary'>
                                            Cadastrar
                                        </Button>
                                        
                                    </Box>
                                </form>
                                <Box display='flex' justifyContent='center' marginTop={2}>
                                    <Box marginRight={1}>
                                        <Typography variant='subtitle1' gutterBottom align='center'>Já tem uma conta?</Typography>
                                    </Box>

                                    <Link to='/Login' className='text-decorator-none'>
                                        <Box marginRight={1}>
                                            <Typography variant='subtitle1' gutterBottom align='center' className='cadastre'>Login</Typography>
                                        </Box>
                                    </Link>

                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </>
    );

}

export default Cadastro;