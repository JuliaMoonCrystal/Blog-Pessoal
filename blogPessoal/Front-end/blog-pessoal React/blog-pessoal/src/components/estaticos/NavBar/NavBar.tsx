import { IconButton} from "@material-ui/core";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
      <>
     <AppBar position="static"  className='cor'>
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" className='nome-blog'>
                            House of animes
                        </Typography>
                    </Box>  
                     
                    <Box display="flex" justifyContent="start" p={2}>
                       <Link to={"/Home"} className='text-decorator-none'>   
                          <Box mx={1} className='cursor'>
                             <Typography variant="h6" color="inherit">
                                Home
                             </Typography>

                           </Box>
                         </Link>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                             <Typography variant='h6' color='inherit'>
                                 Sobre
                             </Typography>
                        </Box>
                    </Box>

                        <Box display="flex" alignItems="center" ml="auto" >
                 <Button
                   id="basic-button"
                   aria-controls="basic-menu"
                   aria-haspopup="true"
                   aria-expanded={open ? 'true' : undefined}
                   onClick={handleClick}
                 >
                  <MenuIcon className="icon" />
                 </Button>
                <Menu
                   id="basic-menu"
                   anchorEl={anchorEl}
                   open={open}
                   onClose={handleClose}
                   MenuListProps={{
                   'aria-labelledby': 'basic-button',
                    }}
                 >
                 <MenuItem onClick={handleClose}>Minha conta</MenuItem>
                 <MenuItem onClick={handleClose}>Fazer Postagem</MenuItem>
                 <MenuItem onClick={handleClose}>Adicionar novo tema</MenuItem>

                 <Link to={"/Login"} className='text-decorator-none'>
                 <MenuItem onClick={handleClose}>Logout</MenuItem>
                 </Link>
                 </Menu>

                    </Box>
                </Toolbar>
            </AppBar>
      </>
       
    );

}

export default NavBar;