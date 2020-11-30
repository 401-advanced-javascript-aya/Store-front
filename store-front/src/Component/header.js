import React from 'react';
import { Grid, AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) =>{
    return (
        <>
       <CssBaseline />
            <AppBar position="static" elevation={0} color="default">
                <Toolbar >
                    <Grid container justify="space-between" alignItems="center">
                        {/* <Typography variant="h4"> Our Store..</Typography> */}
                         <Typography variant="h4"> Our Store</Typography>
                         <Typography variant="h6"> My Cart ({props.cart.count})</Typography>

                    </Grid>
                </Toolbar>

            </AppBar>
        </>
    )
}
const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Header);










// import React from 'react'
// import { GridListTileBar,IconButton, GridList, GridListTile, ListSubheader, Link, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

// export default function header() {
//     return (
//         <div>
//              <AppBar color="default" position="static">
// <Toolbar>
//   <Typography color="textPrimary" variant="h4" >
//     OUR STORES
//   </Typography>
//   <Button color="default">Cart (0)</Button>
// </Toolbar>
// </AppBar>
// <br></br>
//         </div>
//     )
// }


// const VotesCounter = (props) => {
//     return (
//      <>
    
//      </>
//     );
//   };
  