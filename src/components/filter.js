import React from 'react';
import { render } from 'react-dom';
import '../../scss/filter.scss';

class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <div className=" filter-current d-flex">
          <div className="d-flex wrap">
                <div className="filter-current__item d-flex">
                  <div className="filter-current__text">в наличии</div><span>X</span>
                </div>
                <div className="filter-current__item d-flex">
                  <div className="filter-current__text">черный</div><span>X</span>
                </div>
                <div className="filter-current__item d-flex">
                  <div className="filter-current__text">router</div><span>X</span>
                </div>
                <div className="filter-current__item d-flex">
                  <div className="filter-current__text">flex</div><span>X</span>
                </div>
                <div className="filter-current__item d-flex">
                  <div className="filter-current__text">10px</div><span>X</span>
                </div>
                <div className="filter-current__item d-flex">
                  <div className="filter-current__text">test</div><span>X</span>
                </div>
          </div>
          <div className="filter-current__button">
            Очистить фильтр
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
