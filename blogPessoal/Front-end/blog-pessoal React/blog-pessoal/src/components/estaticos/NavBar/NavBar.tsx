import { AppBar, Box, IconButton, Toolbar, Typography} from "@material-ui/core";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from "react";

function NavBar() {
    return(
      <>
     <AppBar position="static" style={{background : 'black'}}>
                <Toolbar variant="dense">

                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h4" style={{color : 'gold'}}>
                            House of animes
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
                    </Box>    
                </Toolbar>
            </AppBar>
      </>
       
    );

}

export default NavBar;