import React from 'react';
import { render } from 'react-dom';
import '../../scss/main.scss';

class Breadcrumbs extends React.Component {
  render() {
    return (
      <div className="row">
        <nav className="breadcrumbs d-flex">
          <div className="breadcrumbs__item d-flex">
            <a href="#">
              Главная
            </a>
            <div className="breadcrumbs__arrow"> > </div>
          </div>
          <div className="breadcrumbs__item d-flex">
            <a href="#">
              Каталог
            </a>
            <div className="breadcrumbs__arrow"> > </div>
          </div>
          <div className="breadcrumbs__item d-flex">
            <a href="#">
              Ванная
            </a>
            <div className="breadcrumbs__arrow"> > </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Breadcrumbs;
