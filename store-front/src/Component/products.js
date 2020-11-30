import React from 'react';
import { connect } from 'react-redux';
import { chooseList } from '../store/product-reducer';
import { Box, CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      // display: 'grid',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  fullHeight: {
    height: "100%"
  },
  card: {
    margin: '1em',
  },
  media: {
    height: 0,
    paddingTop: '60%',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  grid2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },

  grid1: {
    paddingTop: '34px',
    paddingBottom: '44px'
  }
}));

const Status = props => {
  console.log('props??????????.....', props);

  const classes = useStyles();

  return (

    <>
      <section className="product">
        <ul>
          <Box textAlign="center">
            <Typography variant="h2" color="textPrimary">
              {props.categoryActivator.activeCategory.displayName}
            </Typography>
            <Typography variant="h6" color="textSecondary"> 
              {props.categoryActivator.activeCategory.description}
            </Typography>
          </Box>
          {/* <h2>{props.list.results} List</h2> */}
          {props.list.results.map((item, idx) => {
            // return <li key={idx}>{item.name}<br />{item.price} <br /> {item.image} <br /></li>

            return (
              <Container maxWidth="md" component="main">
                <Grid className={classes.grid1} container direction="row" justify="center" alignItems="center">
                  <Grid className={classes.grid2} container item xs={12} sm={6} lg={4} >
                    <Card key={item.name} className={classes.card}>
                      <CardMedia
                        className={classes.media}
                        image={item.image}
                        title={item.name}
                      />
                      <CardContent>
                        <Typography variant="h5" color="textPrimary">
                          {item.name}
                        </Typography>
                        <Typography variant="p" color="textSecondary">
                          {item.price}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="large" style={{ fontSize: '0.9rem' }} color="default">Add to my cart </Button>
                        <Button size="large" style={{ fontSize: '0.9rem' }} color="default">View Details </Button>

                      </CardActions>

                    </Card>

                  </Grid>
                </Grid>
              </Container>
            )
          })}
        </ul>

      </section>

    </>
  )
}


const mapStateToProps = state => {
  return state;
};


const mapDespatchToProps = { chooseList };

export default connect(mapStateToProps, mapDespatchToProps)(Status)