import './App.css';
import Header from './Component/header';
// import Footer from './Component/footer';
import Categories from './Component/categories';
import Products from './Component/products';
import Cart from './Component/cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { GridListTileBar, IconButton, GridList, GridListTile, ListSubheader, Link, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function App() {
  return (
    <>
      <Header />
      {/* <Switch>
        <Route exact path="/"> */}
          <Cart />
          <Categories />
          <Products />
        {/* </Route>
        <Route exact path="/cart"> */}
        {/* </Route>
      </Switch> */}
      <footer>
        here is the footer
    </footer>
    </>
  );
}

export default App;
