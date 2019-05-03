import React from 'react';
import { render } from 'react-dom';
import '../../scss/main.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row d-flex justify-content-center">

            <div className="footer-logo">
              <div className="footer-logo__logo">TechLab</div>
              <div className="footer-logo__copyright">
                © 2014—2018<br/>
                Демонстрационный интернет-магазин
              </div>
              <div className="footer-logo__payments">Принимаем к оплате</div>
            </div>

            <div className="footer-catalog">
              <div className="footer-catalog__text">Каталог</div>
              <nav>
                <ul>
                  <li className="footer-catalog__item"><a href="">Мебель</a></li>
                  <li className="footer-catalog__item"><a href="">Ковры</a></li>
                  <li className="footer-catalog__item"><a href="">Подушки</a></li>
                  <li className="footer-catalog__item"><a href="">Освещение</a></li>
                  <li className="footer-catalog__item"><a href="">Посуда</a></li>
                  <li className="footer-catalog__item"><a href="">Гостинная</a></li>
                </ul>
              </nav>
            </div>

            <div className="footer-catalog">
              <div className="footer-catalog__text">Клиентам</div>
              <nav>
                <ul>
                  <li className="footer-catalog__item"><a href="">Вход в личный кабинет</a></li>
                  <li className="footer-catalog__item"><a href="">О нас</a></li>
                  <li className="footer-catalog__item"><a href="">Каталог</a></li>
                  <li className="footer-catalog__item"><a href="">Оплада и доставка</a></li>
                  <li className="footer-catalog__item"><a href="">Обмен и возврат</a></li>
                  <li className="footer-catalog__item"><a href="">Блог</a></li>
                  <li className="footer-catalog__item"><a href="">Мы в соцсетях</a></li>
                </ul>
              </nav>
            </div>
            <div className="footer-info">
              <div className="footer-info__text">Контактная информация</div>
              <div className="d-flex">
                <div className="footer-info__phone">
                  <svg width="30" height="30" viewBox="0 0 45 45"><path d="M 26.3 34.1 H 26 c -1.8 -0.1 -3.2 -0.7 -4.4 -1.3 c -2.6 -1.4 -4.6 -3.4 -6 -5 c -2 -2.3 -3.4 -4.5 -4.2 -6.8 c -1.1 -3.3 -0.6 -6.7 1.4 -8.9 l 0.9 -0.9 l 0.5 -0.4 c 0.4 -0.3 0.9 -0.8 1.6 -0.9 c 1.8 -0.3 2.9 1.4 3.6 2.5 l 0.2 0.3 c 0.7 1.1 1.6 2.4 1.2 4 c -0.2 0.9 -0.8 1.4 -1.3 1.8 c -0.1 0.1 -0.2 0.1 -0.3 0.2 c -0.1 0.1 -0.3 0.2 -0.4 0.4 c -0.3 0.2 -0.7 0.5 -0.7 0.7 c -0.2 0.8 0.4 1.8 0.7 2.2 c 0.9 1.4 2 2.7 3.3 3.7 c 0.5 0.4 1.3 1.1 1.9 1 c 0.4 -0.1 0.7 -0.4 1.2 -0.9 c 0.5 -0.6 1.2 -1.3 2.3 -1.4 c 1.7 -0.3 2.9 0.8 3.7 1.5 l 0.6 0.5 c 0.9 0.7 2.1 1.7 2 3.2 c -0.1 1 -0.8 1.6 -1.3 2 l -0.1 0.1 c -0.2 0.1 -0.3 0.3 -0.4 0.4 c -0.3 0.3 -0.7 0.6 -1 0.9 c -1.6 0.7 -3 1.1 -4.7 1.1 Z M 16.2 11.4 h -0.1 c -0.3 0.1 -0.5 0.3 -0.8 0.5 l -0.6 0.5 c -0.3 0.2 -0.6 0.5 -0.8 0.7 c -1.6 1.8 -2 4.7 -1.1 7.3 c 0.7 2 2 4.2 3.9 6.2 c 1.4 1.6 3.2 3.4 5.5 4.6 c 1 0.6 2.2 1.1 3.7 1.1 s 2.7 -0.3 3.8 -1 c 0.3 -0.2 0.5 -0.4 0.8 -0.7 l 0.5 -0.5 l 0.1 -0.1 c 0.4 -0.4 0.7 -0.6 0.7 -0.9 c 0 -0.6 -0.8 -1.3 -1.4 -1.8 l -0.5 -0.3 c -0.7 -0.6 -1.4 -1.3 -2.4 -1.1 c -0.5 0.1 -0.8 0.4 -1.3 0.9 s -1.1 1.2 -2 1.4 c -1.4 0.3 -2.6 -0.7 -3.3 -1.3 c -1.4 -1.2 -2.6 -2.5 -3.6 -4.1 c -0.3 -0.5 -1.3 -2 -0.9 -3.5 c 0.2 -0.8 0.8 -1.2 1.3 -1.6 c 0.1 -0.1 0.3 -0.2 0.4 -0.3 l 0.3 -0.3 c 0.4 -0.3 0.7 -0.6 0.8 -0.9 c 0.2 -0.9 -0.4 -1.9 -1 -2.8 l -0.2 -0.2 c -0.6 -1 -1.1 -1.8 -1.8 -1.8 Z">
                  </path></svg>
                    <div className="footer-info__number">044 284-50-80</div>
                    <div className="footer-info__number">067 901-44-70</div>
                    <a>Перезвонить вам?</a>
                </div>
                <div className="footer-info__adress">
                  <svg width="30" height="30" viewBox="-3 -2 22 22"><path d="M 8 0 l 1.9 5.7 H 16 l -4.9 3.5 l 1.9 5.7 l -5 -3.5 L 3.1 15 L 5 9.3 L 0 5.7 h 6.1 L 8 0 Z">
                  </path></svg>
                    <div className="footer-info__number">Киев, ул. Киквидзе, 12, оф. 15</div>
                    <a>Карта проезда</a>
                </div>
              </div>
              <div className="footer-info__mail">
                <svg width="30" height="30" viewBox="-5 -15 45 45"><path d="M 31 0 H 3 C 1.3 0 0 1.3 0 3 v 16 c 0 1.7 1.3 3 3 3 h 28 c 1.7 0 3 -1.3 3 -3 V 3 c 0 -1.7 -1.3 -3 -3 -3 Z m 2 19 c 0 1.1 -0.9 2 -2 2 H 3 c -1.1 0 -2 -0.9 -2 -2 V 3 c 0 -1.1 0.9 -2 2 -2 h 28 c 1.1 0 2 0.9 2 2 v 16 Z M 30.2 3.1 L 17 14.5 L 3.8 3.1 l -0.7 0.7 l 8.4 7.2 l -8.4 7.2 l 0.7 0.7 l 8.4 -7.2 l 4.8 4.1 l 4.8 -4.1 l 8.4 7.2 l 0.7 -0.7 l -8.3 -7.2 l 8.3 -7.2 l -0.7 -0.7 Z">
                </path></svg>
                  <div className="footer-info__number">Эл. почта: info@horoshop.com.ua</div>
                  <a>Skype: horoshop24</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
