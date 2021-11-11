import React, { useEffect } from "react";
import { Paper, Box, Button, Grid, Typography } from "@material-ui/core";
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import './Home.css';
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { Link, useHistory } from "react-router-dom";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você prescisa estar logado',
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
            history.push("/Login")

        }
    }, [token])


    return (
        <div>

            <Grid container direction="row" justifyContent="center" alignItems="center" className='fundo-1'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={0} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "Gold", fontWeight: "bold" }}>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/postagens" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>

                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img className='legoshi' src="https://i.pinimg.com/originals/cc/8d/21/cc8d2169bb5f02d12e749ef08d4868d9.gif" alt="imagem da home" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagem'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </div >
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