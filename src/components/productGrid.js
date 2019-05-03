import React from 'react';
import { render } from 'react-dom';
import Pager from './Pager';
import '../../scss/productGrid.scss';

class ProductGrid extends React.Component {
  render() {
    return (
      <section className="productGrid" id="productGrid">
        <div className="container">
          <div className="row d-flex wrap">
              <div className="product">
                <div className="product__tag"><span>Новинка</span></div>
                <img className="product__img" src="img/products/73943156280730_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">499 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"><span>Новинка</span></div>
                <img className="product__img" src="img/products/29817811422537_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">1069 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"><span>Новинка</span></div>
                <img className="product__img" src="img/products/63151752401074_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">860 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"></div>
                <img className="product__img" src="img/products/71755950471930_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">751 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"></div>
                <img className="product__img" src="img/products/29640139623714_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">469 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"></div>
                <img className="product__img" src="img/products/41282457383484_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">69 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"></div>
                <img className="product__img" src="img/products/81985419306855_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">69 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"></div>
                <img className="product__img" src="img/products/49759031622032_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">69 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"></div>
                <img className="product__img" src="img/products/87636089170406_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">69 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"></div>
                <img className="product__img" src="img/products/96816588554018_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">69 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"></div>
                <img className="product__img" src="img/products/50370370836414_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">69 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"></div>
                <img className="product__img" src="img/products/49759031622032_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">69 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"></div>
                <img className="product__img" src="img/products/81985419306855_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">69 грн</h6>
              </div>
              <div className="product">
                <div className="product__tag"></div>
                <img className="product__img" src="img/products/49759031622032_small4.jpg" />
                <h5 className="product__name">'Рюкзак школьный 702 Smart-2 K17-702M-2'</h5>
                <h6 className="product__price">69 грн</h6>
              </div>

          </div>
          <Pager />
        </div>
      </section>
    );
  }
}

export default ProductGrid;
