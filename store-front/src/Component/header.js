import React from 'react'
import { GridListTileBar,IconButton, GridList, GridListTile, ListSubheader, Link, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

export default function header() {
    return (
        <div>
             <AppBar color="default" position="static">
<Toolbar>
  <Typography color="textPrimary" variant="h4" >
    OUR STORES
  </Typography>
  <Button color="default">Cart (0)</Button>
</Toolbar>
</AppBar>
<br></br>
        </div>
    )
}


const VotesCounter = (props) => {
    return (
     <>
    
     </>
    );
  };
  