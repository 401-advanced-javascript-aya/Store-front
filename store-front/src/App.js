import './App.css';
import Header from './Component/header';
// import Footer from './Component/footer';
import Categories from './Component/categories';
import Products from './Component/products';

import { GridListTileBar,IconButton, GridList, GridListTile, ListSubheader, Link, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function App() {
  return (
    <>
    <Header />
    <Categories />
    <Products />
    <footer>
      here is the footer
    </footer>
    </>
  );
}

export default App;
