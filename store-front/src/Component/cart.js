import { connect } from 'react-redux';
import React from 'react';
import './cart.css';
import { makeStyles } from '@material-ui/core/styles';
import { addToCart } from '../store/cart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeFromCart } from '../store/cart.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 200,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));
function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
const Cart = (props) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  console.log(props.add, 'adddd');
  return (
    <>
      <aside>
      {props.cart.cart.map((item,idx) => {
                    return (
            <Grid item xs={6} md={6}>
              <div className={item.name}>
                <List dense={dense}>
                  {generate(
                    <ListItem style={{ width: '50%' }}>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name}
                        secondary={secondary ? 'Secondary text' : null}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() =>{props.removeFromCart(item)}}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
              </div>
            </Grid>
          );
        })}
      </aside>
    </>
  );
};
// const mapStateToProps = (state) => {
//   console.log('state', state);
//   return {
//     product: state.product,
//     add: state.add.cart,
//   };
// };
// const mapDispatchToProps = { AddToCart };
// export default connect(mapStateToProps, mapDispatchToProps)(Cart);


const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = { addToCart, removeFromCart }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)










// import React from 'react';
// import { connect } from 'react-redux';
// import { addToCart } from '../store/cart.js'
// import { removeFromCart } from '../store/cart.js'


// import {  CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';



// const useStyles = makeStyles((theme) => ({
//     '@global': {
//         ul: {
//             margin: 0,
//             padding: 0,
//             listStyle: 'none',
//         },
//     },
//     appBar: {
//         borderBottom: `1px solid ${theme.palette.divider}`,
//     },
//     toolbarTitle: {
//         flex: 1,
//     },
//     fullHeight: {
//         height: "100%"
//     },
//     card: {
//         margin: '1em',
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//         borderTopLeftRadius: '5px',
//         borderTopRightRadius: '5px'
//     },
//     jss8: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         flexWrap: 'initial'
//     },
//     jss5: {
//         padding: '64px 0px 48px'
//     },
//     jss7: {
//         paddingTop: '24px',
//         paddingBottom: '24px'
//     }
// }));



// const Cart = props => {

//     const classes = useStyles();
//     // console.log('Props ........ Cart ===>>', props);

//     return (
//         <>
//             {props.cart.cart.map((item,idx) => {
//                 return (
//                     <>
//                         <Container key={idx} maxWidth="md" component="main">

//                             <Grid className={classes.jss7} container spacing={0} direction="row" justify="center" alignItems="center">
//                                 <Grid className={classes.jss8} container item xs={6} sm={6} lg={6} >
//                                     <Card key={idx} className={classes.card}>
//                                         <CardContent >
//                                             <Typography variant="h5" color="textPrimary">
//                                                 {item.name}
//                                             </Typography>
//                                             <Typography variant="p" color="textSecondary">
//                                             category: {item.category}
//                                             <br/>
//                                             price:  {item.price}
//                                         </Typography>
//                                         </CardContent>
//                                         <CardActions>
//                                             <Button key={idx}  style={{ fontSize: '0.9rem' }} color="secondary" onClick={() => { props.removeFromCart(item) }} >Remove</Button>
//                                         </CardActions>
//                                     </Card>
//                                 </Grid>
//                             </Grid>
//                         </Container>

//                     </>
//                 )
//             }

//             )}

//         </>
//     )
// }



// const mapStateToProps = state => {
//     return state;
// }

// const mapDispatchToProps = { addToCart, removeFromCart }

// export default connect(mapStateToProps, mapDispatchToProps)(Cart)