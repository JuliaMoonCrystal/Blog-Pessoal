import { Box, Grid, Typography } from "@material-ui/core";
import  GitHubIncon  from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from "react";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ""){
        footerComponent=<Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box style={{ backgroundColor: "black", height: "90px" ,padding : '5px'}}>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Me siga nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">

                    <a href="https://github.com/JuliaMoonCrystal" target="_blank">
                        <GitHubIncon style={{ fontSize: 50, color: "white" }} />
                    </a>

                    <a href="https://www.linkedin.com/in/julia-farias-da-rocha-bb5703180/" target="_blank">
                        <LinkedInIcon style={{ fontSize: 60, color: "white"  }} />
                    </a>
                </Box>
            </Box>
            <Box style={{ backgroundColor: "black", height: "60px" }}>
                <Box paddingTop={3}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2021 Copyright</Typography>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }
    
    
    return(
      <>
         {footerComponent}
      </>
       
    );

}

export default Footer;

/* <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>*/