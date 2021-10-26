import { AppBar, Box, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function NavBar() {
    return(
      <>
     <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="gold">
                            Casa do animes
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start" p={2}>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
      </>
       
    );

}

export default NavBar;