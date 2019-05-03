import React from 'react';
import { render } from 'react-dom';
import '../../scss/main.scss';

class Logo extends React.Component {
  render() {
    return (
      <section className="main" id="main">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="phone d-flex justify-content-center">
              <img src="img/whatsapp-logo.png" alt="phone"/>
              <p>044 209-69-21</p>
            </div>
            <div className="logo">Aska onlineMarcket</div>
            <div className="basket d-flex justify-content-center">
              <img src="img/shopping-cart.png" alt="phone"/>
              <p>Корзина</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Logo;
