import React from 'react';
import { render } from 'react-dom';
import '../../scss/main.scss';

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header className="header" id="header">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="headerMenu">
              <ul className="d-flex justify-content-center">
                <li className="headerMenu__item"><a href="">Каталог</a></li>
                <li className="headerMenu__item"><a href="">О нас</a></li>
                <li className="headerMenu__item"><a href="">Оплата и доставка</a></li>
                <li className="headerMenu__item"><a href="">Обмен и возврат</a></li>
                <li className="headerMenu__item"><a href="">Блог</a></li>
                <li className="headerMenu__item"><a href="">Контактная информация</a></li>
              </ul>
            </div>
            <div className="headerLogin d-flex justify-content-center">
              <div className="headerLogin__language"><a href="">EN</a><a href="">RU</a><a href="">UA</a></div>
              <div className="headerLogin__button"><a href="">Вход</a></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
