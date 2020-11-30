import React from 'react';

import { connect } from 'react-redux';
import { select } from '../store/categories-reducer';
import { chooseList } from '../store/product-reducer';

import { Box, ButtonGroup, Button, CssBaseline } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 5,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },

  btnRoot: {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'raw',
    alignItems: 'center',
    marginLeft: '35%',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Status = props => {

  const classes = useStyles();
  console.log('props......................', props);
  return (
    <>
      <CssBaseline />
      <Box>
        <ButtonGroup className={classes.btnRoot} variant="text" color="default" aria-label="text primary button group">
          {props.activeCategory.categories.map((item) => (

            <Button key={item.name} onClick={() => {
              props.select(item);
              props.chooseList(item);
            }}
            >  {item.name}

            </Button >

          ))}
        </ButtonGroup>
      </Box>
    </>
  )
}
// 
const mapStateToProps = state => {
  // console.log('props::>>',props);
  return { activeCategory: state.categoryActivator }; // categoryActivator from reducer in store categories and imported into index in store to combineReducers 
}

const mapDispatchToProps = { select, chooseList }


export default connect(mapStateToProps, mapDispatchToProps)(Status)

