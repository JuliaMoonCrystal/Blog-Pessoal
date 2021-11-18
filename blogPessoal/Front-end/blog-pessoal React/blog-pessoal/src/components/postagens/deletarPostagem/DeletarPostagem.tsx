import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useLocalStorage from "react-use-localstorage";
import Postagem from "../../../models/Postagem";
import { buscaId, deleteId } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

function DeletarPostagem() {
   
  let history = useHistory();
  const { id } = useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [post, setPosts] = useState<Postagem>()

  useEffect(() => {
      if (token == "") {
        toast.error('Voce prescisa estar logado',
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

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscaId(`/postagens/${id}`, setPosts, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
          history.push('/postagens')
          deleteId(`/postagens/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          toast.success('Postagem apagada com sucesso',
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
      
        function nao() {
          history.push('/postagens')
        }
return (
  <>
    <Box m={2}>
      <Card variant="outlined" >
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom>
              Deseja deletar a Postagem:
            </Typography>
            <Typography color="textSecondary" >
            {post?.titulo}
            </Typography>
          </Box>

        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
            <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
              Sim
            </Button>
            </Box>
            <Box>
            <Button  onClick={nao} variant="contained" size='large' color="secondary">
              Não
            </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
  </>
);
  }
  export default DeletarPostagem;