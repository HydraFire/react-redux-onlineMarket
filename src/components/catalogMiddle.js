import React from 'react';
import { render } from 'react-dom';

import Filter from './filter';
import ProductGrid from './productGrid';

import '../../scss/main.scss';


class CatalogMiddle extends React.Component {
  render() {
    return (
      <section className="productMiddle">
        <div className="row d-flex">
          <Filter />
          <ProductGrid />
        </div>
      </section>
    );
  }
}

export default CatalogMiddle;
