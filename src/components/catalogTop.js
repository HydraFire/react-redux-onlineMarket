import React from 'react';
import { render } from 'react-dom';
import '../../scss/main.scss';

class CatalogTop extends React.Component {
  render() {
    return (
          <div className="row d-flex justify-content-between">
            <div className="catalog-name">
              Рюкзаки полукаркасные
            </div>
            <div className="catalog-controls d-flex">
              <div className="catalog-controls__text">
                Сортировка:
              </div>
              <div className="catalog-controls__block d-flex">
                <a href="#">по популярности</a>
                <a href="#">сначала дешевле</a>
                <a href="#">по названию</a>
              </div>
            </div>
          </div>
    );
  }
}

export default CatalogTop;
