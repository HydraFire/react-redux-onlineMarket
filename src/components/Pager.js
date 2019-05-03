import React from 'react';
import { render } from 'react-dom';
import '../../scss/pager.scss';

class Pager extends React.Component {
  render() {
    return (
      <div className="pager d-flex justify-content-center">
        <div className="pager__container">
          <a className="pager__item  is-disabled" href="#">
             <span className="pager__item-text"><i className="icon-arrowLeft"></i>Назад</span>
          </a>
          <a className="pager__item is-active">
             <span className="pager__item-text">1</span>
          </a>
          <a className="pager__item is-disabled">
             <span className="pager__item-text">2</span>
          </a>
          <a className="pager__item is-disabled">
             <span className="pager__item-text">3</span>
          </a>
          <a className="pager__item is-disabled">
             <span className="pager__item-text">4</span>
          </a>
          <a className="pager__item is-disabled">
             <span className="pager__item-text">5</span>
          </a>
          <a className="pager__item is-disabled">
             <span className="pager__item-text">6</span>
          </a>
          <a className="pager__item is-disabled">
             <span className="pager__item-text">7</span>
          </a>
          <span className="pager__item is-disabled">
             <span className="pager__item-text">...</span>
          </span>
          <a className="pager__item is-disabled">
             <span className="pager__item-text">22</span>
          </a>
          <a className="pager__item" href="#" title="Страница 2">
             <span className="pager__item-text">Вперед<i className="icon-arrowRight"></i></span>
          </a>
        </div>
      </div>
    );
  }
}

export default Pager;
