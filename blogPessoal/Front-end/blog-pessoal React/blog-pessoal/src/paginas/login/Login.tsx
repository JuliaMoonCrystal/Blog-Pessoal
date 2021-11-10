import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import './Login.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link, useHistory } from 'react-router-dom';
import UserLogin from "../../models/UserLogin";
import { login } from '../../services/Service';
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Login() {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px' }}
    >
      •
    </Box>
  );

  let history = useHistory();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      nome: '',
      senha: '',
      usuario: '',
      token: ''

    }
  )
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    if (token !== '') {
      dispatch(addToken(token));
      history.push('/Home')
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      toast.success('Usuário logado com sucesso',
      {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,

      }
  )
    } catch (error) {
      toast.error('Dados divergentes',
      {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,

      }
  )
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={20}>
          <Card sx={{ minWidth: 275 }} className='cardbox'>
            <CardContent>
              <form onSubmit={onSubmit}>
                <Typography variant='h4' gutterBottom color='textPrimary' component='h4' align='center' style={{ fontWeight: 'bold', color: 'black' }}>Entrar</Typography>
                <AccountCircleIcon className='userlogin' />

                <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                <Box marginTop={2} textAlign='center'>


                  <Button type='submit' variant='contained' className='botao'>
                    Logar
                  </Button>


                </Box>
              </form>
              <Box display='flex' justifyContent='center' marginTop={2}>
                <Box marginRight={1}>
                  <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                </Box>


                <Box marginRight={1}>
                  <Link to='/Cadastro' className='text-decorator-none'>
                    <Typography variant='subtitle1' gutterBottom align='center' className='cadastre'>Cadastre-se</Typography>
                  </Link>
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