import React from 'react';
import { render } from 'react-dom';
import '../../scss/main.scss';

class Menu extends React.Component {
  render() {
    return (
      <section class="menu" id="menu">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 ml-auto">
              <nav>
                <ul class="d-flex justify-content-center">
                  <li class="menu__item"><a href="#">Мебель</a></li>
                  <li class="menu__item"><a href="#">Ковры</a></li>
                  <li class="menu__item"><a href="#">Подушки</a></li>
                  <li class="menu__item"><a href="#">Освещение</a></li>
                  <li class="menu__item"><a href="#">Посуда</a></li>
                  <li class="menu__item"><a href="#">Гостинная</a></li>
                  <li class="menu__item"><a href="#">Ванная</a></li>
                  <li class="menu__item"><a href="#">Кухня</a></li>
                  <li class="menu__item"><a href="#">Спальня</a></li>
                  <li class="menu__item"><svg width="45" height="45" viewBox="0 -25 80 80"><path d="M 29.997 26.172 c -1.988 -1.966 -4.143 -3.75 -6.098 -5.753 c 0.009 -0.057 0.023 -0.111 0.027 -0.169 c 0.064 -0.919 -0.853 -1.887 -1.511 -2.388 l -0.005 -0.003 c 2.266 -4.278 1.636 -10.237 -1.188 -13.908 C 17.546 -0.825 9.451 -1.208 4.933 2.466 c -5.394 4.385 -6.64 11.56 -2.372 17.184 c 3.764 4.963 10.359 5.636 15.304 2.676 l 0.004 0.007 c 0.51 0.623 1.09 1.421 1.942 1.563 c 0.207 0.034 0.405 0.021 0.597 -0.012 c 1.734 2.158 3.57 4.295 5.479 6.293 c 1.466 1.537 3.667 2.746 5.366 0.86 c 1.428 -1.586 -0.071 -3.691 -1.258 -4.867 Z m -18.994 -3.774 c 0.144 -0.173 0.277 -0.351 0.381 -0.538 c 0.289 -0.52 -0.401 -1.069 -0.828 -0.638 c -0.306 0.308 -0.551 0.667 -0.846 0.986 c -0.328 -0.07 -0.654 -0.153 -0.975 -0.256 c 0.159 -0.183 0.328 -0.355 0.514 -0.517 c 0.526 -0.455 -0.245 -1.229 -0.763 -0.764 a 5.626 5.626 0 0 0 -0.78 0.886 c -0.291 -0.13 -0.579 -0.27 -0.862 -0.43 c 0.277 -0.282 0.537 -0.586 0.725 -0.93 c 0.334 -0.615 -0.608 -1.163 -0.938 -0.547 c -0.179 0.334 -0.442 0.615 -0.705 0.891 c -0.274 -0.195 -0.54 -0.409 -0.801 -0.635 c 0.27 -0.284 0.545 -0.576 0.828 -0.786 c 0.239 -0.178 0.36 -0.471 0.196 -0.75 c -0.139 -0.236 -0.51 -0.374 -0.75 -0.196 c -0.35 0.26 -0.757 0.597 -1.068 0.974 c -0.235 -0.245 -0.46 -0.51 -0.682 -0.783 c 0.391 -0.327 0.746 -0.739 0.799 -1.19 c 0.057 -0.49 -0.614 -0.681 -0.92 -0.381 c -0.166 0.163 -0.281 0.38 -0.443 0.552 c -0.034 0.036 -0.074 0.064 -0.109 0.099 a 9.085 9.085 0 0 1 -0.556 -0.981 a 4.31 4.31 0 0 0 0.799 -0.715 c 0.473 -0.534 -0.318 -1.325 -0.783 -0.784 a 5.17 5.17 0 0 1 -0.443 0.469 a 8.507 8.507 0 0 1 -0.277 -1.062 c 0.274 -0.204 0.505 -0.483 0.688 -0.759 c 0.282 -0.429 -0.295 -1.049 -0.728 -0.728 c -0.046 0.034 -0.081 0.081 -0.124 0.119 a 9.859 9.859 0 0 1 0.012 -1.191 c 0.197 -0.112 0.37 -0.276 0.519 -0.439 c 0.338 -0.37 0.057 -0.846 -0.313 -0.915 c 0.5 -2.328 1.785 -4.538 3.57 -6.243 C 9.546 0.205 16.913 1.022 20.37 5.536 c 2.864 3.738 2.084 10.039 -0.839 13.536 a 0.825 0.825 0 0 0 -0.128 0.206 a 0.821 0.821 0 0 0 -0.176 0.118 a 12.41 12.41 0 0 1 -3.505 2.2 c -0.161 -0.4 -0.888 -0.501 -1.05 0.048 a 0.818 0.818 0 0 1 -0.188 0.313 c -0.023 0.027 -0.031 0.057 -0.05 0.085 c -0.341 0.092 -0.687 0.169 -1.032 0.227 c 0.014 -0.021 0.034 -0.043 0.047 -0.064 c 0.311 -0.527 -0.401 -1.059 -0.833 -0.644 c -0.252 0.242 -0.424 0.551 -0.687 0.787 c -0.023 0.021 -0.031 0.045 -0.05 0.066 c -0.291 0.003 -0.583 0.001 -0.876 -0.019 Z m 9.285 -1.941 l 0.009 -0.011 a 0.832 0.832 0 0 0 0.386 -0.224 c 0.328 -0.325 0.62 -0.679 0.895 -1.045 c 0.264 0.338 0.593 0.654 0.72 1.052 c 0.095 0.3 -0.78 0.978 -0.945 1.139 c -0.195 0.187 -0.893 0.99 -1.215 0.936 c -0.007 -0.001 -0.016 -0.007 -0.024 -0.009 c 0.199 -0.151 0.386 -0.322 0.526 -0.495 c 0.419 -0.514 -0.261 -1.237 -0.742 -0.742 c -0.192 0.197 -0.405 0.359 -0.617 0.524 l -0.114 -0.144 c 0.387 -0.304 0.765 -0.628 1.121 -0.983 Z m 9.729 9.238 c -0.076 0.421 -0.277 0.597 -0.551 0.614 a 4.1 4.1 0 0 0 0.148 -0.54 c 0.104 -0.554 -0.677 -0.971 -0.962 -0.407 c -0.092 0.18 -0.144 0.372 -0.199 0.564 a 7.226 7.226 0 0 1 -0.716 -0.533 c 0.213 -0.215 0.412 -0.444 0.583 -0.686 c 0.174 -0.245 0.045 -0.611 -0.197 -0.753 c -0.283 -0.165 -0.571 -0.04 -0.753 0.198 c -0.136 0.179 -0.29 0.344 -0.443 0.508 a 19.665 19.665 0 0 1 -0.561 -0.565 c 0.095 -0.09 0.192 -0.178 0.286 -0.268 c 0.148 -0.141 0.32 -0.273 0.414 -0.458 a 0.54 0.54 0 0 0 -0.732 -0.732 c -0.185 0.095 -0.316 0.267 -0.458 0.414 c -0.078 0.084 -0.156 0.171 -0.237 0.254 a 0.171 0.171 0 0 1 -0.018 -0.02 c -0.163 -0.186 -0.325 -0.38 -0.488 -0.571 c 0.178 -0.148 0.33 -0.326 0.479 -0.519 c 0.419 -0.54 -0.23 -1.238 -0.763 -0.763 c -0.156 0.137 -0.259 0.328 -0.409 0.467 l -0.488 -0.578 c 0.155 -0.135 0.306 -0.274 0.468 -0.401 c 0.547 -0.43 -0.229 -1.219 -0.769 -0.77 c -0.139 0.115 -0.263 0.244 -0.391 0.372 c -0.117 -0.134 -0.236 -0.263 -0.355 -0.394 c 0.099 -0.099 0.2 -0.198 0.31 -0.286 c 0.53 -0.432 -0.227 -1.192 -0.753 -0.753 a 2.86 2.86 0 0 0 -0.284 0.277 c -0.097 -0.097 -0.199 -0.19 -0.298 -0.286 c 0.146 -0.125 0.289 -0.252 0.426 -0.377 c 0.239 -0.218 0.487 -0.446 0.716 -0.689 c 1.072 1.173 2.301 2.222 3.471 3.286 c 0.998 0.91 3.816 2.786 3.525 4.392 Z">
                  </path></svg></li>
                  <li class="menu__item"><svg width="45" height="45" viewBox="0 -25 80 80"><path d="M32 1.658L30.342 0 16.001 14.343 1.658 0 0 1.658l14.343 14.343L0 30.342 1.658 32l14.343-14.343L30.342 32 32 30.342 17.657 16.001z"></path></svg></li>
                </ul>
              </nav>



            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
