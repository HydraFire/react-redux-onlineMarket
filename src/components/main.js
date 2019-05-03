import React from 'react';
import { render } from 'react-dom';
import Header from './header';
import Logo from './logo';
import Menu from './menu';
import CatalogTop from './catalogTop';
import News from './news';
import Footer from './footer';
import Breadcrumbs from './breadcrumbs';
import CatalogMiddle from './catalogMiddle';


class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <Logo />
        <Menu />
        <Breadcrumbs />
        <CatalogTop />
        <CatalogMiddle />

        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
