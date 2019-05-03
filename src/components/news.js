import React from 'react';
import { render } from 'react-dom';
import '../../scss/news.scss';

class News extends React.Component {
  render() {
    return (
      <section className="lane" id="novelties">
        <div className="container">
          <div className="row">
            <nav>
              <ul className="d-flex justify-content-center">
                <li className="lane__button">Хиты продаж</li>
                <li className="lane__button">Распродажа</li>
                <li className="lane__button">Новинки</li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center">
              <div className="laneProduct">
                <div className="laneProduct__tag"><span>Новинка</span></div>
                <img className="laneProduct__img" src="img/products/7369c664.jpg" />
                <h5 className="laneProduct__name">Термо паста</h5>
                <h6 className="laneProduct__price">69 грн</h6>
              </div>
              <div className="laneProduct">
                <div className="laneProduct__tag"><span>Новинка</span></div>
                <img className="laneProduct__img" src="img/products/7369c664.jpg" />
                <h5 className="laneProduct__name">Термо паста</h5>
                <h6 className="laneProduct__price">69 грн</h6>
              </div>
              <div className="laneProduct">
                <div className="laneProduct__tag"><span>Новинка</span></div>
                <img className="laneProduct__img" src="img/products/7369c664.jpg" />
                <h5 className="laneProduct__name">Термо паста</h5>
                <h6 className="laneProduct__price">69 грн</h6>
              </div>
              <div className="laneProduct">
                <div className="laneProduct__tag"><span>Новинка</span></div>
                <img className="laneProduct__img" src="img/products/7369c664.jpg" />
                <h5 className="laneProduct__name">Термо паста</h5>
                <h6 className="laneProduct__price">69 грн</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
